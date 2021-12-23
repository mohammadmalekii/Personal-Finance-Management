import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectExpense, selectIncome } from "../../redux/transactionSlice";
Chart.register(ArcElement, Tooltip, Legend);

const ChartPayment = () => {
  let income = useSelector(selectIncome);
  let expense = useSelector(selectExpense);
  if (income === 0) {
    income = 1;
  }
  if (expense === 0) {
    expense = 1;
  }

  return (
    <div className='chart-payment'>
      <div className='chart-title'>
        <h1>دخل و خرج ماه گذشته</h1>
      </div>
      <div className='box-payment'>
        <Pie
          data={{
            labels: ["هزینه", "دریافت"],
            datasets: [
              {
                label: "# of Votes",
                data: [expense, income],
                backgroundColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                ],
                borderWidth: 1.5,
                hoverOffset: 4,
                radius: "90%",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ChartPayment;

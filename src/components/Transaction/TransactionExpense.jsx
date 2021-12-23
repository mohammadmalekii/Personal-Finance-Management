import React from "react";
import { useSelector } from "react-redux";
import { selectExpense } from "../../redux/transactionSlice";

const TransactionIncome = () => {
  const expense = useSelector(selectExpense);
  return (
    <div className='income-box'>
      <h3 className='income-text'>پرداختی دوره</h3>
      <div>{expense.toLocaleString()}</div>
    </div>
  );
};

export default TransactionIncome;

import React from "react";
import { useSelector } from "react-redux";
import { selectIncome } from "../../redux/transactionSlice";

const TransactionExpense = () => {
  const income = useSelector(selectIncome);
  return (
    <div className='expense-box'>
      <h3 className='expense-text'>دریافتی دوره</h3>
      <div>{income.toLocaleString()}</div>
    </div>
  );
};

export default TransactionExpense;

import React from "react";
import { useSelector } from "react-redux";
import { selectExpense, selectIncome } from "../../redux/transactionSlice";

const TransactionTotal = () => {
  const income = useSelector(selectIncome);
  const expense = useSelector(selectExpense);
  return (
    <tr>
      <td>
        <h3>کل دوره:</h3>
      </td>
      <td>
        <span>{(income - expense).toLocaleString()}</span>
      </td>
    </tr>
  );
};

export default TransactionTotal;

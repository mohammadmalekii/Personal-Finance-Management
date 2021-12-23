import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  selectCurrentLoan,
  selectLoanTransactions,
} from "../../redux/loanSlice";
import LoanItem from "./LoanItem";

const LoanBody = () => {
  const { id } = useSelector(selectCurrentLoan);
  const detailList = useSelector(selectLoanTransactions);

  return (
    <div className='loan-body'>
      <div className='item-transaction'>
        {detailList[id].map((item) => (
          <LoanItem item={item} key={nanoid()} />
        ))}
      </div>
    </div>
  );
};

export default LoanBody;

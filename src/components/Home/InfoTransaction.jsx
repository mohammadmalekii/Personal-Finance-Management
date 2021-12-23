import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectExpense, selectIncome } from "../../redux/transactionSlice";

const InfoTransaction = () => {
  const income = useSelector(selectIncome);
  const expense = useSelector(selectExpense);
  return (
    <div className='info-transaction-home'>
      <div className='info-transaction-box'>
        <div className='info-transaction-item'>
          <span>کل:</span>
          <span className='home-total-amount'>
            <p>{(income - expense).toLocaleString()}</p>
            <p>تومان</p>
          </span>
        </div>

        <div className='info-transaction-item'>
          <span>دریافتی:</span>
          <span>{income.toLocaleString()} تومان</span>
        </div>

        <div className='info-transaction-item'>
          <span>پرداختی:</span>
          <span>{expense.toLocaleString()} تومان</span>
        </div>
      </div>

      <div className='see-more-transaction'>
        <NavLink to='/transaction'>
          <button>مشاهده تراکنش ها</button>
        </NavLink>
      </div>
    </div>
  );
};

export default InfoTransaction;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentLoan, showCurrentLoan } from "../../redux/loanSlice";
import { generatePpercent, generateProgress } from "../util";
import loanInfoIcon from "../../assets/loanInfo.png";
const LoanInfoItem = ({ item }) => {
  const currentItem = useSelector(selectCurrentLoan);
  const dispatch = useDispatch();

  const handleShowLoan = () => {
    if (currentItem !== item) {
      dispatch(showCurrentLoan(item));
    }
  };

  return (
    <div className='loan-item' onClick={handleShowLoan}>
      <div className='loan-item-header'>
        <img src={loanInfoIcon} alt='loan-info-icon' />

        <div className='loan-item-info-top'>
          <h1>
            {item.name} {(item.amount * item.loanMonth).toLocaleString()} تومان
          </h1>
          <h2>
            {item.loanNumber} از {item.loanMonth} قسط
          </h2>
          <h3>
            {(item.amount * item.loanNumber).toLocaleString()} تومان از{" "}
            {(item.amount * item.loanMonth).toLocaleString()} تومان
          </h3>
        </div>
      </div>

      <div className='loan-progressbar-container'>
        <div className='loan-progressbar'>
          <div
            className='loan-progressbar-success'
            style={{
              transform: `translateX(${generateProgress(
                item.loanMonth,
                item.loanNumber
              )}%)`,
            }}
          ></div>
        </div>
        <span>{generatePpercent(item.loanMonth, item.loanNumber)}%</span>
      </div>
    </div>
  );
};

export default LoanInfoItem;

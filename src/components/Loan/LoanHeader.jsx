import React, { useState } from "react";
import { useSelector } from "react-redux";
import deleteIcon from "../../assets/delete.png";
import {
  selectCurrentLoan,
  selectLoanTransactions,
} from "../../redux/loanSlice";
import PaymentAllModal from "./PaymentAllModal";
import RemoveLoan from "./RemoveLoan";
import loanInfoIcon from "../../assets/loanInfo.png";

const LoanHeader = () => {
  const currentItem = useSelector(selectCurrentLoan);
  const detailList = useSelector(selectLoanTransactions);
  const [payAllmodal, setPayAllmodal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  return (
    <>
      <div className='loan-header'>
        <div className='loan-item-title'>
          <div className='loan-item-info'>
            <img src={loanInfoIcon} alt='loan-info-icon' />
            <div className='item-name-container'>
              <span className='item-name'>
                {currentItem.name}{" "}
                {(currentItem.amount * currentItem.loanMonth).toLocaleString()}{" "}
                تومان
              </span>
              <span>
                {currentItem.loanNumber} از {currentItem.loanMonth} قسط
              </span>
            </div>
          </div>

          <div className='loan-money-item-title'>
            <span>مانده: :</span>
            <span>
              ({currentItem.loanMonth - currentItem.loanNumber} قسط){" "}
              {(
                currentItem.amount * currentItem.loanMonth -
                currentItem.amount * currentItem.loanNumber
              ).toLocaleString()}
              تومان
            </span>
          </div>

          <div className='loan-money-item-title'>
            <span>پرداخت شده:</span>
            <span>
              ({currentItem.loanNumber} قسط){" "}
              {(currentItem.amount * currentItem.loanNumber).toLocaleString()}{" "}
              تومان
            </span>
          </div>

          <div className='loan-money-item-title'>
            <span>تاریخ تمام اقساط:</span>
            <span>
              از {detailList[currentItem.id][0].date} تا{" "}
              {
                detailList[currentItem.id][
                  detailList[currentItem.id].length - 1
                ].date
              }
            </span>
          </div>

          <div className='loan-money-item-title'>
            <span>{currentItem.note}</span>
          </div>

          <div className='loan-item-change'>
            {currentItem.loanMonth !== currentItem.loanNumber &&
            currentItem.paymentAll ? (
              <div>
                <div className='payment-all'>
                  <button onClick={() => setPayAllmodal(true)}>
                    پرداخت همه
                  </button>
                </div>
              </div>
            ) : null}

            <div>
              <div>
                <div className='item-delete'>
                  <img
                    src={deleteIcon}
                    alt='delete-icon'
                    onClick={() => setRemoveModal(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentAllModal modal={payAllmodal} setModal={setPayAllmodal} />
      <RemoveLoan modal={removeModal} setModal={setRemoveModal} />
    </>
  );
};

export default LoanHeader;

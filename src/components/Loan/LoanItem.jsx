import React, { useState } from "react";
import PaymentModal from "./PaymentModal";
import loanIcon from "../../assets/loanItem.png";
import calendarIcon from "../../assets/calendar.png";

const LoanItem = ({ item }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className='transaction-loan-container'>
        <div className='loan-item-container'>
          <div className='transaction-total-info'>
            <span>{item.date}</span>
            <div className='transaction-total-amount-container'>
              <div className='transaction-total-amount'>
                <img src={calendarIcon} alt='loan-icon' />
              </div>
            </div>
          </div>

          <div className='item-second-part'>
            <div className='transaction-loan'>
              <img src={loanIcon} alt='loan-icon' />
              <div className='transaction-item-name'>
                <p>{item.title}</p>
              </div>
              {item.payment && (
                <div className='payment'>
                  <button onClick={() => setModal(true)}>پرداخت</button>
                </div>
              )}
            </div>
            <div className='transaction-amount-section'>
              <div className='transaction-amount-container'>
                <div className='transaction-amount'>
                  <span>{item.amount.toLocaleString()} تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentModal modal={modal} setModal={setModal} />
    </>
  );
};

export default LoanItem;

import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";

import itemIcon from "../../assets/Titem.png";
import closeIcon from "../../assets/close.png";
import TransactionRemove from "./TransactionRemove";

const TransactionItem = ({ item }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className='item-transaction'>
        <div className='transaction-total-info'>
          <span>{item.date}</span>
          <div className='transaction-total-amount-container'>
            <div className='transaction-close'>
              <img
                src={closeIcon}
                alt='close-icon'
                onClick={() => setModal(true)}
              />
            </div>
          </div>
        </div>

        <div className='transaction-category-container'>
          <div className='transaction-category'>
            <img src={itemIcon} alt='transaction-item-icon' />
            <div className='transaction-item-text'>
              <div className='transaction-item-category'>{item.name}</div>
              <div className='transaction-item-note'>{item.note}</div>
            </div>
          </div>
          <div className='transaction-amount-section'>
            <div className='transaction-amount-container'>
              <div className='transaction-amount'>
                <span>{item.amount.toLocaleString()}</span>
                <span
                  className={`transaction-item-sign-${
                    item.amountType === "income" ? "plus" : "minus"
                  }`}
                >
                  {item.amountType === "income" ? "+" : "-"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransactionRemove modal={modal} setModal={setModal} id={item.id} />
    </>
  );
};

export default TransactionItem;

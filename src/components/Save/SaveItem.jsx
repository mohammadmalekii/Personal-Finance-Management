import React from "react";
import savePlusIcon from "../../assets/savePlus.png";
import saveMinusIcon from "../../assets/saveMinus.png";

const SaveItem = ({ moneyType, amount }) => {
  return (
    <div className='transaction-save-container'>
      <div className='transaction-save'>
        <img
          src={moneyType === "save" ? savePlusIcon : saveMinusIcon}
          alt='save-info'
        />
        <div className='transaction-item-name'>
          <p>
            {moneyType === "save"
              ? "اضافه کردن به پس‌انداز"
              : "برداشت از پس‌انداز"}
          </p>
        </div>
      </div>
      <div className='transaction-amount-section'>
        <div className='transaction-amount-container'>
          <div className='transaction-amount'>
            <span>{amount.toLocaleString()}</span>
            <span
              className={`transaction-item-sign-${
                moneyType === "save" ? "plus" : "minus"
              }`}
            >
              {moneyType === "save" ? "+" : "-"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveItem;

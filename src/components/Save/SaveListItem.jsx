import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentSave, showCurrentSave } from "../../redux/saveSlice";
import SaveMoneyModal from "./SaveMoneyModal";
import { timeLeft, generatePpercent, generateProgress } from "../util";
import saveInfoIcon from "../../assets/saveInfo.png";

const SaveListItem = ({ item }) => {
  const currentItem = useSelector(selectCurrentSave);
  const [modal, setModal] = useState(false);
  const [moneyType, setMoneyType] = useState();
  const dispatch = useDispatch();

  const handleSaveMoney = () => {
    setModal("false");
    setMoneyType("save");
  };
  const handleWithdrawMoney = () => {
    setModal("false");
    setMoneyType("withdraw");
  };

  const handleShowSave = (e) => {
    if (e.target.tagName !== "BUTTON" && currentItem !== item) {
      dispatch(showCurrentSave(item));
    }
  };

  return (
    <>
      <div className='save-item' onClick={handleShowSave}>
        <div className='save-money-item-info'>
          <div className='icon-save-money'>
            <img src={saveInfoIcon} alt='save-icon' />
          </div>
          <div className='save-money-item-detail'>
            <h1>{item.name}</h1>
            <h3>{timeLeft(item.date)}</h3>
            <h2>
              {item.amountCurrent.toLocaleString()} تومان از{" "}
              {item.amountTarget.toLocaleString()} تومان
            </h2>
          </div>
        </div>

        <div className='save-progressbar-container'>
          <span>
            {generatePpercent(item.amountTarget, item.amountCurrent)}%
          </span>
          <div className='save-save-progress-bar'>
            <div className='save-progressbar'>
              <div
                style={{
                  transform: `translateX(${generateProgress(
                    item.amountTarget,
                    item.amountCurrent
                  )}%)`,
                }}
                className='save-progressbar-success'
              ></div>
            </div>
          </div>
        </div>

        <div className='target-save-money'>
          {item.amountTarget - item.amountCurrent === 0 ? (
            <h1>تبریک! شما به هدفتان رسیدید!</h1>
          ) : item.amountTarget - item.amountCurrent < 0 ? (
            <h1>تبریک! شما از مقدار هدف‌گذاری شده فراتر رفتید!</h1>
          ) : (
            <>
              <span>تا هدف : </span>
              <span>
                {(item.amountTarget - item.amountCurrent).toLocaleString()}{" "}
                تومان
              </span>
            </>
          )}
        </div>

        <div className='save-money-buttons'>
          <button className='save-money-btn' onClick={handleSaveMoney}>
            پس انداز
          </button>
          <button className='withdraw-money-btn' onClick={handleWithdrawMoney}>
            برداشت
          </button>
        </div>
      </div>

      <SaveMoneyModal
        modal={modal}
        setModal={setModal}
        id={item.id}
        moneyType={moneyType}
      />
    </>
  );
};

export default SaveListItem;

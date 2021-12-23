import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { saveWithdrawMoney } from "../../redux/saveSlice";
import { formatAmount } from "../util";
import tickIcon from "../../assets/tick.png";
import cancelIcon from "../../assets/cancel.png";

const SaveMoneyModal = ({ modal, setModal, id, moneyType }) => {
  const [amount, setAmount] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const dispatch = useDispatch();

  const handleAmount = (e) => {
    let input = e.target.value;
    setAmount(formatAmount(input));
    setAmountValue(Number(formatAmount(input).split(",").join("")));
  };

  const handleCancel = () => {
    setModal(false);
    setAmount("");
  };

  const handleSubmit = () => {
    if (amount === "") {
      toast.warn("فیلد مبلغ پس‌انداز را پر کنید ", {
        theme: "colored",
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(saveWithdrawMoney({ id, amount: amountValue, moneyType }));

      setModal(false);
      setAmount("");
      setAmountValue("");
    }
  };

  const handleModal = (e) => {
    if (e.target.matches(".show")) {
      setModal(false);
    }
  };

  return (
    <div className={`drop-shadow ${modal ? "show" : ""}`} onClick={handleModal}>
      <div className='modal-save-container'>
        <div className='modal-title'>
          <h1>{`${
            moneyType === "save"
              ? "مبلغ پس‌انداز را وارد کنید"
              : "مبلغ برداشت را وارد کنید"
          }`}</h1>
        </div>
        <div className='save-form'>
          <hr />

          <div className='save-amount'>
            <label htmlFor='sw-amount'>مبلغ پس‌انداز:</label>
            <input
              type='text'
              onChange={handleAmount}
              value={amount}
              id='sw-amount'
            />
          </div>
          <hr />

          <hr />
          <div className='save-buttons-submit'>
            <button onClick={handleSubmit}>
              <img src={tickIcon} alt='tick-icon' />
              تایید
            </button>
            <button onClick={handleCancel}>
              <img src={cancelIcon} alt='cancel-icon' />
              لغو
            </button>
          </div>
        </div>
      </div>
      <ToastContainer rtl newestOnTop />
    </div>
  );
};

export default SaveMoneyModal;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSave } from "../../redux/saveSlice";
import DatePicker from "react-datepicker2";
import moment from "moment-jalaali";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatAmount } from "../util";
import tickIcon from "../../assets/tick.png";
import cancelIcon from "../../assets/cancel.png";
import calendarIcon from "../../assets/calendar.png";
import { nanoid } from "@reduxjs/toolkit";

const NewSave = ({ modal, setModal }) => {
  const [value, setValue] = useState(moment());
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    let input = e.target.value;
    setAmount(formatAmount(input));
    setAmountValue(Number(formatAmount(input).split(",").join("")));
  };

  const handleDate = (value) => {
    setValue(value);
    setDate(value._d.toLocaleDateString("en"));
  };

  const handleSubmit = () => {
    if (name.trim() === "" || amount === "") {
      if (name.trim() === "") {
        toast.warn("فیلد نام پس‌انداز را پر کنید ", {
          theme: "colored",
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (amount === "") {
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
      }
    } else {
      dispatch(
        createSave({
          id: nanoid(),
          name,
          date,
          amountTarget: amountValue,
          amountCurrent: 0,
        })
      );

      setModal(false);
      setName("");
      setAmount("");
      setDate(new Date().toLocaleDateString("fa"));
      setValue(moment());
    }
  };

  const handleModal = (e) => {
    if (e.target.matches(".show")) {
      setModal(false);
    }
  };

  return (
    <div className={`drop-shadow ${modal ? "show" : ""}`} onClick={handleModal}>
      <div className='modal-container'>
        <div className='modal-title'>
          <h1>پس‌انداز جدید</h1>
        </div>
        <div className='save-form'>
          <hr />
          <div className='save-name'>
            <label htmlFor='s-name'>نام پس‌انداز:</label>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              id='s-name'
            />
          </div>

          <hr />
          <div className='save-amount'>
            <label htmlFor='s-amount'>مبلغ پس‌انداز:</label>
            <input
              type='text'
              onChange={handleAmount}
              value={amount}
              id='s-amount'
            />
          </div>
          <hr />

          <div className='save-calendar'>
            <span>زمان خاتمه:</span>
            <img src={calendarIcon} alt='calendar-icon' />
            <DatePicker
              isGregorian={false}
              value={value}
              timePicker={false}
              onChange={handleDate}
            />
          </div>

          <hr />
          <div className='save-buttons-submit'>
            <button onClick={handleSubmit}>
              <img src={tickIcon} alt='tick-icon' />
              تایید
            </button>
            <button onClick={() => setModal(false)}>
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

export default NewSave;

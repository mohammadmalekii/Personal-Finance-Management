import React, { useState } from "react";
import DatePicker from "react-datepicker2";
import moment from "moment-jalaali";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {
  createTransaction,
  calculateTransaction,
} from "../../redux/transactionSlice";
import { formatAmount } from "../util";
import tickIcon from "../../assets/tick.png";
import cancelIcon from "../../assets/cancel.png";
import calendarIcon from "../../assets/calendar.png";
import { nanoid } from "@reduxjs/toolkit";

const NewTransaction = ({ modal, setModal }) => {
  const [value, setValue] = useState(moment());
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [amountType, setAmountType] = useState("income");
  const [note, setNote] = useState("");
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
    setDate(moment(value._d.toLocaleDateString("en")).format("jYYYY/jM/jD"));
  };

  const handleSubmit = () => {
    if (name.trim() === "" || amount === "") {
      if (name.trim() === "") {
        toast.warn("فیلد نام تراکنش را پر کنید ", {
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
        toast.warn("فیلد مبلغ را پر کنید ", {
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
        createTransaction({
          id: nanoid(),
          name,
          date,
          amountType,
          amount: amountValue,
          note,
        })
      );
      dispatch(calculateTransaction());
      setModal(false);
      setName("");
      setAmount("");
      setDate(new Date().toLocaleDateString("fa"));
      setValue(moment());
      setNote("");
    }
  };

  const handleModal = (e) => {
    if (e.target.matches(".show")) {
      setModal(false);
    }
  };

  return (
    <div className={`drop-shadow ${modal ? "show" : ""}`} onClick={handleModal}>
      <div className='modal-transaction-container'>
        <div className='modal-transaction-title'>
          <h1>تراکنش جدید</h1>
        </div>
        <div className='transaction-form'>
          <div className='calendar'>
            <img src={calendarIcon} alt='calendar-icon' />

            <DatePicker
              isGregorian={false}
              value={value}
              timePicker={false}
              onChange={handleDate}
            />
          </div>
          <hr />

          <div className='transaction-type'>
            <ul>
              <li>
                <input
                  type='radio'
                  id='income-id'
                  name='selector'
                  value='income'
                  onChange={(e) => setAmountType(e.target.value)}
                  defaultChecked
                />
                <label htmlFor='income-id'>دریافت</label>

                <div className='check'>
                  <div className='inside'></div>
                </div>
              </li>
              <li>
                <input
                  type='radio'
                  id='expense-id'
                  name='selector'
                  value='expense'
                  onChange={(e) => setAmountType(e.target.value)}
                />
                <label htmlFor='expense-id'>پرداخت</label>

                <div className='check'></div>
              </li>
            </ul>
          </div>

          <hr />
          <div className='name'>
            <label htmlFor='T-name'>نام تراکنش:</label>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              id='T-name'
            />
          </div>

          <hr />
          <div className='amount'>
            <label htmlFor='T-amount'>مبلغ:</label>
            <input
              type='text'
              onChange={handleAmount}
              value={amount}
              id='T-amount'
            />
          </div>
          <hr />

          <div className='note'>
            <label htmlFor='T-note'>یادداشت:</label>
            <textarea
              name='note-text'
              rows='1'
              onChange={(e) => setNote(e.target.value)}
              value={note}
              id='T-note'
            ></textarea>
          </div>
          <hr />

          <div className='buttons-submit'>
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

export default NewTransaction;

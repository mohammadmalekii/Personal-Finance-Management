import React, { useState } from "react";
import DatePicker from "react-datepicker2";
import moment from "moment-jalaali";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { createLoan } from "../../redux/loanSlice";
import { formatAmount } from "../util";
import tickIcon from "../../assets/tick.png";
import cancelIcon from "../../assets/cancel.png";
import calendarIcon from "../../assets/calendar.png";
import { nanoid } from "@reduxjs/toolkit";

const NewLoan = ({ modal, setModal }) => {
  const [value, setValue] = useState(moment());
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [loanMonth, setLoanMonth] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    let input = e.target.value;
    setAmount(formatAmount(input));
    setAmountValue(Number(formatAmount(input).split(",").join("")));
  };

  const handleLoanMonth = (e) => {
    let input = e.target.value;
    const regex = /\b([1-9]|[1-9][0-9]|100)\b/;
    if (regex.test(input) && input.length < 3) {
      setLoanMonth(+input);
    } else if (+input > 99) {
      setLoanMonth(100);
    } else {
      setLoanMonth("");
    }
  };

  const handleDate = (value) => {
    setValue(value);
    setDate(value._d.toLocaleDateString("en"));
  };

  const handleSubmit = () => {
    if (name.trim() === "" || amount === "") {
      if (name.trim() === "") {
        toast.warn("فیلد عنوان قسط را پر کنید ", {
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
        toast.warn("فیلد  مبلغ قسط را پر کنید ", {
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
    } else if (loanMonth === "") {
      toast.warn("فیلد تعداد قسط را پر کنید ", {
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
      dispatch(
        createLoan({
          id: nanoid(),
          name,
          date,
          amount: amountValue,
          loanMonth,
          loanNumber: 0,
          note,
          paymentAll: true,
        })
      );

      setModal(false);
      setName("");
      setDate(new Date().toLocaleDateString("fa"));
      setAmount("");
      setValue(moment());
      setLoanMonth("");
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
      <div className='modal-loan-container'>
        <div className='modal-loan'>
          <h1>تراکنش جدید</h1>
        </div>
        <div className='loan-form'>
          <div className='loan-name'>
            <label htmlFor='l-name'>عنوان قسط:</label>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              id='l-name'
            />
          </div>

          <hr />
          <div className='loan-calendar'>
            <img src={calendarIcon} alt='calendar-icon' />
            <DatePicker
              isGregorian={false}
              value={value}
              timePicker={false}
              onChange={handleDate}
            />
          </div>
          <hr />

          <hr />
          <div className='loan-amount'>
            <div className='loan-input'>
              <input
                type='text'
                onChange={handleAmount}
                value={amount}
                placeholder='مبلغ قسط ماهانه'
              />

              <input
                type='text'
                onChange={handleLoanMonth}
                value={loanMonth}
                placeholder='تعداد اقساط'
              />
            </div>
            <div className='loan-result'>
              <h1>
                مبلغ کل اقساط: {(amountValue * loanMonth).toLocaleString()}{" "}
                تومان
              </h1>
            </div>
          </div>
          <hr />

          <div className='loan-note'>
            <label htmlFor='l-note'>یادداشت:</label>
            <textarea
              name='note-text'
              rows='1'
              onChange={(e) => setNote(e.target.value)}
              value={note}
              id='l-note'
            ></textarea>
          </div>
          <hr />

          <div className='loan-buttons-submit'>
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

export default NewLoan;

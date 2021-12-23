import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  calculateTransaction,
  filterTransaction,
  clearFilter,
} from "../../redux/transactionSlice";
import { formatAmount } from "../util";
import tickIcon from "../../assets/tick.png";
import cancelIcon from "../../assets/cancel.png";

const TransactionFilter = ({ filterModal, setFilterModal }) => {
  const [amount, setAmount] = useState("");
  const [amountType, setAmountType] = useState("");
  const [incomeCheck, setIncomeCheck] = useState(false);
  const [expenseCheck, setExpenseCheck] = useState(false);
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const dispatch = useDispatch();

  const handleAmount = (e) => {
    let input = e.target.value;
    setAmount(formatAmount(input));
    setAmountValue(Number(formatAmount(input).split(",").join("")));
  };

  const handleAmountType = (e) => {
    setAmountType(e.target.value);
    if (e.target.value === "expense") {
      setExpenseCheck(true);
    } else {
      setIncomeCheck(true);
    }
  };

  const handleSubmit = () => {
    dispatch(
      filterTransaction({
        name,
        amount: amountValue,
        amountType,
        note,
      })
    );
    dispatch(calculateTransaction());
    setFilterModal(false);
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
    setName("");
    setAmount("");
    setAmountValue("");
    setNote("");
    setAmountType("");
    setIncomeCheck(false);
    setExpenseCheck(false);
  };
  const handleModal = (e) => {
    if (e.target.matches(".show")) {
      setFilterModal(false);
    }
  };
  return (
    <div
      className={`drop-shadow ${filterModal ? "show" : ""}`}
      onClick={handleModal}
    >
      <div className='modal-transaction-container'>
        <div className='filter-transaction-header'>
          <div className='filter-transaction-title'>
            <h1>فیلتر تراکنش ها بر اساس</h1>
          </div>
        </div>
        <div className='transaction-form'>
          <hr />
          <div className='transaction-type'>
            <ul>
              <li>
                <input
                  type='radio'
                  id='income-id-filter'
                  name='selector-filter'
                  value='income'
                  onChange={handleAmountType}
                  checked={incomeCheck}
                />
                <label htmlFor='income-id-filter'>دریافت</label>

                <div className='check'>
                  <div className='inside'></div>
                </div>
              </li>
              <li>
                <input
                  type='radio'
                  id='expense-id-filter'
                  name='selector-filter'
                  value='expense'
                  onChange={handleAmountType}
                  checked={expenseCheck}
                />
                <label htmlFor='expense-id-filter'>پرداخت</label>

                <div className='check'></div>
              </li>
            </ul>
          </div>

          <hr />
          <div className='name'>
            <label htmlFor='F-name'>نام تراکنش:</label>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
              id='F-name'
            />
          </div>
          <hr />
          <div className='amount'>
            <label htmlFor='F-amount'>مبلغ:</label>
            <input
              type='text'
              onChange={handleAmount}
              value={amount}
              id='F-amount'
            />
          </div>
          <hr />

          <div className='note'>
            <label htmlFor='F-note'>یادداشت:</label>
            <textarea
              name='note-text'
              rows='1'
              onChange={(e) => setNote(e.target.value)}
              value={note}
              id='F-note'
            ></textarea>
          </div>
          <hr />

          <div className='filter-buttons-submit'>
            <button onClick={handleSubmit}>
              <img src={tickIcon} alt='tick-icon' />
              اعمال فیلتر
            </button>
            <button onClick={handleClearFilter}>
              <img src={cancelIcon} alt='clear-icon' />
              حذف فیلتر
            </button>
            <button onClick={() => setFilterModal(false)}>
              <img src={cancelIcon} alt='cancel-icon' />
              انصراف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilter;

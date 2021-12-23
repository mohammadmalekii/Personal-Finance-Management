import React from "react";
import { useDispatch } from "react-redux";

import {
  calculateTransaction,
  deleteTransaction,
} from "../../redux/transactionSlice";
const TransactionRemove = ({ modal, setModal, id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteTransaction(id));
    dispatch(calculateTransaction());
  };

  const handleModal = (e) => {
    if (e.target.matches(".show")) {
      setModal(false);
    }
  };

  return (
    <div
      className={`drop-shadow  ${modal ? "show" : ""} minimal-modal`}
      onClick={handleModal}
    >
      <div className='modal-container'>
        <div className='modal-title'>
          <h1>حذف تراکنش</h1>
        </div>
        <div className='question-container'>
          <h1>آیا با حذف تراکنش موافقید؟</h1>
        </div>
        <div className='modal-buttons-submit'>
          <button onClick={handleRemove}>بله</button>
          <button onClick={() => setModal(false)}>خیر</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionRemove;

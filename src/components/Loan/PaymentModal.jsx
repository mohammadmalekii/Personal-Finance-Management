import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { payLoan, selectCurrentLoan } from "../../redux/loanSlice";
const PaymentModal = ({ modal, setModal }) => {
  const currentItem = useSelector(selectCurrentLoan);
  const dispatch = useDispatch();

  const handlePayment = () => {
    setModal(false);
    dispatch(payLoan(currentItem.id));
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
          <h1>پرداخت قسط</h1>
        </div>
        <div className='question-container'>
          <h1>آیا با پرداخت قسط موافقید؟</h1>
        </div>
        <div className='modal-buttons-submit'>
          <button onClick={handlePayment}>بله</button>
          <button onClick={() => setModal(false)}>خیر</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

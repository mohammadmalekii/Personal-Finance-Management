import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLoan, selectCurrentLoan } from "../../redux/loanSlice";
const RemoveLoan = ({ modal, setModal }) => {
  const currentItem = useSelector(selectCurrentLoan);
  const dispatch = useDispatch();

  const handleRemove = () => {
    setModal(false);
    dispatch(deleteLoan(currentItem.id));
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
          <h1>حذف قسط</h1>
        </div>
        <div className='question-container'>
          <h1>آیا با حذف قسط موافقید؟</h1>
        </div>
        <div className='modal-buttons-submit'>
          <button onClick={handleRemove}>بله</button>
          <button onClick={() => setModal(false)}>خیر</button>
        </div>
      </div>
    </div>
  );
};

export default RemoveLoan;

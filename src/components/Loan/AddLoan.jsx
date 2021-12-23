import React from "react";
import addIcon from "../../assets/add.png";

const AddLoan = ({ setModal }) => {
  return (
    <div className='add-loan'>
      <img src={addIcon} alt='add-icon' onClick={() => setModal(true)} />
      <h1>قسط جدید</h1>
    </div>
  );
};

export default AddLoan;

import React from "react";
import addIcon from "../../assets/add.png";

const AddTransaction = ({ setModal }) => {
  return (
    <div className='add-transaction' onClick={() => setModal(true)}>
      <img src={addIcon} alt='add-icon' />
    </div>
  );
};

export default AddTransaction;

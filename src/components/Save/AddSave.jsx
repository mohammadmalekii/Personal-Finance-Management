import React from "react";
import addIcon from "../../assets/add.png";

const AddSave = ({ setModal }) => {
  return (
    <div className='add-save-money'>
      <img src={addIcon} alt='add-icon' onClick={() => setModal(true)} />
      <h1>پس‌انداز جدید</h1>
    </div>
  );
};

export default AddSave;

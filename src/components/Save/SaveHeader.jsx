import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentSave } from "../../redux/saveSlice";
import RemoveSave from "./RemoveSave";
import { timeLeft } from "../util";
import saveInfoIcon from "../../assets/saveInfo.png";
import deleteIcon from "../../assets/delete.png";
import moment from "moment-jalaali";

const SaveHeader = () => {
  const [modal, setModal] = useState(false);

  const { id, name, amountTarget, amountCurrent, date } =
    useSelector(selectCurrentSave);

  return (
    <div className='save-header'>
      <div className='save-item-title'>
        <div className='save-item-info'>
          <img src={saveInfoIcon} alt='save-icon' />
          <div className='item-name-container'>
            <span className='item-name'>{name}</span>
            <span className='item-deadline'>{timeLeft(date)}</span>
          </div>
        </div>

        <div className='save-money-item-title'>
          <span>هدف ها:</span>
          <span>{amountTarget.toLocaleString()}+</span>
        </div>

        <div className='save-money-item-title'>
          <span>پس‌انداز ها:</span>
          <span>{amountCurrent.toLocaleString()}+</span>
        </div>

        <div className='save-money-item-title'>
          <span>تا هدف :</span>
          <span>{(amountTarget - amountCurrent).toLocaleString()}+</span>
        </div>

        <div className='save-money-item-title'>
          <span>زمان خاتمه :</span>
          <span>{moment(date).format("jYYYY/jM/jD")}</span>
        </div>

        <div className='save-item-change'>
          <div>
            <div>
              <div className='item-delete'>
                <img
                  src={deleteIcon}
                  alt='delete-icon'
                  onClick={() => setModal(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RemoveSave modal={modal} setModal={setModal} id={id} />
    </div>
  );
};

export default SaveHeader;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteSave } from "../../redux/saveSlice";

const RemoveSave = ({ modal, setModal, id }) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(deleteSave(id));
    setModal(false);
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
          <h1>حذف پس‌انداز</h1>
        </div>
        <div className='question-container'>
          <h1>آیا با حذف رکورد موافقید؟</h1>
        </div>
        <div className='modal-buttons-submit'>
          <button onClick={handleSubmit}>بله</button>
          <button onClick={() => setModal(false)}>خیر</button>
        </div>
      </div>
    </div>
  );
};

export default RemoveSave;

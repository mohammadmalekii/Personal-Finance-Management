import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentSave, selectSaveList } from "../../redux/saveSlice";
import Empty from "../../common/Empty";
import AddSave from "./AddSave";
import NewSave from "./NewSave";
import SaveDetail from "./SaveDetail";
import SaveList from "./SaveList";
import "./save.css";
const Save = () => {
  const [modal, setModal] = useState(false);
  const currentSaveItem = useSelector(selectCurrentSave);
  const save = useSelector(selectSaveList);

  return (
    <section id='save'>
      <AddSave setModal={setModal} />
      <div className='save-container'>
        {save.length === 0 ? (
          <Empty />
        ) : (
          <>
            <SaveList />
            {Object.entries(currentSaveItem).length !== 0 && <SaveDetail />}
          </>
        )}
      </div>
      <NewSave modal={modal} setModal={setModal} />
    </section>
  );
};

export default Save;

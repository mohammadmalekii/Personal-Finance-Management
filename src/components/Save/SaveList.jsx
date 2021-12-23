import React from "react";
import { useSelector } from "react-redux";
import { selectSaveList } from "../../redux/saveSlice";

import SaveListItem from "./SaveListItem";

const SaveList = () => {
  const save = useSelector(selectSaveList);

  return (
    <>
      <div className='save-money'>
        {save
          .map((item) => <SaveListItem item={item} key={item.id} />)
          .reverse()}
      </div>
    </>
  );
};

export default SaveList;

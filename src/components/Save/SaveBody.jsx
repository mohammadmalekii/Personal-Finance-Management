import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSave, selectSaveTransactions } from "../../redux/saveSlice";
import Empty from "../../common/Empty";
import SaveItem from "./SaveItem";
import { nanoid } from "@reduxjs/toolkit";


const SaveBody = () => {
  const currentItem = useSelector(selectCurrentSave);
  const detailList = useSelector(selectSaveTransactions).filter(
    (item) => item.id === currentItem.id
  );

  return (
    <div className='save-body'>
      <div className='item-transaction'>
        {detailList.length === 0 ? (
          <Empty />
        ) : (
          detailList
            .filter((item) => item.id === currentItem.id)
            .map((item) => (
              <SaveItem
                moneyType={item.moneyType}
                amount={item.amount}
                key={nanoid()}
              />
            ))
            .reverse()
        )}
      </div>
    </div>
  );
};

export default SaveBody;

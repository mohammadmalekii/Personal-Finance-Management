import React from "react";
import empty from "../assets/empty.png";
const Empty = () => {
  return (
    <div className='empty-transaction'>
      <div className='empty-transaction-container'>
        <img src={empty} alt='empty' />
        <div className='subtitle-empty-text'>تراکنشی ثبت نشده</div>
      </div>
    </div>
  );
};

export default Empty;

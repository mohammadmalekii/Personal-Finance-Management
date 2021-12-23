import React from "react";
import LoanBody from "./LoanBody";
import LoanHeader from "./LoanHeader";

const LoanDetail = () => {
  return (
    <div className='loan-detail'>
      <LoanHeader />
      <LoanBody />
    </div>
  );
};

export default LoanDetail;

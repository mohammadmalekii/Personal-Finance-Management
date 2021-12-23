import React from "react";
import { useSelector } from "react-redux";
import { selectLoanList } from "../../redux/loanSlice";
import LoanInfoItem from "./LoanInfoItem";

const LoanInfo = () => {
  const loan = useSelector(selectLoanList);
  return (
    <div className='loan-info'>
      <div className='loan-title-info'>
        <h1>اقساط</h1>
      </div>
      {loan.map((item) => <LoanInfoItem item={item} key={item.id} />).reverse()}
    </div>
  );
};

export default LoanInfo;

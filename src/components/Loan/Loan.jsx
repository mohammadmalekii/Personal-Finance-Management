import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentLoan, selectLoanList } from "../../redux/loanSlice";
import Empty from "../../common/Empty";
import AddLoan from "./AddLoan";
import LoanDetail from "./LoanDetail";
import LoanInfo from "./LoanInfo";
import NewLoan from "./NewLoan";
import "./loan.css";

const Loan = () => {
  const loan = useSelector(selectLoanList);
  const currentLoanItem = useSelector(selectCurrentLoan);
  const [modal, setModal] = useState(false);
  return (
    <section id='loan'>
      <AddLoan setModal={setModal} />
      <div className='loan-container'>
        {loan.length === 0 ? (
          <Empty />
        ) : (
          <>
            <LoanInfo />
            {Object.entries(currentLoanItem).length !== 0 && <LoanDetail />}
          </>
        )}

        <NewLoan modal={modal} setModal={setModal} />
      </div>
    </section>
  );
};

export default Loan;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTransaction from "./AddTransaction";
import FilterTransaction from "./FilterTransaction";
import NewTransaction from "./NewTransaction";
import TransactionExpense from "./TransactionExpense";
import TransactionIncome from "./TransactionIncome";
import TransactionList from "./TransactionList";
import TransactionNumber from "./TransactionNumber";
import TransactionTotal from "./TransactionTotal";
import TransactionFilter from "./TransactionFilter";
import Empty from "../../common/Empty";
import "./transaction.css";
import { selectTransactionlist } from "../../redux/transactionSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Transaction = () => {
  const [modal, setModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const transactionsList = useSelector(selectTransactionlist);

  return (
    <>
      <div className='transaction-container'>
        <div className='transaction-box'>
          <AddTransaction setModal={setModal} />
          <div className='main-transaction'>
            <div className='transaction-top'>
              <div className='center-transaction'>
                <TransactionIncome />
                <TransactionExpense />
              </div>

              <div className='footer-transaction'>
                <table className='table-footer-transaction'>
                  <tbody>
                    <TransactionTotal />
                    <TransactionNumber />
                  </tbody>
                </table>
              </div>
            </div>
            {transactionsList.length > 0 && <TransactionList />}
          </div>
          <FilterTransaction setFilterModal={setFilterModal} />
        </div>
      </div>
      {transactionsList.length === 0 && <Empty />}

      <NewTransaction modal={modal} setModal={setModal} />

      <TransactionFilter
        filterModal={filterModal}
        setFilterModal={setFilterModal}
      />
      <ToastContainer rtl newestOnTop />
    </>
  );
};

export default Transaction;

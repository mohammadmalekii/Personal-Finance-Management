import React from "react";
import { useSelector } from "react-redux";

import {
  selectFilter,
  selectTransactionlist,
} from "../../redux/transactionSlice";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const transactions = useSelector(selectTransactionlist);
  const filter = useSelector(selectFilter);

  return (
    <div className='transaction-list'>
      {transactions
        .filter((item) =>
          filter.name !== "" ? item.name === filter.name : item
        )
        .filter((item) =>
          filter.amount !== "" ? item.amount === filter.amount : item
        )
        .filter((item) =>
          filter.note !== "" ? item.note === filter.note : item
        )
        .filter((item) =>
          filter.amountType !== ""
            ? item.amountType === filter.amountType
            : item
        )
        .map((item) => <TransactionItem key={item.id} item={item} />)
        .reverse()}
    </div>
  );
};

export default TransactionList;

import React from "react";
import { useSelector } from "react-redux";
import { selectTransactionlist } from "../../redux/transactionSlice";

const TransactionNumber = () => {
  const transactionsList = useSelector(selectTransactionlist);

  return (
    <tr>
      <td>تعداد تراکنش:</td>
      <td>
        <span>{transactionsList.length}</span>
      </td>
    </tr>
  );
};

export default TransactionNumber;

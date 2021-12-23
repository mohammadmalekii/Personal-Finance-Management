import { configureStore } from "@reduxjs/toolkit";
import loanSlice from "./loanSlice";
import saveSlice from "./saveSlice";
import transactionSlice from "./transactionSlice";



export const store = configureStore({
    reducer: {
        transactions: transactionSlice,
        loan: loanSlice,
        save: saveSlice
    },


})
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transactionlist: [],
    income: 0,
    expense: 0,
    filter: {
        name: "",
        amount: "",
        amountType: "",
        note: ""
    }
};

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {

        createTransaction: (state, action) => {
            state.transactionlist.push(action.payload)
        },
        deleteTransaction: (state, action) => {
            state.transactionlist = state.transactionlist.filter(tItem => tItem.id !== action.payload);
        },
        calculateTransaction: (state) => {

            const income = state.transactionlist
                .filter(transaction => transaction.amountType === "income")
                .reduce((acc, curr) => acc += Number(curr.amount), 0)
            const expense = state.transactionlist
                .filter(transaction => transaction.amountType === "expense")
                .reduce((acc, curr) => acc += Number(curr.amount), 0)

            state.income = income
            state.expense = expense

        },
        filterTransaction: (state, action) => {
            state.filter = action.payload
        },
        clearFilter: (state) => {
            const filter = {...state.filter };
            const keyArray = Object.keys(filter);
            keyArray.map(item => filter[item] = "");
            state.filter = filter;
        },



    },
})

export const selectTransactionlist = (state) => state.transactions.transactionlist
export const selectIncome = (state) => state.transactions.income
export const selectExpense = (state) => state.transactions.expense
export const selectFilter = (state) => state.transactions.filter

export const { createTransaction, deleteTransaction, calculateTransaction, filterTransaction, clearFilter } = transactionSlice.actions;
export default transactionSlice.reducer;
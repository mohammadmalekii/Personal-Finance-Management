import { createSlice } from "@reduxjs/toolkit";
import moment from "moment-jalaali";
const initialState = {
    loanList: [],
    currentLoan: {},
    loanTransactions: {}

};

const loanSlice = createSlice({
    name: "loan",
    initialState,
    reducers: {
        createLoan: (state, { payload }) => {
            state.loanList.push(payload);
            state.loanTransactions[payload.id] = []
            state.loanTransactions[payload.id].push({ title: `قسط 1`, amount: payload.amount, date: moment(payload.date).format("jYYYY/jM/jD"), payment: true })
            for (let i = 2; i <= payload.loanMonth; i++) {
                state.loanTransactions[payload.id].push({ title: `قسط ${i}`, amount: payload.amount, date: moment(payload.date).add(i - 1, "jMonth").format("jYYYY/jM/jD"), payment: false })
            };

        },
        deleteLoan: (state, action) => {
            state.loanList = state.loanList.filter(loanItem => loanItem.id !== action.payload);
            state.currentLoan = {};
            delete state.loanTransactions[action.payload];

        },
        showCurrentLoan: (state, action) => {
            state.currentLoan = action.payload;
        },
        payLoan: (state, action) => {
            const loanList = [...state.loanList]
            const loanTransactions = {...state.loanTransactions }
            if (state.currentLoan.id === action.payload) {

                state.currentLoan.loanNumber += 1
            }

            const loanItem = loanList.find(item => item.id === action.payload);
            loanItem.loanNumber += 1
            state.loanList = loanList

            const result = loanTransactions[loanItem.id].map((item, index) => {
                item.payment = false
                if (index === loanItem.loanNumber) {
                    item.payment = true
                }
                return item
            })

            state.loanTransactions[loanItem.id] = result;

        },
        payAllLoan: (state, { payload }) => {
            const loanTransactions = {...state.loanTransactions }
            const currentLoan = {...state.currentLoan }
            const loanList = [...state.loanList]

            const result = loanTransactions[payload.id].map(item => {
                item.payment = false
                return item;
            })

            state.loanTransactions[payload.id] = result;

            currentLoan.loanNumber = currentLoan.loanMonth
            currentLoan.paymentAll = false
            state.currentLoan = currentLoan


            const loanItem = loanList.find(item => item.id === payload.id)
            loanItem.loanNumber = loanItem.loanMonth;
            loanItem.paymentAll = false;

            state.loanList = loanList


        },


    },
})

export const selectLoanList = (state) => state.loan.loanList
export const selectCurrentLoan = (state) => state.loan.currentLoan
export const selectLoanTransactions = (state) => state.loan.loanTransactions
export const { createLoan, showCurrentLoan, payLoan, deleteLoan, payAllLoan } = loanSlice.actions;
export default loanSlice.reducer;
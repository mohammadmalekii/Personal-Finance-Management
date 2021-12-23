import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saveList: [],
    currentSave: {},
    saveTransactions: []

};

const saveSlice = createSlice({
    name: "save",
    initialState,
    reducers: {
        createSave: (state, action) => {
            state.saveList.push(action.payload);
        },
        deleteSave: (state, action) => {
            state.saveList = state.saveList.filter(item => item.id !== action.payload);
            state.saveTransactions = state.saveTransactions.filter(item => item.id !== action.payload);
            state.currentSave = {};
        },
        saveWithdrawMoney: (state, { payload }) => {
            const saveList = [...state.saveList];
            const item = saveList.find(saveItem => saveItem.id === payload.id)
            if (payload.moneyType === "save") {
                state.saveTransactions.push({ id: payload.id, amount: payload.amount, moneyType: payload.moneyType })
                item.amountCurrent += payload.amount
            } else {
                state.saveTransactions.push({ id: payload.id, amount: payload.amount, moneyType: payload.moneyType })
                item.amountCurrent -= payload.amount

            }
            state.saveList = saveList;
        },
        showCurrentSave: (state, action) => {

            state.currentSave = action.payload;
        }


    },
})

export const selectSaveList = (state) => state.save.saveList
export const selectCurrentSave = (state) => state.save.currentSave
export const selectSaveTransactions = (state) => state.save.saveTransactions
export const { createSave, saveWithdrawMoney, showCurrentSave, deleteSave } = saveSlice.actions;
export default saveSlice.reducer;
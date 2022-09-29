import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import dictionarySlice from "./Dictionary/dictionarySlice";
import testingPageSlice from "./TestingPage/testingPageSlice";

const reducer = combineReducers({
    dictionary:dictionarySlice,
    testing:testingPageSlice
});

export const store = configureStore({
    reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

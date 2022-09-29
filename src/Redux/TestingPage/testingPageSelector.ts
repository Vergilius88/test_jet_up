import { RootState } from "../store";

export const getWordsForTest = (state:RootState)=>state.testing.wordsForTest;
export const getResult=(state:RootState)=> state.testing.lastTestResult;
export const getAllResult=(state:RootState)=> state.testing.allResults;
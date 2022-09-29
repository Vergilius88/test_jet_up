import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Word {
  word: string;
  rightAnswer: string;
  answers: string[];
}
interface Result {
  percentage: number;
  testEndDate: string;
}

interface Props {
  wordsForTest: Word[];
  allResults: Result[];
  lastTestResult?: Result;
}

const initialState: Props = {
    wordsForTest: [],
    lastTestResult: undefined,
    allResults: []
};

const testingPageSlice = createSlice({
    name: "testingPageSlice",
    initialState,
    reducers: {
        writeDataForTesting: (state, actions: PayloadAction<Word[]>) => {
            state.wordsForTest = actions.payload;
        },
        writeResults: (state, actions: PayloadAction<Result>) => {
            state.lastTestResult = actions.payload;
            state.allResults = [actions.payload, ...state.allResults];
        }
    }
});

export const { writeDataForTesting, writeResults } = testingPageSlice.actions;
export default testingPageSlice.reducer;

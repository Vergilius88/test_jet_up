import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../../Assets/Data/basicDataForDictionary";

interface Word {
  english: string;
  ukrainian: string;
}

interface Props {
  words: Word[];
}

const initialState: Props = {
    words: data
};

const dictionarySlice = createSlice({
    name: "dictionarySlice",
    initialState,
    reducers: {
        writeDownWord: (state, actions: PayloadAction<Word[]>) => {
            state.words = [...state.words,...actions.payload];
        }
    }
});

export const { writeDownWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;

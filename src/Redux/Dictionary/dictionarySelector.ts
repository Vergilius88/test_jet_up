import { RootState } from "../store";

export const getWordsFromDictionary = (state:RootState)=>state.dictionary.words;
import { DictionaryWordsList } from "./components/DictionaryWordsList/DictionaryWordsList";
import Main from "../../Layouts/Main/Main";
import { getWordsFromDictionary } from "../../Redux/Dictionary/dictionarySelector";
import { useAppSelector } from "../../Redux/Hooks";


export default function DictionaryPage() {
    const wordsFromDictionary = useAppSelector(getWordsFromDictionary);
    return (
        <Main title="Онлайн словник">
            <DictionaryWordsList words={wordsFromDictionary} />
        </Main>
    );
}
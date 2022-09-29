import { DictionaryItemCreator } from "../../Components/DictionaryItemCreator/DictionaryItemCreator";
import Main from "../../Layouts/Main/Main";
import { getWordsFromDictionary } from "../../Redux/Dictionary/dictionarySelector";
import { useAppSelector } from "../../Redux/Hooks";


export default function DictionaryPage() {
    const wordsFromDictionary = useAppSelector(getWordsFromDictionary);
    return (
        <Main title="Онлайн словник">
            <DictionaryItemCreator words={wordsFromDictionary} />
        </Main>
    );
}
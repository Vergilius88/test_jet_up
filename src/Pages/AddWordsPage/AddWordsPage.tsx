import { useState } from "react";
import Button from "../../Components/Button/MainButton";
import Form from "../../Components/Form/Form";
import InputField from "../../Components/InputField/InputField";
import Main from "../../Layouts/Main/Main";
import { writeDownWord } from "../../Redux/Dictionary/dictionarySlice";
import { useAppDispatch } from "../../Redux/Hooks";


export default function AddWordsPage() {
    const dispatch = useAppDispatch();
    const [word, setWord] = useState<string>("");
    const [translation, setTranslation] = useState<string>("");

    const clearForm = () => {
        setWord("");
        setTranslation("");
    };

    const writeWord = () => {
        const dictionaryItem = {
            english: word,
            ukraine: translation
        };
        dispatch(writeDownWord([dictionaryItem]));
        clearForm();
    };
   

    return (
        <Main title="Сторінка додавання слів">
            <Form title="Введіть слово та переклад">
                <InputField placeholder="слово англійською" value={word} setValue={setWord} />
                <InputField placeholder="переклад" value={translation} setValue={setTranslation} />
                <Button
                    title={"Добавити до словника"}
                    onClick={writeWord}
                    className="btnFilters"
                />
            </Form>
        </Main>
    );
}

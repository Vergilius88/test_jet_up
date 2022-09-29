import Main from "../../Layouts/Main/Main";
import "./TestingPage.scss";
import { TestingBlock } from "./components/TestingBlock/TestingBlock";
import { useState } from "react";
import Button from "../../Components/Button/MainButton";

export default function TestingPage() {
    const [startTest, setStartTest] = useState<boolean>(false);
    return (
        <Main title="Сторінка перевірки слів">
            {startTest ? <TestingBlock /> : <Button className="btnFilters" title="Повторити слова" onClick={() => setStartTest(true)} />}

        </Main>
    );
}
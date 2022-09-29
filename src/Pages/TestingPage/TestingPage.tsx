import Main from "../../Layouts/Main/Main";
import "./TestingPage.scss";
import { TestingBlock } from "../../Components/TestingBlock/TestingBlock";

export default function TestPage() {

    return (
        <Main title="Сторінка перевірки слів">
            <TestingBlock />
        </Main>
    );
}
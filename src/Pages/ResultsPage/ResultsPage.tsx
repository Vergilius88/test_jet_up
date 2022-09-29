import { ResultsCart } from "../../Components/ResultCard/ResultCard";
import Main from "../../Layouts/Main/Main";
import { useAppSelector } from "../../Redux/Hooks";
import { getAllResult, getResult } from "../../Redux/TestingPage/testingPageSelector";
import "./ResultsPage.scss";

export default function ResultsPage() {
    const lastResult = useAppSelector(getResult);
    const allResult = useAppSelector(getAllResult);


    return (
        <Main title="Результати перевірки">
            <div className="resultPage">
                {lastResult &&
                    <>
                        <h3>Результат останнього теста</h3>
                        <ResultsCart item={lastResult} />
                    </>}
                {allResult.length ?
                    <>
                        <h3>Історія результатів</h3>
                        <ul>
                            {allResult.map((i, index) => <li key={index}><ResultsCart item={i} /></li>)}
                        </ul></> : <h3>Пройдіть тест!</h3>}

            </div>
        </Main>
    );
}
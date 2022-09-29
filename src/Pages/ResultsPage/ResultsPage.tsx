import { ResultsCart } from "../../Components/ResultCard/ResultCard";
import Main from "../../Layouts/Main/Main";
import { useAppSelector } from "../../Redux/Hooks";
import { getAllResults, getResult } from "../../Redux/TestingPage/testingPageSelector";
import "./ResultsPage.scss";

export default function ResultsPage() {
    const lastResult = useAppSelector(getResult);
    const allResults = useAppSelector(getAllResults);


    return (
        <Main title="Результати перевірки">
            <div className="resultPage">
                {lastResult &&
                    <>
                        <h3>Результат останнього теста</h3>
                        <ResultsCart item={lastResult} />
                    </>}
                {allResults.length ?
                    <>
                        <h3>Історія результатів</h3>
                        <ul>
                            {allResults.map((i, index) => <li key={index}><ResultsCart item={i} /></li>)}
                        </ul></> : <h3>Пройдіть тест!</h3>}

            </div>
        </Main>
    );
}
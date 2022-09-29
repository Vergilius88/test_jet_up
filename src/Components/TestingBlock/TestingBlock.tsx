import { useState, BaseSyntheticEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Assets/Data/rautes";
import { getWordsFromDictionary } from "../../Redux/Dictionary/dictionarySelector";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { getWordsForTest } from "../../Redux/TestingPage/testingPageSelector";
import { writeResults, writeDataForTesting } from "../../Redux/TestingPage/testingPageSlice";
import { shuffle } from "../../Utils/Shuffle";
import Button from "../Button/MainButton";
import "./TestingBlock.scss";

export const TestingBlock = () => {
    const dispatch = useAppDispatch();
    const wordsFromDictionary = useAppSelector(getWordsFromDictionary);
    const wordsForTesting = useAppSelector(getWordsForTest);

    const [randomWordsIndex, setRandomWordsIndex] = useState<number>(0);
    const [trueAnswers, setTrueAnswers] = useState<number>(0);


    const nextWord = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        setRandomWordsIndex(randomWordsIndex + 1);
        const rightAnswer = wordsForTesting[randomWordsIndex]?.rightAnswer;
        const userAnswer = e.target.textContent;
        if (rightAnswer === userAnswer) {
            setTrueAnswers(trueAnswers + 1);
        }
    };

    const navigate = useNavigate();
    if (randomWordsIndex >= 9) {
        const result = {
            percentage: trueAnswers * 10,
            testEndDate: new Date().toDateString()
        };
        dispatch(writeResults(result));
        navigate(routes.resultsPage);
    }

    useEffect(() => {
        const randomWords = shuffle(wordsFromDictionary).slice(1, 10);
        const preparedRandomWords = randomWords.map((i: { english: string, ukraine: string }) => {
            const wrongAnswers = shuffle(wordsFromDictionary)
                .filter((word: { english: string, ukraine: string }) => word.english !== i.english)
                .slice(-4, -1).map(i => i.ukraine);
            return {
                word: i.english,
                rightAnswer: i.ukraine,
                answers: shuffle([...wrongAnswers, i.ukraine])
            };
        });
        dispatch(writeDataForTesting(preparedRandomWords));
    }, []);

    return (
        <div className="testingBlock">
            <p className="checkedWord">{wordsForTesting[randomWordsIndex]?.word}</p>
            <div className="buttonsBlock">
                {wordsForTesting[randomWordsIndex]?.answers.map((i, index) => {
                    return <Button className="btnFilters" key={index} title={i} onClick={(e) => { nextWord(e); }} />;
                })}
            </div>
        </div>
    );
};
import { useState, BaseSyntheticEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../Assets/Data/rautes";
import { getWordsFromDictionary } from "../../../../Redux/Dictionary/dictionarySelector";
import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks";
import { getWordsForTest } from "../../../../Redux/TestingPage/testingPageSelector";
import { writeResults, writeDataForTesting } from "../../../../Redux/TestingPage/testingPageSlice";
import { shuffle } from "../../../../Utils/Shuffle/shuffle";
import Button from "../../../../Components/Button/MainButton";
import "./TestingBlock.scss";

export const TestingBlock = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const wordsFromDictionary = useAppSelector(getWordsFromDictionary);
    const wordsForTesting = useAppSelector(getWordsForTest);

    const [randomWordsIndex, setRandomWordsIndex] = useState<number>(0);
    const [trueAnswers, setTrueAnswers] = useState<number>(0);


    const chooseWord = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        setRandomWordsIndex(randomWordsIndex + 1);
        const rightAnswer = wordsForTesting[randomWordsIndex]?.rightAnswer;
        const userAnswer = e.target.textContent;
        if (rightAnswer === userAnswer) {
            setTrueAnswers(trueAnswers + 1);
        }
    };


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
        const preparedRandomWords = randomWords
            .map((randomWord: { english: string, ukrainian: string }) => {
                const wrongAnswers = shuffle(wordsFromDictionary)
                    .filter((word: { english: string, ukrainian: string }) => word.english !== randomWord.english)
                    .slice(-4, -1)
                    .map(i => i.ukrainian);
                return {
                    word: randomWord.english,
                    rightAnswer: randomWord.ukrainian,
                    answers: shuffle([...wrongAnswers, randomWord.ukrainian])
                };
            });
        dispatch(writeDataForTesting(preparedRandomWords));
    }, []);

    return (
        <div className="testingBlock">
            <p className="checkedWord">{wordsForTesting[randomWordsIndex]?.word}</p>
            <div className="buttonsBlock">
                {wordsForTesting[randomWordsIndex]?.answers.map((i, index) => {
                    return <Button className="btnFilters" key={index} title={i} onClick={(e) => chooseWord(e)} />;
                })}
            </div>
        </div>
    );
};
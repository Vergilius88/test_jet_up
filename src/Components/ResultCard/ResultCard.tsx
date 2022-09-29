import "./ResultsCart.scss";

interface Props {
    item: {
        percentage: number;
        testEndDate: string;
    }
}

export const ResultsCart = ({ item }: Props) => {
    return (
        <div className="resultsCart">
            <p>Дата здачи теста {item.testEndDate}</p>
            <p>Правильных ответов - {item.percentage}%</p>
        </div>
    );
};
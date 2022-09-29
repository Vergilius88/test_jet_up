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
            <p>Час останнього тесту {item.testEndDate}</p>
            <p>Правильних відповідей - {item.percentage}%</p>
        </div>
    );
};
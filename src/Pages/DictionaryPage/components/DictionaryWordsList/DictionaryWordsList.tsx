import "./DictionaryWordsList.scss";

interface Word {
    english: string,
    ukrainian: string
}

interface Words {
    words: Word[]
}

export const DictionaryWordsList = ({ words }: Words) => {
    return (
        <ul className="dictionary">
            {words.map((i, index) =>
                (<li key={index} className="dictionaryItem">{i.english} - {i.ukrainian}</li>)
            )}
        </ul>
    );
};
import "./DictionaryItemCreator.scss";

interface Word {
    english: string,
    ukraine: string
}

interface Words {
    words: Word[]
}

export const DictionaryItemCreator = ({ words }: Words) => {
    return (
        <ul className="dictionary">
            {words.map((i, index) =>
                (<li key={index} className="dictionaryItem">{i.english} - {i.ukraine}</li>)
            )}
        </ul>
    );
};
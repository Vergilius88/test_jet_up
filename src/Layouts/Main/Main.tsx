import "./Main.scss";

interface Props {
    title: string;
    children?: JSX.Element | JSX.Element[];
}

export default function Main({ children, title }: Props) {
    return (
        <main className="main">
            <h2 className="titlePage">{title}</h2>
            {children}
        </main>
    );
}

import "./Form.scss";

interface Props {
    children?: JSX.Element | JSX.Element[];
    id?: string;
    title?:string
}
export default function Form({ children, id, title }: Props) {
    return (
        <div id={id} className="formContainer">
            <p className="formTitle">{title}</p>
            <form className="form">{children}</form>
        </div>
    );
}

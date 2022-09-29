import React from "react";
import "./MainButton.scss";

interface Props {
    title?: string;
    className?: string;
    children?: JSX.Element[] | JSX.Element;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    name?: string;
    type?: "submit" | "reset";
    disabled?: boolean;
}

export default function Button({ children, title, onClick, className, name, type, disabled }: Props) {
    return (
        <button type={type ? type : "button"} className={className} name={name} onClick={onClick} disabled={disabled}>
            {title}
            {children}
            {disabled && <div className="overlay"></div>}
        </button>
    );
}

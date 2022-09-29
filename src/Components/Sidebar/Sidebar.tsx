import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import Button from "../Button/MainButton";
import { routes } from "../../Assets/Data/rautes";

interface Props {
    inActive: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Sidebar = forwardRef(({ inActive, onClick }: Props, ref: any) => {
    return (
        <div className={`sidebarContent ${inActive && "active"}`} ref={ref}>
            <div className="sidebarBtnWrapper">
                <Button onClick={onClick} className="navigationBtn" />
                <nav className="nav" onClick={onClick}>
                    <Link className="sidebarListItemLink menu-item" to={routes.dictionary}>
                        Онлайн словник
                    </Link>
                    <Link
                        className="sidebarListItemLink menu-item"
                        to={routes.addingWordsPage}
                    >
                        Сторінка додавання слова
                    </Link>
                    <Link
                        className="sidebarListItemLink menu-item"
                        to={routes.wordCheckPage}
                    >
                        Сторінка перевірки слів
                    </Link>
                    <Link
                        className="sidebarListItemLink menu-item"
                        to={routes.resultsPage}
                    >
                        Результати перевірки
                    </Link>
                </nav>
            </div>
        </div>
    );
});

export default Sidebar;

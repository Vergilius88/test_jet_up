import { useRef, useState } from "react";
import "./Header.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Button from "../../Components/Button/MainButton";
import { useOnClickOutside } from "../../Utils/OutsideClick";

export default function Header() {
    const ref = useRef();

    const [sideBar, setSideBar] = useState<boolean>(false);

    const btnClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        sideBar ? setSideBar(false) : setSideBar(true);
    };

    useOnClickOutside(ref, () => setSideBar(false));
    return (
        <header className="headerWrapper">
            <Sidebar inActive={sideBar} onClick={btnClick} ref={ref} />
            <Button onClick={btnClick} className="navigationBtn" />
        </header>
    );
}

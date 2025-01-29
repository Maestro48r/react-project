import { useState } from "react";
import Modal from "../Modal";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isModal, setIsModal] = useState(true);
    return (
        <nav className={style.container}>
                <Link to="/react-project//beans">Beans</Link>
                <Link to="/facts">Facts</Link>
                <Link to="/recipies">Recipies</Link>
                <Link to="/combinations">Combinations</Link>
                <Link to="/history">History</Link>
                {<Modal isModal= {isModal} onClick={() => setIsModal(false)} />}
        </nav>
    );
};

export default Nav;
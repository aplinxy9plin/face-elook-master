import React from "react";
import css from './Back.module.css';
import back from "../../images/back.svg";
import { Link } from "react-router-dom";

const Back = ({ to }) => {
    return (
        <div className={css.back}>
            <Link className={css.back} to={to}>
                <img src={back} alt="back" />
            </Link>
        </div>
    )
}

export default Back;
import React from "react";
import { Link } from "react-router-dom";
import css from './Button.module.css';

const Button = ({ children, to, }) => {
    return (
        <div>
            <Link className={css.button} to={to}>{children}</Link>
        </div>

    )
}

export default Button;
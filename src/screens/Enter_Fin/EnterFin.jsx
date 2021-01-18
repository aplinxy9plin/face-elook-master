import React from "react";
import tsu_logo from "../../images/tsu_logo.svg";
import Button from "../../components/Button/Button";
import css from './Enter_Fin.module.css';
import { Link } from "react-router-dom";
import sber_icon from "../../images/sber_icon.svg";

const EnterFin = () => {
    return (
        <div className={css.base_container}>
            <div className={css.header}>FaceElook</div>
            <div className={css.content}>
                <div className={css.image}>
                    <img src={tsu_logo} alt="tsu_logo" />
                </div>
                <div className={css.enterBtn}>
                    <Button to='/enter'>Войти</Button>
                </div>
                <div><Link to='/formPart1' className={css.regBtn}>Зарегистрироваться</Link></div>
                <div className={css.log_in}>
                    <div>
                        <Link className={css.log_in_with}>Войти по ТГУ.Аккаунты</Link>
                    </div>
                    <div className={css.log_in_cber}>
                        <img className={css.sber_icon} src={sber_icon} alt="nophoto" />
                        <Link className={css.log_in_with}>Войти по Сбербанк ID</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterFin;
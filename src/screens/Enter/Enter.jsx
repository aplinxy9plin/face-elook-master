import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import css from './Enter.module.css';
import Back from '../../components/Back/Back';

const Enter = () => {
    return (
        <div className={css.base_container}>
            <Back to='/' />
            <div className={css.header}>Войти</div>
            <div className={css.content}>
                <div className={css.label}>
                    <label >Телефон / E-mail</label>
                </div>
                <Input type='text' />
                <div className={css.label}>
                    <label>Пароль</label>
                </div>
                <Input type='password' />
                <div className={css.pass}>
                    <Link className={css.passLink}>Забыли пароль?</Link>
                </div>
                <Button>Далее</Button>
            </div>
        </div>
    )
}

export default Enter;
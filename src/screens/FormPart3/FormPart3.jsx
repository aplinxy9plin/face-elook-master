import React from "react";
import photo from "../../images/photo.jpg";
import Button from "../../components/Button/Button";
import css from './FormPart3.module.css';
import { Link } from "react-router-dom";
import Back from "../../components/Back/Back";
import ok from "../../images/valid_icon.svg";

const FormPart3 = () => {
    return (
        <div className={css.base_container}>
            <Back to='/formPart2' />
            <div className={css.header}>Подтвердите свою личность</div>
            <div className={css.content}>
                <div>
                    <img className={css.image} src={photo} alt="nophoto" />
                </div>
                <div className={css.label}>
                    <label>Операция завершена< br/> успешно</label>
                </div>
                <div>
                    <img className={css.ok_icon} src={ok} alt="ok" />
                </div>
                <div className={css.nextBtn}>
                    <Button to='/success'>Далее</Button>
                </div>
                <div className={css.button}>
                    <Link className={css.button} to='/'>Сфотографироваться заново</Link>
                </div>
            </div>
        </div>
    )
}

export default FormPart3;
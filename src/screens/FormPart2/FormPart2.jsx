import React from "react";
import photo from "../../images/photo.jpg";
import Button from "../../components/Button/Button";
import css from './FormPart2.module.css';
import { Link } from "react-router-dom";
import Back from "../../components/Back/Back";

const FormPart2 = () => {
    return (
        <div className={css.base_container}>
            <Back to='/formPart1' />
            <div className={css.header}>Подтвердите свою личность</div>
            <div className={css.content}>
                <div>
                    <img className={css.image} src={photo} alt="nophoto" />
                </div>
                <div className={css.label}>
                    <label>Добавьте фото из галереии или через камеру</label>
                </div>
                <div className={css.buttons}>
                    <Link className={css.buttons}>Выбрать фото из Галереи</Link>
                </div>
                <div className={css.buttons}>
                    <Link className={css.buttons}>Сделать фото</Link>
                </div>
                <div className={css.nextBtn}>
                    <Button to='/formPart3'>Далее</Button>
                </div>
            </div>
        </div>
    )
}

export default FormPart2;
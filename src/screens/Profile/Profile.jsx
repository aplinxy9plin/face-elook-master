import React from "react";
import Input from "../../components/Input/Input";
import css from './Profile.module.css';
import Back from '../../components/Back/Back';
import Select from "../../components/Select/Select";
import { Link } from "react-router-dom";
import photo from "../../images/no_photo.jpg";
import DatePicker from "../../components/DatePicker/DatePicker";

const Profile = () => {
    return (
        <div className={css.base_container}>
            <Back to='/success' />
            <div className={css.my_profile}>
                <div className={css.header}>Мои данные</div>
                <img className={css.photo} src={photo} alt="nophoto" />
            </div>
            <div className={css.update}>
                <Link className={css.update} to='/'>Редактировать данные</Link>
            </div>
            <div className={css.inputs}>
                <div className={css.formInput}>
                    <Input label='Фамилия*' type='text' valid />
                </div>
                <div className={css.formInput}>
                    <Input label='Имя*' type='text' valid />
                </div>
                <div className={css.formInput}>
                    <Input label='Отчество*' type='text' valid />
                </div>
                <div className={css.formInput}>
                    <DatePicker label='Дата рождения*' type='date' valid
                        name="dateOfBirth" />
                </div>
                <div className={css.formInput}>
                    <Input label='Номер телефона*' type='number' valid />
                </div>
                <div className={css.formInput}>
                    <Input label='E-mail*' type='email' />
                </div>
                <div className={css.formInput}>
                    <Input label='Пароль*' type='password' />
                </div>
            </div>
            <div className={css.selects}>
                <div className={css.formSelect}>
                    <Select label='Статус*' options={["Гость", "Преподаватель", "Студент"]} />
                </div>
                <div className={css.formSelect}>
                    <Select label='ВУЗ*' options={["НИ ТГУ", "НИ ТПУ", "ТУСУР"]} />
                </div>
                <div className={css.update_pass}>
                    <Link className={css.update_pass} to='/'>Изменить пароль</Link>
                </div>
            </div>
        </div>
    )
}

export default Profile;
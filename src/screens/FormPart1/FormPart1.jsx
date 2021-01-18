import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import css from './FormPart1.module.css';
import Back from '../../components/Back/Back';
import Select from "../../components/Select/Select";
import request from '../../request'
import DatePicker from "../../components/DatePicker/DatePicker";


const Enter = () => {
    const [sentCode, setsentCode] = useState(false)

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [institute, setInstitute] = useState("");
    const [role, setRole] = useState("");

    //const [inputError, setInputError] = useState("Поле '" + {label} + "'должно быть заполнено!");

    //const [institues, setinstitutes] = useState([])
    //const [folkroles, setfolkroles] = useState([])

    // useEffect(() => {
    //     init()
    // }, [])

    // const init = async () => {
    //     const dataInst = await request.get("persident/getInstitutes")
    //     const dataFolk = await request.get("persident/getfolkroles")
    //     console.log(dataInst);
    //     console.log(dataFolk);
    // }

    const submit = () => {
        console.log(lastName, firstName, patronymic, phone, code, email, password, role, institute)
    }

    return (
        <div className={css.base_container}>
            <Back to='/' />
            <div className={css.header}>Заполните <br />анкету</div>
            <div className={css.inputs}>
                <div className={css.formInput}>
                    <Input
                        label='Фамилия*'
                        type='text'
                        valid
                        name="lastName"
                        value={lastName}
                        setValue={setLastName}
                        maxLength='20'
                    />
                </div>
                <div className={css.formInput}>
                    <Input value={firstName} setValue={setFirstName} label='Имя*' type='text' valid
                        name="firstName" maxLength='20' />
                </div>
                <div className={css.formInput}>
                    <Input value={patronymic} setValue={setPatronymic} label='Отчество*' type='text' valid
                        name="patronymic" maxLength='20' />
                </div>
                <div>
                    <DatePicker label='Дата рождения*' type='date' valid
                        name="dateOfBirth" />
                </div>

                <div className={css.formInput}>
                    <Input value={phone} setValue={setPhone} label='Номер телефона*' type='number'
                        name="phone" maxLength='12'/>
                </div>
                {
                    !sentCode ? (
                        <div className={css.buttons}>
                            <Link
                                className={css.numberBtn}
                                onClick={() => setsentCode(true)}
                            >Подтвердить номер</Link>
                        </div>
                    ) : (
                            <div className={css.formInput}>
                                <Input value={code} setValue={setCode} label='Введите код подтверждения' type='number'
                                    name="code" maxLength='4'/>
                            </div>
                        )
                }
                <div className={css.formInput}>
                    <Input value={email} setValue={setEmail} label='E-mail*' type='email'
                        name="email" maxLength='20' />
                </div>
                <div className={css.formInput}>
                    <Input value={password} setValue={setPassword} label='Пароль*' type='password'
                        name="password" maxLength='8'/>
                </div>
            </div>
            <div className={css.selects}>
                <div className={css.formSelect}>
                    <Select value={role} setValue={setRole} label='Статус*' options={["Гость", "Преподаватель", "Студент"]}
                        name="role" />
                </div>
                <div className={css.formSelect}>
                    <Select value={institute} setValue={setInstitute} label='ВУЗ*'
                        name="institute" />
                </div>
            </div>
            <div className={css.enterBtn}>
                <Button to='/formPart2'>Далее</Button>
            </div>
            <button style={{ width: 300, height: 200 }} onClick={submit}>knopka</button>
        </div>
    )
}

export default Enter;
import React, { useState } from 'react';
import css from './InputDatePicker.module.css';
import valid_icon from '../../images/valid_icon.svg';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru'
registerLocale('ru', ru)


const DatePicker = ({ label,
    valid }) => {
        const [startDate, setStartDate] = useState(new Date());
    return (
        <div className={css.input}>
            <ReactDatePicker
                className={css.input_native}
                maxDate={new Date()}
                locale="ru"
                dateFormat="dd.MM.YYY"
                label
                valid
                onChange={date => setStartDate(date)} 
                selected={startDate}
            />
            {
                valid && (
                    <img className={css.valid_icon} src={valid_icon} alt="ok_icon" />
                )
            }
            {
                label && (
                    <label className={css.label} >{label}</label>
                )
            }
        </div>
    )
}
export default DatePicker;
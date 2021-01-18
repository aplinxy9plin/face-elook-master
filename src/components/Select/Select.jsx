import React from "react";
import css from './Select.module.css';
import select_icon from '../../images/select_icon.svg';

const Select = ({
    setValue,
    value,
    options = [],
    label,
    select = true,
    onChange,
    name
}) => {
    return (
        <div className={css.select_container}>
            <select
                className={css.select}
                onChange={(event) => setValue(event.target.value)}
                value={value}
                name={name}>
                {
                    options && (
                        options.map((item) =>
                            <option value={item} key={item}>{item}</option>
                        )
                    )
                }
            </select>
            {
                label && (
                    <label className={css.label} >{label}</label>
                )
            }
            {
                select && (
                    <img className={css.select_icon} src={select_icon} alt="select_icon" />
                )
            }
        </div>
    )
}

export default Select;
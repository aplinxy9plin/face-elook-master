import React from 'react';
import css from './Input.module.css';
import valid_icon from '../../images/valid_icon.svg';

const Input = ({
    setValue,
    maxLength,
    placeholder,
    disabled,
    valid,
    label,
    value,
    type = "text"
}) => {
    return (
        <div className={css.input} >
            <input
                maxLength={maxLength}
                onChange={(event) => setValue(event.target.value)}
                value={value}
                className={css.input_native}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
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

export default Input;
import React from "react";
import './input.scss'

const InputField = (props) => {
    const { handleChange, label, name, type, value } = props;
    return (
        <div className="input">
            <label className="input__label" htmlFor={name}>{label}</label>
            <input className="input__input" type={type} onChange={handleChange} value={value} name={name} required />
        </div>
    )
}

export default InputField
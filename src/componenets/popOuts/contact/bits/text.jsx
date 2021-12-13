import React from "react";
import './text.scss'


const TextareaField = (props) => {
    const { handleChange, label, name, value } = props;
    return (
        <div className='text'>
            <label className='text__label' className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
            <textarea className='text__area' onChange={handleChange} name={name} rows="4" className="w-full border-b-2 outline-none bg-gray-100 p-2" value={value}></textarea>
        </div>
    )
}

export default TextareaField
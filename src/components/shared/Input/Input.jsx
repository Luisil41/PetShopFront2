import React from 'react';

import './Input.scss';

export const Input = ({ type, name, placeholder, id, value, label, onChange, checked, onBlur }) => {

    return (
        <>
        <label htmlFor={name} className="input__container">
            <div className="input__container-box">
                <span className="input__label">{label}</span>
            </div>
            <input 
                className="input__box" 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                id={id}
                value={value} 
                onChange={onChange} 
                checked={checked}
                onBlur={onBlur}
            />
        </label>
        </>
    )
}

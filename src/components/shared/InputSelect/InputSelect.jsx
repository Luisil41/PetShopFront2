import React from 'react';

import './InputSelect.scss';

export const InputSelect = ({ name, value, label, children, onChange, onBlur }) => {

    return (
        <>
        <label htmlFor={name} className="input__container">
            <div className="input__container-box">
                <span className="input__label">{label}</span>
            </div>
            <select
                className="input__box"
                type="select" 
                name={name} 
                id={name} 
                value={value} 
                onChange={onChange} 
                onBlur={onBlur}
            >
                {children} 
            </select>
        </label>
        </>
    )
}
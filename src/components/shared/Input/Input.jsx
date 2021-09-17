import React from 'react'

export const Input = ({ type, name, placeholder, id, value, label, onChange, checked }) => {

    return (
        <>
        <label>
            <p>{label}</p>
            <input type={type} name={name} placeholder={placeholder} id={id} value={value} onChange={onChange} checked={checked}/>  
        </label>
        </>
    )
}

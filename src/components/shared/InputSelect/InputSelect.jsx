import React from 'react'

export const InputSelect = ({ name, id, value, label, children, onChange }) => {

    return (
        <>
        <label>
            <p>{label}</p>
            <select type="select" name={name} id={id} value={value}>
                {children} 
            </select>
        </label>
        </>
    )
}
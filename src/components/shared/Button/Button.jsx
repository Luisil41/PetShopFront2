import React from 'react'
import './button.scss';

export const Button = ({type, className, children}) => {
    return (
        <>
            <button type={type} className={className}>{children}</button>
        </>
    )
}

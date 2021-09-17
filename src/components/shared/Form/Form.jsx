import React from 'react'

export const Form = ({ onSubmit, method, children, enctype="application/x-www-form-urlencoded" }) => {

    return (
        <>
            <form onSubmit={onSubmit} method={method} encType={enctype}>
            {children}
            </form>
        </>
    )
}

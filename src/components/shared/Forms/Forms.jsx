import React from 'react';
import { Formik, Form, ErrorMessage} from 'formik';

import './Forms.scss';

export const Forms = ({ initValues, onSubmit, children }) => {

    return (
        <>
            <Formik
                initialValues={initValues}
                validate={(values) => {
                    let errors = {};

                    return errors;
                }}
                onSubmit={onSubmit}
            >
                {({values, handleChange, handleBlur}) => (
                    <Form>
                        {children}
                    </Form>
                )}

            </Formik>
        </>
        // <>
        //     <form onSubmit={onSubmit} method={method} encType={enctype}>
        //     {children}
        //     </form>
        // </>
    )
}

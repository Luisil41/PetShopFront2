import React from 'react';
import { Formik, Form } from 'formik';

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
    )
}

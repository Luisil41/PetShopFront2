import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import { shelterLogin, userLogin } from '../../../api/auth.api';
import { Input } from '../../shared/Input/Input'
import { Button } from '../../shared/Button/Button'

import { UserContext } from "../../../App";

export const Login = ({ forUser }) => {
    const user = useContext(UserContext);
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={(values) => {
                    let errors = {}

                    if (!values.email) {
                        errors.email = 'El campo correo es obligatorio.'
                    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
                        errors.email = 'Ingresa un correo válido.'
                    }

                    if (!values.password) {
                        errors.password = 'El campo contraseña es obligatorio.'
                    }

                    return errors;
                }}
                onSubmit={async (values, { resetForm }) => {
                    if(forUser) {
                        const res = await userLogin(values);
                        user.setUser(res);          
                    }else {
                        const res = await shelterLogin(values);
                        user.setUser(res);
                    }
                    resetForm();
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                    <div className="form__big-container">
                        <Form className="form__container">
                            <div className="form__box">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Correo Electrónico"
                                    label="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <div className="form__error">{errors.email}</div>}
                            </div>
                            <div className="form__box">
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    label="Contraseña"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <div className="form__error">{errors.password}</div>}
                            </div>
                            <div className="form__button-box">
                                <Button type="submit">Acceder</Button>
                            </div>
                        </Form>
                    </div>
                )}

            </Formik>
        </>
    )
}

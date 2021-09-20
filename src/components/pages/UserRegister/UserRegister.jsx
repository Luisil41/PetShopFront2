import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Formik, Form } from 'formik';

import { userRegisterFetch } from '../../../api/auth.api';
import { Input } from '../../shared/Input/Input';
import { InputSelect } from '../../shared/InputSelect/InputSelect';
import { Button } from '../../shared/Button/Button';

import provinces from '../../../utils/provinces';


export const UserRegister = ({ funct }) => {
const [toNext, setToNext] = useState(false)
return (
  <>
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        birthdate: '',
        phone: '',
        province: '',
        avatar: ''
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

        if (!values.fullName) {
          errors.fullName = 'El campo nombre es obligatorio.'
        } else if (!/^[a-zA-Z ]{2,30}$/.test(values.fullName)) {
          errors.fullName = 'El nombre solo puede contener letras y espacios.'
        }

        if (!values.phone) {
          errors.phone = 'El campo número de teléfono es obligatorio.'
        } else if (values.phone.length !== 9 && !/^[679]{1}[0-9]{8}$/.test(values.phone)) {
          errors.phone = 'Escribe un número de teléfono válido.'
        }

        if (!values.province) {
          errors.province = 'El campo provincia es obligatorio.'
        }

        if (!values.birthdate) {
          errors.birthdate = 'La fecha de nacimiento es obligatoria.'
        }

        return errors;
      }}
      onSubmit={async (values) => {
        // const r = await readAndUpload(values.avatar)
        console.log('r');

        userRegisterFetch(values);
        setToNext(true)

        // history.push('/');
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
        <div className="form__big-container">
          <Form className="form__container">
            {toNext ? <Redirect to="/profile" /> : null}
            <div className="form__box">
              <Input
                type="text"
                name="fullName"
                placeholder="Nombre de la protectora"
                label="Nombre"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.fullName && errors.fullName && <div className="form__error">{errors.fullName}</div>}
            </div>
            <div className="form__box">
              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                label="Correo electrónico"
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
                placeholder="Contraseña"
                label="Contraseña"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && <div className="form__error">{errors.password}</div>}
            </div>
            <div className="form__box">
              <Input
                type="text"
                name="phone"
                placeholder="Número de teléfono"
                label="Número de teléfono"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone && <div className="form__error">{errors.phone}</div>}
            </div>
            <div className="form__box">
              <Input
                type="date"
                name="birthdate"
                placeholder="Fecha de nacimiento"
                label="Fecha de nacimiento"
                value={values.birthdate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.birthdate && errors.birthdate && <div className="form__error">{errors.birthdate}</div>}
            </div>
            <div className="form__box">
              <InputSelect
                name="province"
                label="Provincia"
                value={values.province}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {provinces.map((e) => (<option value={e.value} key={e.name}>{e.name}</option>))};
              </InputSelect>
              {touched.province && errors.province && <div className="form__error">{errors.province}</div>}
            </div>
            <div className="form__box">
              <Input
                type="file"
                name="avatar"
                placeholder="Imagen de portada"
                label="Imagen de portada"
                onChange={(e) => {
                  setFieldValue("avatar", e.target.files[0])
                }}
                onBlur={handleBlur}
              />
              {touched.avatar && errors.avatar && <div className="form__error">{errors.avatar}</div>}
            </div>

            <div className="form__button-box">
              <Button type="submit">Registrarse</Button>
            </div>
          </Form>
        </div>
      )}

    </Formik>
  </>
)
}

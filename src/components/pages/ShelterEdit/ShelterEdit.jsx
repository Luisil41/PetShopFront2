import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import { shelterRegister } from '../../../api/auth.api';
import { Input } from '../../shared/Input/Input';
import { InputSelect } from '../../shared/InputSelect/InputSelect';
import { Button } from '../../shared/Button/Button';

import provinces from '../../../utils/provinces';

import { UserContext } from '../../../App';

export const ShelterEdit = () => {
  const user = useContext(UserContext);

  return (
    <>
      <Formik
        initialValues={{
          email: user.user.email,
          name: user.user.name,
          address: user.user.address,
          phone: user.user.phone,
          province: user.user.province,
          description: user.user.description,
        }}
        validate={(values) => {
          let errors = {}

          if (!values.email) {
            errors.email = 'El campo correo es obligatorio.'
          } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
            errors.email = 'Ingresa un correo válido.'
          }

          if (!values.address) {
            errors.address = 'El campo dirección es obligatorio.'
          } else if (values.address.length < 5) {
            errors.address = 'Escribe una dirección válida..'
          }

          if (!values.name) {
            errors.name = 'El campo nombre es obligatorio.'
          } else if (!/^[a-zA-Z ]{2,30}$/.test(values.name)) {
            errors.name = 'El nombre solo puede contener letras y espacios.'
          }

          if (!values.phone) {
            errors.phone = 'El campo número de teléfono es obligatorio.'
          } else if (values.phone.length !== 9 && !/^[679]{1}[0-9]{8}$/.test(values.phone)) {
            errors.phone = 'Escribe un número de teléfono válido.'
          }

          if (!values.province) {
            errors.province = 'El campo provincia es obligatorio.'
          }

          if (!values.description) {
            errors.description = 'El campo descripción es obligatorio.'
          }

          return errors;
        }}
        onSubmit={async(values) => {
          // const r = await readAndUpload(values.avatar)

          shelterRegister(values);
          // history.push('/');
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <div className="form__big-container">
            <Form className="form__container">
              <div className="form__box">
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre de la protectora"
                  label="Nombre"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name && <div className="form__error">{errors.name}</div>}
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
                  type="text"
                  name="address"
                  placeholder="Dirección"
                  label="Dirección"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.address && errors.address && <div className="form__error">{errors.address}</div>}
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
                  type="textarea"
                  name="description"
                  placeholder="Descripción"
                  label="Descripción"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.description && errors.description && <div className="form__error">{errors.description}</div>}
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

import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import { newPet } from '../../../api/pet.api';

import { Input } from '../../shared/Input/Input';
import { InputSelect } from '../../shared/InputSelect/InputSelect';
import { Button } from '../../shared/Button/Button';

import provinces from '../../../utils/provinces';

import { UserContext } from '../../../App';

export const NewPet = () => {

  const user = useContext(UserContext);

  return (
    <>
      <Formik
        initialValues={{
          type: '',
          name: '',
          age: '',
          sex: '',
          breed: '',
          size: '',
          isVaccinated: '',
          isSterilized: '',
          isDewormed: '',
          microchip: '',
          province: user.user.province,
          status: '',
          avatar: '',
        }}
        validate={(values) => {
          let errors = {}

          if (!values.type) errors.type = 'El tipo es obligatorio.';

          if (!values.name) {
            errors.name = 'El nombre es obligatorio.'
          } else if (!/^[a-zA-Z ]{2,30}$/.test(values.name)) {
            errors.name = 'El nombre solo puede contener letras y espacios.'
          }

          if (!values.age) {
            errors.age = 'La edad es obligatoria.'
          } else if(!/^[1-9][0-9]*$/.test(values.age)){
            errors.age = 'Número inválido'
          }

          if (!values.breed) {
            errors.breed = 'El raza es obligatoria.'
          } else if (!/^[a-zA-Z ]{2,30}$/.test(values.breed)) {
            errors.breed = 'La raza solo puede contener letras y espacios.'
          }

          if (!values.sex) errors.sex = 'El sexo es obligatorio.'
          if (!values.size) errors.size= 'El tamaño es obligatorio.'
          if (!values.isVaccinated) errors.isVaccinated= 'Este es obligatorio.'
          if (!values.isSterilized) errors.isSterilized= 'Este es obligatorio.'
          if (!values.isDewormed) errors.isDewormed= 'Este es obligatorio.'
          if (!values.microchip) errors.microchip= 'Este es obligatorio.'
          if (!values.province) errors.province= 'El campo provincia es obligatorio.'
          if (!values.status) errors.status= 'Este es obligatorio.'

          return errors;
        }}
        onSubmit={async (values) => {
          // const r = await readAndUpload(values.avatar)
          console.log('r');

          // newPet(values);
          // history.push('/');
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
          <div className="form__big-container">
            <Form className="form__container">
              <div className="form__box">
                <InputSelect
                  name="type"
                  label="Tipo"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="perro">Perro</option>
                  <option value="gato">Gato</option>
                  <option value="otros">Otros</option>
                </InputSelect>
                {touched.type && errors.type && <div className="form__error">{errors.type}</div>}
              </div>
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
                  type="number"
                  name="age"
                  placeholder="Edad"
                  label="Edad"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.age && errors.age && <div className="form__error">{errors.age}</div>}
              </div>
              <div className="form__box-radio">
                <p className="form__radio-label">Sexo</p>
                <Input
                  type="radio"
                  name="sex"
                  label="Macho"
                  value="macho"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  type="radio"
                  name="sex"
                  label="Hembra"
                  value="hembra"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.sex && errors.sex && <div className="form__error">{errors.sex}</div>}
              </div>
              <div className="form__box">
                <Input
                  type="text"
                  name="breed"
                  placeholder="Raza"
                  label="Raza"
                  value={values.breed}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.breed && errors.breed && <div className="form__error">{errors.breed}</div>}
              </div>
              <div className="form__box">
                <InputSelect
                  name="size"
                  label="Tamaño"
                  value={values.size}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="pequeño">Pequeño</option>
                  <option value="mediano">Mediano</option>
                  <option value="grande">Grande</option>
                </InputSelect>
                {touched.size && errors.size && <div className="form__error">{errors.size}</div>}
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
              <div className="form__box-radio">
              <p className="form__radio-label">¿Está vacunado?</p>
                <Input
                  type="radio"
                  name="isVaccinated"
                  label="Sí"
                  value="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  type="radio"
                  name="isVaccinated"
                  label="No"
                  value="false"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.isVaccinated && errors.isVaccinated && <div className="form__error">{errors.isVaccinated}</div>}
              </div>
              <div className="form__box-radio">
              <p className="form__radio-label">¿Está esterilizado?</p>
                <Input
                  type="radio"
                  name="isSterilized"
                  label="Sí"
                  value="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  type="radio"
                  name="isSterilized"
                  label="No"
                  value="false"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.isSterilized && errors.isSterilized && <div className="form__error">{errors.isSterilized}</div>}
              </div>
              <div className="form__box-radio">
              <p className="form__radio-label">¿Está desparasitado?</p>
                <Input
                  type="radio"
                  name="isDewormed"
                  label="Sí"
                  value="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  type="radio"
                  name="isDewormed"
                  label="No"
                  value="false"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.isDewormed && errors.isDewormed && <div className="form__error">{errors.isDewormed}</div>}
              </div>
              <div className="form__box-radio">
              <p className="form__radio-label">¿Tiene microchip?</p>
                <Input
                  type="radio"
                  name="microchip"
                  label="Sí"
                  value="true"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  type="radio"
                  name="microchip"
                  label="No"
                  value="false"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.microchip && errors.microchip && <div className="form__error">{errors.microchip}</div>}
              </div>
              <div className="form__box">
                <InputSelect
                  name="status"
                  label="Estado"
                  value={values.status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {user.user.role === 'shelter'
                  ?
                  <>
                    <option value='adopción'>Adopción</option>
                    <option value='casa de acogida'>Casa de acogida</option>
                    <option value='ambas'>Ambas</option>
                  </>
                  :
                  <option value='perdido'>Perdido</option>
                  }
                </InputSelect>
                {touched.status && errors.status && <div className="form__error">{errors.status}</div>}
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

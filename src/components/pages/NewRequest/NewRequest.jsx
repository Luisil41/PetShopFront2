import React from 'react';
import { Formik, Form } from 'formik';

import { newRequest } from '../../../api/request.api';

import { Input } from '../../shared/Input/Input';
import { Button } from '../../shared/Button/Button';

export const NewRequest = ({idUser, idShelter, idPet}) => {

    return (
        <>
        <Formik
          initialValues={{
            message: '',
          }}
          onSubmit={async(values) => {
            // const r = await readAndUpload(values.avatar)
            console.log('r');
    
            // newRequest(values);
            // history.push('/');
          }}
        >
          {({ values, handleChange, handleBlur,  }) => (
            <div className="form__big-container">
              <Form className="form__container">
                <div className="form__box">
                  <Input
                    type="text"
                    name="message"
                    placeholder="Escribe aquí tu mensaje"
                    label="¿Quieres dejarnos un mensaje?"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
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

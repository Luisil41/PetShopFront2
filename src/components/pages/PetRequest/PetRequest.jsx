import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import { acceptedRequest, deniedRequest, getRequest } from '../../../api/request.api';

import { Button } from "../../shared/Button/Button";

import './PetRequest.scss'

export const PetRequest = ({ id }) => {

  const [request, setRequest] = useState({});

  const requestFetch = async () => {
    const requestValues = await getRequest(id);
    setRequest(requestValues);
  }

  useEffect(() => {
    requestFetch();
  }, [])

  const { petId, shelterId, userId, message } = request;

  return (
    <>
      <div>
        <h3>Solicitud de {userId?.fullName}</h3>
        <p>El usuario {userId?.fullName} ha enviado una nueva solicitud para {petId?.name}. Revisa su perfil desde <Link to={`/profile/${userId?._id}`}>este link</Link> y no lo hagas esperar!</p>
        <h4>Aquí va su mensaje:</h4>
        <div className="request__message-box">
          <p>{message}</p>
        </div>
        <p className="request__small-text">Desde su perfil podrás acceder y descargar su formulario de adopción.</p>
      </div>
      <div className="request__buttons-box">
      <Formik
        onSubmit={async () => {
          await acceptedRequest(id);
        }}
      >
        {() => (
            <Form>
              <div className="form__button-box">
                <Button type="submit">Aceptar</Button>
              </div>
            </Form>
        )}
      </Formik>
      <Formik
        onSubmit={async () => {
          await deniedRequest(id);
        }}
      >
        {() => (
            <Form>
              <div className="form__button-box">
                <Button type="submit">Rechazar</Button>
              </div>
            </Form>
        )}
      </Formik>
      </div>
      <hr />
    </>
  )
}

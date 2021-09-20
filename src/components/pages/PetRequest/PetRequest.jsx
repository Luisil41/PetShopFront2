import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";

import { acceptedRequest, deniedRequest, getRequest } from '../../../api/request.api';

import { Button } from "../../shared/Button/Button";

import './PetRequest.scss'

export const PetRequest = ({ id, isUser }) => {
  const [request, setRequest] = useState({});
  const [toNext, setToNext] = useState(false)

  const requestFetch = async () => {
    const requestValues = await getRequest(id);
    setRequest(requestValues);
  }

  useEffect(() => {
    requestFetch();
  }, [])

  const { petId, shelterId, userId, message } = request;

  if (!isUser) {
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
        </div><div className="request__buttons-box">
          <Formik
            initialValues={{
              accepted: "",
            }}
            onSubmit={async () => {
              await acceptedRequest(id);
              setToNext(true)
            }}
          >
            {() => (

              <Form>
                {toNext ? <Redirect to="/requests" /> : null}
                <div className="form__button-box">
                  <Button type="submit" name='accepted'>Aceptar</Button>
                </div>
              </Form>
            )}
          </Formik>
          <Formik
            initialValues={{
              denied: "",
            }}
            onSubmit={async () => {
              await deniedRequest(id);
              setToNext(true)
            }}
          >
            {() => (
              <Form>
                {toNext ? <Redirect to="/requests" /> : null}
                <div className="form__button-box">
                  <Button type="submit" name="denied">Rechazar</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <hr />
      </>
    )
  } else {
    return (
      <>
        <div>
          <h3>Solicitud para {petId?.name}</h3>
          <p>Tu solicitud para {petId?.name} ya ha sido enviada a {shelterId?.name}.</p>
        </div>
        <div className="request__buttons-box">
          <p>El estado de tu solicitud es: {request.status}</p>
        </div>
        <hr />
      </>
    )
  }
}

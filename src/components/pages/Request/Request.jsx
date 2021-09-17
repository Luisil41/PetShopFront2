import React, { useState, useEffect } from 'react';
import { acceptedRequest, deniedRequest, getRequest } from '../../../api/request.api';
import { Button } from '../../shared/Button/Button';
import { Form } from '../../shared/Form/Form';

export const Request = ({id}) => {

    const [ request, setRequest] = useState({});

    const requestFetch = async () => {
        const requestValues = await getRequest(id);
        setRequest(requestValues);
    }

    useEffect(() => {
        requestFetch();
    }, [])

    const submitFormAccepted = async (e) => {
        e.preventDefault();
    
        try {
          await acceptedRequest(id);
    
        } catch (err) {
          console.log(err);
        }
      }

    const submitFormDenied = async (e) => {
      e.preventDefault();
  
      try {
        await deniedRequest(id);
  
      } catch (err) {
        console.log(err);
      }
    }

    const { petId, shelterId, userId, message } = request;

    return (
        <>
            <Form onSubmit={submitFormAccepted} method="PUT">
                <Button type="submit">Aceptar</Button>
            </Form>
            <Form onSubmit={submitFormDenied} method="PUT">
                <Button type="submit">Denegar</Button>
            </Form>
            
        </>
    )
}

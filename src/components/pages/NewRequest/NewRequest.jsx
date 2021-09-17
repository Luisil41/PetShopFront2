import React from 'react';
import { newRequest } from '../../../api/request.api';
import { Button } from '../../shared/Button/Button';
import { Form } from '../../shared/Form/Form';
import { Input } from '../../shared/Input/Input';

export const NewRequest = ({idUser, idShelter, idPet}) => {

    const submitForm = async (e) => {
        e.preventDefault();

        const { message } = e.target;
        const form = {
            userId: idUser,
            shelterId: idShelter,
            petId: idPet,
            message: message.value
        }
        try {
          await newRequest(form);
    
        } catch (err) {
          console.log(err);
        }
      }

    return (
        <>
            <Form onSubmit={submitForm} method="POST">
                <Input type="text" name="message" />
                <Button type="submit">Solicitar mascota</Button>
            </Form>
        </>
    )
}

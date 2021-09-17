import React from 'react';
import { deletePet } from '../../../../api/pet.api';
import { Button } from '../../../shared/Button/Button';
import { Form } from '../../../shared/Form/Form';

export const DeletePet = ({id}) => {

    const submitForm = async (e) => {
        e.preventDefault();
    
        try {
          await deletePet(id);
    
        } catch (err) {
          console.log(err);
        }
      }
    
    return (
        <>
            <Form onSubmit={submitForm} method="DELETE">
                <Button type="submit">Eliminar</Button>
            </Form>
        </>
    )
}

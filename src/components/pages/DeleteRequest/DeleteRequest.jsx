import React from 'react'
import { deleteRequest } from '../../../../api/request.api';
import { Button } from '../../../shared/Button/Button';
import { Form } from '../../../shared/Form/Form';

export const DeleteRequest = ({id}) => {

    const submitForm = async (e) => {
        e.preventDefault();
    
        try {
          await deleteRequest(id);
    
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

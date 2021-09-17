import React from 'react';

import { Form } from '../Form/Form'
import { Button } from '../Button/Button'

import { logout } from '../../../api/auth.api';

export const Logout = ({ funct }) => {

    const submitLogout = async (e) => {
        e.preventDefault();
    
        await logout();
    
        funct();
    }

    return (
        <Form onSubmit={submitLogout} method="POST">
            <Button type="submit">Logout</Button>
        </Form>
    )
}

import React from 'react';
import { Form } from '../../shared/Form/Form'
import { Input } from '../../shared/Input/Input'
import { Button } from '../../shared/Button/Button'

import { shelterLogin } from '../../../api/auth.api';

export const ShelterLogin = ({ funct }) => {

    const submitLoginShelter = async (e) => {
        e.preventDefault();

        const { email, password } = e.target;

        const loginData = {
            email: email.value,
            password: password.value
        };

        await shelterLogin(loginData);

        funct();
    }
    
    return (
        <Form onSubmit={submitLoginShelter} method="POST">
            <Input type="email" name="email" placeholder="Correo Electrónico" label="Email" />
            <Input type="password" name="password" placeholder="Password" label="Contraseña" />
            <Button type="submit">Acceder</Button>
        </Form>
    )
}

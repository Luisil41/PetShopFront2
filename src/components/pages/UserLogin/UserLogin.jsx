import React from 'react';
import { Forms } from '../../shared/Forms/Forms'
import { Input } from '../../shared/Input/Input'
import { Button } from '../../shared/Button/Button'

import { userLogin } from '../../../api/auth.api';

export const UserLogin = ({ funct }) => {

    const submitLoginUser = async (e) => {
        e.preventDefault();

        const { email, password } = e.target;

        const loginData = {
            email: email.value,
            password: password.value
        };

        await userLogin(loginData);

        funct();
    }
    
    return (
        <Forms onSubmit={submitLoginUser} method="POST">
            <Input type="email" name="email" placeholder="Correo Electrónico" label="Email" />
            <Input type="password" name="password" placeholder="Password" label="Contraseña" />
            <Button type="submit">Acceder</Button>
        </Forms>
    )
}

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
        <Form className="login-form" onSubmit={submitLoginUser} method="POST">
            <p className="login-text">
                <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-lock fa-stack-1x"></i>
                </span>
            </p>
            <Input type="email" class="login-username" autofocus="true" required="true" placeholder="Email" name="email" />
            <Input type="password" class="login-password" required="true" placeholder="Password" name="password" />
            <br />
            <br />
            <Button type="submit">Acceder</Button>
        </Forms>
    )
}

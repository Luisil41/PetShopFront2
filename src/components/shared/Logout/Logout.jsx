import React from 'react';

import { Forms } from '../Forms/Forms'
import { Button } from '../Button/Button'

import { logout } from '../../../api/auth.api';

export const Logout = ({ funct }) => {

    const submitLogout = async (e) => {
        e.preventDefault();
    
        await logout();
    
        funct();
    }

    return (
        <Forms onSubmit={submitLogout} method="POST">
            <Button className="button" type="submit">Logout</Button>
        </Forms>
    )
}

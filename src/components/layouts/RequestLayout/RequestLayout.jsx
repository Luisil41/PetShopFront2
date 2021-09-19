import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";

import { PetRequest } from '../../pages/PetRequest/PetRequest';

import { UserContext } from '../../../App';

export const RequestLayout = (props) => {
    const user = useContext(UserContext);

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <Redirect to="/login" />
    if (user.user) return <PetRequest id="613cdd7676a1a3b199e0aa6b" />
}
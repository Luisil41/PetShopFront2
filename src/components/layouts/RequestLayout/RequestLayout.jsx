import React, { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";

import { PetRequest } from '../../pages/PetRequest/PetRequest';

import { UserContext } from '../../../App';

export const RequestLayout = (props) => {
    const user = useContext(UserContext);

    if (user === null) return <div>Cargando...</div>
    if (user === false) return <Redirect to="/login" />
    if (user === "Necesitas logearte para acceder.") return <Redirect to="/login" />
    if (user) return <Route {...props}><PetRequest id="613cdd7676a1a3b199e0aa6b" /></Route>
}
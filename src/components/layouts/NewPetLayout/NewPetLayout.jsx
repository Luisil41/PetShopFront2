import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";

import { NewPet } from '../../pages/NewPet/NewPet';

import { UserContext } from "../../../App";

export const NewPetLayout = () => {
    const user = useContext(UserContext);

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <Redirect to="/login" />
    if (user.user) return <NewPet />
}
import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";

import { ShelterEdit } from '../../pages/ShelterEdit/ShelterEdit';

import { UserContext } from "../../../App";

export const ShelterEditLayout = () => {
    const user = useContext(UserContext);

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <Redirect to="/login" />
    if (user.user){
        if (user.user.role === 'shelter') {
            return <ShelterEdit />
        } else {
            return <Redirect to="/user/edit" />
        }
    }

}


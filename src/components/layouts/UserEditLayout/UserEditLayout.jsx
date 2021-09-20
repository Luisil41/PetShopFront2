import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";

import { UserEdit } from '../../pages/UserEdit/UserEdit';

import { UserContext } from "../../../App";

export const UserEditLayout = () => {
    const user = useContext(UserContext);

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <Redirect to="/login" />
    if (user.user){
        if (user.user.role === 'shelter') {
            return <Redirect to="/shelter/edit" />
        } else {
            return <UserEdit />
        }
    }

}


import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";

import { UserEdit } from '../../pages/UserEdit/UserEdit';
import { LoginScreen } from '../../pages/LoginScreen/LoginScreen';

import { UserContext } from "../../../App";

export const UserEditLayout = () => {
    const user = useContext(UserContext);

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <LoginScreen />
    if (user.user) return <Redirect to="/user/edit" />

}


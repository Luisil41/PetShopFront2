import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import { UserContext } from "../../../App";
import { LoginScreen } from '../../pages/LoginScreen/LoginScreen';

export const LoginLayout = () => {
    const user = useContext(UserContext);

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <LoginScreen />
    if (user.user) return <Redirect to="/profile" />
}
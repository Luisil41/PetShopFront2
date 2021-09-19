import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";

import { RegisterScreen } from '../../pages/RegisterScreen/RegisterScreen';

import { UserContext } from "../../../App";

export const RegisterLayout = () => {
    const user = useContext(UserContext);

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <RegisterScreen />
    if (user.user) return <Redirect to="/profile" />
}
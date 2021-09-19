import React, { useContext } from 'react';
import { Redirect, useParams } from "react-router-dom";

import { PetRequest } from '../../pages/PetRequest/PetRequest';

import { UserContext } from '../../../App';

export const RequestLayout = () => {
    const user = useContext(UserContext);

    const { id } = useParams();

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <Redirect to="/login" />
    if (user.user){
        if (user.user.role === 'shelter') {
            return <PetRequest isUser={false} id={id} />
        } else {
            return <PetRequest isUser={true} id={id} />
        }
    }
}
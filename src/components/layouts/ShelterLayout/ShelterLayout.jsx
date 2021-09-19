import React, { useContext } from 'react';
import { ShelterPage } from '../../pages/ShelterPage/ShelterPage';
import { UserContext } from '../../../App';

export const ShelterLayout = () => {

    const userGlobal = useContext(UserContext);

    return (
        <>
            <ShelterPage />
        </>
    )
}
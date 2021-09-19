import React, { useContext } from 'react';
import { Header } from '../../core/Header/Header';
import { Menu } from '../../core/Menu/Menu';
import { ShelterPage } from '../../pages/ShelterPage/ShelterPage';
import { UserContext } from '../../../App';

export const ShelterLayout = () => {

    const userGlobal = useContext(UserContext);

    return (
        <>
            <Header title="RescueMe!"/>

            <ShelterPage />

            <Menu />
        </>
    )
}
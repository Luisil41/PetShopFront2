import React from 'react';
import { Header } from '../../core/Header/Header';
import { PetsPage } from '../../pages/PetsPage/PetsPage';
import { Menu } from '../../core/Menu/Menu';

export const HomeLayout = () => {
    return (
        <>
            <Header title="¡ALERTA!"/>
            <PetsPage />
            <Menu />
        </>
    )
}

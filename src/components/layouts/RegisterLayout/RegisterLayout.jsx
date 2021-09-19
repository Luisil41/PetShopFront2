import React from 'react';
import { Header } from '../../core/Header/Header';
import { RegisterScreen } from '../../pages/RegisterScreen/RegisterScreen';
import { Menu } from '../../core/Menu/Menu';

export const RegisterLayout = () => {
    return (
        <>
            <Header title="RescueMe!"/>
            <RegisterScreen />
            <Menu />
        </>
    )
}
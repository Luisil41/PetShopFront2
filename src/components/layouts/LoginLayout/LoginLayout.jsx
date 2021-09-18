import React from 'react';
import { Header } from '../../core/Header/Header';
import { LoginScreen } from '../../pages/LoginScreen/LoginScreen';
import { Menu } from '../../core/Menu/Menu';

export const LoginLayout = () => {
    return (
        <>
            <Header title="RescueMe!"/>
            <LoginScreen />
            <Menu />
        </>
    )
}
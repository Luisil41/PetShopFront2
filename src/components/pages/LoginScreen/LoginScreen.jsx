import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, AppBar } from '@material-ui/core';

import './LoginScreen.scss';
import { Login } from '../Login/Login';


export const LoginScreen = () => {

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Usuario" className="user" />
                    <Tab label="Protectora" className="shelter" />
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <Login forUser={true} />}
            {selectedTab === 1 && <Login forUser={false} />}
            <hr />
            <div className="register__box">
                <p className="register__title">¿Aún no tienes cuenta?</p>
                <Link to="/register" className="Link"><span className="register__button">REGISTRARSE AHORA</span></Link>
            </div>
        </>
    )
}

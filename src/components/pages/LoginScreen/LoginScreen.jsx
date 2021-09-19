import React from 'react'
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
                <Tab label="Usuario" className="user"/>
                <Tab label="Protectora" className="shelter"/>
            </Tabs>
        </AppBar>
        {selectedTab === 0 && <Login forUser={true} />}
        {selectedTab === 1 && <Login forUser={false} />}
        </>
    )
}

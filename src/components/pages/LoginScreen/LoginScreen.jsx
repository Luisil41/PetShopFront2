import React from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { UserLogin } from '../../pages/UserLogin/UserLogin';
import { ShelterLogin } from '../../pages/ShelterLogin/ShelterLogin';
import './LoginScreen.scss';


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
        {selectedTab === 0 && <UserLogin />}
        {selectedTab === 1 && <ShelterLogin />}
        </>
    )
}

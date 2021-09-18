import React from 'react'
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { UserRegister } from '../../pages/UserRegister/UserRegister';
import { ShelterRegister } from '../../pages/ShelterRegister/ShelterRegister';
import './RegisterScreen.scss';


export const RegisterScreen = () => {

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
        {selectedTab === 0 && <UserRegister />}
        {selectedTab === 1 && <ShelterRegister />}
        </>
    )
}
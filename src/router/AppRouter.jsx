import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    
} from 'react-router-dom';

import { UserLogin } from '../components/pages/UserLogin/UserLogin';
import { ShelterLogin } from '../components/pages/ShelterLogin/ShelterLogin'



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/user/login" component={UserLogin} />
                    <Route exact path="/shelter/login" component={ShelterLogin} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
                )
}
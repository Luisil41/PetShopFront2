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
                    <Route exact path="/user/profile/:id" component={ShelterLogin} />
                    <Route exact path="/user/form" component={ShelterLogin} />
                    <Route exact path="/user/form/create" component={ShelterLogin} />
                    <Route exact path="/user/form/edit" component={ShelterLogin} />

                    <Route exact path="/shelter/profile/:id" component={ShelterLogin} />

                    <Route exact path="/requests" component={ShelterLogin} />

                    <Route exact path="/register" component={ShelterLogin} />
                    <Route exact path="/login" component={ShelterLogin} />

                    <Route exact path="/pet/:id" component={ShelterLogin} />
                    <Route exact path="/pet/add" component={ShelterLogin} />
                    <Route exact path="/pet/requests" component={ShelterLogin} />
                    <Route exact path="/pet/requests/new" component={ShelterLogin} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
                )
}
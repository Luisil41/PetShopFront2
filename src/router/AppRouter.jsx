import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    
} from 'react-router-dom';

import { Login } from '../components/pages/Login/Login'



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/user/profile/:id" component={Login} />
                    <Route exact path="/user/form" component={Login} />
                    <Route exact path="/user/form/create" component={Login} />
                    <Route exact path="/user/form/edit" component={Login} />

                    <Route exact path="/shelter/profile/:id" component={Login} />

                    <Route exact path="/requests" component={Login} />

                    <Route exact path="/register" component={Login} />
                    <Route exact path="/login" component={Login} />

                    <Route exact path="/pet/:id" component={Login} />
                    <Route exact path="/pet/add" component={Login} />
                    <Route exact path="/pet/requests" component={Login} />
                    <Route exact path="/pet/requests/new" component={Login} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
                )
}
import React, { useState, useEffect } from "react";
import { checkSession } from "./api/auth.api";
import { Header } from "./components/core/Header/Header";
import { Menu } from "./components/core/Menu/Menu";
import { ProfileLayout } from "./components/layouts/ProfileLayout/ProfileLayout";
import { HomeLayout } from "./components/layouts/HomeLayout/HomeLayout";
import { LoginLayout } from "./components/layouts/LoginLayout/LoginLayout";
import { RegisterLayout } from "./components/layouts/RegisterLayout/RegisterLayout";
import { LostPetsLayout } from "./components/layouts/LostPetsLayout/LostPetsLayout";
import { NewPetLayout } from "./components/layouts/NewPetLayout/NewPetLayout";
import { RequestLayout } from "./components/layouts/RequestLayout/RequestLayout";

import "./App.scss";

import { PrivateRoute } from './utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(false);

  const checkUserSession = async () => {
    const userFetch = await checkSession();
    if(userFetch === "Necesitas logearte para acceder.") {
      setUser(false);
    } else if (userFetch) {
      setUser(userFetch);
    } else {
      setUser(false);
    }
  };

  useEffect(() => {
    checkUserSession();
    console.log('usuario', user);
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Header title="RescueMe!" />
        <div className="main__container">
        <Switch>
          <Route path="/pet/add" exact>
            <NewPetLayout />
          </Route>
          <Route path="/pet/lost" exact>
            <LostPetsLayout />
          </Route>

          <PrivateRoute path="/requests" exact component={RequestLayout} isAuthenticated={user._id !== ''} />

          <Route path="/register" exact>
            <RegisterLayout />
          </Route>
          <Route path="/login" exact>
            <LoginLayout />
          </Route>
          <Route path="/profile" exact>
            <ProfileLayout />
          </Route>
          <Route path="/">
            <HomeLayout />
          </Route>
        </Switch>
        </div>
        <Menu />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

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
<<<<<<< HEAD
import { RequestsLayout2 } from "./components/layouts/RequestsLayout2.jsx/RequestsLayout2";
=======
import { AllRequestsLayout } from './components/layouts/AllRequestsLayout/AllRequestsLayout';
import { RequestLayout } from './components/layouts/RequestLayout/RequestLayout';
>>>>>>> acf91f2ff52babd84c3d45b567424b75150bc165

import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(false);
  console.log(user);

  const checkUserSession = async () => {
    const userFetch = await checkSession();
    if (userFetch === "Necesitas logearte para acceder.") {
      setUser(false);
    } else if (userFetch) {
      setUser(userFetch);
    }
  };

  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Header title="RescueMe!" />
        <div className="main__container">
          <Switch>
            <Route path="/requests" exact component={AllRequestsLayout} />
            <Route path="/requests/:id" component={RequestLayout} />
            <Route path="/pet/add" exact component={NewPetLayout} />
            <Route path="/pet/lost" exact component={LostPetsLayout} />
            <Route path="/register" exac component={RegisterLayout} />
            <Route path="/login" exact component={LoginLayout} />
            <Route path="/profile" exact component={ProfileLayout} />
            <Route path="/" component={HomeLayout} />
          </Switch>
        </div>
        <Menu />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

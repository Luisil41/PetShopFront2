import React, { useState, useEffect } from 'react';
import { checkSession } from './api/auth.api';
import { AppRouter } from './router/AppRouter';
// import Menu from './components/core/Menu/Menu';
import { PetsPage } from './components/pages/PetsPage/PetsPage';
import { ShelterPage } from './components/pages/ShelterPage/ShelterPage';

// import { Form } from './components/shared/Form/Form';
// import { Button } from './components/shared/Button/Button';

// import {UserRegister} from './components/pages/UserRegister/UserRegister'
// import {UserLogin} from './components/pages/UserLogin/UserLogin'


import { ShelterRegister } from './components/pages/ShelterRegister/ShelterRegister'
import { ShelterLogin } from './components/pages/ShelterLogin/ShelterLogin'
// import { UserLogin } from './components/pages/UserLogin/UserLogin'
// import { LoginScreen } from './components/pages/LoginScreen/LoginScreen'

import { RegisterScreen } from './components/pages/RegisterScreen/RegisterScreen'


// import { Logout } from './components/shared/Logout/Logout'

// import { UserProfile } from './components/pages/UserProfile/UserProfile';


import { UserProfile } from './components/pages/UserProfile/UserProfile';
// import { Button } from './components/shared/Button/Button'


import './App.scss';
import PetCard from './components/shared/PetCard/PetCard';
import { Header } from './components/core/Header/Header';

export const UserContext = React.createContext(null)

function App() {
  const [user, setUser] = useState(false);

  const checkUserSession = async () => {
    const userFetch = await checkSession();

    if (userFetch) {
      setUser(userFetch);
    } else {
      setUser(false);
    }
  };

  useEffect(() => {
    checkUserSession();
  }, []);



  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
            <div className="App">
          
        </div>
            <AppRouter />
            <Header title="¡ALERTA!" />
            {/* <RegisterScreen /> */}
            <Menu />
            {/* <UserLogin /> */}
            {/* <LoginScreen /> */}
            
      </UserContext.Provider>
    </>
  );
}

export default App;

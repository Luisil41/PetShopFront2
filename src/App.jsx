import React, { useState, useEffect } from 'react';
import { checkSession } from './api/auth.api';
import { AppRouter } from './router/AppRouter';
// import Menu from './components/core/Menu/Menu';
import { PetsPage } from './components/pages/PetsPage/PetsPage';
// import { ShelterPage } from './components/pages/ShelterPage/ShelterPage';


// import { Form } from './components/shared/Form/Form';
// import { Button } from './components/shared/Button/Button';

// import {UserRegister} from './components/pages/UserRegister/UserRegister'
// import {UserLogin} from './components/pages/UserLogin/UserLogin'

// import { ShelterRegister } from './components/pages/ShelterRegister/ShelterRegister'
// import { ShelterLogin } from './components/pages/ShelterLogin/ShelterLogin'

// import { Logout } from './components/shared/Logout/Logout'

// import { UserProfile } from './components/pages/UserProfile/UserProfile';



import './App.scss';
import { ShelterProfile } from './components/pages/ShelterProfile/ShelterProfile';

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
            {/* <ShelterProfile id="6141ff1628df17dd82445a9b" /> */}
            <PetsPage />
            {/* <Menu /> */}
      </UserContext.Provider>
    </>
  );
}

export default App;

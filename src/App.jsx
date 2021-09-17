import React, { useState, useEffect } from 'react';
import { checkSession } from './api/auth.api';
import { getAllPets } from './api/pet.api';
import { AppRouter } from './router/AppRouter';
import  Menu  from './components/core/pending/Menu/Menu';


// import { Form } from './components/shared/Form/Form';
// import { Button } from './components/shared/Button/Button';

// import {UserRegister} from './components/pages/UserRegister/UserRegister'
// import {UserLogin} from './components/pages/UserLogin/UserLogin'

import {ShelterRegister} from './components/pages/ShelterRegister/ShelterRegister'
import {ShelterLogin} from './components/pages/ShelterLogin/ShelterLogin'

import {Logout} from './components/shared/Logout/Logout'

import { UserProfile } from './components/pages/UserProfile/UserProfile';

import './App.scss';
import PetCard from './components/shared/PetCard/PetCard';

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

  const [pets, setPets] = useState([]);
  const getPets = async () => {
      const petsFetch = await getAllPets();
      setPets(petsFetch);
    };

  useEffect(() => {
    checkUserSession();
    getPets();
  }, []);

  return (
    <>
    <div className="App">
    {pets.map((el) => (<PetCard pet={el}/>))}
    <AppRouter />
    <Menu />
      <UserContext.Provider value={{user, setUser}}>
        {/* <h1>USUARIO</h1>
        <UserRegister funct={checkSession} />
        <UserLogin funct={checkSession} />
        <Logout funct={checkSession} />*/}

        <h1>SHELTER</h1>
        <ShelterRegister funct={checkSession} />
        <ShelterLogin funct={checkSession} />
        <Logout funct={checkSession} />
        {/* <Form onSubmit={funcionPrueba}>
          <Button type="submit">Hacer petición</Button>
        </Form> */}
        <UserProfile id="6138ecb0f336cdbe85e00544" />
      </UserContext.Provider>
      
    </div>
    </>
  );

}

export default App;

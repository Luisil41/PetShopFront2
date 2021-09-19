import React, { useState, useEffect } from "react";
import { checkSession } from "./api/auth.api";
import { AppRouter } from "./router/AppRouter";
import { HomeLayout } from "./components/layouts/HomeLayout/HomeLayout";
import "./App.scss";

export const UserContext = React.createContext(null);

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
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <HomeLayout />
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
}

export default App;

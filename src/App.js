import React from "react";
import "./index.scss";
import { AppRoutes } from "./components/AppRoutes";
import {UserContext} from "./hooks/useContext"
import {useState} from "react"
function App() {
  const [user,setUser] =useState({username:'Fanor', email: 'fanor@gmail.com'})
  return (

    <UserContext.Provider value={{user, setUser}}>
    <AppRoutes />
    </UserContext.Provider>
  );
}

export default App;

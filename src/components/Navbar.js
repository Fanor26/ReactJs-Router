import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "../hooks/useContext";
export const Navbar = () => {
  const {user} = useContext(UserContext);
  return (
    <nav>
      <h1>
        Tittle {user.username}
      </h1>
      <div>
        
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/about"> About</NavLink>
        <NavLink exact to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

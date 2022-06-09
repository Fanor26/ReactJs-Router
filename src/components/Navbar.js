import React from "react";
import { NavLink, Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        {/*
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>

        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>*/}
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          About
        </NavLink>

        <NavLink
          to="/login"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Navbar } from "./Navbar";
export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

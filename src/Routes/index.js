import React from "react";
import { Switch, Route } from "react-router-dom";
import Monthly from "../Pages/Monthly";
import Analise from "../Pages/Analysis";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import NotFound from "../Pages/NotFound";
import { UserPage } from "../Pages/UserPage";
import { YearlyDashboard } from "../Pages/Yearly";
import Dashboard from "../Pages/Dashboard";
import Finances from "../Pages/Finances";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/finance">
        <Finances />
      </Route>
      <Route path="/analysis">
        <Analise />
      </Route>
      <Route path="/monthly/:month">
        <Monthly />
      </Route>
      <Route path="/yearly">
        <YearlyDashboard />
      </Route>
      <Route path="/user">
        <UserPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;

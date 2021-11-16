import React from "react";
import { Switch, Route } from "react-router";
import Analise from "../Pages/Analysis";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { UserPage } from "../Pages/UserPage";
import { YearlyDashboard } from "../Pages/Yearly";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/dashboard">Dashboard</Route>
      <Route path="/finance">Finanças</Route>
      <Route path="/analysis">
        <Analise />
      </Route>
      <Route path="/monthly">Mensal</Route>
      <Route path="/yearly">
        <YearlyDashboard />
      </Route>
      <Route path="/user">
        <UserPage />
        Usuário
      </Route>
    </Switch>
  );
};

export default Routes;

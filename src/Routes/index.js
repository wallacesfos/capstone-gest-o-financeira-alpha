import React from 'react'
import { Switch, Route } from "react-router";
import Analise from "../Pages/Analise";
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import {UserPage} from "../Pages/UserPage"


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
      <Route path="/yearly">Anual</Route>
      <Route path="/user">
        <UserPage/>
        Usuário</Route>
    </Switch>
  );
};

export default Routes;

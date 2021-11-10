import { Switch, Route } from "react-router";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        Login
      </Route>
      <Route path="/signup">Signup</Route>
      <Route path="/dashboard">Dashboard</Route>
      <Route path="/finance">Finanças</Route>
      <Route path="/analysis">Análises</Route>
      <Route path="/monthly">Mensal</Route>
      <Route path="/yearly">Anual</Route>
      <Route path="/user">Usuário</Route>
    </Switch>
  );
};

export default Routes;

import React from "react";
import CardMontlhyMovements from "./Components/CardMontlhyMovements";
import GlobalStyled from "./GlobalStyled";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Routes />
      <CardMontlhyMovements />
    </div>
  );
}

export default App;

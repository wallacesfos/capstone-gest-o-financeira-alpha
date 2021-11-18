import React from "react";
import { Header } from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Container } from "./styles";

export const Finance = () => {
  return (
    <>
      <Header />
      <Container>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Em andamento...
        </h1>
      </Container>
      <Footer />
    </>
  );
};

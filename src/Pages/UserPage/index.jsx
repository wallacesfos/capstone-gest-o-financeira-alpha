import React from "react";
import { Header } from "../../Components/Header";
import Footer from "../../Components/Footer";
import { UserContainer, InfoContainer, InfoDiv, ContainerPage, InfoDivs } from "./styles";
import PersonNav from "../../Assets/Icons/PersonNav.png";
import { AccountCircle } from "@material-ui/icons";
import { Input, Button } from "@material-ui/core";

export const UserPage = () => {
  return (
    <>
      <Header />
      <ContainerPage className="Container-page">

        <InfoDiv>
          <UserContainer>
            <img src={PersonNav} alt="Person" />
            <h1>User</h1>
            <h3>Description</h3>
            <h3>Pessoa Jurídica</h3>
          </UserContainer>
        </InfoDiv>

        <InfoDivs>
          <InfoContainer>
            <h2>Adicionar Foto</h2>
            <Input placeholder="URL">URL</Input>
            <Button variant="contained">Adicionar</Button>
          </InfoContainer>

          <InfoContainer>
            <h2>Descrição</h2>
            <Input placeholder="Descrição">URL</Input>
            <Button variant="contained">Adicionar</Button>
          </InfoContainer>

          <InfoContainer>
            <h2>Tipo de Pessoa</h2>
            <Input placeholder="Selecione">URL</Input>
            <Button variant="contained">Adicionar</Button>
          </InfoContainer>
        </InfoDivs>
        
      </ContainerPage>

      <Footer />
    </>
  );
};

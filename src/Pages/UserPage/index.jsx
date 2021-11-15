import React from "react";
import { Header } from "../../Components/Header";
import Footer from "../../Components/Footer";
import { UserContainer, InfoContainer, InfoDiv, ContainerPage } from "./styles";
import { AccountCircle } from "@material-ui/icons";
import { Input, Button } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";

export const UserPage = () => {
  return (
    <>
      <Header />
      <ContainerPage>
        <InfoDiv>
          <UserContainer>
            <AccountCircle />
            <h1>User</h1>
            <h3>Description</h3>
            <h3>Pessoa Jurídica</h3>
          </UserContainer>
        </InfoDiv>

        <InfoDiv>
          <InfoContainer>
            <h2>Adicionar Foto</h2>
            <Input
              placeholder="URL"
              // startAdornment={
              //   <InputAdornment position="start">
              //     <AccountCircle />
              //   </InputAdornment>
              // }
            >
              URL
            </Input>
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
        </InfoDiv>
      </ContainerPage>

      <Footer />
    </>
  );
};

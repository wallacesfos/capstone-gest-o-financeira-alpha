import React, {useState} from "react";
import { Header } from "../../Components/Header";
import Footer from "../../Components/Footer";
import { UserContainer, InfoContainer, InfoDiv, ContainerPage, InfoDivs, Container} from "./styles";
import PersonNav from "../../Assets/Icons/PersonNav.png";
import { AccountCircle } from "@material-ui/icons";
import { Input, Button } from "@material-ui/core";

export const UserPage = () => {
  const name = localStorage.getItem('@name_alpha');
  const [imageUrl, setImageUrl] = useState(localStorage.getItem("@image_alpha"))
  const [description, setDescription] = useState(localStorage.getItem("@description_alpha"))
  const [personType, setPersonType] = useState(localStorage.getItem("@person_alpha"))

  
  const[addImage, setAddImage] = useState('')
  const[addDescription, setAddDescription] = useState('')
  const[addPerson, setAddPerson] = useState('')

  
  const setImage = () => {
    localStorage.setItem("@image_alpha", addImage)
    setImageUrl(addImage)
  }

  const setDescriptions = () => {
    localStorage.setItem("@description_alpha", addImage)
    setDescription(addDescription)
  }

  const setPersons = () => {
    localStorage.setItem("@person_alpha", addImage)
    setPersonType(addPerson)
  }

  return (
    <Container>
      <Header />
      <ContainerPage className="Container-page">

        <InfoDiv>
          <UserContainer>
            <img src={imageUrl || PersonNav} alt="Person" className="image-profile"/>
            <h1>{name ||'User'}</h1>
            <h3>{description ||'Description'}</h3>
            <h3>{personType ||'Pessoa Jurídica'}</h3>
          </UserContainer>
        </InfoDiv>

        <InfoDivs>
          <InfoContainer>
            <h2>Adicionar Foto</h2>
            <Input placeholder="URL" onChange={(e) => setAddImage(e.target.value)}>URL</Input>
            <Button variant="contained" onClick={setImage}>Adicionar</Button>
          </InfoContainer>

          <InfoContainer>
            <h2>Descrição</h2>
            <Input placeholder="Descrição" onChange={(e) => setAddDescription(e.target.value)}>URL</Input>
            <Button variant="contained" onClick={setDescriptions}>Adicionar</Button>
          </InfoContainer>

          <InfoContainer>
            <h2>Tipo de Pessoa</h2>
            <Input placeholder="Selecione" onChange={(e) => setAddPerson(e.target.value)}>URL</Input>
            <Button variant="contained" onClick={setPersons}>Adicionar</Button>
          </InfoContainer>
        </InfoDivs>
        
      </ContainerPage>

      <Footer />
    </Container>
  );
};

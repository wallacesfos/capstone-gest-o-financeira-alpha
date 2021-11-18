import React from "react";
import { Container, ImageDiv, SigninDiv, Image } from "./style.js";
import AlphaImage from "../../Assets/Alpha.png";
import Register from "../../Components/Register";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory()

  if (localStorage.getItem("@token_alpha")) {
    history.push("/dashboard");
  }

  return (
    <Container>
      <ImageDiv></ImageDiv>
      <SigninDiv>
        <Image src={AlphaImage} alt="Icon Alpha" />

        <Register />
      </SigninDiv>
    </Container>
  );
}

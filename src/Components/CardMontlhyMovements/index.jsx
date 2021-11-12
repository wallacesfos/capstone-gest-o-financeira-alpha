import React from "react";
import { CgDollar } from "react-icons/cg";
import { FaHandHoldingUsd } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { Container, InconContainer, InfoContainer } from "./styles";

const CardMontlhyMovements = ({
  category,
  description,
  value,
  isInput = false,
}) => {
  return (
    <Container>
      <InconContainer>
        {isInput ? <CgDollar /> : <FaHandHoldingUsd />}
        <div>x</div>
      </InconContainer>
      <div className="info">
        <InfoContainer>
          <p className="category">Salário</p>
          <p className="description">Renda Fixa</p>
          <p className="value">R$ 50.000,00</p>
        </InfoContainer>
        <ProgressBar completed={60} />
      </div>
    </Container>
  );
};

export default CardMontlhyMovements;

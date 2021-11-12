import React from "react";
import { CgDollar } from "react-icons/cg";
import { FaHandHoldingUsd } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { Container, InconContainer, InfoContainer } from "./styles";

const CardMontlhyMovements = ({
  category,
  description,
  value,
  progress,
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
          <p className="category">{category}</p>
          <p className="description">{description}</p>
          <p className="value">{value}</p>
        </InfoContainer>
        <ProgressBar completed={progress} />
      </div>
    </Container>
  );
};

export default CardMontlhyMovements;

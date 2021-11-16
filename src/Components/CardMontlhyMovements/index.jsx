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
  id,
  remove,
  isInput = false,
}) => {
  return (
    <Container>
      <InconContainer>
        {isInput ? <CgDollar /> : <FaHandHoldingUsd />}
        <div className="pointer" onClick={() => remove(id)}>x</div>
      </InconContainer>
      <div className="info">
        <InfoContainer>
          <p className="category">{category}</p>
          <p className="description">{description}</p>
          <p className="value">{value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
        </InfoContainer>
        <ProgressBar completed={progress} />
      </div>
    </Container>
  );
};

export default CardMontlhyMovements;

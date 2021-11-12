import React from "react";
import { CgDollar } from "react-icons/cg";
import { FaHandHoldingUsd } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

const CardMontlhyMovements = ({
  category,
  description,
  value,
  isInput = false,
}) => {
  return (
    <>
      <div>{isInput ? <CgDollar /> : <FaHandHoldingUsd />}</div>
      <div>
        <p>Salário</p>
        <p>Renda Fixa</p>
        <p>R$ 50.000,00</p>
      </div>
      <ProgressBar completed={60} />
    </>
  );
};

export default CardMontlhyMovements;

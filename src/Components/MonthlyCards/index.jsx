import React from "react";
import { MonthlyCardContainer, DataContainer } from "./styles";
import {
  FaArrowLeft,
  FaArrowDown,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

export const MonthlyCards = ({
  month = "Janeiro",
  movement = "0.00",
  ins = "0.00",
  out = "0.00",
  free = "0.00",
  percentage = "0",
}) => {
  return (
    <>
      <MonthlyCardContainer>
        <DataContainer>
          <p>{month}</p>
        </DataContainer>
        <DataContainer>
          <FaArrowLeft color="#3498DB" style={{ marginRight: "0.5rem" }} />
          {movement.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </DataContainer>
        <DataContainer>
          <FaArrowUp color="#2ECC71" style={{ marginRight: "0.5rem" }} />
          {ins.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </DataContainer>
        <DataContainer>
          <FaArrowDown color="#E74C3C" style={{ marginRight: "0.5rem" }} />
          {out.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </DataContainer>
        <DataContainer>
          <FaArrowRight color="#F1C40F" style={{ marginRight: "0.5rem" }} />
          {free.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </DataContainer>
        <DataContainer>
          Você gastou {percentage}% da renda de {month}
        </DataContainer>
      </MonthlyCardContainer>
    </>
  );
};

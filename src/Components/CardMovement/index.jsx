import React from "react";
import { Container, Separator } from "./style.js";

export default function CardMovement({ image, title, values, type }) {
  return (
    <Container>
        <img src={image} alt="movemetion-icon" />
      <Separator>
        <p className="title">{title}</p>
        <p className={type}>
          {values.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
        </p>
      </Separator>
    </Container>
  );
}

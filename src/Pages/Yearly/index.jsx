import React from "react";
import { Container, Card, Main, Text } from "./styles.jsx";
import { Header } from "../../Components/Header";
import CardMovement from "../../Components/CardMovement/index.jsx";
import Movement from "../../Assets/Icons/Movement.png";
import Exit from "../../Assets/Icons/Exit.png";
import Deposit from "../../Assets/Icons/Deposit.png";
import Free from "../../Assets/Icons/Free.png";
import Footer from "../../Components/Footer";
import { MonthlyCards } from "../../Components/MonthlyCards/index.jsx";

export const YearlyDashboard = () => {
  return (
    <Container>
      <Header />
      <Text>
        <h3>Média de valor movimentados do ano de 2021</h3>
        <p className="Moviments-text">Média de valores anuais:</p>
      </Text>
      <Main>
        <Card>
          <CardMovement
            image={Movement}
            title="Movimentação"
            values={9500}
            type="movement"
          />
        </Card>

        <Card>
          <CardMovement
            image={Deposit}
            title="Entrada"
            values={6500}
            type="deposit"
          />
        </Card>

        <Card>
          <CardMovement image={Exit} title="Saídas" values={3000} type="exit" />
        </Card>

        <Card>
          <CardMovement image={Free} title="Livre" values={3500} type="free" />
        </Card>
      </Main>
      <Text style={{ padding: "29px 10px 0 10px" }}>
        <p className="Moviments-text">Valores totais de todos os meses</p>
      </Text>
      <div>
        <p>Mês</p>
        <p>Movimentacões</p>
        <p>Entradas</p>
        <p>Saídas</p>
        <p>Livre</p>
        <p>Restante</p>
      </div>
      <MonthlyCards
        month="Janeiro"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Fevereiro"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Marco"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Abril"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Maio"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Junho"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Julho"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Agosto"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Setembro"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Outubro"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Novembro"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <MonthlyCards
        month="Dezembro"
        movement={3500}
        ins={3500}
        out={0}
        free={3500}
        percentage={0}
      />
      <div className="Footer-Empurrer"></div>
      <Footer />
    </Container>
  );
};

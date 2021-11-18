import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Main, Text, CategoryDiv, GeneralContainer } from "./styles.jsx";
import { Header } from "../../Components/Header";
import CardMovement from "../../Components/CardMovement/index.jsx";
import Movement from "../../Assets/Icons/Movement.png";
import Exit from "../../Assets/Icons/Exit.png";
import Deposit from "../../Assets/Icons/Deposit.png";
import Free from "../../Assets/Icons/Free.png";
import Footer from "../../Components/Footer";
import { MonthlyCards } from "../../Components/MonthlyCards/index.jsx";
import { FinanceContext } from "../../Providers/Finances/index.js";

export const YearlyDashboard = () => {
  const { handleFinance, finances, enters, exits } = useContext(FinanceContext);
  useEffect(() => {
    handleFinance();
  }, []);
  console.log(finances);
  const getMonthlyFinance = (month, type) => {
    const currentMonth = finances
      .filter((value) => value.month === month && value.type === type)
      .reduce((a, b) => a + b.value, 0);
    return currentMonth;
  };

  const getMonthlyMovement = (month) => {
    const currentMonth = finances.filter((value) => value.month === month);
    const currentMonthEnters = currentMonth.filter(
      (value) => value.type === "Entrada"
    );
    const currentMonthExits = currentMonth.filter(
      (value) => value.type === "saida"
    );
    return (
      currentMonthEnters.reduce((a, b) => a + b.value, 0) +
      currentMonthExits.reduce((a, b) => a + b.value, 0)
    );
  };

  const getPercentage = (month) => {
    const currentMonth = finances.filter((value) => value.month === month);
    const currentMonthEnters = currentMonth.filter(
      (value) => value.type === "Entrada"
    );
    const currentMonthExits = currentMonth.filter(
      (value) => value.type === "saida"
    );
    const totalMovement =
      currentMonthEnters.reduce((a, b) => a + b.value, 0) +
      currentMonthExits.reduce((a, b) => a + b.value, 0);

    return (
      (currentMonthExits.reduce((a, b) => a + b.value, 0) / totalMovement) *
      100
    ).toFixed(2);
  };
  return (
    <GeneralContainer>
        <Header />
      <Container>
        <Text>
          <h3>Média de valor movimentados do ano de 2021</h3>
          <p className="Moviments-text">Média de valores anuais:</p>
        </Text>
        <Main>
          <Card>
            <CardMovement
              image={Movement}
              title="Movimentação"
              values={
                enters.reduce((a, b) => a + b.value, 0) +
                exits.reduce((a, b) => a + b.value, 0)
              }
              type="movement"
            />
          </Card>

          <Card>
            <CardMovement
              image={Deposit}
              title="Entrada"
              values={enters.reduce((a, b) => a + b.value, 0)}
              type="deposit"
            />
          </Card>

          <Card>
            <CardMovement
              image={Exit}
              title="Saídas"
              values={exits.reduce((a, b) => a + b.value, 0)}
              type="exit"
            />
          </Card>

          <Card>
            <CardMovement
              image={Free}
              title="Livre"
              values={
                enters.reduce((a, b) => a + b.value, 0) -
                exits.reduce((a, b) => a + b.value, 0)
              }
              type="free"
            />
          </Card>
        </Main>
        <Text style={{ padding: "29px 10px 0 10px" }}>
          <p className="Moviments-text">Valores totais de todos os meses</p>
        </Text>
        <CategoryDiv>
          <p>Mês</p>
          <p>Movimentações</p>
          <p>Entradas</p>
          <p>Saídas</p>
          <p>Livre</p>
          <p>Restante</p>
        </CategoryDiv>
        <MonthlyCards
          month="Janeiro"
          movement={getMonthlyMovement("janeiro")}
          ins={getMonthlyFinance("janeiro", "Entrada")}
          out={getMonthlyFinance("janeiro", "saida")}
          free={
            getMonthlyFinance("janeiro", "Entrada") -
            getMonthlyFinance("janeiro", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Fevereiro"
          movement={getMonthlyMovement("fevereiro")}
          ins={getMonthlyFinance("fevereiro", "Entrada")}
          out={getMonthlyFinance("fevereiro", "saida")}
          free={
            getMonthlyFinance("fevereiro", "Entrada") -
            getMonthlyFinance("fevereiro", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Março"
          movement={getMonthlyMovement("março")}
          ins={getMonthlyFinance("março", "Entrada")}
          out={getMonthlyFinance("março", "saida")}
          free={
            getMonthlyFinance("março", "Entrada") -
            getMonthlyFinance("março", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Abril"
          movement={getMonthlyMovement("abril")}
          ins={getMonthlyFinance("abril", "Entrada")}
          out={getMonthlyFinance("abril", "saida")}
          free={
            getMonthlyFinance("abril", "Entrada") -
            getMonthlyFinance("abril", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Maio"
          movement={getMonthlyMovement("maio")}
          ins={getMonthlyFinance("maio", "Entrada")}
          out={getMonthlyFinance("maio", "saida")}
          free={
            getMonthlyFinance("maio", "Entrada") -
            getMonthlyFinance("maio", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Junho"
          movement={getMonthlyMovement("junho")}
          ins={getMonthlyFinance("junho", "Entrada")}
          out={getMonthlyFinance("junho", "saida")}
          free={
            getMonthlyFinance("junho", "Entrada") -
            getMonthlyFinance("junho", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Julho"
          movement={getMonthlyMovement("julho")}
          ins={getMonthlyFinance("julho", "Entrada")}
          out={getMonthlyFinance("julho", "saida")}
          free={
            getMonthlyFinance("julho", "Entrada") -
            getMonthlyFinance("julho", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Agosto"
          movement={getMonthlyMovement("agosto")}
          ins={getMonthlyFinance("agosto", "Entrada")}
          out={getMonthlyFinance("agosto", "saida")}
          free={
            getMonthlyFinance("agosto", "Entrada") -
            getMonthlyFinance("agosto", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Setembro"
          movement={getMonthlyMovement("setembro")}
          ins={getMonthlyFinance("setembro", "Entrada")}
          out={getMonthlyFinance("setembro", "saida")}
          free={
            getMonthlyFinance("setembro", "Entrada") -
            getMonthlyFinance("setembro", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Outubro"
          movement={getMonthlyMovement("outubro")}
          ins={getMonthlyFinance("outubro", "Entrada")}
          out={getMonthlyFinance("outubro", "saida")}
          free={
            getMonthlyFinance("outubro", "Entrada") -
            getMonthlyFinance("outubro", "saida")
          }
          percentage={0}
        />
        <MonthlyCards
          month="Novembro"
          movement={getMonthlyMovement("novembro")}
          ins={getMonthlyFinance("novembro", "Entrada")}
          out={getMonthlyFinance("novembro", "saida")}
          free={
            getMonthlyFinance("novembro", "Entrada") -
            getMonthlyFinance("novembro", "saida")
          }
          percentage={getPercentage("novembro")}
        />
        <MonthlyCards
          month="Dezembro"
          movement={getMonthlyMovement("dezembro")}
          ins={getMonthlyFinance("dezembro", "Entrada")}
          out={getMonthlyFinance("dezembro", "saida")}
          free={
            getMonthlyFinance("dezembro", "Entrada") -
            getMonthlyFinance("dezembro", "saida")
          }
          percentage={0}
        />
        <div className="Footer-Empurrer"></div>
      </Container>
        <Footer />
    </GeneralContainer>
  );
};

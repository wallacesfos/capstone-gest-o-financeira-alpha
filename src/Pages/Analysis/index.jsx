import React, { useEffect } from "react";
import { Container, Card, Main, Graphics, Text, GeneralContainer } from "./style.js";
import { Header } from "../../Components/Header";
import CardMovement from "../../Components/CardMovement/index.jsx";
import Movement from "../../Assets/Icons/Movement.png";
import Exit from "../../Assets/Icons/Exit.png";
import Deposit from "../../Assets/Icons/Deposit.png";
import Free from "../../Assets/Icons/Free.png";
import Chart from "react-apexcharts";
import Footer from "../../Components/Footer";
import { useContext } from "react";
import { FinanceContext } from "../../Providers/Finances";

export default function Analise() {
  const { handleFinance, finances, exits, enters } = useContext(FinanceContext);

  useEffect(() => {
    handleFinance();
  }, []);

  const entersGraphics = (month) => {
    return enters
      .filter((item) => item.month === month)
      .reduce((a, b) => a + b.value, 0);
  };

  const exitsGraphics = (month) => {
    return exits
      .filter((item) => item.month === month)
      .reduce((a, b) => a + b.value, 0);
  };

  console.log(finances);
  const State = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Janeiro",
          "Feveireiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
      },
      colors: ["#2ECC71", "#E74C3C"],
    },
    series: [
      {
        name: "Entradas 2021",
        data: [
          entersGraphics("janeiro"),
          entersGraphics("fevereiro"),
          entersGraphics("março"),
          entersGraphics("abril"),
          entersGraphics("maio"),
          entersGraphics("junho"),
          entersGraphics("julho"),
          entersGraphics("agosto"),
          entersGraphics("setembro"),
          entersGraphics("outubro"),
          entersGraphics("novembro"),
          entersGraphics("dezembro"),
        ],
      },
      {
        name: "Saídas 2021",
        data: [
          exitsGraphics("janeiro"),
          exitsGraphics("fevereiro"),
          exitsGraphics("março"),
          exitsGraphics("abril"),
          exitsGraphics("maio"),
          exitsGraphics("junho"),
          exitsGraphics("julho"),
          exitsGraphics("agosto"),
          exitsGraphics("setembro"),
          exitsGraphics("outubro"),
          exitsGraphics("novembro"),
          exitsGraphics("dezembro"),
        ],
      },
    ],
  };

  return (
    <GeneralContainer>
      <Header />
      <Container>
        <Text>
          <h3>Análise gráfica de valores do ano de 2021</h3>
          <p className="Moviments-text">Movimentações:</p>
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
        <p className="Graphics-text">Gráficos com entradas e saídas mensais</p>
        <Graphics>
          <Chart
            options={State.options}
            series={State.series}
            type="bar"
            height="100%"
            width="100%"
          />
        </Graphics>
        <div className="Footer-Empurrer"></div>
      </Container>
      <Footer />
    </GeneralContainer>
  );
}

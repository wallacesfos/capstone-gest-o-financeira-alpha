import React from "react";
import { Container } from "./style.js";
import { Header } from "../../Components/Header";
import Calendar from "../../Assets/Calendar.png";
import Anual from "../../Assets/Anual.png";
import Analise from "../../Assets/Analise.png";
import User from "../../Assets/User.png";
import Footer from "../../Components/Footer/index.jsx";
import { useHistory } from "react-router";
export default function Dashboard() {
  const history = useHistory();
  const getMonth = () => {
    const months = [
      "janeiro",
      "fevereiro",
      "marco",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];

    const d = new Date();
    return months[d.getMonth()];
  };
  return (
    <Container>
      <Header />

      <div className="container-cards">
        <h4 className="text-title-center margin">
          Clique na página desejada para visualizar o conteúdo
        </h4>
        <div className="row-cards one">
          <div className="card">
            <div className="card-dashboard-image">
              <img src={Calendar} alt="Calendar" />
            </div>

            <div className="informations-card">
              <h4 className="text-primary">Mensal</h4>
              <p>Veja todas as entradas e saídas de um mês específico</p>
              <div>
                <button
                  className="btn-primary btn-card"
                  onClick={() => history.push(`/monthly/${getMonth()}`)}
                >
                  Acessar
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-dashboard-image">
              <img src={Anual} alt="Anual" />
            </div>

            <div className="informations-card">
              <h4 className="text-primary">Anual</h4>
              <p>Lista com valores detalhados do ano todo</p>
              <div>
                <button
                  className="btn-primary btn-card"
                  onClick={() => history.push("/yearly")}
                >
                  Acessar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row-cards two">
          <div className="card">
            <div className="card-dashboard-image">
              <img src={Analise} alt="Calendar" />
            </div>

            <div className="informations-card">
              <h4 className="text-primary">Análise</h4>
              <p>Veja o gráfico de todas as entradas e saídas</p>
              <div>
                <button
                  className="btn-primary btn-card"
                  onClick={() => history.push("/analysis")}
                >
                  Acessar
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-dashboard-image">
              <img src={User} alt="Calendar" />
            </div>

            <div className="informations-card">
              <h4 className="text-primary">Perfil</h4>
              <p>Veja informações e configurações da sua conta</p>
              <div>
                <button
                  className="btn-primary btn-card"
                  onClick={() => history.push("/user")}
                >
                  Acessar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </Container>
  );
}

import React from 'react'
import {Container, Card, Main, Graphics,Text} from './style.js'
import {Header} from '../../Components/Header'
import CardMovement from '../../Components/CardMovement/index.jsx'
import Movement from '../../Assets/Icons/Movement.png'
import Exit from '../../Assets/Icons/Exit.png'
import Deposit from '../../Assets/Icons/Deposit.png'
import Free from '../../Assets/Icons/Free.png'
import Chart from 'react-apexcharts';
import Footer from '../../Components/Footer';




export default function Analise(){

    const State = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['Janeiro', 'Feveireiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
          },
          colors:['#2ECC71', "#E74C3C"]
        },
        series: [
          {
            name: "Entradas 2021",
            data: [0, 0, 0, 0, 0, 0, 0, 0,0,0,6500,0]
          },
          {
              name: "Saídas 2021",
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3000, 0]
          }
        ]
    };
  

    return(
        <Container>
            <Header />
            <Text>
                <h3>Análise gráfica de valores do ano de 2021</h3>
                <p className="Moviments-text">Movimentações:</p>
            </Text>
            <Main>
                <Card>
                    <CardMovement image={Movement} title="Movimentação" values={9500} type="movement"/>
                </Card>

                <Card>
                    <CardMovement image={Deposit} title="Entrada" values={6500} type="deposit"/>
                </Card>

                <Card>
                    <CardMovement image={Exit} title="Saídas" values={3000} type="exit"/>
                </Card >

                <Card>
                    <CardMovement image={Free} title="Livre" values={3500} type="free"/>
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
            <div className="Footer-Empurrer">
               
            </div>
            <Footer />
        </Container>
    )
}
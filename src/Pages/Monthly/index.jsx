import React, { useEffect } from "react";
import {
  Container,
  ExitContainer,
  FormContainer,
  InfoContainer,
  InputContainer,
  LaunchContainer,
  RecordContainer,
  GeneralContainer,
} from "./styles";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import CardMontlhyMovements from "../../Components/CardMontlhyMovements";
import { useContext } from "react";
import { FinanceContext } from "../../Providers/Finances";
import { Header } from "../../Components/Header";
import { useParams } from "react-router";
import Footer from "../../Components/Footer";

const Monthly = () => {
  const { month } = useParams();
  const { MonthlyData, exits, enters, handleFinance, RemoveMonthly } =
    useContext(FinanceContext);

  const [types, setTypes] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [values, setValues] = useState(0);

  useEffect(() => {
    handleFinance();
  }, []);

  const handleForm = () => {
    const ids = localStorage.getItem("@id_alpha");

    const data = {
      month: month,
      year: 2021,
      type: types,
      value: values,
      category: category,
      description: description,
      userId: Number(ids),
    };

    MonthlyData(data);
  };

  const ingress = enters.filter((item) => item.month === month);
  const outgress = exits.filter((item) => item.month === month);

  const getProgress = (value, total) => {
    return (value / total) * 100;
  };

  return (
    <GeneralContainer>
      <Header />

      <h2 className="text-title text-title-center">
        Entradas referente a {month}
      </h2>
      <Container>
        <LaunchContainer>
          <p className="info">Adicione suas finanças do mês</p>
          <p className="description">Super fácil, preencha o formulário!</p>

          <FormContainer onSubmit={handleForm}>
            <RadioGroup
              row
              aria-label="gender"
              onChange={(e) => setTypes(e.target.value)}
            >
              <FormControlLabel
                value="Entrada"
                control={<Radio />}
                label="entrada"
              />
              <FormControlLabel
                value="saida"
                control={<Radio />}
                label="Saída"
              />
            </RadioGroup>

            <TextField
              inputProps={{ maxLength: 12 }}
              className="inputs-register month"
              label="Categoria"
              variant="standard"
              onChange={(e) => setCategory(e.target.value)}
            ></TextField>
            <TextField
              inputProps={{ maxLength: 50 }}
              className="inputs-register month"
              label="Descrição"
              variant="standard"
              onChange={(e) => setDescription(e.target.value)}
            ></TextField>
            <TextField
              className="inputs-register month"
              label="Valor"
              variant="standard"
              type="number"
              onChange={(e) => setValues(e.target.valueAsNumber)}
            ></TextField>
            <button onClick={handleForm}>Adicionar</button>
          </FormContainer>
        </LaunchContainer>

        <RecordContainer>
          <h1 className="hidden">Valores referentes ao mês de {month}</h1>
          <div className="inputs-enters-exit">
            <p className="text-primary">Entradas</p>

            <InputContainer>
              {ingress.map((item, index) => {
                const progress = getProgress(
                  item.value,
                  ingress.reduce((a, b) => a + b.value, 0)
                ).toFixed(2);

                return (
                  <CardMontlhyMovements
                    key={index}
                    category={item.category}
                    description={item.description}
                    value={item.value}
                    id={item.id}
                    remove={RemoveMonthly}
                    progress={Number(progress)}
                    isInput
                  />
                );
              })}
              <hr />
              <InfoContainer>
                <p className="infoRecord">Valor de entrada mensal</p>
                <p>
                  {ingress
                    .reduce((a, b) => a + b.value, 0)
                    .toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </InfoContainer>
              <InfoContainer>
                <p className="infoRecord">Quantidade de entrada </p>
                <p>{ingress.length}</p>
              </InfoContainer>
            </InputContainer>
          </div>
          <div className="inputs-enters-exit">
            <p className="text-primary">Saídas</p>
            <ExitContainer>
              {outgress.map((item, index) => {
                const progress = getProgress(
                  item.value,
                  outgress.reduce((a, b) => a + b.value, 0)
                ).toFixed(2);

                return (
                  <CardMontlhyMovements
                    key={index}
                    category={item.category}
                    description={item.description}
                    value={item.value}
                    id={item.id}
                    remove={RemoveMonthly}
                    progress={Number(progress)}
                  />
                );
              })}
              <hr />
              <InfoContainer>
                <p className="infoRecord">Valor de saída mensal</p>
                <p>
                  {outgress
                    .reduce((a, b) => a + b.value, 0)
                    .toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </InfoContainer>
              <InfoContainer>
                <p className="infoRecord">Valor de saída mensal</p>
                <p>{outgress.length}</p>
              </InfoContainer>
            </ExitContainer>
          </div>
        </RecordContainer>
      </Container>
      <Footer />
    </GeneralContainer>
  );
};

export default Monthly;

import {
  Container,
  ExitContainer,
  FormContainer,
  InfoContainer,
  InputContainer,
  LaunchContainer,
  RecordContainer,
} from "./styles";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useState } from "react";

const Monthly = ({ month = "November" }) => {
  const [input, setInput] = useState([]);
  const [exit, setExit] = useState([]);

  return (
    <Container>
      <LaunchContainer>
        <p className="info">Adicione suas finanças do mês</p>
        <p className="description">Super fáciel, preencha o formulário</p>

        <FormContainer>
          <RadioGroup row aria-label="gender">
            <FormControlLabel
              value="Entrada"
              control={<Radio />}
              label="Entrada"
            />
            <FormControlLabel value="Saída" control={<Radio />} label="Saída" />
          </RadioGroup>

          <TextField label="Categoria" variant="standard"></TextField>
          <TextField label="Descrição" variant="standard"></TextField>
          <TextField label="Valor" variant="standard"></TextField>
          <button>Adicionar</button>
        </FormContainer>
      </LaunchContainer>
      <RecordContainer>
        <h1 className="hidden">Valores referentes ao mês de {month}</h1>

        <InputContainer>
          <p>list input</p>
          <hr />
          <InfoContainer>
            <p className="infoRecord">Valor de enttrada mensal</p>
            <p>R$ 50.000,00</p>
          </InfoContainer>
          <InfoContainer>
            <p className="infoRecord">Quantidade de entrada </p>
            <p>1</p>
          </InfoContainer>
        </InputContainer>
        <ExitContainer>
          <p>list exit</p>
          <hr />
          <InfoContainer>
            <p className="infoRecord">Valor de saída mensal</p>
            <p>R$ 3.000,00</p>
          </InfoContainer>
          <InfoContainer>
            <p className="infoRecord">Valor de saída mensal</p>
            <p>1</p>
          </InfoContainer>
        </ExitContainer>
      </RecordContainer>
    </Container>
  );
};

export default Monthly;

import {
  Button,
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
    <>
      <div>
        <h1>Valores referentes ao mês de {month}</h1>
        <div>
          <p>list input</p>
          <hr />
          <p>Valor de enttrada mensal R$ 50.000,00 </p>
          <p>Quantidade de entrada 1</p>
        </div>
        <div>
          <p>list exit</p>
          <hr />
          <p>Valor de saída mensal R$ 50.000,00 </p>
          <p>Quantidade de saída 1</p>
        </div>
      </div>
      <div>
        <p>Adicione suas finanças do mês</p>
        <p>Super fáciel, preencha o formulário</p>

        <form>
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
          <Button variant="contained">Adicionar</Button>
        </form>
      </div>
    </>
  );
};

export default Monthly;

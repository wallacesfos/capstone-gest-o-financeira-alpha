import React from "react";
import { Container, ListContainer, LogoContainer } from "./styles";
import LogoFooter from "../../Assets/logo_footer.png";
import MensalIcon from "../../Assets/Icons/Mensal.png";
import AnualIcon from "../../Assets/Icons/Anual.png";
import AnalysisIcon from "../../Assets/Icons/Analysis.png";
import FinancesIcon from "../../Assets/Icons/Finances.png";
import {useHistory} from 'react-router-dom';

const Footer = () => {
  const history = useHistory()

  return (
    <Container>
      <LogoContainer className="hidden">
        <img src={LogoFooter} alt="logo-Alpha" />
        <p>ALPHA TECNOLOGIA E FINANÇAS</p>
      </LogoContainer>
      <ListContainer className="hiddenList">
        <li onClick={() => history.push("/finance")} className="pointer">
           <img src={FinancesIcon} alt="Icon mensal" className="icon"/> 
          <p className="hidden">Finanças</p>
        </li>
        <li onClick={() => history.push("/analysis")} className="pointer">
          <img src={AnalysisIcon} alt="Icon mensal" className="icon"/> 
          <p className="hidden">Análise</p>
        </li>
        <li onClick={() => history.push("/monthly/novembro")} className="pointer">
          <img src={MensalIcon} alt="Icon mensal" className="icon"/>
          <p className="hidden">Mensal</p>
        </li>
        <li onClick={() => history.push("/yearly")} className="pointer">
        <img src={AnualIcon} alt="Icon mensal" className="icon"/>
          <p className="hidden">Anual</p>
        </li>
      </ListContainer>
      <p className="hidden">Termos de uso</p>
    </Container>
  );
};

export default Footer;

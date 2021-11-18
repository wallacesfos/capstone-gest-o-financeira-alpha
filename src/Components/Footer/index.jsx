import React from "react";
import { Container, ListContainer, LogoContainer } from "./styles";
import LogoFooter from "../../Assets/logo_footer.png";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { RiBookletLine, RiCalendarLine } from "react-icons/ri";
import MensalIcon from "../../Assets/Icons/Mensal.png";
import AnualIcon from "../../Assets/Icons/Anual.png";
import AnalysisIcon from "../../Assets/Icons/Analysis.png";
import FinancesIcon from "../../Assets/Icons/Finances.png";

const Footer = () => {
  return (
    <Container>
      <LogoContainer className="hidden">
        <img src={LogoFooter} alt="logo-Alpha" />
        <p>ALPHA TECNOLOGIA E FINANÇAS</p>
      </LogoContainer>
      <ListContainer className="hiddenList">
        <li>
           <img src={FinancesIcon} alt="Icon mensal" className="icon"/> 
          <p className="hidden">Finanças</p>
        </li>
        <li>
          <img src={AnalysisIcon} alt="Icon mensal" className="icon"/> 
          <p className="hidden">Análise</p>
        </li>
        <li>
          <img src={MensalIcon} alt="Icon mensal" className="icon"/>
          <p className="hidden">Mensal</p>
        </li>
        <li>
        <img src={AnualIcon} alt="Icon mensal" className="icon"/>
          <p className="hidden">Anual</p>
        </li>
      </ListContainer>
      <p className="hidden">Termos de uso</p>
    </Container>
  );
};

export default Footer;

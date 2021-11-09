import { Container, ListContainer, LogoContainer } from "./styles";
import LogoFooter from "../../assets/logo_footer.png";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { RiBookletLine, RiCalendarLine } from "react-icons/ri";

const Footer = () => {
  return (
    <Container>
      <LogoContainer className="hidden">
        <img src={LogoFooter} />
        <p>ALPHA TECNOLOGIA E FINANÇAS</p>
      </LogoContainer>
      <ListContainer className="hiddenList">
        <li>
          <FaMoneyBillWave className="icon" />
          <p className="hidden">Finanças</p>
        </li>
        <li>
          <IoMdAnalytics className="icon" />
          <p className="hidden">Análise</p>
        </li>
        <li>
          <RiBookletLine className="icon" />
          <p className="hidden">Mensal</p>
        </li>
        <li>
          <RiCalendarLine className="icon" />
          <p className="hidden">Anual</p>
        </li>
      </ListContainer>
      <p className="hidden">Termos de uso</p>
    </Container>
  );
};

export default Footer;

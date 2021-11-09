import { Container, ListContainer, LogoContainer } from "./styles";
import LogoFooter from "../../assets/logo_footer.png";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { RiBookletLine, RiCalendarLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <div className="hidden">
        <img src={LogoFooter} />
        <p>ALPHA TECNOLOGIA E FINANÇAS</p>
      </div>
      <ul className="hiddenList">
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
      </ul>
      <p className="hidden">Termos de uso</p>
    </div>
  );
};

export default Footer;

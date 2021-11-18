import React, { useState, useContext } from "react";
import { Navbar } from "./styles.js";
import Logo from "../../Assets/Alpha.png";
import MensalIcon from "../../Assets/Icons/Mensal.png";
import AnualIcon from "../../Assets/Icons/Anual.png";
import AnalysisIcon from "../../Assets/Icons/Analysis.png";
import FinancesIcon from "../../Assets/Icons/Finances.png";
import LampIcon from "../../Assets/Icons/Lamp.png";
import PersonNav from "../../Assets/Icons/PersonNav.png";
import Hamburguer from "../../Assets/Icons/Hamburguer.png";
import { useHistory } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { AuthContext } from "../../Providers/Auth";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const history = useHistory();
  const { Logout } = useContext(AuthContext);
  const Images = localStorage.getItem('@image_alpha')


  if(!localStorage.getItem('@token_alpha')){
    history.push('/')
  }

  return (
    <Navbar>
      <div className="logo" style={{ cursor: "pointer" }}>
        <img
          src={Logo}
          alt="Alpha logo"
          className="Logo-Header"
          onClick={() => history.push("/dashboard")}
        />
      </div>

      <div className="navbar-links">
        <ul>
          <li>
            <div className="dropdown-perfil">
              <img
                src={MensalIcon}
                alt="Icon mensal"
                style={{ height: "20px", width: "20px" }}
              />{" "}
              Mensal
              <div
                className="dropdown-content-perfil"
                style={{ borderRadius: "20px", border: "1px solid black" }}
              >
                <ul className="dropdown-content-list-perfil">
                  <li onClick={() => history.push("/monthly/janeiro")}>
                    Janeiro
                  </li>
                  <li onClick={() => history.push("/monthly/fevereiro")}>
                    Fevereiro
                  </li>
                  <li onClick={() => history.push("/monthly/março")}>Março</li>
                  <li onClick={() => history.push("/monthly/abril")}>Abril</li>
                  <li onClick={() => history.push("/monthly/maio")}>Maio</li>
                  <li onClick={() => history.push("/monthly/junho")}>Junho</li>
                  <li onClick={() => history.push("/monthly/julho")}>Julho</li>
                  <li onClick={() => history.push("/monthly/agosto")}>
                    Agosto
                  </li>
                  <li onClick={() => history.push("/monthly/setembro")}>
                    Setembro
                  </li>
                  <li onClick={() => history.push("/monthly/outubro")}>
                    Outubro
                  </li>
                  <li onClick={() => history.push("/monthly/novembro")}>
                    Novembro
                  </li>
                  <li onClick={() => history.push("/monthly/dezembro")}>
                    Dezembro
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li onClick={() => history.push("/yearly")}>
            <img src={AnualIcon} alt="Icon mensal" /> Anual
          </li>
          <li onClick={() => history.push("/analysis")}>
            <img src={AnalysisIcon} alt="Icon mensal" /> Análise
          </li>
          <li onClick={() => history.push("/finance")}>
            <img src={FinancesIcon} alt="Icon mensal" /> Finanças
          </li>
        </ul>
      </div>

      <div className="navbar-final">
        <img src={LampIcon} alt="Lampada" />
        <p>Olá, {`${localStorage.getItem("@name_alpha") || ""}`}!</p>
        <div className="dropdown-perfil">
          <img src={Images || PersonNav} alt="Person" className="image-profile navbar-image"/>
          <div className="dropdown-content-perfil">
            <ul className="dropdown-content-list-perfil">
              <li onClick={() => history.push("/user")}>Perfil</li>
              <li
                onClick={() => {
                  Logout();
                  history.push("/");
                }}
              >
                Sair
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hamburguer-menu">
        <img src={Hamburguer} alt="hamburguer" onClick={() => setMenu(!menu)} />
      </div>

      {menu && (
        <div className="Menu-Mobile">
          <div className="logo-mobile">
            <img src={Logo} alt="Alpha logo" className="Logo-Header-mobile" />
            <p className="close" onClick={() => setMenu(!menu)}>
              X
            </p>
          </div>
          <ul>
            <List
              sx={{ width: "100%", maxWidth: 360 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText className="dropMobile" primary="Mensal" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                className="teste"
              >
                <List component="div" disablePadding>
                  <ul className="ulMobile">
                    <li onClick={() => history.push("/monthly/janeiro")}>
                      Janeiro
                    </li>
                    <li onClick={() => history.push("/monthly/fevereiro")}>
                      Fevereiro
                    </li>
                    <li onClick={() => history.push("/monthly/março")}>
                      Março
                    </li>
                    <li onClick={() => history.push("/monthly/abril")}>
                      Abril
                    </li>
                    <li onClick={() => history.push("/monthly/maio")}>Maio</li>
                    <li onClick={() => history.push("/monthly/junho")}>
                      Junho
                    </li>
                    <li onClick={() => history.push("/monthly/julho")}>
                      Julho
                    </li>
                    <li onClick={() => history.push("/monthly/agosto")}>
                      Agosto
                    </li>
                    <li onClick={() => history.push("/monthly/setembro")}>
                      Setembro
                    </li>
                    <li onClick={() => history.push("/monthly/outubro")}>
                      Outubro
                    </li>
                    <li onClick={() => history.push("/monthly/novembro")}>
                      Novembro
                    </li>
                    <li onClick={() => history.push("/monthly/dezembro")}>
                      Dezembro
                    </li>
                  </ul>
                </List>
              </Collapse>
            </List>
            <li className="dashMobile" onClick={() => history.push("/yearly")}>
              Anual
            </li>
            <li
              className="dashMobile"
              onClick={() => history.push("/analysis")}
            >
              Análise
            </li>
            <li className="dashMobile" onClick={() => history.push("/finance")}>
              Finanças
            </li>
            <li className="dashMobile" onClick={() => history.push("/user")}>
              Usuário
            </li>
            <li
              className="dashMobile"
              onClick={() => {
                Logout();
                history.push("/");
              }}
            >
              Sair
            </li>
          </ul>
        </div>
      )}
    </Navbar>
  );
};

import React, { useState, useContext } from 'react'
import {Navbar} from './styles.js'
import Logo from '../../Assets/Alpha.png'
import MensalIcon from '../../Assets/Icons/Mensal.png'
import AnualIcon from '../../Assets/Icons/Anual.png'
import AnalysisIcon from '../../Assets/Icons/Analysis.png'
import FinancesIcon from '../../Assets/Icons/Finances.png'
import LampIcon from '../../Assets/Icons/Lamp.png'
import PersonNav from '../../Assets/Icons/PersonNav.png'
import Hamburguer from '../../Assets/Icons/Hamburguer.png'
import { useHistory } from 'react-router-dom'
import { AuthContext } from "../../Providers/Auth";


export const Header = () => {



  const { Logout } = useContext(AuthContext);

  const [menu, setMenu] = useState(false)
  const history = useHistory()

  return(
    <Navbar>
      <div className="logo">
        <img src={Logo} alt="Alpha logo" className="Logo-Header"/>
      </div>

      <div className="navbar-links">
        <ul>
          <li className="dropdown">
            <img src={MensalIcon} alt="Icon mensal" />
            <span>Mensal</span>
            <div class="dropdown-content">
              <ul className="dropdown-content-list">
                <li onClick={() => history.push('/monthly/janeiro')}>Janeiro</li>
                <li onClick={() => history.push('/monthly/fevereiro')}>Fevereiro</li>
                <li onClick={() => history.push('/monthly/março')}>Março</li>
                <li onClick={() => history.push('/monthly/abril')}>Abril</li>
                <li onClick={() => history.push('/monthly/maio')}>Maio</li>
                <li onClick={() => history.push('/monthly/junho')}>Junho</li>
                <li onClick={() => history.push('/monthly/julho')}>Julho</li>
                <li onClick={() => history.push('/monthly/agosto')}>Agosto</li>
                <li onClick={() => history.push('/monthly/setembro')}>Setembro</li>
                <li onClick={() => history.push('/monthly/outubro')}>Outubro</li>
                <li onClick={() => history.push('/monthly/novembro')}>Novembro</li>
                <li onClick={() => history.push('/monthly/dezembro')}>Dezembro</li>
              </ul>
            </div>
          </li>
          <li onClick={() => history.push('/yearly')}><img src={AnualIcon} alt="Icon mensal" /> Anual</li>
          <li onClick={() => history.push('/analysis')}><img src={AnalysisIcon} alt="Icon mensal" /> Análise</li>
          <li  onClick={() => history.push('/finance')}><img src={FinancesIcon} alt="Icon mensal" /> Financias</li>
        </ul>
      </div>

      <div className="navbar-final">
        <img src={LampIcon} alt="Lampada" />
        <p>Olá, User!</p>
        <div className="dropdown-perfil" >
          <img src={PersonNav} alt="Person" />
          <div className="dropdown-content-perfil">
            <ul className="dropdown-content-list-perfil">
              <li onClick={() => history.push('/user')}>Perfil</li>
              <li onClick={() => {
                Logout()
                history.push("/");
              }}>Sair</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hamburguer-menu">
        <img src={Hamburguer} alt="hamburguer" onClick={() => setMenu(!menu)}/>+
      </div>

      {menu && (
        <div className="Menu-Mobile">
          <div className="logo-mobile">
            <img src={Logo} alt="Alpha logo" className="Logo-Header-mobile"/>
            <p className="close" onClick={() => setMenu(!menu)}>X</p>
          </div>
          <ul>
            <li onClick={() => history.push('/monthly')}>Mensal</li>
            <li onClick={() => history.push('/yearly')}>Anual</li>
            <li onClick={() => history.push('/analysis')}> Análise</li>
            <li onClick={() => history.push('/finance')}>Financias</li>
          </ul>
        </div>
        )}

        
    </Navbar>
  )
};

import React, { useState } from 'react'
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


export const Header = () => {

  const [menu, setMenu] = useState(false)
  
  const history = useHistory()

  return(
    <Navbar>
      <div className="logo">
        <img src={Logo} alt="Alpha logo" className="Logo-Header"/>
      </div>

      <div className="navbar-links">
        <ul>
          <li onClick={() => history.push('/monthly')}><img src={MensalIcon} alt="Icon mensal" /> Mensal</li>
          <li onClick={() => history.push('/yearly')}><img src={AnualIcon} alt="Icon mensal" /> Anual</li>
          <li onClick={() => history.push('/analysis')}><img src={AnalysisIcon} alt="Icon mensal" /> Análise</li>
          <li  onClick={() => history.push('/finance')}><img src={FinancesIcon} alt="Icon mensal" /> Financias</li>
        </ul>
      </div>

      <div className="navbar-final">
        <img src={LampIcon} alt="Lampada" />
        <p>Olá, User!</p>
        <img src={PersonNav} alt="Person" />
      </div>

      <div className="hamburguer-menu">
        <img src={Hamburguer} alt="hamburguer" onClick={() => setMenu(!menu)}/>
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

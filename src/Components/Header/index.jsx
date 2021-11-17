import React from 'react'
import './style.css'


export const Header = () => {

  

  return(
    <nav id="navbar_main" class="mobile-offcanvas navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="offcanvas-header">  
          <button class="btn-close float-end"></button>
        </div>
        <a class="navbar-brand" href="#">Brand</a>
        <ul class="navbar-nav">
            <li class="nav-item active"> <a class="nav-link" href="#">Home </a> </li>
            <li class="nav-item"><a class="nav-link" href="#"> About </a></li>
            <li class="nav-item"><a class="nav-link" href="#"> Services </a></li>
        </ul>
      </div>
    </nav>

  )
};

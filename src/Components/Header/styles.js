import styled from "styled-components";


export const Navbar = styled.nav`
  width: 100%;
  background-color: #222A39;
  height: 120px;
  display: flex;
  justify-content: space-between;

  div{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Logo-Header{
    height: 100%;
  }

  .navbar-links ul{
    display: flex;
    list-style: none
  }

  .navbar-links li{
    margin-left: 30px;
    cursor: pointer;
    @media (max-width: 768px){
      display: none;
    } 
  }

  .navbar-final{
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
    
    @media (max-width: 768px){
      display: none;
    } 
  }

  .hamburguer-menu{
    cursor: pointer;
    @media (min-width: 769px){
      display: none;
    }
  }

  .Menu-Mobile{
    background-color: #222A39;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ul{
      list-style: none;
      width: 100%;
      padding: 0;
    }

    ul li{
      font-size: 35px;
      margin-bottom: 15px;
      border-bottom: 1px solid #C1C1C1;
      width: 100%;
      text-align: center;
      cursor: pointer;
    }

    .logo-mobile{
      height: 150px;
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #c1c1c1;
      align-items: center;
    }

    .close{
      color: red;
      font-size: 30px;
      margin-right: 20px;
      cursor: pointer;
    }

    .Logo-Header-mobile{
      height: 120px;
    }
    @media(min-width: 769px){
      display: none;
    }

  }


`

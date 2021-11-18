import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  min-width: 100%;
  background-color: #222a39;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;

  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Logo-Header {
    height: 100%;
  }

  .navbar-links ul {
    margin: 0 auto;
    display: flex;
    list-style: none;
  }

  .navbar-links li {
    margin-left: 20px;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .navbar-final {
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 25px;

    p {
      margin-top: 15px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .hamburguer-menu {
    cursor: pointer;
    @media (min-width: 769px) {
      display: none;
    }
  }

  .Menu-Mobile {
    background-color: #222a39;
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: auto;

    ul {
      list-style: none;
      width: 100%;
      padding: 0;
    }

    ul .MuiCollapse-wrapperInner div {
      border-bottom: none;
      margin-bottom: 0;
    }

    .dashMobile,
    .dropMobile span {
      font-size: 20px;
      padding-left: 10px;
      margin-bottom: 15px;
      border-bottom: 1px solid #c1c1c1;
      width: 100%;
      text-align: start;
      cursor: pointer;
    }

    .dropMobile span {
      border-bottom: none;
    }

    .ulMobile {
      font-size: 20px;
      padding-left: 10px;
      margin-bottom: 15px;
      width: 100%;
      text-align: start;
      cursor: pointer;
    }

    .ulMobile li {
      font-size: 16px;
      margin-bottom: 15px;
      width: 100%;
      cursor: pointer;
      padding-left: 30px;
    }

    .logo-mobile {
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #c1c1c1;
      align-items: center;

      img {
        height: 100%;
      }
    }

    .close {
      color: red;
      font-size: 20px;
      margin-right: 20px;
      cursor: pointer;
    }

    .Logo-Header-mobile {
      height: 120px;
    }
    @media (min-width: 769px) {
      display: none;
    }
  }

  .MuiListItemText-primary {
    font-size: 35px;
  }
  .MuiList-root {
    border-bottom: 1px solid #c1c1c1;
    padding: 0;
    min-width: 100vw;
    margin: 15px 0;
  }
  .MuiListItemButton-root {
    padding: 0;
  }
  .MuiListItemText-root {
    justify-content: flex-start;
    margin: 0;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #222a39;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    height: auto;
    min-height: 50px;
    cursor: default;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .dropdown-content-list li {
    margin: 0;
    cursor: pointer;
  }

  .dropdown-perfil {
    position: relative;
    display: inline-block;
    height: auto;
  }

  .dropdown-perfil img {
    height: 50px;
    cursor: pointer;
  }

  .dropdown-content-perfil {
    display: none;
    position: absolute;
    background-color: #222a39;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    height: auto;
    min-height: 50px;
    cursor: default;
    transform: translateX(-50%);
  }

  .dropdown-perfil:hover .dropdown-content-perfil {
    display: block;
  }

  .dropdown-content-list-perfil {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style: none;
  }

  .dropdown-content-list-perfil li {
    margin: 0;
    cursor: pointer;
  }
`;

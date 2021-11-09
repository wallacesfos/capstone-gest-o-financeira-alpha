import styled from "styled-components";

export const HeaderContainer = styled.section`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1199;

  .MuiToolbar-root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .MuiAppBar-colorPrimary {
    background-color: var(--background);
  }


  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--black);
  }

  h6 {
    cursor: pointer;
    font-size: 1rem;
    color: var(--black);
  }

  @media (min-width: 425px) {
    h6 {
      margin-left: 1.5rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 880px) {
    .MuiButton-containedPrimary {
      display: block;
    }

    h6 {
      margin-left: 3rem;
    }
  }

  @media (min-width: 1024px) {
    .MenuMobile {
      display: none;
    }

    h6 {
      margin-left: 7rem;
    }
  }

  @media (min-width: 1440px) {
    h6 {
      margin-left: 12rem;
    }
  }

  @media (min-width: 2000px) {
    h6 {
      margin-left: 15rem;
    }
  }
`;

export const LinksContainer = styled.div`
  width: 45vw;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 900px) {
    display: flex;
  }
`;


export const UserIconContainer = styled.div`
  width: 50vw;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;

  p{
      margin-right: 16px;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;
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
    min-height: 85px;
  }

  .MuiAppBar-colorPrimary {
    background-color: var(--darkDesaturatedBlue);
  }

  img {
    width: 4.5rem;
    height: 4.5rem;
    color: var(--gray);
  }

  .icon {
    font-size: 20px;
    margin: 0 7px;
    color: var(--gray);
  }

  .icon-menu {
      width: 2.6rem;
      height: 2.6rem;
    }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    cursor: pointer;
    font-size: 1rem;
    color: var(--gray);
  }

  @media (min-width: 900px) {
    .MenuMobile {
      display: none;
    }

    .icon-menu {
      width: 2.6rem;
      height: 2.6rem;
    }

    h6 {
      margin-left: 7rem;
    }
  }

  @media (min-width: 1440px) {
    svg {
      width: 2.6rem;
      height: 2.6rem;
    }

    

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

  @media (min-width: 910px) {
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

  svg {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--gray);
  }

  p {
    margin-right: 16px;
  }

  @media (min-width: 900px) {
    display: flex;
  }
`;

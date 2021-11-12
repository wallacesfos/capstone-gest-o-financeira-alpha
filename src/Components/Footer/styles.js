import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 15px;
  background: var(--darkDesaturatedBlue);

  .icon {
    font-size: 40px;
    margin: 10px 0;
  }

  .hidden {
    display: none;
  }

  @media (min-width: 700px) {
    justify-content: space-between;
    padding: 10px 20px;

    .hidden {
      display: flex;
    }

    .hiddenList {
      display: none;
    }
  }

  @media (min-width: 900px) {
    justify-content: space-around;
    padding: 10px 0px;

    .hiddenList {
      display: flex;
    }

    .icon {
      font-size: 25px;
      margin: 0 5px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;

  img {
    width: 70px;
  }

  p {
    text-align: center;
  }
`;

export const ListContainer = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 900px) {
    width: 400px;
  }

  @media (min-width: 1200px) {
    width: 500px;
    justify-content: space-between;
  }
`;

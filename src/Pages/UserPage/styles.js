import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  text-align: center;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  min-width: 315px;
  min-height: 205px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--darkDesaturatedBlue);
  text-align: center;
  border-radius: 15px;

  img {
    width: 5.3rem;
    height: 5.3rem;
    margin-top: 35px;
  }

  h1 {
    margin-top: 15px;
    font-size: 28px;
  }

  h3 {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 200;
  }

  @media (min-width: 700px) {
    min-width: 95%;
    max-height: 100%;
    margin: 25px 5px auto;
  }

  @media (min-width: 1200px) {
    min-width: 95%;
    min-height: 355px;
    margin: 15px 5px auto;

    svg {
      width: 7rem;
      height: 7rem;
      margin-top: 40px;
    }

    h1 {
      margin-top: 15px;
      font-size: 34px;
    }

    h3 {
      margin-top: 25px;
      font-size: 17px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  min-width: 315px;
  width: 30%;
  min-height: 155px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--darkDesaturatedBlue);
  text-align: center;
  border-radius: 15px;

  h2 {
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
  }

  .MuiInput-underline {
    color: var(--white);
  }

  input {
    margin-top: 10px;
    color: var(--white);
    text-align: center;
  }

  .MuiButton-root {
    margin-top: 20px;
    background-color: var(--cyan);
    border-radius: 20px;
  }

  button:hover {
    background-color: var(--white);
    color: var(--black);
  }

  @media (min-width: 700px) {
    min-width: 31%;
    max-height: 100%;
    margin: 25px 5px auto;
  }

  @media (min-width: 1200px) {
    min-width: 250px;
    min-height: 200px;
    margin: 25px 15px auto;

    h2 {
      margin-top: 30px;
    }

    input {
      margin-top: 20px;
    }
  }
`;

export const InfoDiv = styled.div`
  min-width: 85%;
  display: flex;
  margin: auto;
  background-color: var(--background);

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    min-width: 390px;
    min-height: 355px;
    margin: 0px 15px auto;
  }
`;

export const InfoDivs = styled.div`
  min-width: 85%;
  display: flex;
  margin: auto;
  background-color: var(--background);

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    min-width: 30vw;
    min-height: 355px;
    margin: 0px 15px auto;
    width: 100%;
    justify-content: space-around;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  .image-profile{
    height: 80px;
    border-radius: 100px;
  }
`

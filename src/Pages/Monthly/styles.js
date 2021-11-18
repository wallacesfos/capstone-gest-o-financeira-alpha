import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .hidden {
    display: none;
  }
  @media (min-width: 700px) {
    flex-direction: row-reverse;
  }
  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const LaunchContainer = styled.div`
  width: 80%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: var(--darkDesaturatedBlue);
  border-radius: 8px;
  padding: 15px 10px;
  margin-bottom: 60px;

  .info {
    font-size: 22px;
    text-align: center;
    color: var(--white);
  }
  .description {
    color: var(--cyan);
    font-size: 16px;
    margin-bottom: 50px;
  }
  @media (min-width: 550px) {
    max-width: 500px;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  min-width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  button {
    width: 90%;
    background: var(--cyan);
    border: none;
    font-size: 26px;
    border-radius: 8px;
    padding: 10px 0;
    color: var(--white);
    font-weight: 500;
  }
`;
export const RecordContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    width: 60%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
`;
export const InputContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--darkDesaturatedBlue);
  border-radius: 8px;
  padding: 15px 0px;
  margin-bottom: 20px;

  hr {
    width: 80%;
    margin: 20px 0;
  }
  /* @media (min-width: 450px) {
    width: 80%;
  } */
  @media (min-width: 1200px) {
    width: 380px;
    margin-right: 20px;
  }
`;
export const ExitContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--darkDesaturatedBlue);
  border-radius: 8px;
  padding: 10px 0px;
  margin-bottom: 15px;

  hr {
    width: 80%;
    margin: 20px 0;
  }
  @media (min-width: 700px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    width: 380px;
  }
`;
export const InfoContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  .infoRecord {
    width: 60%;
    text-align: start;
  }
`;

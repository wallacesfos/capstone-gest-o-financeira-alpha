import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .hidden {
    display: none;
  }
`;

export const LaunchContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: var(--darkDesaturatedBlue);
  border-radius: 8px;
  padding: 15px 0;
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
`;

export const FormContainer = styled.form`
  display: flex;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--darkDesaturatedBlue);
  border-radius: 8px;
  padding: 15px 0px;
  margin-bottom: 60px;

  hr {
    width: 80%;
    margin: 20px 0;
  }
`;

export const ExitContainer = styled.div`
  width: 90%;
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

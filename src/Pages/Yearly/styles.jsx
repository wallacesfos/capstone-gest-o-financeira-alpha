import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 24%;
  height: auto;

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 10px;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.div`
  padding: 50px 10px 0 10px;
  margin-bottom: 20px;
  font-family: Arial;
  width: 95%;
  margin: 0 auto;
  
  .Moviments-text {
    color: #3498db;
  }

  h3 {
    font-family: Arial;
  }
`;

export const CategoryDiv = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-around;
  padding: 0 calc(1.5rem / 2);
  > p {
    height: 100%;
    width: 202px;
    color: #3498db;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

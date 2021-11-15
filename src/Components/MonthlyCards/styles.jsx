import styled from "styled-components";

export const MonthlyCardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 calc(1.5rem / 2);
  justify-content: space-around;
  @media (max-width: 1024px) {
    background-color: #222a39;
    width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    padding: 10px;
    flex-wrap: wrap;
    min-height: 80px;
  }
`;

export const DataContainer = styled.div`
  height: 100%;
  width: 202px;
`;

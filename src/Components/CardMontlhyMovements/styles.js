import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;

  .info {
    width: 85%;
  }
`;

export const InconContainer = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  background: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    font-size: 10px;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--red);
    width: 17px;
    height: 17px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .category {
    font-size: 18px;
  }

  .description {
    font-size: 12px;
  }

  .value {
    font-size: 16px;
  }
`;

import styled from "styled-components"

export const GeneralContainer = styled.div`
    
    @media (min-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
         min-height: 100vh;
    }
`;

export const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 60px;


`;

export const DevContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: var(--darkDesaturatedBlue);
    width: 300px;
    padding: 15px;
    border-radius: 8px;
    margin: 10px;
    margin-bottom: 20px;
`

export const DevImg = styled.img`
    width: 200px;
    border-radius: 100%;
    margin-bottom: 20px;
`

export const LinkedIn = styled.img`

    width: 50px;
    border-radius: 100%;
    margin-right: 10px;
`;

export const GitHub = styled.img`
    width: 50px;
    border-radius: 100%;
`

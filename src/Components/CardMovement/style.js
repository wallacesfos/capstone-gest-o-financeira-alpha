import styled from "styled-components";


export const Container = styled.div`
    background-color: #222A39;
    width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    padding: 10px;

    @media(max-width: 768px){
        flex-direction: column;
    }
`

export const Separator = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    @media(max-width: 768px){
        flex-direction: column;
    }
`

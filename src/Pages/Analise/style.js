import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .Graphics-text{
        color: #3498DB;
        margin: 50px 0 20px 0;
        width: 100%;
        padding-left: 5%;
    }
`

export const Card = styled.div`
    width: 24%;
    height: auto;
    
    @media (max-width: 768px){
       width: 95%;
       margin-bottom: 10px;
    }
`

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`

export const Graphics = styled.section`
    margin: 10px 0 30px;
    height: 500px;
    width: 90%;
    background-color: #222A39;
    border: 40px solid #222A39;
    border-radius: 20px;

    
`

export const Text = styled.div`
    padding: 110px 10px 0 10px;
    margin-bottom: 20px;
    font-family: Arial;
    width: 100%;
    padding-left: 5%;
    .Moviments-text{
        color: #3498DB;
    }

    h3{
        font-family: Arial;
    }
`
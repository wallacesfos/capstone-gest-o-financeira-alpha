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
    flex-wrap: wrap;
    min-height: 80px;

    

    @media(max-width: 768px){
        flex-direction: column;
        flex-wrap: nowrap;
    }
`

export const Separator = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    img{
        margin-right: 10px;
    }

    @media(max-width: 768px){
        flex-direction: column;
        flex-wrap: nowrap;

    }


`

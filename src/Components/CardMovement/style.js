import styled from "styled-components";


export const Container = styled.div`
    background-color: #222A39;
    width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    padding: 3px;
    flex-wrap: nowrap;
    min-height: 80px;    

    img {
        margin-right: 5px;
    }

    @media(max-width: 768px){
        flex-direction: column;


        img {
        margin: 5px 0px;
    }
    }
`

export const Separator = styled.div` 
    width: 80%;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: space-between;
   
    p {
        text-align: center;

    }

    .title {
        margin-right: 5px;
    }

    @media(max-width: 768px){
        flex-direction: column;
    }


`

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    min-height: 100vh;

    @media (max-width: 768px){
        justify-content: default;
    }

    .container-cards{
        margin-top: 10px;

        @media (max-width: 768px){
            display: flex;
            flex-direction: column;
        }
    }

    .card{
        width: 48%;
        height: 200px;
        background-color: #222A39;
        border-radius: 15px;
        -webkit-box-shadow: 5px 16px 30px 6px rgba(0,0,0,0.45); 
        box-shadow: 5px 16px 30px 6px rgba(0,0,0,0.45);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        @media (max-width: 768px){
            width: 90%;
            flex-direction: column;
            height: auto;
            margin-bottom: 20px;
        }
    }

    .card-dashboard-image{
        height: 100%;
        max-width: 300px;

        @media (max-width: 768px){
            display: none;
        }
    }

    .card-dashboard-image img{
        height: 100%;
    }
    

    .informations-card{
        padding: 20px 5px 10px 5px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;
        p{
            width: 100%;
            text-align: center;
            margin: 5px 0;
        }

        h4{
            font-size: 25px;
        }
    }

    .btn-card{
        width: 100px;
        font-size: 18px;
        height: 45px !important;
        margin: 8px 0;
    }

    .row-cards{
        width: 100vw;
        display: flex;
        justify-content: space-evenly;

        @media (max-width: 768px){
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .one{
        margin-bottom: 30px;

        @media (max-width: 768px){
            margin: 0;
        }
    }

    .two{        
        @media (max-width: 768px){
            margin-bottom: 60px;
        }
    }
`
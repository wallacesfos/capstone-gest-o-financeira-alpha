import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --cyan: #19A19C;
        --darkBlue: #12192B;
        --darkDesaturatedBlue: #222A39;
        --gray: #C1C1C1;
        --white: #FFF;
    }

    body {
        background: var(--darkBlue);
        color: var(--gray);
    }

    a {
        text-decoration: none;
    }

    body,input, button{
        font-family:"PT Serif", serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: "Roboto Mono", monospace;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    .input-primary{
        border: 0;
        background-color: transparent;
        color: #c1c1c1;
        width: 100%;
        height: 25px;
        font-family: Arial, heveltica, sans-serif;
    }
    
    .input-primary-div{
        border-bottom: 1px solid white;
        display: flex;
        align-items: flex-end;
        width: 70%;
    }


    .btn-primary{
        width: 70%;
        height: 62px;
        background: #19A19C;
        border: 0;
        border-radius: 10px;
        color: white;
        font-size: 30px;
        font-family: arial;
    }

    .btn-primary:hover{
        background: #19A18F;
    }

`;

export default GlobalStyled;

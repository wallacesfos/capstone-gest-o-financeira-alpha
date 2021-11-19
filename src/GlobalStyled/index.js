import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: Arial, heveltica, sans-serif;
    }

    :root{
        --cyan: #19A19C;
        --darkBlue: #12192B;
        --darkDesaturatedBlue: #222A39;
        --gray: #C1C1C1;
        --white: #FFF;
        --blue: #3498DB;
        --red: #FF5555;
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

    .form{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .btn-primary{
        width: 60%;
        height: 62px;
        background: #19A19C;
        border: 0;
        border-radius: 10px;
        color: white;
        font-size: 30px;
        font-family: arial;
        margin: 20px 0 20px 0;
    }

    .btn-primary:hover{
        background: #19A18F;
    }

    .text-primary{
        color: #19a19c !important;
        font-size: 15px;
        margin: 0;
    }
    
    .inputs-register{
        width: 60% !important;
    }

    .inputs-register label{
        color: #c1c1c1 !important;
    }
    
    .inputs-register div input{
        color: #c1c1c1 !important;
    }

    .MuiInput-underline:before{
        border-bottom: 1px solid #C1C1C1 !important;
    }

    .MuiInput-underline:after{
        border-bottom: 1px solid white !important;

    }

    .divTexts{
        display: flex;
        align-items: flex-end;
        width: 100%;
        justify-content: center;
    }

    .padlock{
        height: 28px;
    }
    .pointer{
        cursor: pointer;
    }

    .exit{
        color: #E74C3C;
    }

    .deposit{
        color: #2ECC71;
    }

    .movement{
        color: #3498DB;
    }

    .free{
        color: #F1C40F;
    }

    .Footer-Empurrer{
        height: 100px;
    }

    .month{
        width: 100% !important; 
    }
    .text-title{
        font-family: Arial, Helvetica, sans-serif
    }
    .text-title-center{
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
        padding-left: 5%;
        margin-bottom: 20px;
        
    }
.image-profile{
    height: 80px;
    border-radius: 100px;
  }

    .navbar-image{
      height: 40px !important;
      width: 40px;
      border-radius: 100px;
    }

`;

export default GlobalStyled;

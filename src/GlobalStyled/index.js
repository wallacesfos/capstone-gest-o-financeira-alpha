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

`;

export default GlobalStyled;

import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
    *{
        box-sizing:border-box;
        --color-background: #ffffff;
        --color-letters: #000000;
        --color-buttons: #67c4a7;
    }
    
    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Inter', sans-serif;
        background-color: ${(props) => (props.theme ? 'var(--color-letters)' : 'var(--color-background)')};
        color: ${(props) => (props.theme ? 'var(--color-background)' : 'var(--color-letters)')}       
    }

    @media (max-width: 390px) {
        width: 100%;
        height: 100%;
    }
`

export {Global}
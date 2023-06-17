import styled, { createGlobalStyle } from 'styled-components';

import bgImages from "./assets/img/bg.jpg";

export const GlobalStyle = createGlobalStyle`

    * {
        font-weight: 700; 
        box-sizing: border-box;   
        font-family: "Catamaran", sans-serif;
    }

    html {

        height: 100%;
    }

    body {
        height: 100vh;
        backdrop-filter: blur(2px);
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        background-size: cover;
        background-image: url(${bgImages});
    }    
`

export const Wrapper = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

    > p {
        color: #fff;

    }

    .score {
        color: '#fff';
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 600;
        text-align: center;
        margin: 20px;

    }

    .start, .next {
        cursor: pointer;
        border: 2px solid #d38558;
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, .25);
        background: linear-gradient(180deg, #fff, #ffcc91);
    }

    .start {
        color: black;
        font-size: 16px;
        font-weight: 700;
        max-width: 200px;
    }
    

`;
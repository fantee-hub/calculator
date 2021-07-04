import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(to right top, #65dfc9, #6cdbeb);
        display:grid;
        height:100vh;
        width:100%;
        place-items:center;
       }
`;

export default GlobalStyles;

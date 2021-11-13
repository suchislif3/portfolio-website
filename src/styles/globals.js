import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background1};
    background-image: radial-gradient(circle at center center, transparent,rgb(0,36,46)),repeating-linear-gradient(318deg, rgb(0,36,46) 0px, rgb(0,36,46) 2px,transparent 2px, transparent 10px,rgb(0,36,46) 10px, rgb(0,36,46) 11px,transparent 11px, transparent 21px),repeating-linear-gradient(228deg, rgb(0,60,77) 0px, rgb(0,60,77) 4px,transparent 4px, transparent 8px),linear-gradient(273deg, rgb(0,36,46),rgb(0,36,46));
    color: ${({ theme }) => theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${({ theme }) => theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;

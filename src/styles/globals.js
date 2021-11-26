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
    background-image: linear-gradient(135deg, rgba(57, 57, 57, 0.04) 0%, rgba(57, 57, 57, 0.04) 37%,rgba(143, 143, 143, 0.04) 37%, rgba(143, 143, 143, 0.04) 100%),linear-gradient(45deg, rgba(11, 11, 11, 0.04) 0%, rgba(11, 11, 11, 0.04) 30%,rgba(166, 166, 166, 0.04) 30%, rgba(166, 166, 166, 0.04) 100%),linear-gradient(90deg, rgba(231, 231, 231, 0.04) 0%, rgba(231, 231, 231, 0.04) 63%,rgba(193, 193, 193, 0.04) 63%, rgba(193, 193, 193, 0.04) 100%),linear-gradient(0deg, rgba(162, 162, 162, 0.04) 0%, rgba(162, 162, 162, 0.04) 14%,rgba(210, 210, 210, 0.04) 14%, rgba(210, 210, 210, 0.04) 100%),linear-gradient(90deg, rgb(0,36,46),rgb(62,0,28));
    background-size: 200%;
    animation: bg-animation 40s infinite alternate ease-in-out;
    background-attachment: fixed; 
    color: ${({ theme }) => theme.colors.neutral};
    cursor: default;
  }

  @keyframes bg-animation {
    0% { 
      background-position: left;
    }
    100% {
      background-position: right;
    }
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

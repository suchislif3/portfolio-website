import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const StaticText = styled.div`
  line-height: 90px;
  height: 90px;
  font-size: 60px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.primary2};
  @media ${({theme}) => theme.breakpoints.md} {
    line-height: 70px;
    height: 70px;
    font-size: 46px;
  }
  @media ${({theme}) => theme.breakpoints.sm} {
    line-height: 48px;
    height: 48px;
    font-size: 32px;
  }
`;

export const DynamicTexts = styled.ul`
  line-height: ${({small}) => small ? "45px" : "90px"};
  height: ${({small}) => small ? "45px" : "90px"};
  font-size: ${({small}) => small ? "30px" : "60px"};
  font-weight: 400;
  color: ${({theme}) => theme.colors.primary2};
  overflow: hidden;
  --slide-up: ${({small}) => small ? "-90px" : "-180px"};
  
  li {
    top: 0;
    position: relative;
    animation: slide 14s steps(2) infinite;
  }
  
  li::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.background1};
    border-left: 2px solid white;
    animation: typing 7s cubic-bezier(0.2, 0.8, 0, 1) infinite;
  }

  @media ${({theme}) => theme.breakpoints.md} {
    line-height: ${({small}) => small ? "35px" : "70px"};
    height: ${({small}) => small ? "35px" : "70px"};
    font-size: ${({small}) => small ? "24px" : "46px"};
    --slide-up: ${({small}) => small ? "-70px" : "-140px"};
  }
  @media ${({theme}) => theme.breakpoints.sm} {
    line-height: ${({small}) => small ? "24px" : "48px"};
    height: ${({small}) => small ? "24px" : "48px"};
    font-size: ${({small}) => small ? "16px" : "32px"};
    --slide-up: ${({small}) => small ? "-48px" : "-96px"};
  }

  @keyframes typing {
    40%,
    60% {
      left: calc(110%);
    }
    100% {
      left: 0;
    }
  }

  @keyframes slide {
    100%{
      top: var(--slide-up);
    }
  }
`;

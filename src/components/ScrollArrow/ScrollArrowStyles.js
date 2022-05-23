import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 10%;
  right: 0;
  z-index: 999;
  padding: 9px;
`;

export const ScrollIcon = styled.div`
  font-size: 1rem;
  animation: fadeIn 0.3s;
  transition: 0.4s ease;
  opacity: 0.5;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.8rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

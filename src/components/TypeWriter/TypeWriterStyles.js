import styled from "styled-components";

export const TypeWriterSpan = styled.span`
  &:after {
    content: "|";
    animation: blink 1s step-start infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  } ;
`;

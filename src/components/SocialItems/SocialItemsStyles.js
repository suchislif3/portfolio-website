import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  top: 40%;
  z-index: 999;
  right: 0;
  padding: 1.5rem 0.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.8rem 0;
  }
`;

export const SocialIcons = styled.a`
  display: block;
  transition: 0.3s ease;
  color: white;
  font-size: 1rem;
  border-radius: 50px;
  padding: 4px;
  &:hover {
    cursor: pointer;
    color: #008282;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;
import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  top: 40%;
  z-index: 999;
  right: 0;
  padding: 1.5rem 0.5rem;
  background: ${({theme}) => theme.colors.background1};
  box-shadow: -2px 4px 6px rgb(255 255 255 / 15%);
`;

export const SocialIcons = styled.a`
  display: block;
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 4px;
  &:hover {
    cursor: pointer;
    color: #008282;
  }
`;
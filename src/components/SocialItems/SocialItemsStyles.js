import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  top: 25%;
  z-index: 999;
  right: 0;
  padding: 1.5rem 0.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    position: static;
    display: flex;
    gap: 10px;
    padding: 16px;
    margin-bottom: 5%;
  }
`;

export const SocialIcons = styled.a`
  display: block;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.colors.neutral};
  font-size: 1rem;
  border-radius: 50px;
  padding: 4px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary1_light};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.8rem;
    padding: 0;
  }
`;

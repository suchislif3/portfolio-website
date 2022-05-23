import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  margin-left: 5px;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: center;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.neutral};
  opacity: 80%;
  transition: 0.4s ease;
  margin-left: 5px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

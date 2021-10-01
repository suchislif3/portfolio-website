//import { IoIosArrowDropdown } from 'react-icons/io';
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

const animateStroke = keyframes`
  0%{
    stroke-dashoffset: 122;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  path {
    stroke-dasharray: 122;
    animation: ${animateStroke} 6s cubic-bezier(0.6, 1, 0.32, 1);
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
    grid-area: 1 / 1 / 2 / 4;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 7;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 6 / 2 / 7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 5 / 2 / 7;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  margin-left: 5px;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
/* export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`; */

/* export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`; */

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 4px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

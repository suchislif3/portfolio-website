import Link from "next/link";
import React from "react";

import {
  Container,
  Span,
  Div1,
  Div2,
  NavLink,
} from "./HeaderStyles";
import Logo from "./Logo";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          title="home"
          style={{ display: "flex", alignItems: "center", color: "white" }}
        >
          <Logo />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink title="projects">Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies" passHref>
          <NavLink title="technologies">Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink title="about">About</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;

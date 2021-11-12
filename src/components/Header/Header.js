import Link from "next/link";
import React from "react";

import {
  Container,
  Span,
  Div1,
  Div2,
  NavLink,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{ display: "flex", alignItems: "center", color: "white" }}
        >
          <Span>Szabolcs Devecseri</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink title="projects">projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies" passHref>
          <NavLink title="technologies">technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink title="about">about</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;

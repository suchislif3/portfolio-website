import React from "react";
import Header from "../components/Header/Header";
import SocialItems from "../components/SocialItems/SocialItems";
import { Container } from "./LayoutStyles";
import ScrollArrow from "../components/ScrollArrow/ScrollArrow";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <ScrollArrow />
    </Container>
  );
};

import React from "react";

import Header from "../components/Header/Header";
import SocialItems from "../components/SocialItems/SocialItems";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <SocialItems />
    </Container>
  );
};

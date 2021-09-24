import React from "react";

import Header from "../components/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

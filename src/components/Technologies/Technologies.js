import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { List, ListItem, ListTitle } from "./TechnologiesStyles";
import { technologies } from "../../constants/constants";

const Technologies = () => (
  <Section id="technologies">
    <SectionTitle main>technologies</SectionTitle>
    <SectionText>
      These are the technologies I&apos;ve worked with in the web development
      world, from backend to frontend.
    </SectionText>
    <List>
      {technologies.map((technology, i) => {
        const TechnologyIcon = technology.icon;
        return (
          <ListItem key={i}>
            <picture>
              <TechnologyIcon size="4rem" opacity="0.75" />
            </picture>
            <ListTitle>{technology.name}</ListTitle>
          </ListItem>
        );
      })}
    </List>
  </Section>
);

export default Technologies;

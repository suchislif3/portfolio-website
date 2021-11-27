import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const About = () => (
  <Section id="about">
    <SectionTitle main>about</SectionTitle>
    <SectionText>
      My name is Szabolcs Devecseri. I started as a civil engineer and changed
      career to software development. Solving problems always drives me while I
      continue to focus on quality and pay attention to details.{<br />}I
      believe in transparency and hope for a sustainable, decentralized world in
      the future.
    </SectionText>
  </Section>
);

export default About;

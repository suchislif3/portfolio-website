import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import SoftDevAnimation from "./SoftDevAnimation";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello,
      </SectionTitle>
      <SoftDevAnimation />
      <SectionText>
        <i>I don&apos;t stop until I find an elegant solution.</i>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;

import React, { useEffect, useState } from "react";
import { SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { LeftSection, Wrapper, StaticText, DynamicTexts } from "./HeroStyles";
import TypeWriter from "../TypeWriter/TypeWriter";

const phases = {
  TYPING: "typing",
  PAUSING: "pausing",
  DELETING: "deleting",
};
const MS = {
  typing: 1500,
  pausing: 3000,
  deleting: 1200,
};

const Hero = () => {
  const [phase, setPhase] = useState(phases.TYPING);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    switch (phase) {
      case phases.TYPING: {
        const timeout = setTimeout(() => {
          setPhase(phases.PAUSING);
        }, MS[phase]);
        return () => clearTimeout(timeout);
      }

      case phases.DELETING: {
        const timeout = setTimeout(() => {
          setSelectedIndex(selectedIndex === 1 ? 0 : 1);
          setPhase(phases.TYPING);
        }, MS[phase]);
        return () => clearTimeout(timeout);
      }

      case phases.PAUSING:
      default:
        const timeout = setTimeout(() => {
          setPhase(phases.DELETING);
        }, MS[phase]);
        return () => clearTimeout(timeout);
    }
  }, [phase, selectedIndex]);

  return (
    <LeftSection>
      <SectionTitle main center>
        hello,
      </SectionTitle>
      <Wrapper>
        <DynamicTexts small>
          <TypeWriter
            textArray={["my name is", "I'm a Junior"]}
            totalTypingMS={MS.typing}
            totalDeletingMS={MS.deleting}
            phase={phase}
            selectedIndex={selectedIndex}
          />
        </DynamicTexts>
      </Wrapper>
      <Wrapper>
        <StaticText>S</StaticText>
        <DynamicTexts>
          <TypeWriter
            textArray={["zabolcs", "oftware"]}
            totalTypingMS={MS.typing}
            totalDeletingMS={MS.deleting}
            phase={phase}
            selectedIndex={selectedIndex}
          />
        </DynamicTexts>
      </Wrapper>
      <Wrapper>
        <StaticText>D</StaticText>
        <DynamicTexts>
          <TypeWriter
            textArray={["evecseri", "eveloper"]}
            totalTypingMS={MS.typing}
            totalDeletingMS={MS.deleting}
            phase={phase}
            selectedIndex={selectedIndex}
          />
        </DynamicTexts>
      </Wrapper>
      <SectionText>
        <i>I don&apos;t stop until I find an elegant solution.</i>
      </SectionText>
    </LeftSection>
  );
};

export default Hero;

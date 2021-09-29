import { Wrapper, StaticText, DynamicTexts } from "./SoftDevAnimationStyles";
import { Fragment } from "react";

const SoftDevAnimation = () => {
  return (
    <Fragment>
      <Wrapper>
        <DynamicTexts small>
          <li>
            <span>My name is</span>
          </li>
          <li>
            <span>I&apos;m a Junior</span>
          </li>
        </DynamicTexts>
      </Wrapper>
      <Wrapper>
        <StaticText>S</StaticText>
        <DynamicTexts>
          <li>
            <span>zabolcs</span>
          </li>
          <li>
            <span>oftware</span>
          </li>
        </DynamicTexts>
      </Wrapper>
      <Wrapper>
        <StaticText>D</StaticText>
        <DynamicTexts>
          <li>
            <span>evecseri</span>
          </li>
          <li>
            <span>eveloper</span>
          </li>
        </DynamicTexts>
      </Wrapper>
    </Fragment>
  );
};

export default SoftDevAnimation;

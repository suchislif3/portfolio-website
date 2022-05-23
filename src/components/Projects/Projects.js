import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  HeaderFour,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle main>projects</SectionTitle>
      <GridContainer>
        {projects.map(({ image, title, description, tags, visit, code }, i) => {
          return (
            <BlogCard key={i}>
              <Img src={image} alt={`${title}'s image`} />
              <TitleContent>
                <HeaderThree isTitle>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>
                  <HeaderFour>Stack</HeaderFour>
                </TitleContent>
                <TagList>
                  {tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                {visit && <ExternalLinks href={visit} target="_blank" title={title}>
                  View Live
                </ExternalLinks>}
                <ExternalLinks
                  href={code}
                  target="_blank"
                  title={`${title}'s code`}
                >
                  Source code
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;

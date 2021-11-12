import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ image, title, description, tags, visit, source }, i) => {
            return (
              <BlogCard key={i}>
                <Img src={image} alt={`${title}'s image`} />
                <TitleContent>
                  <HeaderThree isTitle>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo className="card-info">{description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks
                    href={visit}
                    target="_blank"
                    title={`${title}'s code`}
                  >
                    Code
                  </ExternalLinks>
                  <ExternalLinks href={source} target="_blank" title={title}>
                    Source
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            );
          }
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;

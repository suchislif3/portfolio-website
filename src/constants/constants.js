import {
  DiGit,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import { SiMysql, SiJest } from "react-icons/si";
import { FaJira } from "react-icons/fa";

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "This is my first portfolio website as a junior software developer. While building it I was learning Next.js and styled components.",
    image: "/images/1.png",
    tags: ["NextJS"],
    code: "https://github.com/suchislif3/portfolio-website",
    visit: "/",
    id: 0,
  },
];

export const technologies = [
  {
    name: "Git",
    icon: DiGit,
  },
  {
    name: "HTML",
    icon: DiHtml5,
  },
  {
    name: "CSS",
    icon: DiCss3,
  },
  {
    name: "JavaScript",
    icon: DiJavascript,
  },
  {
    name: "React",
    icon: DiReact,
  },
  {
    name: "NodeJS",
    icon: DiNodejs,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Jest",
    icon: SiJest,
  },
  {
    name: "Jira (Scrum)",
    icon: FaJira,
  },
];

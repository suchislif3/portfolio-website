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
  {
    title: "Memory Game",
    description:
      "A memory game built with React, where the user can select the difficulty level by setting the grid size (4 to 36 cards) and choose from 3 different themes.",
    image: "/images/2.png",
    tags: ["React"],
    code: "https://github.com/suchislif3/memory-game",
    visit: "https://suchislif3.github.io/memory-game/",
    id: 1,
  },
  {
    title: "Gamories",
    description:
      "Gaming memories - The project I am currently working on: a full stack MERN social media app for gamers, to share their most interesting moments.",
    image: "/images/under_construction.png",
    tags: ["MongoDB", "Express", "React", "NodeJS"],
    code: "https://github.com/suchislif3/gamories/tree/dev",
    visit: "",
    id: 2,
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

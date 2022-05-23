import {
  DiGit,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import { SiMongodb, SiMysql, SiJest } from "react-icons/si";
import { FaJira } from "react-icons/fa";

export const projects = [
  {
    title: "Quiz-App",
    description:
      "The project I am currently working on to refresh and improve my TypeScript skills.",
    image: "/images/under_construction.png",
    tags: ["React", "TypeScript"],
    code: "https://github.com/suchislif3/quiz-app/tree/dev",
    id: 3,
  },
  {
    title: "gamories",
    description:
      "Your best gaming memories - social media app for gamers, to share their most interesting moments. Sign up or sign in with Google. Share your gamories including uploading an image. Edit, delete, like, and comment posts. Search in posts. Switch between dark and light mode. And scroll infinitely. :)",
    image: "/images/2.png",
    tags: ["MongoDB", "Express", "React", "NodeJS"],
    code: "https://github.com/suchislif3/gamories",
    visit: "https://gamories.vercel.app",
    id: 2,
  },
  {
    title: "Memory Game",
    description:
      "A memory game built with React, where the user can select the difficulty level by setting the grid size (4 to 36 cards) and choose from 3 different themes.",
    image: "/images/1.png",
    tags: ["React"],
    code: "https://github.com/suchislif3/memory-game",
    visit: "https://suchislif3.github.io/memory-game/",
    id: 1,
  },
  {
    title: "Portfolio Website",
    description:
      "This is my first portfolio website as a junior software developer. While building it I was learning Next.js and styled components.",
    image: "/images/0.png",
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
    name: "MongoDB",
    icon: SiMongodb,
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

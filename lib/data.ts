import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import net from "@/public/net.png";
import ecom1 from "@/public/ecom1.png";
import ask from "@/public/ask.png";
import myroom from "@/public/myroom.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student",
    location: "Sarajevo, Bosnia and Herzegovina",
    description:
      "Currently a student at Treca gimnazija, majoring in IT.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Front-End Developer",
    location: "Zagreb, Croatia",
    description:
      "Utilized React and WordPress for projects, ensuring responsive and user-friendly websites. Engaged with clients, collaborated with cross-functional teams, and maintained/upgraded existing websites to adhere to the latest web standards.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - Sep 2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "Netflix Clone",
    description:
      "A Netflix clone with features like authentication, trailers, and a movie list. It uses The Movie Database API.",
    tags: ["React", "Tailwind", "Firebase"],
    imageUrl: net,
    url:"https://github.com/Hrusta/netflix-clone"
  },
  {
    title: "E-commerce app",
    description:
      "An e-commerce app with features like authentication, cart, and payment. It uses Firebase for backend services.",
    tags: ["React", "Firebase"],
    imageUrl: ecom1,
    url:"https://github.com/Hrusta/ecommerceapp"
  },

  {
    title: "i miss my room",
    description:
      "A React app offering a personalized virtual space aimed at recreating the cozy ambiance of your room.",
    tags: ["React"],
    imageUrl: myroom,
    url:"https://github.com/Hrusta/myroom"
  },
  {
    title: "Ask.it",
    description:
      "A React.js and TypeScript web app for Q&A, using Redux for data and user-friendly interfaces with authentication and posting features.",
    tags: ["React", "TypeScript", "Redux"],
    imageUrl: ask,
    url:"https://github.com/Hrusta/ask.itv3"
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "Tailwind",
  "Redux",
  "C++",
  "Bootstrap",
  "WordPress",
] as const;
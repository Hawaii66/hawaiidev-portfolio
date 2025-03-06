import React from "react";
import ProjectHeader from "./ProjectHeader";
import Card, { CardProps } from "../MainProjects/Card";
import FixedBackButton from "../FixedBackButton";

const projects: CardProps[] = [
  {
    title: "Reelly",
    description:
      "Reelly is your mobile app for engaging, bite-sized learning. Dive into short-form articles that blend captivating images with insightful text, focusing on knowledge and trivia tailored just for you",
    image: "/reelly/main.png",
    stack: [
      "React Native",
      "Expo",
      "Supabase",
      "NextJS",
      "Python",
      "Generative AI",
    ],
    link: "/projects/reelly",
    hasLink: true,
  },
  {
    description:
      "Developed a website for my school using NextJS and Supabase. Each user can log in using Clerk and se their 'target'. Admins can log in and se the whole circle",
    image: "/enskildakiller/main.png",
    link: "/projects/enskildakiller",
    stack: ["NextJS", "Supabase", "Clerk", "TailwindCSS"],
    title: "Enskilda Killer",
    hasLink: true,
  },
  {
    description: "Comming soon",
    image: null,
    stack: ["React Native", "Expo", "Posthog", "Go", "Astro", "PostgreSQL"],
    title: "Veckans 200",
    link: "/projects/veckans200",
  },
  {
    description:
      "One of projects I worked on at LearningWell where I developed an AR app togehter with a 3D artist to bring a famous historical place in Nyköping to life",
    image: "/akroken/main.webp",
    link: "/projects/akroken",
    stack: ["Unity", "Artist"],
    title: "Åkroken",
    hasLink: true,
  },
  {
    title: "Slime Mold Simultion",
    description:
      "This Go project simulates the movement of slime molds on a 2D grid. The slime mold's behavior is influenced by various parameters such as speed, trail dynamics, and random forces. The project also supports customization of the color gradient used to visualize the trails left behind by the slimes.",

    image: "/slimemold/main.png",
    hasLink: false,
    stack: ["Go", "Ebiten"],
    github: "https://github.com/Hawaii66/slime-mold-simulation",
    link: "/projects/slimemold",
  },
  {
    description:
      "The portfolio you are currenly watching, development time: 2 days. I wanted to summarize some of the things I have worked on in one place",
    image: "/portfolio/main.png",
    link: "/projects/portfolio",
    stack: ["NextJS", "TailwindCSS"],
    title: "Portfölj",
    hasLink: true,
  },
  {
    description:
      "A larger project spanning years. The idea is to build a machine with Arduino, RaspberryPI and NextJS to purchase candy from a website and be delivered by a robot",
    image: "/vendingmachine/main.jpg",
    link: "/projects/vendingmachine",
    stack: ["NextJS", "Arduino", "RaspberryPI", "Stripe"],
    title: "Vending Machine",
    github: "https://github.com/Hawaii66/VendingMachineV2",
  },
  {
    description:
      "Learned Rust and the discrete Verlet simulation for simulating balls in the Bevy 2D framework",
    image: "/verletsimulation/main.png",
    link: "/projects/verletsimulation",
    stack: ["Rust", "Bevy", "Discret Verlet Simulation"],
    title: "Verlet Simulation",
    github: "https://github.com/Hawaii66/Verlet-Simulation",
  },
];

function AllProjects() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-12">
      <FixedBackButton link="/" />
      <ProjectHeader />
      <div className="gap-8 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 w-2/3">
        {projects.map((project) => (
          <Card project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;

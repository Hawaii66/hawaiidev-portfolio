import React from "react";
import ProjectHeader from "./ProjectHeader";
import Card, { CardProps } from "../MainProjects/Card";
import FixedBackButton from "../FixedBackButton";

const projects: CardProps[] = [
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
    description:
      "One of projects I worked on at LearningWell where I developed an AR app togehter with a 3D artist to bring a famous historical place in Nyköping to life",
    image: "/akroken/main.webp",
    link: "/projects/akroken",
    stack: ["Unity", "Artist"],
    title: "Åkroken",
    hasLink: true,
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
      "A website for sharing and studying all things related to school. The website will integrated with AI and have interactive playgrounds for learning.",
    image: "/lessonlagoon/main.png",
    link: "/projects/lessonlagoon",
    stack: ["NextJS", "ChatGPT", "Clerk", "Supabase"],
    title: "Lesson Lagoon",
    github: "https://github.com/Hawaii66/lesson-lagoon",
  },
  {
    description:
      "A SASS for generating AppStore image gallerys with images spanning multiple images. In early stages of development",
    image: "/fusethis/main.webp",
    link: "/projects/fusethis",
    stack: ["NextJS"],
    title: "Fuse This",
    github: "https://github.com/Hawaii66/fuse-this",
  },
  {
    description:
      "I got tired of using my schools default time table renderer, so I buildt my own. Will build out the website with more things I'm frustrated with",
    image: "/schoolsoftpro/main.png",
    link: "/projects/schoolsoftpro",
    stack: ["NextJS", "HTML-parser"],
    title: "Schoolsoft PRO",
    github: "https://github.com/Hawaii66/schoolsoft-pro",
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
    <div className="pt-12 flex flex-col justify-center items-center gap-8">
      <FixedBackButton link="/" />
      <ProjectHeader />
      <div className="w-2/3 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;

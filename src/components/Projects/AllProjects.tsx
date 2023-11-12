import React from "react";
import ProjectHeader from "./ProjectHeader";
import Card, { CardProps } from "../MainProjects/Card";
import FixedBackButton from "../FixedBackButton";

const projects: CardProps[] = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    link: "/projects/enskildakiller",
    stack: ["NextJS", "Supabase", "Clerk", "TailwindCSS"],
    title: "Enskilda Killer",
    hasLink: true,
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/akroken/main.webp",
    link: "/projects/akroken",
    stack: ["Unity", "Artist"],
    title: "Åkroken",
    hasLink: true,
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/portfolio/main.png",
    link: "/projects/portfolio",
    stack: ["NextJS", "TailwindCSS"],
    title: "Portfölj",
    hasLink: true,
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/vendingmachine/main.jpg",
    link: "/projects/vendingmachine",
    stack: ["NextJS", "Arduino", "RaspberryPI", "Stripe"],
    title: "Vending Machine",
    github: "https://github.com/Hawaii66/VendingMachineV2",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/lessonlagoon/main.png",
    link: "/projects/lessonlagoon",
    stack: ["NextJS", "ChatGPT", "Clerk", "Supabase"],
    title: "Lesson Lagoon",
    github: "https://github.com/Hawaii66/lesson-lagoon",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/fusethis/main.webp",
    link: "/projects/fusethis",
    stack: ["NextJS"],
    title: "Fuse This",
    github: "https://github.com/Hawaii66/fuse-this",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/schoolsoftpro/main.png",
    link: "/projects/schoolsoftpro",
    stack: ["NextJS", "HTML-parser"],
    title: "Schoolsoft PRO",
    github: "https://github.com/Hawaii66/schoolsoft-pro",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/verletsimulation/main.png",
    link: "/projects/verletsimulation",
    stack: ["Rust"],
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

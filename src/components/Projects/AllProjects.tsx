import React from "react";
import ProjectHeader from "./ProjectHeader";
import Card, { CardProps } from "../MainProjects/Card";

const projects: CardProps[] = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    link: "/projects/enskildakiller",
    stack: ["NextJS", "Supabase", "Clerk", "TailwindCSS"],
    title: "Enskilda Killer",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    link: "/projects/akroken",
    stack: ["Unity", "Artist"],
    title: "Åkroken",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    link: "/projects/portfolio",
    stack: ["NextJS", "TailwindCSS"],
    title: "Portfölj",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    link: "/projects/vendingmachine",
    stack: ["NextJS", "Arduino", "RaspberryPI", "Stripe"],
    title: "Vending Machine",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    link: "/projects/lessonlagoon",
    stack: ["NextJS", "ChatGPT", "Clerk", "Supabase"],
    title: "Lesson Lagoon",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    link: "/projects/fusethis",
    stack: ["NextJS"],
    title: "Fuse This",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    link: "/projects/schoolsoftpro",
    stack: ["NextJS", "HTML-parser"],
    title: "Schoolsoft PRO",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    link: "/projects/verletsimulation",
    stack: ["Rust"],
    title: "Verlet Simulation",
  },
];

function AllProjects() {
  return (
    <div className="pt-12 flex flex-col justify-center items-center gap-8">
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

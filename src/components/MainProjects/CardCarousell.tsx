import React from "react";
import Card, { CardProps } from "./Card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MainProjects: CardProps[] = [
  {
    title: "Enskilda Killer",
    description:
      "Developed a website for my school using NextJS and Supabase. Each user can log in using Clerk and se their 'target'. Admins can log in and se the whole circle",
    image: "/enskildakiller/main.png",
    stack: ["NextJS", "Supabase", "Clerk", "TailwindCSS"],
    link: "/projects/enskildakiller",
    hasLink: true,
  },
  {
    title: "Åkroken",
    description:
      "One of projects I worked on at LearningWell where I developed an AR app togehter with a 3D artist to bring a famous historical place in Nyköping to life",
    image: "/akroken/main.webp",
    stack: ["Unity", "Artist"],
    link: "/projects/akroken",
    hasLink: true,
  },
  {
    title: "Portfölj",
    description:
      "The portfolio you are currenly watching, development time: 2 days. I wanted to summarize some of the things I have worked on in one place",
    image: "/portfolio/main.png",
    stack: ["NextJS", "TailwindCSS"],
    link: "/projects/portfolio",
    hasLink: true,
  },
];

function CardCarousell() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="text-3xl text-white text-center font-bold font-mono">
        Main Projects
      </h2>
      <div className="w-2/3 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
        {MainProjects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </div>
      <Link href="/projects" className="flex flex-row gap-2">
        <p className="text-blue-500 underline">See all projects</p>
        <ChevronRight />
      </Link>
    </div>
  );
}

export default CardCarousell;

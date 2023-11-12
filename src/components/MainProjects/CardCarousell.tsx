import React from "react";
import Card, { CardProps } from "./Card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MainProjects: CardProps[] = [
  {
    title: "Enskilda Killer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    stack: ["NextJS", "Supabase", "Clerk", "TailwindCSS"],
    link: "/projects/enskildakiller",
  },
  {
    title: "Åkroken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, laborum!",
    image: "/akroken/main.webp",
    stack: ["Unity", "Artist"],
    link: "/projects/akroken",
  },
  {
    title: "Portfölj",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/portfolio/main.png",
    stack: ["NextJS", "TailwindCSS"],
    link: "/projects/portfolio",
  },
];

function CardCarousell() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="text-3xl text-white text-center font-bold font-mono">
        Största Projekt
      </h2>
      <div className="w-2/3 grid grid-cols-3 gap-8">
        {MainProjects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </div>
      <Link href="/projects" className="flex flex-row gap-2">
        <p className="text-blue-500 underline">Se alla projekt</p>
        <ChevronRight />
      </Link>
    </div>
  );
}

export default CardCarousell;

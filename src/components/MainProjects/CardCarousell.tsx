import React from "react";
import Card, { CardProps } from "./Card";

const MainProjects: CardProps[] = [
  {
    title: "Enskilda Killer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus in nulla sapiente ea minus enim laborum nostrum fuga necessitatibus?",
    image: "/enskildakiller/main.png",
    stack: ["NextJS", "Supabase", "Clerk"],
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
    stack: ["NextJS"],
    link: "/projects/portfolio",
  },
];

function CardCarousell() {
  return (
    <div className="w-2/3 grid grid-cols-3 gap-8">
      {MainProjects.map((project) => (
        <Card project={project} />
      ))}
    </div>
  );
}

export default CardCarousell;

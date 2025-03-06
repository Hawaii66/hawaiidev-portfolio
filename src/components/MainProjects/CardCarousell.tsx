import React from "react";
import Card, { CardProps } from "./Card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MainProjects: CardProps[] = [
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
];

function CardCarousell() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      <h2 className="font-mono font-bold text-white text-3xl text-center">
        Main Projects
      </h2>
      <div className="gap-8 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 w-2/3">
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

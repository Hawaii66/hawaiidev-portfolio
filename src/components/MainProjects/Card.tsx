"use client";

import { StackToIcons } from "@/utils/Stack";
import RedButton from "../RedButton";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

export type CardProps = {
  title: string;
  image: string | null;
  description: string;
  stack: string[];
  link: string;
  hasLink?: boolean;
  github?: string;
};

function Card({
  project: { description, image, title, stack, link, hasLink, github },
}: {
  project: CardProps;
}) {
  return (
    <div className="relative flex rounded-2xl overflow-hidden">
      <div className="absolute flex justify-center items-center h-full aspect-square">
        <div
          className="-z-50 flex-grow h-full animate-spin-slow"
          style={{
            scale: 10 / 4,
            animationDelay: `${-Math.random() * 10}s`,
            background: "linear-gradient(to bottom, #db2777,#4f46e5,#075985)",
          }}
        />
      </div>
      <Tilt
        tiltReverse
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className="z-50 relative flex flex-col flex-grow gap-4 bg-white shadow-black shadow-lg m-4 p-4 rounded-2xl text-black"
      >
        <div className="flex flex-col flex-grow gap-4">
          <h1 className="font-bold text-slate-800 text-4xl text-center tracking-wide">
            {title}
          </h1>
          {image && (
            <img
              src={image}
              className="rounded-2xl w-full object-contain aspect-video"
            />
          )}
          <p className="text-slate-800 text-lg">- {description}</p>
          {hasLink && (
            <div className="right-4 bottom-4 z-50 absolute">
              <RedButton rotation="right" link={link} />
            </div>
          )}
          {github && (
            <div className="text-lg">
              <p className="font-bold">Github:</p>
              <Link href={github} target="_blank" className="text-blue-500">
                {github}
              </Link>
            </div>
          )}
        </div>
        <div className="text-lg">
          <p className="font-bold">Stack:</p>
          <div className="flex flex-row flex-wrap pr-12">
            {StackToIcons(stack).map((i) => i)}
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Card;

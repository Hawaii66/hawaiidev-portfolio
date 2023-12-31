"use client";

import { StackToIcons } from "@/utils/Stack";
import RedButton from "../RedButton";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

export type CardProps = {
  title: string;
  image: string;
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
    <div className=" flex relative rounded-2xl overflow-hidden">
      <div className="absolute flex justify-center items-center aspect-square h-full">
        <div
          className="flex-grow h-full -z-50  animate-spin-slow"
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
        className="m-4 p-4 shadow-lg z-50 shadow-black flex flex-col gap-4 bg-white relative flex-grow rounded-2xl text-black"
      >
        <div className="flex-grow flex flex-col gap-4">
          <h1 className="text-slate-800 font-bold tracking-wide text-4xl text-center">
            {title}
          </h1>
          <img
            src={image}
            className="w-full rounded-2xl aspect-video object-contain"
          />
          <p className="text-md text-slate-800">- {description}</p>
          {hasLink && (
            <div className="absolute z-50 bottom-4 right-4">
              <RedButton rotation="right" link={link} />
            </div>
          )}
          {github && (
            <div>
              <p className="font-bold">Github:</p>
              <Link href={github} target="_blank" className="text-blue-500">
                {github}
              </Link>
            </div>
          )}
        </div>
        <div>
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

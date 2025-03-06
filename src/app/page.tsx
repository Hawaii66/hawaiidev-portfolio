"use client";

import About from "@/components/About/About";
import { KnowledgePage } from "@/components/Knowledge/Page";
import CardCarousell from "@/components/MainProjects/CardCarousell";
import MainText from "@/components/MainText";
import RedButton from "@/components/RedButton";
import { useRef } from "react";

export default function Home() {
  const mainProjectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <div className="relative place-items-center grid w-full min-h-screen">
        <MainText />
        <div className="bottom-0 absolute flex flex-col justify-end items-center pb-16 w-full">
          <RedButton
            rotation="down"
            onClick={() =>
              mainProjectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
        <div className="top-4 right-4 z-50 absolute flex flex-col gap-4">
          <RedButton
            outline
            text="Projects"
            link="/projects"
            rotation="right"
          />
          <RedButton
            outline
            text="Knowledge"
            link="/knowledge"
            rotation="right"
          />
        </div>
      </div>
      <img src="/wave.svg" className="w-full" />
      <div className="relative w-full min-h-screen" ref={mainProjectsRef}>
        <div
          className="-z-10 absolute w-full h-full"
          style={{
            maskImage: "radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0) 50%)",
            WebkitMaskImage:
              "radial-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0) 50%)",
            backgroundImage: "url(hex.svg)",
          }}
        />
        <div className="flex justify-center items-center w-full h-full min-h-screen">
          <CardCarousell />
        </div>
        <div className="bottom-0 absolute flex flex-col justify-end items-center pb-16 w-full">
          <RedButton
            rotation="down"
            onClick={() =>
              aboutRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
      <img src="/wave.svg" className="w-full" />
      <KnowledgePage showHomeLink={false} />
      <img src="/wave.svg" className="w-full" />
      <div className="w-full min-h-screen" ref={aboutRef}>
        <About />
      </div>
    </div>
  );
}

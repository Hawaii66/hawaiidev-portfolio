"use client";

import About from "@/components/About/About";
import CardCarousell from "@/components/MainProjects/CardCarousell";
import MainText from "@/components/MainText";
import RedButton from "@/components/RedButton";
import { useRef } from "react";

export default function Home() {
  const mainProjectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <div className="w-full relative min-h-screen grid place-items-center">
        <MainText />
        <div className="w-full  absolute bottom-0 pb-16 flex justify-end items-center flex-col">
          <RedButton
            rotation="down"
            onClick={() =>
              mainProjectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
        <div className="absolute top-4 right-4 z-50 gap-4 flex flex-col">
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
      <div className="min-h-screen w-full relative" ref={mainProjectsRef}>
        <div
          className="w-full -z-10 h-full absolute"
          style={{
            maskImage: "radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0) 50%)",
            WebkitMaskImage:
              "radial-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0) 50%)",
            backgroundImage: "url(hex.svg)",
          }}
        />
        <div className="min-h-screen w-full h-full flex justify-center items-center">
          <CardCarousell />
        </div>
        <div className="w-full absolute bottom-0 pb-16 flex justify-end items-center flex-col">
          <RedButton
            rotation="down"
            onClick={() =>
              aboutRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
      <img src="/wave.svg" className="w-full" />
      <div className="min-h-screen w-full" ref={aboutRef}>
        <About />
      </div>
    </div>
  );
}

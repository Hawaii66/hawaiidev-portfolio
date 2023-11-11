"use client";

import MainText from "@/components/MainText";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const mainProjectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <div className="w-full relative min-h-screen grid place-items-center">
        <MainText />
        <div className="w-full  absolute bottom-0 pb-16 flex justify-end items-center flex-col">
          <button
            onClick={() =>
              mainProjectsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-12 h-12 rounded-full bg-red-500 grid place-items-center hover:scale-90 active:scale-150 transition-all"
          >
            <ChevronDown />
          </button>
        </div>
      </div>
      <img src="/wave.svg" className="w-full" />
      <div className="min-h-screen w-full " ref={mainProjectsRef}>
        <div
          className="w-full -z-10 h-full absolute"
          style={{
            maskImage: "radial-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0) 50%)",
            WebkitMaskImage:
              "radial-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0) 50%)",
            backgroundImage: "url(hex.svg)",
          }}
        />
        <div className="w-1/2">
          <div className="w-full h-48">
            <h1>Card</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

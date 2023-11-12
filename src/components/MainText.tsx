"use client";

import { TextModifyBuilder } from "@/utils/ModifyText";
import React, { useEffect, useState } from "react";

const jokes = [
  "404: Sleep not found",
  "Oh, it was a typo",
  "Always Dark Mode",
  "In Ctrl + S we trust",
];
function MainText() {
  const [header, setHeader] = useState("Hello World!");
  const [handle, setHandle] = useState("");
  const [info, setInfo] = useState("");

  const animateHandle = async () => {
    await new TextModifyBuilder(setHandle).WriteText("@HawaiiDev").Animate();
  };
  const animateInfo = async () => {
    await new TextModifyBuilder(setInfo)
      .WriteText("Nyköping")
      .Sleep(500)
      .AppendText(" 18 år")
      .Animate();
  };

  const animateHeader = async () => {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    await new TextModifyBuilder(setHeader)
      .Sleep(500)
      .DeleteText("Hello World")
      .Sleep(200)
      .WriteText(joke, { delay: 25 })
      .Sleep(500)
      .Action(animateHandle)
      .Sleep(500)
      .DeletePrevious({ delay: 50 })
      .WriteText("Sebastian Ahlman")
      .Action(animateInfo)
      .Animate();
  };

  useEffect(() => {
    animateHeader();
  }, []);
  return (
    <main className="flex flex-col w-1/2 gap-4">
      <h1
        className={`${
          header === "" ? "opacity-0" : "opacity-100"
        } text-green-500 text-7xl align-middle text-ver text-left font-mono flex-grow `}
      >
        {header === "" ? "." : header}
      </h1>
      <div className="pl-8">
        <p
          className={`${
            handle === "" ? "opacity-0" : "opacity-100"
          } text-lg text-green-500 tracking-wide font-mono`}
        >
          {handle === "" ? "." : handle}
        </p>
        <p
          className={`${
            info === "" ? "opacity-0" : "opacity-100"
          } text-slate-400`}
        >
          {info === "" ? "." : info}
        </p>
      </div>
    </main>
  );
}

export default MainText;

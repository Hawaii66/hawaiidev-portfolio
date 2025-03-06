"use client";

import { TextModifyBuilder } from "@/utils/ModifyText";
import React, { useEffect, useState } from "react";

function MainText() {
  const [header, setHeader] = useState("Hello World!");
  const [handle, setHandle] = useState("");
  const [info, setInfo] = useState("");

  const animateHandle = async () => {
    await new TextModifyBuilder(setHandle).WriteText("@HawaiiDev").Animate();
  };
  const animateInfo = async () => {
    await new TextModifyBuilder(setInfo)
      .WriteText("Nyköping Sweden", { delay: 100 })
      .AppendText(" 20 years", { delay: 50 })
      .Animate();
  };

  const animateHeader = async () => {
    await new TextModifyBuilder(setHeader)
      .Sleep(300)
      .DeleteText("Hello World")
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
    <main className="flex flex-col gap-4 w-1/2">
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

"use client";

import { TextModifyBuilder } from "@/utils/ModifyText";
import { useEffect, useState } from "react";

export default function Home() {
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
    await new TextModifyBuilder(setHeader)
      .Sleep(500)
      .DeleteText("Hello World")
      .Sleep(200)
      .WriteText("Sebastian Ahlman")
      .Sleep(2000)
      .DeletePrevious({ delay: 50 })
      .WriteText("@HawaiiDev", { delay: 100 })
      .Action(animateHandle)
      .Sleep(500)
      .DeletePrevious()
      .WriteText("Sebastian Ahlman")
      .Action(animateInfo)
      .Animate();
  };

  useEffect(() => {
    animateHeader();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen grid place-items-center">
        <main className="grid w-1/2 gap-4">
          <h1 className="text-green-500 text-7xl text-left font-mono hover:underline underline-offset-8">
            {header}
          </h1>
          <div>
            <p>{handle}</p>
            <p>{info}</p>
          </div>
        </main>
      </div>
    </>
  );
}

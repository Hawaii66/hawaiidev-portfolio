"use client";

import { TextModifyBuilder } from "@/utils/ModifyText";
import React, { useEffect, useState } from "react";

function ProjectHeader() {
  const [header, setHeader] = useState("");

  const animateHeader = async () => {
    await new TextModifyBuilder(setHeader).WriteText("Projects").Animate();
  };

  useEffect(() => {
    animateHeader();
  }, []);

  return (
    <h1
      className={`text-green-500 text-5xl font-bold text-center w-full ${
        header === "" ? "opacity-0" : "opacity-100"
      }`}
    >
      {header === "" ? "." : header}
    </h1>
  );
}

export default ProjectHeader;

"use client";

import RedButton from "@/components/RedButton";
import { TextModifyBuilder } from "@/utils/ModifyText";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function NotFound() {
  const [error, setError] = useState("");
  const [showBack, setShowBack] = useState(false);
  const router = useRouter();

  const animateError = async () => {
    await new TextModifyBuilder(setError)
      .WriteText("Error", { delay: 50 })
      .Sleep(500)
      .DeletePrevious()
      .WriteText("404: Cant find page")
      .Action(() => setShowBack(true))
      .Animate();
  };

  useEffect(() => {
    animateError();
  }, []);

  return (
    <div className="w-full min-h-screen grid place-items-center">
      <div className="flex gap-8 flex-col justify-center items-center">
        <p className="text-5xl text-green-500 font-bold">{error}</p>
        {showBack && (
          <RedButton
            onClick={() => router.back()}
            rotation="left"
            text="Back"
          />
        )}
      </div>
    </div>
  );
}

export default NotFound;

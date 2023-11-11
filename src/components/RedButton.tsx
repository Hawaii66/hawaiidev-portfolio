import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  rotation?: "down" | "up" | "right" | "left";
  onClick?: () => void;
  link?: string;
  text?: string;
};

const RotationToDeg = (rotation: Props["rotation"]) => {
  switch (rotation) {
    case "down":
      return "90deg";
    case "left":
      return "180deg";
    case "right":
      return "0deg";
    case "up":
    case undefined:
      return "270deg";
    default:
      const _: never = rotation;
  }
};

function RedButton(props: Props) {
  if ("link" in props) {
    return (
      <Link
        href={props.link ?? ""}
        className={`h-12 ${
          props.text
            ? "rounded-md px-4 flex flex-row gap-4 justify-between items-center"
            : "rounded-full w-12 grid place-items-center"
        }  bg-red-500 hover:scale-90 active:scale-150 transition-all`}
      >
        <ChevronRight
          color="white"
          style={{ rotate: RotationToDeg(props.rotation) }}
        />
        {props.text && <p>{props.text}</p>}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick!}
      className={`h-12 ${
        props.text
          ? "rounded-md px-4 flex flex-row gap-4 justify-between items-center"
          : "rounded-full w-12 grid place-items-center"
      }  bg-red-500 hover:scale-90 active:scale-150 transition-all`}
    >
      <ChevronRight
        color="white"
        style={{ rotate: RotationToDeg(props.rotation) }}
      />
      {props.text && <p>{props.text}</p>}
    </button>
  );
}

export default RedButton;

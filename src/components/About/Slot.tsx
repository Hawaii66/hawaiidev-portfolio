import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/utils";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  className: {
    xl: HTMLDivElement["className"];
    md: HTMLDivElement["className"];
    lg: HTMLDivElement["className"];
    normal: HTMLDivElement["className"];
  };
  information?: {
    title: string;
    content: React.ReactNode;
  };
};

type TextProps = {
  text: string;
  className?: HTMLParagraphElement["className"];
};

type ListProps = {
  children: React.ReactNode;
  className?: HTMLUListElement["className"];
};

type ImageProps = {
  url: string;
  height?: string;
  width?: string;
  rounded?: boolean;
  fullHeight?: boolean;
};

type CenterProps = {
  children: React.ReactNode;
};

function SlotHeader({ text }: TextProps) {
  return <h2 className="text-black font-bold text-lg pb-2">{text}</h2>;
}

function SlotList({ children, className }: ListProps) {
  return (
    <ul className={cn(className ? className : "flex flex-col gap-2")}>
      {children}
    </ul>
  );
}

function SlotText({ text, className }: TextProps) {
  return <p className={cn("text-black text-md", className)}>{text}</p>;
}

function SlotImage({ url, height, width, rounded, fullHeight }: ImageProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        rounded ? "rounded-lg" : "rounded-none",
        fullHeight ? "h-full" : ""
      )}
    >
      <img src={url} className={cn("", height, width)} />
    </div>
  );
}

function SlotCenter({ children }: CenterProps) {
  return (
    <div className="flex-grow flex justify-center items-center flex-col">
      {children}
    </div>
  );
}

const ConfigurationToSize = (
  className: HTMLDivElement["className"],
  size: string
) => {
  return className
    .split(" ")
    .map((c) => `${size}:${c}`)
    .join(" ");
};

function Slot({ children, className, information }: Props) {
  const [open, setOpen] = useState(false);

  const fixedXl = ConfigurationToSize(className?.xl || "", "xl");
  const fixedMd = ConfigurationToSize(className?.md || "", "md");
  const fixedLg = ConfigurationToSize(className?.lg || "", "lg");
  const fixedNormal = className?.normal;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          onMouseLeave={() => setOpen(false)}
          className={cn(
            "bg-white shadow-slot rounded-lg flex flex-col p-4 group-hover:brightness-90 group-hover:scale-95 hover:blur-none transition-all duration-300",
            "hover:!scale-110 hover:!brightness-110",
            fixedXl,
            fixedLg,
            fixedMd,
            fixedNormal
          )}
        >
          {children}
        </div>
      </PopoverTrigger>
      {information && (
        <PopoverContent className="bg-white px-4 shadow-slot z-50 pointer-events-none">
          <h3 className="text-lg font-bold text-black">{information.title}</h3>
          <div className="text-black">{information.content}</div>
        </PopoverContent>
      )}
    </Popover>
  );
}

Slot.Header = SlotHeader;
Slot.List = SlotList;
Slot.Text = SlotText;
Slot.Image = SlotImage;
Slot.Center = SlotCenter;

export default Slot;

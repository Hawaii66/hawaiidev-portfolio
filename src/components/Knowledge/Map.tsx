"use client";

import { getGraph } from "@/utils/Knowledge/Graph";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ForceGraph2D } from "react-force-graph";

const knowledge: {
  nodes: { id: string; group: number; color: string }[];
  links: { source: string; target: string; color: string }[];
} = {
  nodes: [
    {
      id: "Sebastian Ahlman",
      group: 0, // Central node,
      color: "#fff",
    },
    {
      id: "!Webb",
      group: 1,
      color: "#3498db", // Blue
    },
    {
      id: "Typescript",
      group: 1,
      color: "#3498db",
    },
    {
      id: "Node.js",
      group: 1,
      color: "#3498db",
    },
    {
      id: "React",
      group: 1,
      color: "#3498db",
    },
    {
      id: "NextJS",
      group: 1,
      color: "#3498db",
    },
    {
      id: "Tailwind CSS",
      group: 1,
      color: "#3498db",
    },
    {
      id: "Bootstrap",
      group: 1,
      color: "#3498db",
    },
    {
      id: "Shadcn", // Assuming this is related to shaders
      group: 1,
      color: "#3498db",
    },
    {
      id: "!Games",
      group: 2,
      color: "#27ae60", // Green
    },
    {
      id: "Unity",
      group: 2,
      color: "#27ae60",
    },
    {
      id: "C#",
      group: 2,
      color: "#27ae60",
    },
    {
      id: "Unity Gaming Services",
      group: 2,
      color: "#27ae60",
    },
    {
      id: "Unity AR",
      group: 2,
      color: "#27ae60",
    },
    {
      id: "!Mobile",
      group: 3,
      color: "#e74c3c", // Red
    },
    {
      id: "React Native",
      group: 3,
      color: "#e74c3c",
    },
    {
      id: "Expo",
      group: 3,
      color: "#e74c3c",
    },
    {
      id: "Expo Application Services",
      group: 3,
      color: "#e74c3c",
    },
    {
      id: "RevenueCat",
      group: 3,
      color: "#e74c3c",
    },
    {
      id: "!Databases",
      group: 4,
      color: "#8e44ad", // Purple
    },
    {
      id: "PostgreSQL",
      group: 4,
      color: "#8e44ad",
    },
    {
      id: "MongoDB",
      group: 4,
      color: "#8e44ad",
    },
    {
      id: "Supabase",
      group: 4,
      color: "#8e44ad",
    },
    {
      id: "!Authentication",
      group: 5,
      color: "#f39c12", // Yellow
    },
    {
      id: "Clerk",
      group: 5,
      color: "#f39c12",
    },
    {
      id: "Auth0",
      group: 5,
      color: "#f39c12",
    },
    {
      id: "JWT",
      group: 5,
      color: "#f39c12",
    },
    {
      id: "!Deployment",
      group: 6,
      color: "#2c3e50", // Dark Gray
    },
    {
      id: "Vercel",
      group: 6,
      color: "#2c3e50",
    },
    {
      id: "Heroku",
      group: 6,
      color: "#2c3e50",
    },
    {
      id: "AWS",
      group: 6,
      color: "#2c3e50",
    },
    {
      id: "Digital Ocean",
      group: 6,
      color: "#2c3e50",
    },
  ],
  links: [
    { source: "Sebastian Ahlman", target: "!Webb", color: "#3498db" },
    { source: "Sebastian Ahlman", target: "!Games", color: "#27ae60" },
    { source: "Sebastian Ahlman", target: "!Mobile", color: "#e74c3c" },
    { source: "Sebastian Ahlman", target: "!Databases", color: "#8e44ad" },
    { source: "Sebastian Ahlman", target: "!Authentication", color: "#f39c12" },
    { source: "Sebastian Ahlman", target: "!Deployment", color: "#2c3e50" },
    { source: "!Webb", target: "Typescript", color: "#3498db" },
    { source: "!Webb", target: "Node.js", color: "#3498db" },
    { source: "!Webb", target: "React", color: "#3498db" },
    { source: "!Webb", target: "NextJS", color: "#3498db" },
    { source: "!Webb", target: "Tailwind CSS", color: "#3498db" },
    { source: "!Webb", target: "Bootstrap", color: "#3498db" },
    { source: "!Webb", target: "Shadcn", color: "#3498db" },
    { source: "!Games", target: "Unity", color: "#27ae60" },
    { source: "!Games", target: "C#", color: "#27ae60" },
    { source: "!Games", target: "Unity Gaming Services", color: "#27ae60" },
    { source: "!Games", target: "Unity AR", color: "#27ae60" },
    { source: "!Mobile", target: "React Native", color: "#e74c3c" },
    { source: "!Mobile", target: "Expo", color: "#e74c3c" },
    {
      source: "!Mobile",
      target: "Expo Application Services",
      color: "#e74c3c",
    },
    { source: "!Mobile", target: "RevenueCat", color: "#e74c3c" },
    { source: "!Databases", target: "PostgreSQL", color: "#8e44ad" },
    { source: "!Databases", target: "MongoDB", color: "#8e44ad" },
    { source: "!Databases", target: "Supabase", color: "#8e44ad" },
    { source: "!Authentication", target: "Clerk", color: "#f39c12" },
    { source: "!Authentication", target: "Auth0", color: "#f39c12" },
    { source: "!Authentication", target: "JWT", color: "#f39c12" },
    { source: "!Deployment", target: "Vercel", color: "#2c3e50" },
    { source: "!Deployment", target: "Heroku", color: "#2c3e50" },
    { source: "!Deployment", target: "AWS", color: "#2c3e50" },
    { source: "!Deployment", target: "Digital Ocean", color: "#2c3e50" },
  ],
};

function KnowledgeMap() {
  const ref = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number }>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    ref.current.d3Force("link").distance((l: any) => {
      return 60;
    });
  }, [ref]);

  useLayoutEffect(() => {
    setSize({
      height: document.documentElement.clientHeight * 0.8,
      width: wrapperRef.current?.clientWidth ?? 10,
    });
  }, [wrapperRef]);

  return (
    <div
      className="2xl:w-2/3 lg:w-2/3 w-11/12 rounded-xl border-white border-2"
      ref={wrapperRef}
    >
      <ForceGraph2D
        ref={ref}
        height={size.height}
        width={size.width}
        graphData={getGraph()}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize =
            (12 / globalScale) *
            (label.startsWith("Sebastian")
              ? 1.5
              : label.startsWith("!")
              ? 1.2
              : 1);
          ctx.font = `${fontSize}px Sans-Serif`;

          ctx.fillStyle = node.color;

          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(label.replace("!", ""), node.x ?? 0, node.y ?? 0);
        }}
      />
    </div>
  );
}

export default KnowledgeMap;

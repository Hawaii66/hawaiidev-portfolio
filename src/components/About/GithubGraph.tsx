"use client";

import dynamic from "next/dynamic";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function GithubGraph() {
  return (
    <GitHubCalendar
      username="Hawaii66"
      blockMargin={2}
      colorScheme="light"
      weekStart={1}
      hideColorLegend={false}
      hideMonthLabels={false}
      hideTotalCount={false}
      style={{
        color: "#000",
        fontWeight: "600",
      }}
    />
  );
}

export default GithubGraph;

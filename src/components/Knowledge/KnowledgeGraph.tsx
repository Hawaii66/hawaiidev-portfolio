"use client";

import { getGraph } from "@/utils/Knowledge/Graph";
import React, { useEffect, useState } from "react";
import Graph from "react-graph-vis";

type Props = {
  setSelected: (selected: string) => void;
};

function KnowledgeGraph({ setSelected }: Props) {
  const [height, setHeight] = useState(200);

  const nodes: {
    id: number;
    label: string;
    title: string;
    color: string;
    mass: number;
  }[] = getGraph().nodes.map((i, idx) => ({
    id: idx,
    label: i.id.replace("!", ""),
    title: i.id,
    color: i.color,
    mass: idx === 0 ? 4 : i.id.includes("!") ? 3 : 1,
  }));
  const links: {
    from: number;
    to: number;
    color: string;
    id: number;
    width: number;
  }[] = getGraph().links.map((link, idx) => ({
    from: nodes.find((i) => i.title === link.target)?.id ?? -1,
    to: nodes.find((i) => i.title === link.source)?.id ?? -1,
    color: nodes.find((i) => i.title === link.target)?.color ?? "#FFF",
    id: idx,
    width: nodes.find((i) => i.title === link.source)?.id === 0 ? 4 : 2,
  }));

  useEffect(() => {
    setHeight((document.documentElement.clientHeight ?? 0) * 0.8);
  }, []);

  return (
    <Graph
      options={{
        height: `${height}px`,
        nodes: {
          borderWidth: 2,
          borderWidthSelected: 1,
          margin: 12,
        },
      }}
      events={{
        selectNode: (node: { nodes: number[] }) => {
          setSelected(nodes[node.nodes[0]].title.replace("!", ""));
        },
        deselectNode: () => {
          setSelected("");
        },
      }}
      graph={{
        nodes: nodes,
        edges: links,
      }}
    />
  );
}

export default KnowledgeGraph;

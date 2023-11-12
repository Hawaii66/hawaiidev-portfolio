import { getGraph } from "@/utils/Knowledge/Graph";
import React from "react";
import Graph from "react-graph-vis";

function KnowledgeGraph() {
  const nodes: { id: number; label: string; title: string; color: string }[] =
    getGraph().nodes.map((i, idx) => ({
      id: idx,
      label: i.id,
      title: i.id,
      color: i.color,
    }));
  const links: { from: number; to: number }[] = getGraph().links.map(
    (link) => ({
      from: nodes.find((i) => i.label === link.target)?.id ?? 0,
      to: nodes.find((i) => i.label === link.source)?.id ?? 0,
    })
  );

  return (
    <Graph
      graph={{
        nodes: nodes,
        edges: links,
      }}
    />
  );
}

export default KnowledgeGraph;

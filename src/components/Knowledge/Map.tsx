"use client";

import dynamic from "next/dynamic";

const Graph = dynamic(
  () =>
    import("@/components/Knowledge/KnowledgeGraph").then((cmp) => cmp.default),
  { ssr: false }
);

function KnowledgeMap() {
  return (
    <div className="2xl:w-2/3 lg:w-2/3 w-11/12 rounded-xl border-white border-2">
      <Graph />
    </div>
  );
}

export default KnowledgeMap;

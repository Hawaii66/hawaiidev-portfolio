"use client";

import FixedBackButton from "@/components/FixedBackButton";
import Category from "@/components/Knowledge/Category";
import ListWrapper from "@/components/Knowledge/ListWrapper";
import KnowledgeMap from "@/components/Knowledge/Map";
import { categories } from "@/utils/Knowledge/Graph";
import dynamic from "next/dynamic";
import { useState } from "react";

const ListWrapperLazy = dynamic(
  () => import("@/components/Knowledge/ListWrapper").then((cmp) => cmp.default),
  { ssr: false }
);

function Page() {
  const [selected, setSelected] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <FixedBackButton link="/" />
      <div className="flex flex-grow flex-col 2xl:flex-row justify-center items-center p-12 gap-4">
        <KnowledgeMap setSelected={setSelected} />
        <ListWrapperLazy>
          <div className="h-full flex flex-grow flex-col">
            <h1 className="text-5xl font-bold font-mono text-center pb-4">
              Knowledge
            </h1>
            <ul className="flex flex-row flex-grow justify-start items-start flex-wrap gap-8">
              {categories.map((i) => (
                <Category
                  selected={selected}
                  key={i.title}
                  color={i.color}
                  techs={i.techs}
                  title={i.title}
                />
              ))}
            </ul>
            <p className="w-full text-right align-bottom text-white font-mono">
              Some of the things I know
            </p>
          </div>
        </ListWrapperLazy>
      </div>
    </div>
  );
}

export default Page;

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

type Props = {
  showHomeLink: boolean;
};

export function KnowledgePage({ showHomeLink }: Props) {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {showHomeLink && <FixedBackButton link="/" />}
      <div className="flex 2xl:flex-row flex-col flex-grow justify-center items-center gap-4 p-12">
        <KnowledgeMap setSelected={setSelected} />
        <ListWrapperLazy>
          <div className="flex flex-col flex-grow h-full">
            <h1 className="pb-4 font-mono font-bold text-5xl text-center">
              Knowledge
            </h1>
            <ul className="flex flex-row flex-wrap flex-grow justify-start items-start gap-8">
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
            <p className="w-full font-mono text-white text-right align-bottom">
              Some of the things I know
            </p>
          </div>
        </ListWrapperLazy>
      </div>
    </div>
  );
}

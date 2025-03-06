import FixedBackButton from "@/components/FixedBackButton";
import NotFoundRenderer from "@/components/NotFound";
import Project from "@/components/Projects/Sections/Project";
import { Akroken } from "@/utils/Projects/Akroken";
import { EnskildaKiller } from "@/utils/Projects/Enskildakiller";
import { Portfolio } from "@/utils/Projects/Portfolio";
import { Reelly } from "@/utils/Projects/Reelly";
import React from "react";

function Page({ params }: { params: { name: string } }) {
  const renderProject = () => {
    switch (params.name) {
      case "enskildakiller":
        return <Project project={EnskildaKiller} />;
      case "akroken":
        return <Project project={Akroken} />;
      case "portfolio":
        return <Project project={Portfolio} />;
      case "reelly":
        return <Project project={Reelly} />;
    }
  };

  const project = renderProject();

  return (
    <div className="flex flex-col justify-center items-center">
      <FixedBackButton link="/projects" />
      <div className="w-1/2">
        {project === undefined ? <NotFoundRenderer /> : project}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return ["enskildakiller", "akroken", "portfolio", "reelly"];
}

export default Page;

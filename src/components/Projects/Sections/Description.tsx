import React from "react";

export type DescriptionProps = {
  description: string;
};

function Description({ description }: DescriptionProps) {
  return (
    <p className="text-slate-200 font-serif tracking-wide flex-grow">
      - {description}
    </p>
  );
}

export default Description;

import React from "react";

export type CategoryProps = {
  title: string;
  techs: string[];
  color: string;
};

function Category({ techs, title, color }: CategoryProps) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold font-mono" style={{ color: color }}>
        {title}
      </h2>
      <div>
        {techs.map((tech) => (
          <li className="text-lg font-mono pl-4">- {tech}</li>
        ))}
      </div>
    </div>
  );
}

export default Category;

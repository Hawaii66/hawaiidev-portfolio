import React from "react";

export type CategoryProps = {
  title: string;
  techs: string[];
  color: string;
  selected?: string;
};

function Category({ techs, title, color, selected }: CategoryProps) {
  return (
    <div className="">
      <h2
        className={`text-2xl font-bold font-mono ${
          selected === title ? "underline" : ""
        }`}
        style={{ color: color }}
      >
        {title}
      </h2>
      <div>
        {techs.map((tech) => (
          <li key={tech} className="text-lg font-mono pl-4">
            -{" "}
            <span
              className={`${
                selected === tech ? "font-extrabold" : "font-normal"
              }`}
              style={{
                color: selected === tech ? color : undefined,
              }}
            >
              {tech}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Category;

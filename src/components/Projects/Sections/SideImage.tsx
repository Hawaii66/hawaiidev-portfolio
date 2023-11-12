import React from "react";
import Project from "./Project";
import { DescriptionProps } from "./Description";
import { ImageProps } from "./Image";

export type SideImageProps = DescriptionProps &
  ImageProps & {
    imageSide: "right" | "left";
  };

function SideImage({ imageSide, description, url }: SideImageProps) {
  return (
    <div
      className={`${
        imageSide === "left" ? "flex-row" : "flex-row-reverse"
      } flex gap-4 w-full`}
    >
      <div className="w-1/2">
        <Project.Image url={url} />
      </div>

      <div className="w-1/2">
        <Project.Description description={description} />
      </div>
    </div>
  );
}

export default SideImage;

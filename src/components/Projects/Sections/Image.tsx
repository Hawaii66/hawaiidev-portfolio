import React from "react";

export type ImageProps = {
  url: string;
};

function Image({ url }: ImageProps) {
  return <img src={url} className="w-full rounded-xl" />;
}

export default Image;

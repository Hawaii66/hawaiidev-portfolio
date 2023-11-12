import React from "react";
import Link from "next/link";

export type LinkProps = {
  link: string;
  text: string;
};

function LinkRenderer({ link, text }: LinkProps) {
  return (
    <div className="flex flex-row gap-2">
      <p>{text}:</p>
      <Link target="_blank" href={link} className="text-blue-500">
        {link}
      </Link>
    </div>
  );
}

export default LinkRenderer;

import React from "react";
import RedButton from "./RedButton";

type Props = {
  link: string;
};

function FixedBackButton({ link }: Props) {
  return (
    <div className="fixed top-4 left-4">
      <RedButton link={link} rotation="left" />
    </div>
  );
}

export default FixedBackButton;

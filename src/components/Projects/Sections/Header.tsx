import React from "react";

export type HeaderProps = {
  header: string;
};

const Header = ({ header }: HeaderProps) => {
  return (
    <h2 className="text-lg text-green-500 font-bold underline underline-offset-4">
      {header}
    </h2>
  );
};

export default Header;

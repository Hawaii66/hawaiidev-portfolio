"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

function ListWrapper({ children }: Props) {
  return (
    <div
      style={{
        height: document.documentElement.clientHeight * 0.8,
      }}
      className="2xl:w-1/3 lg:w-2/3 w-11/12 rounded-xl border-white border-2 px-4"
    >
      {children}
    </div>
  );
}

export default ListWrapper;

import { useState } from "react";

export default function Test() {
  const [click, setCLise] = useState(5);
  return (
    <h1
      onClick={() => {
        setCLise((i) => i + 1);
      }}
    >
      Test {click}
    </h1>
  );
}

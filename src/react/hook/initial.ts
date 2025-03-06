import { useState, useEffect } from "react";

export default function useInitial() {
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    setInitial(false);
  }, []);

  return initial;
}

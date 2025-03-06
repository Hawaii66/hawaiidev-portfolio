import { useState, useEffect } from "react";

export default function useTick(delay: number) {
  const [tick, setTick] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((i) => i + 1);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return tick;
}

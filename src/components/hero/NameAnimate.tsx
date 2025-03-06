import useTick from "../../react/hook/tick";
import useInitial from "../../react/hook/initial";

export default function NameAnimate() {
  const initial = useInitial();
  const tick = useTick(200);

  const name = "Sebastian Ahlman";

  return (
    <h1 className="font-semibold text-8xl text-green-500 tracking-wide">
      {initial ? name : name.slice(0, tick)}
    </h1>
  );
}

import RedButton from "../RedButton";
import Tilt from "react-parallax-tilt";

export type CardProps = {
  title: string;
  image: string;
  description: string;
  stack: string[];
  link: string;
};

function Card({
  project: { description, image, title, stack, link },
}: {
  project: CardProps;
}) {
  return (
    <div className="aspect-card flex relative rounded-2xl overflow-hidden">
      <div className="absolute flex justify-center items-center aspect-square h-full">
        <div
          className="flex-grow h-full -z-50  animate-spin-slow"
          style={{
            scale: 10 / 4,
            animationDelay: `${-Math.random() * 10}s`,
            background: "linear-gradient(to bottom, #db2777,#4f46e5,#075985)",
          }}
        />
      </div>
      <Tilt
        tiltReverse
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className="m-4 p-4 shadow-lg z-50 shadow-black flex flex-col gap-4 bg-white relative flex-grow rounded-2xl text-black"
      >
        <div className="flex-grow flex flex-col gap-4">
          <h1 className="text-slate-800 font-bold tracking-wide text-4xl text-center">
            {title}
          </h1>
          <img src={image} className="w-full rounded-2xl" />
          <p className="text-md text-slate-800">- {description}</p>
          <div className="absolute z-50 bottom-4 right-4">
            <RedButton rotation="right" link={link} />
          </div>
        </div>
        <div>
          <p>Stack:</p>
          <p className="text-slate-800">{stack.join(", ")}</p>
        </div>
      </Tilt>
    </div>
  );
}

export default Card;

import { useEffect, useRef, useState } from "react";
import { ForceGraph2D } from "react-force-graph";
import { getGraph } from "./graph";

export default function GraphView() {
  const ref = useRef<any>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) return;
    ref.current.d3Force("link").distance(75);
  }, []);

  useEffect(() => {
    if (refDiv.current) {
      const { width, height } = refDiv.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  }, [refDiv.current]);

  return (
    <div className="w-full h-full" ref={refDiv}>
      {width !== 0 && height !== 0 && (
        <ForceGraph2D
          width={width}
          height={height}
          ref={ref}
          graphData={getGraph()}
          linkWidth={8}
          nodeAutoColorBy="group"
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 20 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(
              (n) => n + fontSize * 0.8
            );

            ctx.fillStyle = node.color ?? "#000";
            ctx.fillRect(
              (node.x ?? 0) - bckgDimensions[0] / 2,
              (node.y ?? 0) - bckgDimensions[1] / 2,
              bckgDimensions[0],
              bckgDimensions[1]
            );

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#EFEFEF";
            ctx.fillText(label, node.x ?? 0, node.y ?? 0);

            node.__bckgDimensions = bckgDimensions;
          }}
          nodePointerAreaPaint={(node, color, ctx) => {
            ctx.fillStyle = color;
            const bckgDimensions = node.__bckgDimensions;
            bckgDimensions &&
              ctx.fillRect(
                (node.x ?? 0) - bckgDimensions[0] / 2,
                (node.y ?? 0) - bckgDimensions[1] / 2,
                bckgDimensions[0],
                bckgDimensions[1]
              );
          }}
          linkColor={(l) => (l.target as any).color}
          linkDirectionalArrowLength={10}
          linkDirectionalArrowRelPos={1}
        />
      )}
    </div>
  );
}

import { ImageResponse } from "@vercel/og";
import { ChevronDown } from "lucide-react";

export const GET = async () => {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020817",
          color: "#22c55e",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              textAlign: "left",
              width: "100%",
              margin: 0,
              padding: 0,
            }}
          >
            Sebastian Ahlman
          </h1>
          <p
            style={{
              fontSize: "1rem",
              textAlign: "left",
              width: "100%",
              margin: 0,
              padding: 0,
            }}
          >
            @HawaiiDev
          </p>
          <p
            style={{
              fontSize: "1rem",
              textAlign: "left",
              width: "100%",
              color: "#7e8ca0",
              margin: 0,
              padding: 0,
            }}
          >
            Nyköping 18 år
          </p>
        </div>
      </div>
    )
  );
};

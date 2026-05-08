import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          background: "#0f172a",
          color: "#f8fafc",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 30, marginTop: 24, maxWidth: 900 }}>
          {site.hero.headline}
        </div>
        <div style={{ fontSize: 20, marginTop: 32, color: "#bae6fd" }}>
          Web development, DevOps, and AI automation
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}

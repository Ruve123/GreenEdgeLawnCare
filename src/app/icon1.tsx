import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function PngIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#14301f", borderRadius: 10 }}>
        <svg width="38" height="38" viewBox="0 0 32 32" fill="#c9e85c">
          <path d="M16 3c1.5 6 1.5 12 0 24-1.5-12-1.5-18 0-24Z" />
          <path d="M9 9c3 4 4 9 3 18C8 19 7 14 9 9Z" />
          <path d="M23 9c2 5 1 10-3 18-1-9 0-14 3-18Z" />
          <path d="M3 27h26v2H3z" />
        </svg>
      </div>
    ),
    size,
  );
}

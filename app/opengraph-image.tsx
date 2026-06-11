import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #252878 0%, #2f3494 60%, #1a1d5c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#f5a71b",
              fontSize: "28px",
              fontWeight: 700,
              color: "#252878",
            }}
          >
            RC
          </div>
          <div style={{ fontSize: "44px", fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div
          style={{
            marginTop: "48px",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "28px",
            color: "#b8bce8",
            maxWidth: "820px",
          }}
        >
          Perangkat Lunak · Cloud · Keamanan Siber · Data &amp; AI
        </div>
      </div>
    ),
    { ...size }
  );
}

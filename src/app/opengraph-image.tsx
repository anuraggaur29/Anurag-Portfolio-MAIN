import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anurag — AI/ML Engineer & Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#FFFFFF",
              display: "flex",
            }}
          >
            anurag.
          </div>

          {/* Heading */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.2,
              display: "flex",
            }}
          >
            I build things that matter.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "20px",
              color: "#A1A1AA",
              display: "flex",
            }}
          >
            AI/ML Engineer & Full Stack Developer
          </div>

          {/* Email */}
          <div
            style={{
              fontSize: "16px",
              color: "#7C3AED",
              display: "flex",
            }}
          >
            anuragshakalya@gmail.com
          </div>
        </div>

        {/* Decorative Bottom Bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            background: "#7C3AED",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

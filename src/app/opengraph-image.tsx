import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Soft Key — Rəsmi proqram lisenziyaları və rəqəmsal açarlar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = ["100% orijinal", "Ani təhvil", "7/24 dəstək"];

export default async function OpengraphImage() {
  const [interLatin400, interLatin700, interExt400, interExt700] =
    await Promise.all([
      readFile(join(process.cwd(), "src/assets/fonts/inter-latin-400.woff")),
      readFile(join(process.cwd(), "src/assets/fonts/inter-latin-700.woff")),
      readFile(
        join(process.cwd(), "src/assets/fonts/inter-latin-ext-400.woff")
      ),
      readFile(
        join(process.cwd(), "src/assets/fonts/inter-latin-ext-700.woff")
      ),
    ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08080d",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(79,209,232,0.28) 0%, rgba(79,209,232,0) 55%), radial-gradient(circle at 8% 92%, rgba(242,184,75,0.22) 0%, rgba(242,184,75,0) 55%)",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: "linear-gradient(135deg, #f2b84b, #4fd1e8)",
            }}
          >
            <svg
              width="52"
              height="26"
              viewBox="0 0 340 165"
              style={{ display: "flex" }}
            >
              <path
                fillRule="evenodd"
                fill="#08080d"
                d="M175,100 A45,45 0 1,0 85,100 A45,45 0 1,0 175,100 Z M157,100 A27,27 0 1,0 103,100 A27,27 0 1,0 157,100 Z"
              />
              <rect x="175" y="92.5" width="95" height="15" rx="2" fill="#08080d" />
              <rect
                x="235"
                y="107.5"
                width="10"
                height="22.5"
                rx="1.5"
                fill="#08080d"
              />
              <rect
                x="252.5"
                y="107.5"
                width="10"
                height="32.5"
                rx="1.5"
                fill="#08080d"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              fontFamily: "Inter, InterExt",
            }}
          >
            <span style={{ color: "#f1f1f7" }}>Soft</span>
            <span style={{ color: "#f2b84b" }}>Key</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 34,
            fontWeight: 400,
            color: "#a6a6c0",
            textAlign: "center",
            maxWidth: 880,
            fontFamily: "Inter, InterExt",
          }}
        >
          Rəsmi proqram lisenziyaları və rəqəmsal açarlar — ani təhvil
        </div>

        <div style={{ display: "flex", gap: 20, marginTop: 48 }}>
          {chips.map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 22px",
                borderRadius: 999,
                border: "1px solid #33334f",
                color: "#f1f1f7",
                fontSize: 22,
                fontFamily: "Inter, InterExt",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interLatin400, weight: 400, style: "normal" },
        { name: "Inter", data: interLatin700, weight: 700, style: "normal" },
        {
          name: "InterExt",
          data: interExt400,
          weight: 400,
          style: "normal",
        },
        {
          name: "InterExt",
          data: interExt700,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}

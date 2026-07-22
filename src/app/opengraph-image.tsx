import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Route segment config
export const alt =
  "Actions Speak Louder Than Tokens — An Insider Threat Model for Frontier AI Agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (mirror src/app/globals.css, dark theme)
const BG = "#0d1117";
const TEXT_PRIMARY = "#e6edf3";
const TEXT_SECONDARY = "#9da5b0";
const TEXT_MUTED = "#848d97";
const CYAN = "#58a6ff";
const ORANGE = "#f0883e";
const GREEN = "#3fb950";
const PURPLE = "#bc8cff";

const STATS = [
  { value: "23", label: "STRIDE Threats", color: CYAN },
  { value: "5", label: "Threat Categories", color: ORANGE },
  { value: "4", label: "Autonomy Levels", color: GREEN },
  { value: "5", label: "CERT Dimensions", color: PURPLE },
];

export default async function OpengraphImage() {
  const [mono, monoBold] = await Promise.all([
    readFile(join(process.cwd(), "src/app/_og-fonts/SpaceMono-Regular.ttf")),
    readFile(join(process.cwd(), "src/app/_og-fonts/SpaceMono-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px 80px",
          fontFamily: "Space Mono",
          position: "relative",
        }}
      >
        {/* Dot-grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(${CYAN}12 1px, transparent 1px)`,
            backgroundSize: "26px 26px",
          }}
        />
        {/* Cyan glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: 320,
            width: 640,
            height: 420,
            background: CYAN,
            opacity: 0.12,
            filter: "blur(140px)",
            borderRadius: 9999,
          }}
        />
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -80,
            width: 420,
            height: 420,
            background: PURPLE,
            opacity: 0.1,
            filter: "blur(130px)",
            borderRadius: 9999,
          }}
        />

        {/* Top: eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#161b22",
              border: `1px solid ${CYAN}55`,
              color: CYAN,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            AI
          </div>
          <div
            style={{
              color: TEXT_MUTED,
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Insider Threat Model
          </div>
        </div>

        {/* Middle: title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: TEXT_PRIMARY,
              fontWeight: 700,
              fontSize: 76,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            <span>Actions Speak Louder</span>
            <span>Than Tokens</span>
          </div>
          <div
            style={{
              marginTop: 24,
              color: TEXT_SECONDARY,
              fontSize: 30,
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            An Insider Threat Model for Frontier AI Agents
          </div>
        </div>

        {/* Bottom: stat row + byline */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 44 }}>
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <div
                  style={{ color: s.color, fontSize: 44, fontWeight: 700 }}
                >
                  {s.value}
                </div>
                <div style={{ color: TEXT_MUTED, fontSize: 17 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div style={{ color: TEXT_SECONDARY, fontSize: 22 }}>
            by Matt Adams
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Mono", data: mono, weight: 400, style: "normal" },
        { name: "Space Mono", data: monoBold, weight: 700, style: "normal" },
      ],
    },
  );
}

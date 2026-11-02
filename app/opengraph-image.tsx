import { ImageResponse } from "next/og";

export const alt = "MEGH Overseas — Rooted in India. Loved worldwide.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px 84px",
        color: "white",
        background: "linear-gradient(120deg, #031a39 0%, #064593 70%, #0a2b55 100%)",
        fontFamily: "Arial, sans-serif",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", width: 72, height: 62, alignItems: "center", justifyContent: "center", border: "3px solid #b1d900", borderRadius: 32, background: "#064593", fontSize: 26, fontWeight: 800 }}>MEGH</div>
          <div style={{ display: "flex", color: "#b1d900", fontSize: 18, letterSpacing: 4 }}>OVERSEAS PRIVATE LTD.</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", color: "#b1d900", fontSize: 19, letterSpacing: 5 }}>AHMEDABAD · INDIA</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 66, fontWeight: 600, letterSpacing: -3, lineHeight: 1.14 }}>Rooted in India.<span>Loved worldwide.</span></div>
          <div style={{ display: "flex", color: "#cbd6e6", fontSize: 22 }}>Authentic Indian food products, shared with the world.</div>
        </div>
        <div style={{ display: "flex", width: "100%", height: 2, background: "#b1d900" }} />
      </div>
    ),
    { ...size },
  );
}

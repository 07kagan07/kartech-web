import { ORBITRON_BASE64, RAJDHANI_BASE64 } from "./fonts"

interface KartechLogoProps {
  variant?: "light" | "dark"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function KartechLogo({
  variant = "light",
  size = "md",
  className = "",
}: KartechLogoProps) {
  const isLight = variant === "light"

  const sizeMap = {
    sm: { maxWidth: 360 },
    md: { maxWidth: 520 },
    lg: { maxWidth: 680 },
  }

  const maxWidth = sizeMap[size].maxWidth

  const karColor = isLight ? "#0a1540" : "#ddeeff"
  const techColor = isLight ? "#0044cc" : "#00d4ff"
  const taglineColor = isLight ? "#4a5c8a" : "#5a7aaa"
  const ampColor = isLight ? "#0044cc" : "#0077ff"
  const techGlow = !isLight

  return (
    <svg
      viewBox="0 0 832 162"
      width="100%"
      style={{ maxWidth, display: "block" }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KARTECH Logo"
    >
      <defs>
        {/* Sağ blok için görünür alan:
            x değeri KAR yazısının sonundan biraz sonra başlıyor. */}
        <clipPath id="kartech-right-clip">
          <rect x="372" y="10" width="450" height="152" />
        </clipPath>
        {techGlow && (
          <filter id="tech-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0   0 0 0 0 0.83   0 0 0 0 1   0 0 0 0.8 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
        <style>
          {`
            @font-face {
              font-family: 'Orbitron';
              src: url('${ORBITRON_BASE64}') format('woff2');
              font-weight: 900;
              font-style: normal;
            }
            @font-face {
              font-family: 'Rajdhani';
              src: url('${RAJDHANI_BASE64}') format('woff2');
              font-weight: 700;
              font-style: normal;
            }
            .kar-text {
              font-family: 'Orbitron', system-ui, sans-serif;
              font-weight: 900;
              letter-spacing: 4px;
            }
            .tech-text {
              font-family: 'Orbitron', system-ui, sans-serif;
              font-weight: 900;
              letter-spacing: 0px;
            }
            .tagline-text {
              font-family: 'Rajdhani', system-ui, sans-serif;
              font-weight: 700;
              letter-spacing: 0px;
            }
          `}
        </style>
      </defs>

      {/* KAR - sol blok, referans yüksekliği */}
      <text x="32" y="135" fontSize="140" className="kar-text" fill={karColor}>
        KAR
      </text>

      {/* Sağ blok: TECH + tagline.
          Her ikisi de x=372'den başlar, textLength=390 ile tam 390px genişliğe
          kilitlenir. Sol ve sağ kenar her zaman birebir aynı — font metrigi
          ve rendering bağımsız. */}
      <g clipPath="url(#kartech-right-clip)">
        <text x="404" y="95" fontSize="85" textLength="396" lengthAdjust="spacing" className="tech-text" fill={techColor} filter={techGlow ? "url(#tech-glow)" : undefined}>TECH</text>

        <text x="404" y="133" fontSize="25" textLength="390" lengthAdjust="spacing" className="tagline-text" fill={taglineColor}><tspan>{"TEKNOLOJİ "}</tspan><tspan fill={ampColor}>{"&"}</tspan><tspan fill={taglineColor}>{" GÜVENLİK"}</tspan></text>
      </g>
    </svg>
  )
}

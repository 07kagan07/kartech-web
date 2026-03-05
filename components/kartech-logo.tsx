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
    sm: { scale: 0.45 },
    md: { scale: 0.65 },
    lg: { scale: 0.85 },
  }

  const baseWidth = 730
  const baseHeight = 190
  const scale = sizeMap[size].scale
  const width = baseWidth * scale
  const height = baseHeight * scale

  const karColor = isLight ? "#0a1540" : "#ddeeff"
  const techColor = isLight ? "#0044cc" : "#00d4ff"
  const taglineColor = isLight ? "#4a5c8a" : "#5a7aaa"
  const ampColor = isLight ? "#0044cc" : "#0077ff"
  const techGlow = !isLight

  return (
    <svg
      viewBox="0 0 730 190"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KARTECH Logo"
    >
      <defs>
        {/* Sağ blok için görünür alan:
            x değeri KAR yazısının sonundan biraz sonra başlıyor. */}
        <clipPath id="kartech-right-clip">
          <rect x="230" y="40" width="520" height="120" />
        </clipPath>
        {techGlow && (
          <filter id="tech-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0   0 0 0 0 0.83   0 0 0 0 1   0 0 0 0.8 0"
            />
          </filter>
        )}
        <style>
          {`
            .kar-text {
              font-family: 'Orbitron', system-ui, sans-serif;
              font-weight: 900;
              letter-spacing: 4px;
            }
            .tech-text {
              font-family: 'Orbitron', system-ui, sans-serif;
              font-weight: 900;
              letter-spacing: 10px;
            }
            .tagline-text {
              font-family: 'Rajdhani', system-ui, sans-serif;
              font-weight: 700;
              letter-spacing: 6px;
            }
          `}
        </style>
      </defs>

      {/* KAR - sol blok, referans yüksekliği */}
      <text x="0" y="135" fontSize="100" className="kar-text" fill={karColor}>
        KAR
      </text>

      {/* Sağ blok: TECH + tagline */}
      <g clipPath="url(#kartech-right-clip)">
        <text
          x="260"
          y="100"
          fontSize="50"
          className="tech-text"
          fill={techColor}
          filter={techGlow ? "url(#tech-glow)" : undefined}
        >
          TECH
        </text>

        <text
          x="265"
          y="135"
          fontSize="30"
          className="tagline-text"
          fill={taglineColor}
        >
          TEKNOLOJİ{" "}
          <tspan fill={ampColor}>&amp;</tspan>
          {" GÜVENLİK"}
        </text>
      </g>
    </svg>
  )
}

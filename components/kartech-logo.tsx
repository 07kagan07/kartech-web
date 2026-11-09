import { LOGO } from "./logo-paths"

interface KartechLogoProps {
  variant?: "light" | "dark"
  size?: "sm" | "md" | "lg"
  className?: string
}

/**
 * KARTECH logosu. Yazılar font'a bağlı değil, glyph path'leri olarak çiziliyor
 * (bkz. logo-paths.ts) — bu sayede hizalama her tarayıcıda ve export'larda
 * birebir aynı:
 *  - KAR üst kenarı = TECH üst kenarı
 *  - KAR alt kenarı = "TEKNOLOJİ & GÜVENLİK" taban çizgisi
 *  - TECH ve alt yazı solda (T–T) ve sağda (H–K) aynı noktada
 */
export function KartechLogo({
  variant = "light",
  size = "md",
  className = "",
}: KartechLogoProps) {
  const isLight = variant === "light"

  const maxWidth = { sm: 360, md: 520, lg: 680 }[size]

  const karColor = isLight ? "#0a1540" : "#ddeeff"
  const techColor = isLight ? "#0044cc" : "#00d4ff"
  const taglineColor = isLight ? "#4a5c8a" : "#5a7aaa"
  const ampColor = isLight ? "#0044cc" : "#0077ff"
  const techGlow = !isLight

  return (
    <svg
      viewBox={LOGO.viewBox}
      width="100%"
      style={{ maxWidth, display: "block" }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="KARTECH Teknoloji & Güvenlik"
    >
      {techGlow && (
        <defs>
          <filter id="kartech-tech-glow" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
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
        </defs>
      )}

      <path d={LOGO.kar} fill={karColor} />
      <path
        d={LOGO.tech}
        fill={techColor}
        filter={techGlow ? "url(#kartech-tech-glow)" : undefined}
      />
      <path d={LOGO.tagline} fill={taglineColor} />
      <path d={LOGO.amp} fill={ampColor} />
    </svg>
  )
}

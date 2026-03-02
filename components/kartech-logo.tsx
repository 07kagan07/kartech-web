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
    sm: { kartech: "text-2xl", tagline: "text-[9px] tracking-[2px]" },
    md: { kartech: "text-4xl", tagline: "text-[11px] tracking-[2.5px]" },
    lg: { kartech: "text-6xl", tagline: "text-sm tracking-[3.5px]" },
  }

  const s = sizeMap[size]

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline leading-none">
        <span
          className={`font-logo font-black ${s.kartech} ${
            isLight ? "text-[#0a1540]" : "text-[#ddeeff]"
          }`}
          style={{ letterSpacing: "1px" }}
        >
          KAR
        </span>
        <span
          className={`font-logo font-black ${s.kartech} ${
            isLight ? "text-[#0044cc]" : "text-[#00d4ff]"
          }`}
          style={{
            letterSpacing: "4px",
            textShadow: isLight ? "none" : "0 0 18px rgba(0,212,255,0.5)",
          }}
        >
          TECH
        </span>
      </div>
      <span
        className={`font-logo-tag font-bold uppercase whitespace-nowrap leading-none ${s.tagline} ${
          isLight ? "text-[#4a5c8a]" : "text-[#5a7aaa]"
        }`}
      >
        {"teknoloji "}
        <span className={isLight ? "text-[#0044cc]" : "text-[#0077ff]"}>{"&"}</span>
        {" güvenlik"}
      </span>
    </div>
  )
}

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
    sm: { kar: "text-3xl", tech: "text-lg", tagline: "text-[9px] tracking-[2px]", rightPl: "pl-1" },
    md: { kar: "text-5xl", tech: "text-[28px]", tagline: "text-[11px] tracking-[2.5px]", rightPl: "pl-1.5" },
    lg: { kar: "text-7xl", tech: "text-[42px]", tagline: "text-sm tracking-[3.5px]", rightPl: "pl-2" },
  }

  const s = sizeMap[size]

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-stretch">
        <span
          className={`font-logo font-black leading-none flex items-center ${s.kar} ${
            isLight ? "text-[#0a1540]" : "text-[#ddeeff]"
          }`}
          style={{ letterSpacing: "1px" }}
        >
          KAR
        </span>
        <div className={`flex flex-col justify-between ${s.rightPl}`}>
          <span
            className={`font-logo font-black leading-none ${s.tech} ${
              isLight ? "text-[#0044cc]" : "text-[#00d4ff]"
            }`}
            style={{
              letterSpacing: "4px",
              textShadow: isLight ? "none" : "0 0 18px rgba(0,212,255,0.5)",
            }}
          >
            TECH
          </span>
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
      </div>
    </div>
  )
}

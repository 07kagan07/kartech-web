import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logo İndir",
  robots: { index: false, follow: false },
}

export default function LogoExportLayout({ children }: { children: React.ReactNode }) {
  return children
}

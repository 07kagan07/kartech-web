"use client"

import { useRef } from "react"
import { KartechLogo } from "@/components/kartech-logo"

const SCALE = 3

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function serializeSvg(svg: SVGElement): { blob: Blob; w: number; h: number } {
  // Gerçekte ekranda render edilen boyutu alıyoruz
  const rect = svg.getBoundingClientRect()
  const w = Math.round(rect.width)
  const h = Math.round(rect.height)

  // SVG'yi klonla, width/height'ı render boyutuna set et (viewBox korunuyor)
  const clone = svg.cloneNode(true) as SVGSVGElement
  clone.setAttribute("width", String(w))
  clone.setAttribute("height", String(h))

  const str = new XMLSerializer().serializeToString(clone)
  return {
    blob: new Blob([str], { type: "image/svg+xml;charset=utf-8" }),
    w,
    h,
  }
}

function renderSvgToCanvas(
  svgBlob: Blob,
  w: number,
  h: number,
  bgColor: string | null
): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(svgBlob)
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = w * SCALE
      canvas.height = h * SCALE
      const ctx = canvas.getContext("2d")
      if (!ctx) { URL.revokeObjectURL(url); reject(new Error("no ctx")); return }
      if (bgColor) {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(url)
      resolve(canvas)
    }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("load error")) }
    img.src = url
  })
}

function getSvgEl(ref: React.RefObject<HTMLDivElement | null>): SVGElement | null {
  return ref.current?.querySelector("svg") ?? null
}

export default function LogoExportPage() {
  const lightRef = useRef<HTMLDivElement>(null)
  const darkRef = useRef<HTMLDivElement>(null)

  const handleSvg = (ref: React.RefObject<HTMLDivElement | null>, suffix: string) => {
    const svg = getSvgEl(ref)
    if (!svg) return
    const { blob } = serializeSvg(svg)
    downloadBlob(blob, `kartech-logo-${suffix}.svg`)
  }

  const handlePng = async (ref: React.RefObject<HTMLDivElement | null>, suffix: string) => {
    const svg = getSvgEl(ref)
    if (!svg) return
    const { blob, w, h } = serializeSvg(svg)
    const canvas = await renderSvgToCanvas(blob, w, h, null)
    canvas.toBlob((b) => b && downloadBlob(b, `kartech-logo-${suffix}.png`), "image/png", 1)
  }

  const handleJpg = async (ref: React.RefObject<HTMLDivElement | null>, suffix: string, bgColor: string) => {
    const svg = getSvgEl(ref)
    if (!svg) return
    const { blob, w, h } = serializeSvg(svg)
    const canvas = await renderSvgToCanvas(blob, w, h, bgColor)
    canvas.toBlob((b) => b && downloadBlob(b, `kartech-logo-${suffix}.jpg`), "image/jpeg", 1)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold text-gray-800">KARTECH Logo İndir</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center items-stretch">

        {/* Light */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center gap-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-700">Açık Tema Logosu</h2>
          <div ref={lightRef} className="bg-white p-6 rounded border border-gray-100 w-full flex items-center justify-center min-h-[160px]">
            <KartechLogo variant="light" size="lg" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-auto">
            <button type="button" onClick={() => handleSvg(lightRef, "light")}
              className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700 transition">
              SVG İndir
            </button>
            <button type="button" onClick={() => handlePng(lightRef, "light")}
              className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-700 transition">
              Şeffaf PNG
            </button>
            <button type="button" onClick={() => handleJpg(lightRef, "light", "#ffffff")}
              className="px-5 py-2 bg-teal-600 text-white text-sm font-medium rounded-md shadow hover:bg-teal-700 transition">
              Beyaz JPG
            </button>
          </div>
        </div>

        {/* Dark */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center gap-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-700">Koyu Tema Logosu</h2>
          <div ref={darkRef} className="bg-gray-900 p-6 rounded border border-gray-800 w-full flex items-center justify-center min-h-[160px]">
            <KartechLogo variant="dark" size="lg" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-auto">
            <button type="button" onClick={() => handleSvg(darkRef, "dark")}
              className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700 transition">
              SVG İndir
            </button>
            <button type="button" onClick={() => handlePng(darkRef, "dark")}
              className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-700 transition">
              Şeffaf PNG
            </button>
            <button type="button" onClick={() => handleJpg(darkRef, "dark", "#111827")}
              className="px-5 py-2 bg-teal-600 text-white text-sm font-medium rounded-md shadow hover:bg-teal-700 transition">
              Koyu JPG
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

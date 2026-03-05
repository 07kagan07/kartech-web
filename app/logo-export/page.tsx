"use client"

import { useRef, useCallback } from "react"
import { KartechLogo } from "@/components/kartech-logo"

const SCALE = 3 // PNG/JPG çözünürlük çarpanı artırıldı
const ORIGINAL_WIDTH = 800
const ORIGINAL_HEIGHT = 190

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export default function LogoExportPage() {
  const lightContainerRef = useRef<HTMLDivElement>(null)
  const darkContainerRef = useRef<HTMLDivElement>(null)

  const getSvg = useCallback((ref: React.RefObject<HTMLDivElement | null>) => {
    return ref.current?.querySelector("svg") ?? null
  }, [])

  const getSvgDataUrl = useCallback((ref: React.RefObject<HTMLDivElement | null>) => {
    const svg = getSvg(ref)
    if (!svg) return null
    const clone = svg.cloneNode(true) as SVGElement

    clone.setAttribute("viewBox", `0 0 ${ORIGINAL_WIDTH} ${ORIGINAL_HEIGHT}`)
    clone.setAttribute("width", String(ORIGINAL_WIDTH * SCALE))
    clone.setAttribute("height", String(ORIGINAL_HEIGHT * SCALE))

    const s = new XMLSerializer().serializeToString(clone)
    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(s)))
  }, [getSvg])

  const downloadSvg = useCallback((ref: React.RefObject<HTMLDivElement | null>, suffix: string) => {
    const svg = getSvg(ref)
    if (!svg) return
    const clone = svg.cloneNode(true) as SVGElement
    clone.setAttribute("viewBox", `0 0 ${ORIGINAL_WIDTH} ${ORIGINAL_HEIGHT}`)
    clone.setAttribute("width", String(ORIGINAL_WIDTH))
    clone.setAttribute("height", String(ORIGINAL_HEIGHT))

    const s = new XMLSerializer().serializeToString(clone)
    const blob = new Blob([s], { type: "image/svg+xml;charset=utf-8" })
    downloadBlob(blob, `kartech-logo-${suffix}.svg`)
  }, [getSvg])

  const downloadPng = useCallback((ref: React.RefObject<HTMLDivElement | null>, suffix: string) => {
    const dataUrl = getSvgDataUrl(ref)
    if (!dataUrl) return
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const w = ORIGINAL_WIDTH * SCALE
      const h = ORIGINAL_HEIGHT * SCALE
      const canvas = document.createElement("canvas")
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // PNG için arka plan daima şeffaf yapıyoruz
      ctx.fillStyle = "transparent"
      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(img, 0, 0, w, h)

      canvas.toBlob(
        (blob) => blob && downloadBlob(blob, `kartech-logo-${suffix}.png`),
        "image/png",
        1
      )
    }
    img.src = dataUrl
  }, [getSvgDataUrl])

  const downloadJpg = useCallback((ref: React.RefObject<HTMLDivElement | null>, suffix: string, bgColor: string = "#ffffff") => {
    const dataUrl = getSvgDataUrl(ref)
    if (!dataUrl) return
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const w = ORIGINAL_WIDTH * SCALE
      const h = ORIGINAL_HEIGHT * SCALE
      const canvas = document.createElement("canvas")
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // JPG şeffaflık desteklemediği için uygun bir renk ile dolduruyoruz
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, w, h)
      ctx.drawImage(img, 0, 0, w, h)

      canvas.toBlob(
        (blob) => blob && downloadBlob(blob, `kartech-logo-${suffix}.jpg`),
        "image/jpeg",
        1
      )
    }
    img.src = dataUrl
  }, [getSvgDataUrl])

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold text-gray-800">KARTECH Logo İndir</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center items-stretch">

        {/* Light Theme Logo Card */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center gap-6 flex-1 w-full">
          <h2 className="text-lg font-semibold text-gray-700">Açık Tema Logosu</h2>
          <div ref={lightContainerRef} className="bg-white p-6 rounded border border-gray-100 w-full flex items-center justify-center min-h-[160px]">
            <KartechLogo variant="light" size="lg" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-auto">
            <button
              type="button"
              onClick={() => downloadSvg(lightContainerRef, "light")}
              className="px-5 py-2 bg-indigo-600 text-white font-medium text-sm rounded-md shadow hover:bg-indigo-700 transition"
            >
              SVG İndir
            </button>
            <button
              type="button"
              onClick={() => downloadPng(lightContainerRef, "light")}
              className="px-5 py-2 bg-blue-600 text-white font-medium text-sm rounded-md shadow hover:bg-blue-700 transition"
            >
              Şeffaf PNG
            </button>
            <button
              type="button"
              onClick={() => downloadJpg(lightContainerRef, "light", "#ffffff")}
              className="px-5 py-2 bg-teal-600 text-white font-medium text-sm rounded-md shadow hover:bg-teal-700 transition"
            >
              Beyaz JPG
            </button>
          </div>
        </div>

        {/* Dark Theme Logo Card */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center gap-6 flex-1 w-full">
          <h2 className="text-lg font-semibold text-gray-700">Koyu Tema Logosu</h2>
          <div ref={darkContainerRef} className="bg-gray-900 p-6 rounded border border-gray-800 w-full flex items-center justify-center min-h-[160px]">
            <KartechLogo variant="dark" size="lg" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-auto">
            <button
              type="button"
              onClick={() => downloadSvg(darkContainerRef, "dark")}
              className="px-5 py-2 bg-indigo-600 text-white font-medium text-sm rounded-md shadow hover:bg-indigo-700 transition"
            >
              SVG İndir
            </button>
            <button
              type="button"
              onClick={() => downloadPng(darkContainerRef, "dark")}
              className="px-5 py-2 bg-blue-600 text-white font-medium text-sm rounded-md shadow hover:bg-blue-700 transition"
            >
              Şeffaf PNG
            </button>
            <button
              type="button"
              onClick={() => downloadJpg(darkContainerRef, "dark", "#111827")}
              className="px-5 py-2 bg-teal-600 text-white font-medium text-sm rounded-md shadow hover:bg-teal-700 transition"
            >
              Koyu JPG
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

"use client"

import { useRef, useCallback } from "react"
import { KartechLogo } from "@/components/kartech-logo"

const SCALE = 3 // PNG/JPG çözünürlük çarpanı artırıldı
const ORIGINAL_WIDTH = 670
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
  const containerRef = useRef<HTMLDivElement>(null)

  const getSvg = useCallback(() => {
    return containerRef.current?.querySelector("svg") ?? null
  }, [])

  const getSvgDataUrl = useCallback(() => {
    const svg = getSvg()
    if (!svg) return null
    const clone = svg.cloneNode(true) as SVGElement

    clone.setAttribute("viewBox", `0 0 ${ORIGINAL_WIDTH} ${ORIGINAL_HEIGHT}`)
    clone.setAttribute("width", String(ORIGINAL_WIDTH * SCALE))
    clone.setAttribute("height", String(ORIGINAL_HEIGHT * SCALE))

    const s = new XMLSerializer().serializeToString(clone)
    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(s)))
  }, [getSvg])

  const downloadSvg = useCallback(() => {
    const svg = getSvg()
    if (!svg) return
    const clone = svg.cloneNode(true) as SVGElement
    clone.setAttribute("viewBox", `0 0 ${ORIGINAL_WIDTH} ${ORIGINAL_HEIGHT}`)
    clone.setAttribute("width", String(ORIGINAL_WIDTH))
    clone.setAttribute("height", String(ORIGINAL_HEIGHT))

    const s = new XMLSerializer().serializeToString(clone)
    const blob = new Blob([s], { type: "image/svg+xml;charset=utf-8" })
    downloadBlob(blob, "kartech-logo.svg")
  }, [getSvg])

  const downloadPng = useCallback(() => {
    const dataUrl = getSvgDataUrl()
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
      ctx.fillStyle = "transparent" // PNG için arka planı şeffaf bırakıyoruz ki logoda arka plan olmasın
      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(img, 0, 0, w, h)
      canvas.toBlob(
        (blob) => blob && downloadBlob(blob, "kartech-logo.png"),
        "image/png",
        1
      )
    }
    img.src = dataUrl
  }, [getSvgDataUrl])

  const downloadJpg = useCallback(() => {
    const dataUrl = getSvgDataUrl()
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
      ctx.fillStyle = "#ffffff" // JPG şeffaf desteklemez, beyaz arka plan
      ctx.fillRect(0, 0, w, h)
      ctx.drawImage(img, 0, 0, w, h)
      canvas.toBlob(
        (blob) => blob && downloadBlob(blob, "kartech-logo.jpg"),
        "image/jpeg",
        1
      )
    }
    img.src = dataUrl
  }, [getSvgDataUrl])

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold text-gray-800">KARTECH Logo İndir</h1>
      <div ref={containerRef} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center min-w-[300px]">
        <KartechLogo variant="light" size="lg" />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={downloadSvg}
          className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-md shadow hover:bg-indigo-700 transition duration-200"
        >
          İndir SVG
        </button>
        <button
          type="button"
          onClick={downloadPng}
          className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition duration-200"
        >
          İndir PNG
        </button>
        <button
          type="button"
          onClick={downloadJpg}
          className="px-6 py-2.5 bg-teal-600 text-white font-medium rounded-md shadow hover:bg-teal-700 transition duration-200"
        >
          İndir JPG
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="bg-white p-6 rounded-lg border shadow-sm flex flex-col items-center gap-4">
          <h2 className="font-semibold text-gray-700">Açık Tema (Dark Background)</h2>
          <div className="bg-gray-900 w-full p-4 rounded flex items-center justify-center">
            <KartechLogo variant="dark" size="sm" />
          </div>
          <p className="text-sm text-gray-500 text-center">Bu logo sayfasında sadece SVG indirme demo olarak "Light" versiyon için verilmiştir. Karanlık tema için kodu ayarlayabilirsiniz.</p>
        </div>
      </div>

    </div>
  )
}

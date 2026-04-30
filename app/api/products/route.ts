import { fetchProducts } from "@/lib/sheets"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const products = await fetchProducts()
    return NextResponse.json(products)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Bilinmeyen hata"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

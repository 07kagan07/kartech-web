import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsCatalog } from "@/components/products-catalog"
import { fetchProducts, type Product } from "@/lib/sheets"
import { SITE } from "@/lib/site"

export const revalidate = 60

const title = "Hikvision Güvenlik Kamerası, DVR ve NVR Ürünleri – Antalya"
const description =
  "Antalya'da Hikvision güvenlik kameraları, DVR, NVR, alarm ve diyafon ürünleri. Ürün seçimi ve kurulum için ücretsiz keşif, 2 yıl garanti."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/urunler" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/urunler",
    siteName: SITE.legalName,
    title: `${title} | ${SITE.name}`,
    description,
  },
}

export default async function UrunlerPage() {
  let products: Product[] | undefined
  try {
    products = await fetchProducts()
  } catch {
    products = undefined
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProductsCatalog initialProducts={products} />
      </main>
      <Footer />
    </div>
  )
}

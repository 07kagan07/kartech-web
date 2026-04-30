import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsCatalog } from "@/components/products-catalog"

export const metadata = {
  title: "Ürünler | Kartech",
  description: "Hikvision güvenlik kameraları, DVR, NVR ve güvenlik ekipmanları.",
}

export default function UrunlerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProductsCatalog />
      </main>
      <Footer />
    </div>
  )
}

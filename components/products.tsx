import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "IP & AHD Kameralar",
    description: "2MP, 4MP ve 8MP seçenekleriyle iç ve dış mekân kameraları.",
    image: "/images/product-camera.jpg",
    badge: "En Çok Satan",
  },
  {
    name: "NVR Kayıt Cihazları",
    description: "4, 8, 16 ve 32 kanal seçenekleriyle ağ tabanlı kayıt cihazları.",
    image: "/images/product-nvr.jpg",
    badge: "Yeni",
  },
  {
    name: "Hareket Sensörleri",
    description: "PIR ve mikrodalga teknolojisiyle hassas hareket algılama.",
    image: "/images/product-sensor.jpg",
    badge: "Popüler",
  },
]

export function Products() {
  return (
    <section id="urunler" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Ürün Kataloğu
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Bireysel Ürün Satışı</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Profesyonel güvenlik ekipmanlarını tek tek de satın alabilirsiniz.
            Sertifikalı ve garantili ürünler.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {product.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Detaylı Bilgi
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

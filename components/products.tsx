"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { PhoneCall, ArrowRight, Loader2 } from "lucide-react"
import type { Product } from "@/lib/sheets"

export function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Ürünler yüklenemedi")
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="urunler" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Çözüm Ortağımız
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Dünya Lideri <span className="text-primary">Hikvision</span> ile Çalışıyoruz
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Güvenlik sektörünün dünya lideri Hikvision&apos;ın yetkili iş ortağı olarak
            en son teknolojiyi sizlere sunuyoruz.
          </p>
        </div>

        {/* Hikvision Logo */}
        <div className="mx-auto mb-12 flex justify-center">
          <div className="rounded-2xl border border-border bg-background px-10 py-6 shadow-sm">
            <Image
              src="/images/hikvisonlogo.png"
              alt="Hikvision Logo"
              width={280}
              height={60}
              className="h-12 w-auto object-contain sm:h-16"
            />
          </div>
        </div>

        {/* Dinamik Ürün Listesi */}
        {loading && (
          <div className="flex justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <p className="text-center text-sm text-destructive">{error}</p>
        )}

        {!loading && !error && products.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">Henüz ürün eklenmemiş.</p>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
              >
                {product.image_url && product.image_url.startsWith("http") && (
                  <div className="relative h-48 w-full bg-muted">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  {product.category && (
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {product.category}
                    </span>
                  )}
                  <h3 className="font-heading text-base font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <Button size="sm" asChild className="gap-2">
                      <a href="tel:+905377322726">
                        <PhoneCall className="h-3.5 w-3.5" />
                        Fiyat Al
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="gap-2">
                      <a
                        href={`https://wa.me/905377322726?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında bilgi almak istiyorum.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="/urunler">
                Tüm Ürünleri Gör
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

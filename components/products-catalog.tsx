"use client"

import Image from "next/image"
import { useEffect, useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { PhoneCall, ArrowRight, Search, Loader2, X } from "lucide-react"
import type { Product } from "@/lib/sheets"

export function ProductsCatalog() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("Tümü")

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Ürünler yüklenemedi")
        return res.json()
      })
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category).filter(Boolean)))
    return ["Tümü", ...cats]
  }, [products])

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === "Tümü" || p.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [products, activeCategory, search])

  return (
    <section className="min-h-screen bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Başlık */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Ürün Kataloğu
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tüm Ürünlerimiz
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Hikvision güvenlik ekipmanları ve aksesuarları
          </p>
        </div>

        {/* Arama + Filtre */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Arama */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Ürün ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Kategori filtreleri */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sonuç sayısı */}
        {!loading && !error && (
          <p className="mb-6 text-sm text-muted-foreground">
            {filtered.length} ürün bulundu
          </p>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {/* Hata */}
        {error && (
          <p className="text-center text-sm text-destructive">{error}</p>
        )}

        {/* Boş */}
        {!loading && !error && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-lg font-medium text-foreground">Ürün bulunamadı</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Farklı bir arama terimi veya kategori deneyin
            </p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("Tümü") }}
              className="mt-4 text-sm text-primary underline-offset-4 hover:underline"
            >
              Filtreleri temizle
            </button>
          </div>
        )}

        {/* Ürün Grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-48 w-full bg-muted">
                  {product.image_url && product.image_url.startsWith("http") ? (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-3xl text-muted-foreground/30">📦</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-2 p-5">
                  {product.category && (
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {product.category}
                    </span>
                  )}
                  <h3 className="font-heading text-sm font-bold leading-snug text-foreground">
                    {product.name}
                  </h3>
                  {product.description && product.description !== "-" && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  )}
                  <div className="mt-auto pt-3 flex flex-col gap-2 sm:flex-row">
                    <Button size="sm" asChild className="gap-1.5">
                      <a href="tel:+905377322726">
                        <PhoneCall className="h-3.5 w-3.5" />
                        Fiyat Al
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="gap-1.5">
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
      </div>
    </section>
  )
}

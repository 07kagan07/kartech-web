import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCall, ArrowRight } from "lucide-react"

export function Products() {
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

        {/* Content: Image + Features */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Product Image */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-10">
              <Image
                src="/images/kamerahikvision.png"
                alt="Hikvision Güvenlik Kameraları"
                width={800}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-1 flex-col gap-6">
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Profesyonel Güvenlik Ekipmanları
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { title: "IP & AHD Kameralar", desc: "2MP, 4MP ve 8MP seçenekleriyle iç ve dış mekân kameraları" },
                { title: "NVR Kayıt Cihazları", desc: "4, 8, 16 ve 32 kanal ağ tabanlı kayıt cihazları" },
                { title: "Hareket Sensörleri", desc: "PIR ve mikrodalga teknolojisiyle hassas hareket algılama" },
                { title: "Görüntülü Diyafon", desc: "HD görüntülü, uzaktan erişimli diyafon sistemleri" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-background p-4 shadow-sm">
                  <p className="font-heading text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <a href="tel:+905377322726">
                  <PhoneCall className="h-4 w-4" />
                  Fiyat Bilgisi Al
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <a
                  href={`https://wa.me/905377322726?text=${encodeURIComponent("Merhaba, Hikvision ürünleri hakkında bilgi almak istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight className="h-4 w-4" />
                  WhatsApp&apos;tan Sor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

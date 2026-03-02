import Image from "next/image"
import { Building2, Home, CheckCircle2 } from "lucide-react"

const newBuildFeatures = [
  "Proje aşamasından itibaren altyapı planlaması",
  "Profesyonel kablolama ve boru tesisatı",
  "Tüm sistem entegrasyonu (kamera, alarm, diyafon)",
  "Bina geneli güvenlik projesi çıkarımı",
]

const readyBuildFeatures = [
  "Mevcut yapıya uygun hızlı kurulum",
  "Estetik ve temiz kablo yönetimi",
  "Ev ve ofis için özelleştirilmiş çözümler",
  "Minimum müdahale ile maksimum güvenlik",
]

export function Solutions() {
  return (
    <section id="cozumler" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Proje Çözümleri
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Her Yapıya Uygun Güvenlik</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Yeni inşaat projelerinden mevcut binalara kadar her ihtiyaca yönelik
            profesyonel çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* New Construction */}
          <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/new-construction.jpg"
                alt="Yeni inşaat projesi güvenlik altyapısı"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Building2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-background">
                  Yeni İnşaat Projeleri
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                İnşaat aşamasından itibaren profesyonel güvenlik altyapısı
                planlama ve uygulama hizmeti. Bina genelinde entegre çözümler.
              </p>
              <ul className="flex flex-col gap-3">
                {newBuildFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ready Buildings */}
          <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/ready-building.jpg"
                alt="Mevcut bina güvenlik kurulumu"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Home className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-background">
                  Mevcut Binalar
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Tamamlanmış binalara hızlı, temiz ve estetik güvenlik sistemi
                kurulumu. Ev ve ofislerinize özel çözümler.
              </p>
              <ul className="flex flex-col gap-3">
                {readyBuildFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

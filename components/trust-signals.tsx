import { Headphones, Award, BadgeCheck, Clock, TrendingUp, ShieldCheck } from "lucide-react"

const stats = [
  { number: "7/24", label: "Teknik Destek" },
  { number: "2 Yıl", label: "Garanti" },
  { number: "24 Saat", label: "Acil Müdahale" },
]

const reasons = [
  {
    icon: BadgeCheck,
    title: "Sertifikalı Donanım",
    description:
      "Tüm ürünler uluslararası standartlara uygun, garantili markalardan. Ucuz ve kalitesiz malzeme kullanmıyoruz.",
  },
  {
    icon: Award,
    title: "Uzman Teknik Kadrosu",
    description:
      "Sertifikalı mühendis ve teknisyenlerden oluşan ekibimiz projenizi başından sonuna yönetiyor.",
  },
  {
    icon: Headphones,
    title: "Kurulum Sonrası Destek",
    description:
      "Kurulum bittikten sonra sizi yalnız bırakmıyoruz. Arıza, bakım veya soru için her zaman ulaşabilirsiniz.",
  },
  {
    icon: Clock,
    title: "Hızlı Teslimat",
    description:
      "Keşiften kuruluma ortalama 3-5 iş günü. İşlerinizi aksatmadan, temiz ve düzenli bir kurulum.",
  },
  {
    icon: TrendingUp,
    title: "Maliyet Avantajı",
    description:
      "Gereksiz ekipman satmıyoruz. İhtiyacınıza özel, bütçenize uygun çözümler öneriyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "2 Yıl Garanti",
    description:
      "Kurulumlarımıza 2 yıl işçilik ve donanım garantisi veriyoruz. Ek ücret yok, sürpriz yok.",
  },
]

export function TrustSignals() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Stats Bar */}
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-muted/50 p-6 sm:grid-cols-3 lg:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-primary lg:text-4xl">
                {stat.number}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Neden KARTECH?
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Piyasadaki Onlarca Firmadan Bizi <span className="text-primary">Neden Seçmelisiniz?</span>
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4 rounded-xl border border-border bg-background p-5 shadow-sm transition-all hover:border-primary/20 hover:shadow-md">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-heading text-base font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

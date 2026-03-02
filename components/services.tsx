import { Camera, ShieldAlert, Phone, Wrench, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Camera,
    title: "Kamera Sistemleri",
    problem: "Mekânınızda neler olduğunu bilmiyor musunuz?",
    solution:
      "IP ve AHD kamera sistemleri ile evinizi veya iş yerinizi 7/24, dünyanın her yerinden telefonunuzla canlı izleyin. 4K Ultra HD görüntü kalitesi.",
    highlight: "En çok tercih edilen",
  },
  {
    icon: ShieldAlert,
    title: "Alarm Sistemleri",
    problem: "Gece evde yalnızken tedirgin mi oluyorsunuz?",
    solution:
      "Gelişmiş hareket sensörleri ve manyetik kontak sistemleri ile yetkisiz girişleri anında tespit edin. Telefonunuza anlık bildirim.",
    highlight: "Anında uyarı",
  },
  {
    icon: Phone,
    title: "Görüntülü Diyafon",
    problem: "Apartman girişinde kim olduğunu göremeden mi açıyorsunuz?",
    solution:
      "HD görüntülü diyafon sistemi ile kapıyı açmadan ziyaretçinizi görün ve konuşun. Uzaktan kapı açma özelliği.",
    highlight: "Akıllı bina",
  },
  {
    icon: Wrench,
    title: "Bakım & Destek",
    problem: "Mevcut sisteminiz düzgün çalışıyor mu?",
    solution:
      "Periyodik bakım, arıza tespit ve anında müdahale. Sisteminiz her zaman çalışır durumda olsun, siz rahat edin.",
    highlight: "7/24 destek",
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Ne Yapıyoruz?
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Hangi Güvenlik Sorununu Yaşıyor<span className="text-primary">sunuz?</span>
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Sorunun ne olduğunu anlatın, çözümü biz üretiyoruz. Her bina ve her
            ihtiyaç için farklı bir proje hazırlıyoruz.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md lg:p-8"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary">
                  {service.highlight}
                </span>
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mb-3 text-sm font-medium italic text-foreground/70">
                {`"${service.problem}"`}
              </p>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {service.solution}
              </p>
              <Button variant="ghost" size="sm" asChild className="gap-2 px-0 text-primary hover:text-primary">
                <a href="#iletisim">
                  Bilgi Al
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

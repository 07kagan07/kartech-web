import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, AlertTriangle, Smartphone, Eye, Lock } from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    text: "Hırsızlık riski altında yaşıyorsunuz ama haberiniz yok",
  },
  {
    icon: Eye,
    text: "İş yerinizdeki çalışanlarınızı veya mekânınızı uzaktan izleyemiyorsunuz",
  },
  {
    icon: Lock,
    text: "Apartman girişinde kim olduğunu göremeden kapı açıyorsunuz",
  },
  {
    icon: Smartphone,
    text: "Tatildeyken evinizde neler olduğunu bilmiyorsunuz",
  },
]

export function PainPoints() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="relative flex-1">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src="/images/phone-monitoring.jpg"
                alt="Telefondan güvenlik kamerası izleme"
                width={560}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-xl border border-border bg-background px-4 py-3 shadow-lg">
              <p className="text-xs text-muted-foreground">Uzaktan Erişim</p>
              <p className="font-heading text-sm font-bold text-foreground">
                Dünyanın Her Yerinden
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex max-w-xl flex-1 flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Kendinize Sorun
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              <span className="text-balance">
                Bu Durumlardan Herhangi Birini
                <span className="text-primary"> Yaşıyor musunuz?</span>
              </span>
            </h2>

            <div className="flex flex-col gap-4">
              {painPoints.map((point) => (
                <div
                  key={point.text}
                  className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-4 transition-colors hover:border-primary/20"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="pt-1.5 text-sm leading-relaxed text-foreground/80">{point.text}</p>
                </div>
              ))}
            </div>

            <p className="text-base font-medium text-foreground">
              Bu sorunların hepsinin <span className="text-primary">tek bir çözümü</span> var.
            </p>

            <Button size="lg" asChild className="w-fit gap-2 shadow-md shadow-primary/20">
              <a href="tel:+905377322726">
                Ücretsiz Çözüm Önerisi Al
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

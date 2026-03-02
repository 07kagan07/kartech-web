import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall, ShieldCheck, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(220_100%_40%/0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left: Persuasive Copy */}
          <div className="flex max-w-2xl flex-1 flex-col gap-6">
            {/* Urgency Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="text-xs font-semibold text-red-700">
                {"İstanbul'da her 8 dakikada bir hırsızlık girişimi yaşanıyor"}
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
              <span className="text-balance">
                {"Eviniz ve İş Yeriniz "}
                <span className="text-primary">Gerçekten Güvende mi?</span>
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Birçoğu hırsızlık yaşandıktan <strong className="text-foreground">sonra</strong> bize
              ulaşıyor. Siz o birçoğundan olmayın.{" "}
              <strong className="text-foreground">Ücretsiz keşif</strong> ile
              güvenlik açıklarınızı tespit edelim, size özel çözüm sunalım.
            </p>

            {/* Social Proof Micro */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src={`/images/testimonial-${i}.jpg`}
                    alt="Mutlu müşteri"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  <strong className="text-foreground">500+</strong> mutlu müşteri
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="gap-2 text-base shadow-md shadow-primary/20">
                <a href="#iletisim">
                  Ücretsiz Keşif Talep Et
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2 text-base">
                <a href="tel:+902125554242">
                  <PhoneCall className="h-4 w-4" />
                  Hemen Ara
                </a>
              </Button>
            </div>

            {/* Trust Micro-badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Ücretsiz Keşif
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                2 Yıl Garanti
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                7/24 Teknik Destek
              </div>
            </div>
          </div>

          {/* Right: Emotional Image + Floating Stats */}
          <div className="relative flex-1">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/images/hero-security.jpg"
                alt="Güvenlik sistemi ile korunan ev"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Floating: Live monitoring card */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-background p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                  </span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Sistem Durumu</p>
                  <p className="font-heading text-sm font-bold text-green-700">
                    Canlı İzleme Aktif
                  </p>
                </div>
              </div>
            </div>

            {/* Floating: Projects count */}
            <div className="absolute -right-2 top-6 rounded-xl border border-border bg-background p-3 shadow-lg">
              <p className="font-heading text-2xl font-bold text-foreground">500+</p>
              <p className="text-[11px] text-muted-foreground">Başarılı Proje</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(220_100%_40%/0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Left: Copy */}
          <div className="flex max-w-2xl flex-1 flex-col gap-6">
            {/* Urgency Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="text-xs font-semibold text-red-700">
                {"Antalya'da her saatte bir hırsızlık girişimi yaşanıyor"}
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

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="gap-2 text-base shadow-md shadow-primary/20">
                <a href="tel:+905377322726">
                  <PhoneCall className="h-4 w-4" />
                  Hemen Ara
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2 text-base">
                <a href={`https://wa.me/905377322726?text=${encodeURIComponent("Merhaba, ücretsiz keşif talebinde bulunmak istiyorum. Bilgi alabilir miyim?")}`} target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="h-4 w-4" />
                  WhatsApp&apos;tan Yaz
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

          {/* Right: Image */}
          <div className="relative w-full max-w-md flex-1 lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src="/homebanner.jpeg"
                alt="KARTECH Güvenlik Sistemleri"
                width={1024}
                height={1024}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

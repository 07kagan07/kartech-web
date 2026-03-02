import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneCall } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a1540] py-16 lg:py-20">
      {/* Decorative glow */}
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[#0044cc]/20 blur-[100px]" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-[#00d4ff]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
          <span className="text-balance">
            {"Güvenliğinizi Şansa Bırakmayın"}
          </span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
          Hırsızlık her zaman başkalarına olur diye düşünülür, ta ki size
          olana kadar. Şimdi harekete geçin, yarın çok geç olabilir.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="gap-2 bg-[#0044cc] text-base text-white shadow-lg shadow-[#0044cc]/30 hover:bg-[#0033aa]"
          >
            <a href="#iletisim">
              Ücretsiz Keşif Talep Et
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="gap-2 border-white/30 bg-transparent text-base text-white hover:bg-white/10 hover:text-white"
          >
            <a href="tel:+902125554242">
              <PhoneCall className="h-4 w-4" />
              +90 (212) 555 42 42
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

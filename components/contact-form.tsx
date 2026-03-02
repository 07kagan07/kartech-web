import { Button } from "@/components/ui/button"
import { PhoneCall, MessageCircle, Clock, Mail } from "lucide-react"

const PHONE = "+905377322726"
const PHONE_DISPLAY = "+90 537 732 27 26"
const WHATSAPP = "https://wa.me/905377322726"
const EMAIL = "kartechteknoloji@gmail.com"

export function ContactForm() {
  return (
    <section id="iletisim" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Harekete Geçin
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Hemen <span className="text-primary">İletişime Geçin</span>
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Ücretsiz keşif ve fiyat teklifi için bizi arayın veya WhatsApp&apos;tan yazın.
            Uzman ekibimiz en kısa sürede size dönecektir.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Call */}
          <a
            href={`tel:${PHONE}`}
            className="group flex flex-col items-center gap-5 rounded-2xl border border-border bg-background p-8 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <PhoneCall className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="mb-1 font-heading text-lg font-bold text-foreground">Hemen Arayın</p>
              <p className="mb-4 text-sm text-muted-foreground">
                Pazartesi – Cumartesi, 08:00 – 19:00
              </p>
              <span className="font-heading text-2xl font-bold text-primary">{PHONE_DISPLAY}</span>
            </div>
            <Button size="lg" className="w-full gap-2">
              <PhoneCall className="h-4 w-4" />
              Şimdi Ara
            </Button>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-5 rounded-2xl border border-[#25d366]/30 bg-background p-8 text-center shadow-sm transition-all hover:border-[#25d366]/60 hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25d366]/10 transition-colors group-hover:bg-[#25d366]/20">
              <MessageCircle className="h-8 w-8 text-[#25d366]" />
            </div>
            <div>
              <p className="mb-1 font-heading text-lg font-bold text-foreground">WhatsApp&apos;tan Yazın</p>
              <p className="mb-4 text-sm text-muted-foreground">
                7/24 mesaj atabilirsiniz, en kısa sürede yanıtlarız
              </p>
              <span className="font-heading text-2xl font-bold text-[#25d366]">{PHONE_DISPLAY}</span>
            </div>
            <Button
              size="lg"
              className="w-full gap-2 bg-[#25d366] text-white hover:bg-[#1dba57]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp&apos;ta Aç
            </Button>
          </a>
        </div>

        {/* Bottom info */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            Pzt–Cmt 08:00–19:00 | Acil: 7/24
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-primary" />
            <a href={`mailto:${EMAIL}`} className="hover:text-primary hover:underline">
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

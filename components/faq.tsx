import { ChevronDown } from "lucide-react"
import { FAQS } from "@/lib/site"

export function Faq() {
  return (
    <section id="sss" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Sıkça Sorulan Sorular
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Antalya Güvenlik Sistemleri <span className="text-primary">Hakkında Merak Edilenler</span>
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-background shadow-sm transition-colors open:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <h3>{f.q}</h3>
                <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

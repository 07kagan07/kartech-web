import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Fabrika Sahibi, İkitelli",
    image: "/images/testimonial-1.jpg",
    text: "Fabrikamızda gece vardiyasında sürekli kayıplar yaşıyorduk. KARTECH 32 kameralık sistem kurduktan sonra kayıplar tamamen durdu. Yatırım kendini 2 ayda çıkardı.",
  },
  {
    name: "Fatma Demir",
    role: "Site Yöneticisi, Ataşehir",
    image: "/images/testimonial-2.jpg",
    text: "52 daireli sitemize görüntülü diyafon ve kamera sistemi kuruldu. Sakinlerimizden sürekli teşekkür alıyoruz. Profesyonel ve hızlı bir ekip.",
  },
  {
    name: "Murat Kaya",
    role: "Restoran Sahibi, Beşiktaş",
    image: "/images/testimonial-3.jpg",
    text: "Restoranımın 3 şubesini tek telefondan izliyorum. Personel yönetimi bile kolaylaştı. Keşiften kuruluma 3 gün sürdü, harika bir deneyimdi.",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Müşterilerimiz Ne Diyor?
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Bize Güvenen <span className="text-primary">500+</span> İşletme ve Aile
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />

              <div className="mb-4 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${t.text}"`}
              </p>

              <div className="flex items-center gap-3 border-t border-border pt-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

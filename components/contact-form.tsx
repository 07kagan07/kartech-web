"use client"

import { useState } from "react"
import { Send, MapPin, PhoneCall, Mail, ShieldCheck, Clock, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="iletisim" className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Harekete Geçin
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">
              Ücretsiz Keşif Ziyareti İçin <span className="text-primary">Hemen Başvurun</span>
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Uzman ekibimiz mekânınıza gelerek güvenlik ihtiyaçlarınızı yerinde
            analiz etsin. Bağlayıcı değil, tamamen ücretsiz.
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="mx-auto mb-10 flex max-w-2xl items-center justify-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-6 py-3">
          <Gift className="h-5 w-5 flex-shrink-0 text-primary" />
          <p className="text-sm text-foreground">
            <strong>Bu ay başvuranlara özel:</strong> İlk bakım hizmeti hediye!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex flex-col gap-6 rounded-xl border border-border bg-background p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Bize Ulaşın
              </h3>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <PhoneCall className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Hemen Arayın</p>
                  <a href="tel:+902125554242" className="text-sm font-semibold text-primary hover:underline">
                    +90 (212) 555 42 42
                  </a>
                  <p className="text-xs text-muted-foreground">
                    WhatsApp ile de ulaşabilirsiniz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Adres</p>
                  <p className="text-sm text-muted-foreground">
                    Atatürk Mah. Güvenlik Cad. No:42
                    <br />
                    Kadıköy, İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">E-posta</p>
                  <p className="text-sm text-muted-foreground">info@kartech.com.tr</p>
                </div>
              </div>
            </div>

            {/* Why fill form - micro persuasion */}
            <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
              <h4 className="mb-3 font-heading text-sm font-semibold text-foreground">
                Formu doldurduğunuzda ne olacak?
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </div>
                  <p className="text-sm text-muted-foreground">
                    24 saat içinde sizi arayacağız
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mekânınıza ücretsiz keşif ziyareti yapacağız
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Size özel fiyat ve proje önerisi sunacağız
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Çalışma Saatleri</p>
                <p className="text-xs text-muted-foreground">Pzt-Cmt: 08:00-19:00 | Acil: 7/24</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                  Talebiniz Başarıyla Alındı!
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Ekibimiz 24 saat içinde sizinle iletişime geçecektir.
                </p>
                <p className="text-sm text-muted-foreground">
                  Acil durumlar için:{" "}
                  <a href="tel:+902125554242" className="font-semibold text-primary hover:underline">
                    +90 (212) 555 42 42
                  </a>
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-5 rounded-xl border border-border bg-background p-6 shadow-sm lg:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Ad Soyad *</Label>
                    <Input
                      id="name"
                      placeholder="Adınız Soyadınız"
                      required
                      className="bg-muted/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="05XX XXX XX XX"
                      required
                      className="bg-muted/50"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ornek@email.com"
                      className="bg-muted/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="location">Konum / İlçe</Label>
                    <Input
                      id="location"
                      placeholder="Örneğin: Kadıköy"
                      className="bg-muted/50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="service">İlgilendiğiniz Hizmet *</Label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Hizmet seçin...
                    </option>
                    <option value="kamera">Kamera Sistemi Kurulumu</option>
                    <option value="alarm">Hırsız Alarm Sistemi</option>
                    <option value="diyafon">Görüntülü Diyafon</option>
                    <option value="bakim">Bakım & Destek</option>
                    <option value="hepsi">Birden Fazla Hizmet</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Mesajınız (Opsiyonel)</Label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Kaç kamera ihtiyacınız var? Ev mi, iş yeri mi? Kısaca bilgi verin..."
                    className="flex w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 text-base shadow-md shadow-primary/20">
                  <Send className="h-4 w-4" />
                  Ücretsiz Keşif Talep Et
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Bilgileriniz gizli tutulur. Sizi sadece proje için ararız.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

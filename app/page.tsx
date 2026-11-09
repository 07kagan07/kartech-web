import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { Services } from "@/components/services"
import { Solutions } from "@/components/solutions"
import { Products } from "@/components/products"
import { TrustSignals } from "@/components/trust-signals"
import { CtaBanner } from "@/components/cta-banner"
import { Faq } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SiteJsonLd } from "@/components/json-ld"
import { fetchProducts, type Product } from "@/lib/sheets"

export const revalidate = 60

export default async function Home() {
  // Ürünleri sunucuda çekiyoruz ki arama motorları ve yapay zeka botları
  // ürünleri HTML içinde görebilsin. Hata olursa bileşen tarayıcıda yeniden dener.
  let products: Product[] | undefined
  try {
    products = await fetchProducts()
  } catch {
    products = undefined
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteJsonLd />
      <WhatsAppButton />
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Services />
        <Solutions />
        <TrustSignals />
        <Products initialProducts={products} />
        <CtaBanner />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

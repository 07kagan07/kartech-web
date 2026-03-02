import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { Services } from "@/components/services"
import { Solutions } from "@/components/solutions"
import { Testimonials } from "@/components/testimonials"
import { Products } from "@/components/products"
import { TrustSignals } from "@/components/trust-signals"
import { CtaBanner } from "@/components/cta-banner"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Services />
        <Solutions />
        <Testimonials />
        <TrustSignals />
        <Products />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

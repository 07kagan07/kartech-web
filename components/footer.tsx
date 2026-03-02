import { KartechLogo } from "@/components/kartech-logo"

const footerLinks = {
  hizmetler: [
    { label: "IP Kamera Kurulumu", href: "#hizmetler" },
    { label: "AHD Kamera Kurulumu", href: "#hizmetler" },
    { label: "Alarm Sistemleri", href: "#hizmetler" },
    { label: "Diyafon Sistemleri", href: "#hizmetler" },
    { label: "Bakım & Destek", href: "#hizmetler" },
  ],
  cozumler: [
    { label: "Yeni İnşaat Projeleri", href: "#cozumler" },
    { label: "Mevcut Bina Kurulumu", href: "#cozumler" },
    { label: "Bireysel Ürün Satışı", href: "#urunler" },
    { label: "Ücretsiz Keşif", href: "#iletisim" },
  ],
  sosyalMedya: [
    { label: "Instagram", href: "https://www.instagram.com/kartechteknoloji" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[#0a1540] bg-[#0a1540]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#">
              <KartechLogo variant="dark" size="sm" />
            </a>
            <p className="text-sm leading-relaxed text-white/70">
              Profesyonel güvenlik sistemleri ve kamera kurulumu. Eviniz ve iş
              yeriniz için anahtar teslim çözümler.
            </p>
            <div className="mt-2 flex flex-col gap-1 text-sm text-white/70">
              <p className="font-semibold tracking-widest text-white">ANTALYA</p>
              <a href="tel:+905377322726" className="hover:text-white">+90 537 732 27 26</a>
              <a href="https://wa.me/905377322726" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
              <a href="mailto:kartechteknoloji@gmail.com" className="hover:text-white">kartechteknoloji@gmail.com</a>
            </div>
          </div>

          {/* Services links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Hizmetler
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Çözümler
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.cozumler.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Sosyal Medya
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.sosyalMedya.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/60">
            &copy; 2026 KARTECH. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/60 transition-colors hover:text-white"
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              className="text-xs text-white/60 transition-colors hover:text-white"
            >
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

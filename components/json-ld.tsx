import { FAQS, SERVICES, SITE } from "@/lib/site"

/** schema.org yapısal verisi — Google zengin sonuçları ve yapay zeka asistanları için. */
export function SiteJsonLd() {
  const businessId = `${SITE.url}/#business`
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": businessId,
        name: SITE.name,
        alternateName: SITE.legalName,
        description: SITE.description,
        url: SITE.url,
        logo: `${SITE.url}/icon-512.png`,
        image: `${SITE.url}/opengraph-image.png`,
        telephone: SITE.phone,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        areaServed: { "@type": "City", name: SITE.city },
        sameAs: [SITE.instagram],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          email: SITE.email,
          contactType: "customer service",
          areaServed: SITE.country,
          availableLanguage: ["Turkish"],
        },
        knowsAbout: ["IP kamera", "AHD kamera", "Alarm sistemleri", "Görüntülü diyafon", "Hikvision", "NVR", "DVR"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Güvenlik Sistemleri Hizmetleri",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              areaServed: { "@type": "City", name: SITE.city },
              provider: { "@id": businessId },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.legalName,
        inLanguage: "tr-TR",
        publisher: { "@id": businessId },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

import { FAQS, SERVICES, SITE } from "@/lib/site"
import { fetchProducts } from "@/lib/sheets"

// llms.txt — yapay zeka asistanları için sitenin özet, makine-dostu tanıtımı.
// https://llmstxt.org
export const revalidate = 3600

export async function GET() {
  let productLines = ""
  try {
    const products = await fetchProducts()
    if (products.length) {
      productLines =
        "\n## Ürünler\n\n" +
        products
          .map((p) => `- ${p.name}${p.category ? ` (${p.category})` : ""}${p.description ? `: ${p.description}` : ""}`)
          .join("\n") +
        "\n"
    }
  } catch {
    // Ürün listesi alınamazsa özet yine de yayınlanır
  }

  const body = `# ${SITE.legalName}

> ${SITE.description}

${SITE.name}, ${SITE.city} merkezli bir güvenlik sistemleri firmasıdır. Hikvision iş ortağı olarak ev, iş yeri, site, apartman ve yeni inşaat projelerine anahtar teslim güvenlik kamerası, alarm ve görüntülü diyafon kurulumu yapar. Ayrıca web sitesi, mobil uygulama, özel yazılım ve otomasyon dahil yazılımla ilgili her türlü işi yapar; projeleri arasında RestoFlow adisyon programı ve plaka tanıma sistemi bulunur.

## İletişim

- Telefon / WhatsApp: ${SITE.phoneDisplay}
- E-posta: ${SITE.email}
- Instagram: ${SITE.instagram}
- Konum: ${SITE.city}, Türkiye
- Web: ${SITE.url}

## Öne Çıkanlar

- Ücretsiz keşif
- 2 yıl işçilik ve donanım garantisi
- 7/24 teknik destek, 24 saat içinde acil müdahale
- Keşiften kuruluma ortalama 3-5 iş günü
- Sertifikalı, garantili donanım (Hikvision)

## Hizmetler

${SERVICES.map((s) => `- **${s.name}**: ${s.description}`).join("\n")}
${productLines}
## Sıkça Sorulan Sorular

${FAQS.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Sayfalar

- [Ana sayfa](${SITE.url}/): Hizmetler, çözümler, SSS ve iletişim
- [Ürünler](${SITE.url}/urunler): Hikvision güvenlik kameraları, DVR, NVR ve ekipman kataloğu
`

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}

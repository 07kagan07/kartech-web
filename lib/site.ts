// Site genelinde kullanılan işletme bilgileri — metadata, JSON-LD, llms.txt,
// sitemap ve SSS bölümü buradan beslenir. Bilgi değişirse sadece burayı güncelleyin.

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, "")
  // Vercel'de otomatik tanımlı (özel domain bağlıysa onu verir)
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercel) return `https://${vercel}`
  return "http://localhost:3000"
}

export const SITE = {
  url: resolveSiteUrl(),
  name: "KARTECH",
  legalName: "KARTECH Teknoloji & Güvenlik",
  tagline: "Teknoloji & Güvenlik",
  title: "Antalya Güvenlik Kamerası Kurulumu | KARTECH",
  description:
    "Antalya güvenlik kamerası kurulumu: IP ve AHD kamera, alarm sistemi ve görüntülü diyafon. Ücretsiz keşif, 2 yıl garanti, 7/24 teknik destek. Hikvision iş ortağı, ev ve iş yerine anahtar teslim kurulum.",
  phone: "+905377322726",
  phoneDisplay: "+90 537 732 27 26",
  email: "kartechteknoloji@gmail.com",
  whatsapp: "https://wa.me/905377322726",
  instagram: "https://www.instagram.com/kartechteknoloji",
  city: "Antalya",
  region: "Antalya",
  country: "TR",
  keywords: [
    "Antalya güvenlik kamerası",
    "Antalya kamera kurulumu",
    "güvenlik kamerası kurulumu",
    "IP kamera kurulumu",
    "AHD kamera kurulumu",
    "alarm sistemi kurulumu",
    "görüntülü diyafon",
    "Hikvision Antalya",
    "Hikvision bayi",
    "NVR DVR kurulumu",
    "ev güvenlik sistemi",
    "iş yeri güvenlik kamerası",
    "bina güvenlik sistemi",
  ],
}

export const SERVICES = [
  {
    name: "Güvenlik Kamerası Kurulumu (IP ve AHD)",
    description:
      "Ev ve iş yerleri için IP ve AHD kamera sistemleri; 4K Ultra HD görüntü, telefondan 7/24 canlı izleme.",
  },
  {
    name: "Alarm Sistemleri",
    description:
      "Hareket sensörleri ve manyetik kontaklarla yetkisiz girişlerin anında tespiti, telefona anlık bildirim.",
  },
  {
    name: "Görüntülü Diyafon Sistemleri",
    description:
      "HD görüntülü diyafon ile kapıyı açmadan ziyaretçiyi görme, konuşma ve uzaktan kapı açma.",
  },
  {
    name: "Bakım ve Teknik Destek",
    description: "Periyodik bakım, arıza tespiti ve hızlı müdahale; kurulum sonrası sürekli destek.",
  },
  {
    name: "Yeni İnşaat Güvenlik Altyapısı",
    description:
      "Proje aşamasından altyapı planlaması, kablolama ve kamera, alarm, diyafon sistem entegrasyonu.",
  },
  {
    name: "Mevcut Bina Güvenlik Kurulumu",
    description: "Mevcut yapıya uygun, temiz kablo yönetimiyle hızlı ve minimum müdahaleli kurulum.",
  },
]

export const FAQS = [
  {
    q: "Antalya'da hangi bölgelere güvenlik kamerası kurulumu yapıyorsunuz?",
    a: "KARTECH Antalya merkezli bir güvenlik sistemleri firmasıdır. Antalya'da ev, iş yeri, site, apartman ve yeni inşaat projelerine kamera, alarm ve diyafon kurulumu yapıyoruz. Bulunduğunuz konum için +90 537 732 27 26 numarasından bize ulaşabilirsiniz.",
  },
  {
    q: "Keşif ücretli mi?",
    a: "Hayır. Keşif tamamen ücretsizdir. Mekânınızı yerinde inceleyip güvenlik açıklarını tespit ediyor, ihtiyacınıza ve bütçenize uygun bir çözüm öneriyoruz.",
  },
  {
    q: "Kamera kurulumu ne kadar sürer?",
    a: "Keşiften kuruluma ortalama 3-5 iş günü sürer. Kurulum temiz ve düzenli şekilde, işlerinizi aksatmadan yapılır.",
  },
  {
    q: "Kurulumlarınızda garanti var mı?",
    a: "Evet. Tüm kurulumlarımıza 2 yıl işçilik ve donanım garantisi veriyoruz. Ek ücret veya sürpriz maliyet yoktur.",
  },
  {
    q: "Kameraları telefondan izleyebilir miyim?",
    a: "Evet. Kurduğumuz IP ve AHD kamera sistemlerini dünyanın her yerinden, telefonunuzdan 7/24 canlı izleyebilir ve geçmiş kayıtlara ulaşabilirsiniz.",
  },
  {
    q: "IP kamera ile AHD kamera arasındaki fark nedir?",
    a: "IP kameralar görüntüyü ağ (ethernet) kablosu üzerinden dijital olarak iletir ve NVR'a kaydeder; daha yüksek çözünürlük ve gelişmiş özellikler sunar. AHD kameralar koaksiyel kablo ile DVR'a bağlanır; mevcut kablo altyapısı olan yerlerde daha ekonomik bir çözümdür. Keşif sırasında mekânınıza en uygun sistemi birlikte belirliyoruz.",
  },
  {
    q: "Hangi marka ürünleri kullanıyorsunuz?",
    a: "Güvenlik sektörünün dünya lideri Hikvision'ın iş ortağıyız. Uluslararası standartlara uygun, garantili ve sertifikalı donanım kullanıyoruz.",
  },
  {
    q: "Kurulumdan sonra destek veriyor musunuz?",
    a: "Evet. 7/24 teknik destek ve 24 saat içinde acil müdahale sağlıyoruz. Periyodik bakım ve arıza tespiti hizmetimiz de bulunmaktadır.",
  },
]

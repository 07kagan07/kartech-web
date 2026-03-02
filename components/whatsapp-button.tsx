import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905377322726"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-lg shadow-[#25d366]/40 transition-transform hover:scale-110 hover:shadow-xl hover:shadow-[#25d366]/50"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  )
}

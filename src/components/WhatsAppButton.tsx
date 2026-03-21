import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-accent text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} fill="currentColor" />
  </a>
);

export default WhatsAppButton;

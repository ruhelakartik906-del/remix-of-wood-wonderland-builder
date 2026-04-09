import { Phone } from "lucide-react";

const WhatsAppButton = () => (
  <>
    <a
      href="tel:+919811286902"
      className="fixed bottom-[7.5rem] right-6 z-50 bg-foreground hover:bg-foreground/80 text-background w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Call us"
    >
      <Phone size={26} />
    </a>
    <a
      href="https://wa.me/919811286902"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.004 3.2C9.054 3.2 3.404 8.85 3.404 15.8c0 2.22.58 4.39 1.68 6.3L3.2 28.8l6.9-1.81a12.56 12.56 0 006.004 1.53h.005c6.95 0 12.6-5.65 12.6-12.6 0-3.37-1.31-6.53-3.69-8.91A12.52 12.52 0 0016.004 3.2zm0 23.04h-.004a10.44 10.44 0 01-5.33-1.46l-.38-.23-3.96 1.04 1.06-3.87-.25-.4a10.42 10.42 0 01-1.6-5.57c0-5.78 4.7-10.48 10.48-10.48 2.8 0 5.43 1.09 7.41 3.07a10.42 10.42 0 013.07 7.41c0 5.78-4.7 10.49-10.48 10.49zm5.75-7.85c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1.01 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.06-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.04 1.28 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.75.24 1.44.21 1.98.13.6-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37z"/>
      </svg>
    </a>
  </>
);

export default WhatsAppButton;

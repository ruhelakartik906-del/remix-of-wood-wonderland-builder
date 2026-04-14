import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import infinityLogo from "@/assets/infinity-logo.jpeg";

const Footer = () =>
  <footer className="bg-white border-t border-border">
    <div className="container mx-auto px-4 py-6 md:py-16">
      {/* Logo */}
      <div className="flex items-start justify-center md:justify-start mb-6 md:mb-0">
        <img src={infinityLogo} alt="Infinity Boards Logo" className="w-32 md:w-40 h-auto object-contain" />
      </div>

      {/* Main Grid: 2-col on mobile, 4-col on lg */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 md:gap-10 mt-4 md:mt-8">
        {/* Quick Links */}
        <div className="text-center">
          <h3 className="font-heading font-bold text-sm md:text-lg mb-2 md:mb-4 text-foreground text-center">Quick Links</h3>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
            {["Home", "About Us", "Products", "Privacy & Policy", "Media", "Contact Us"].map((item) =>
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : item === "Privacy & Policy" ? "/privacy-policy" : `/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  {item}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="font-heading font-bold text-sm md:text-lg mb-2 md:mb-4 text-foreground text-center">Product Categories</h3>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
            {["MDF Board", "HDSMR Board", "Particle Board", "Flame Guard Board"].map((item) =>
              <li key={item}>
                <Link to={`/products/${item.toLowerCase().replace(/\s/g, "-")}`} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  {item}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Contact Info - full width on mobile */}
        <div className="col-span-2 lg:col-span-1 text-left">
          <h3 className="font-heading font-bold text-sm md:text-lg mb-2 md:mb-4 text-foreground text-center">Contact Info</h3>
          <ul className="space-y-2 text-xs md:text-sm text-muted-foreground text-center">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="shrink-0 mt-0.5 text-foreground text-center" />
              <span className="text-left">Khasara no 774, Ramana Farms, Bhadfar Road, Leharpur, Sitapur-261125</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 text-foreground" />
              <span className="text-left">91+ 9811286902 / 91+ 6393331922</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0 text-foreground" />
              <span className="text-left">Info@infinityboards.in</span>
            </li>
          </ul>
        </div>

        {/* Follow Us - full width on mobile */}
        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-heading font-bold text-sm md:text-lg mb-2 md:mb-4 text-foreground text-center">Follow Us</h3>
          <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
            <a href="https://www.facebook.com/share/19tiVFCFHv/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/infinityboards_/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all">
              <Instagram size={16} />
            </a>
            <a href="https://www.linkedin.com/company/infinity-boards/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all">
              <Linkedin size={16} />
            </a>
            <a href="https://youtube.com/@infinityboards_srb?si=cxg2hasvufnwkwon" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all">
              <Youtube size={16} />
            </a>
            <a href="https://x.com/infinityboards_?s=21" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://pin.it/5RJsGnohq" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-6 md:mt-12 pt-4 md:pt-6 text-center text-xs md:text-sm text-muted-foreground">
        © {new Date().getFullYear()} Infinity Boards. All rights reserved.
      </div>
    </div>
  </footer>;

export default Footer;
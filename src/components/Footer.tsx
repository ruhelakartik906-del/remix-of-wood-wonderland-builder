import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import infinityLogo from "@/assets/infinity-logo.jpeg";

const Footer = () =>
  <footer className="bg-white border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10">
        {/* Logo placeholder */}
        <div className="flex items-start">
          <img src={infinityLogo} alt="Infinity Boards Logo" className="w-40 h-auto object-contain" />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Products", "Privacy & Policy", "Media", "Contact Us"].map((item) =>
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : item === "Privacy & Policy" ? "/privacy-policy" : `/${item.toLowerCase().replace(/\s/g, "")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Product Categories</h3>
            <ul className="space-y-2 text-sm">
              {["MDF Board", "HDHMR Board", "Particle Board", "Flame Guard Board"].map((item) =>
                <li key={item}>
                  <Link to={`/products/${item.toLowerCase().replace(/\s/g, "-")}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-foreground" />
                <span>E-503, Dilbagh Rose Garden, Fazalganj, Kanpur, Uttar Pradesh - 208012</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-foreground" />
                <span>91+ ​96545 91696</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-foreground" />
                <span>Info@infinityboards.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Follow Us</h3>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) =>
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Icon size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Infinity Boards. All rights reserved.
      </div>
    </div>
  </footer>;

export default Footer;
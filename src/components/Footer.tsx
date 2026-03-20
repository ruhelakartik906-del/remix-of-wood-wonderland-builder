import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-footer-bg text-footer-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {["Home", "About Us", "Products", "Media", "Contact Us"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="hover:opacity-100 transition-opacity"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Product Categories</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {["MDF Board", "HDHMR Board", "Particle Board", "Frame Guard Board"].map((item) => (
              <li key={item}>
                <Link to={`/products/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:opacity-100 transition-opacity">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>123 Industrial Area, Sector 5, New Delhi, India - 110001</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>info@woodcraft.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-footer-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-footer-foreground/20 mt-12 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} WoodCraft Industries. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

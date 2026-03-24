import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Contact Us", path: "/contact" },
];

const productsCol1 = [
  { label: "MDF Board", path: "/products/mdf-board" },
  { label: "Particle Board", path: "/products/particle-board" },
];

const productsCol2 = [
  { label: "HDHMR Board", path: "/products/hdhmr-board" },
  { label: "Frame Guard Board", path: "/products/frame-guard-board" },
];

const socialLinks = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Youtube", icon: Youtube, href: "#" },
];

const Footer = () => (
  <footer className="bg-footer-bg text-white">
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1 – Logo */}
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="Infinity Board" className="h-14 w-auto brightness-0 invert" />
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
                <Link to={item.path} className="text-white/70 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Products (first half) */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">Products</h3>
          <ul className="space-y-2.5 text-sm">
            {productsCol1.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
                <Link to={item.path} className="text-white/70 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Products (second half) */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80 invisible">Products</h3>
          <ul className="space-y-2.5 text-sm">
            {productsCol2.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
                <Link to={item.path} className="text-white/70 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5 – Social Links */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">Follow Us</h3>
          <ul className="space-y-2.5 text-sm">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
                  <item.icon size={15} className="shrink-0" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/15 mt-12 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} WoodCraft Industries. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
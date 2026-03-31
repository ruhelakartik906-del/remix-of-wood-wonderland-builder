import { Droplets, Layers, Bug, Leaf, Maximize, Paintbrush, Shield, Flame, Ruler, DollarSign, Grip, Anvil } from "lucide-react";
import mdfBoard from "@/assets/mdf-board.jpg";
import hdhmrBoard from "@/assets/hdhmr-board.jpg";
import particleBoard from "@/assets/particle-board.jpg";
import frameguardBoard from "@/assets/frameguard-board.jpg";
import appKitchen from "@/assets/app-kitchen.jpg";
import appKitchen2 from "@/assets/app-kitchen-2.jpg";
import appWardrobe from "@/assets/app-wardrobe.jpg";
import appOffice from "@/assets/app-office.jpg";
import appOffice2 from "@/assets/app-office-2.jpg";
import appWall from "@/assets/app-wall.jpg";
import appBedroom from "@/assets/app-bedroom.jpg";
import appExterior from "@/assets/app-exterior.jpg";

export interface ProductSpec {
  property: string;
  unit: string;
  value: string;
}

export interface ProductApplication {
  name: string;
  image: string;
}

export interface ProductInstallStep {
  step: string;
  desc: string;
}

export interface ProductInfo {
  name: string;
  image: string;
  tagline: string;
  intro: string;
  features: { icon: any; title: string }[];
  specs: ProductSpec[];
  applications: ProductApplication[];
  maintenance: string[];
  installation: ProductInstallStep[];
}

export const productData: Record<string, ProductInfo> = {
  "mdf-board": {
    name: "MDF Board",
    image: mdfBoard,
    tagline: "Engineered for Smooth Perfection",
    intro: "Medium Density Fibreboard (MDF) is crafted from wood fibres bonded under high pressure and temperature. It offers an exceptionally smooth surface ideal for painting, laminating, and veneering. Perfect for furniture, cabinetry, and decorative applications.",
    features: [
      { icon: Maximize, title: "Smooth Surface Finish" },
      { icon: Layers, title: "High Density Core" },
      { icon: Bug, title: "Termite & Borer Proof" },
      { icon: Leaf, title: "Eco-Friendly" },
      { icon: Paintbrush, title: "Easy to Paint & Laminate" },
      { icon: Droplets, title: "Moisture Resistant" },
    ],
    applications: [
      { name: "Kitchen Cabinets", image: appKitchen },
      { name: "Wardrobes", image: appWardrobe },
      { name: "Office Furniture", image: appOffice },
      { name: "Wall Paneling", image: appWall },
    ],
    specs: [
      { property: "Density", unit: "kg/m³", value: "700 – 850" },
      { property: "Thickness Availability", unit: "mm", value: "2.5 – 35" },
      { property: "Moisture Content", unit: "%", value: "5 – 8" },
      { property: "Modulus of Elasticity", unit: "N/mm²", value: "≥ 2500" },
    ],
    maintenance: [
      "Wipe with a soft, dry or slightly damp cloth regularly",
      "Avoid prolonged exposure to water or high humidity",
      "Use coasters or mats under hot objects to prevent surface damage",
      "Clean spills immediately to avoid swelling",
      "Apply edge banding on exposed edges for extra protection",
    ],
    installation: [
      { step: "Acclimatize", desc: "Store boards in the room for 48 hours before installation to adjust to ambient conditions." },
      { step: "Measure & Cut", desc: "Use a fine-toothed saw or CNC machine. Support the board fully to avoid chipping." },
      { step: "Fix & Finish", desc: "Pre-drill screw holes. Use wood adhesive along with screws for strong joints. Sand edges before finishing." },
    ],
  },

  "hdhmr-board": {
    name: "HDHMR Board",
    image: hdhmrBoard,
    tagline: "High Density, High Moisture Resistance",
    intro: "HDHMR (High Density High Moisture Resistant) boards represent the pinnacle of engineered wood technology. With superior density and exceptional moisture resistance, they are the ideal choice for kitchen cabinets, bathroom vanities, and areas exposed to humidity.",
    features: [
      { icon: Droplets, title: "Superior Moisture Resistance" },
      { icon: Layers, title: "Ultra-High Density Core" },
      { icon: Bug, title: "Termite & Borer Proof" },
      { icon: Leaf, title: "Eco-Friendly" },
      { icon: Shield, title: "Scratch Resistant" },
      { icon: Grip, title: "Uniform Structure" },
    ],
    applications: [
      { name: "Kitchen Cabinets", image: appKitchen },
      { name: "Bathroom Vanities", image: appKitchen2 },
      { name: "Commercial Partitions", image: appOffice2 },
      { name: "Wall Paneling", image: appWall },
    ],
    specs: [
      { property: "Density", unit: "kg/m³", value: "850 – 1000" },
      { property: "Thickness Availability", unit: "mm", value: "3 – 35" },
      { property: "Moisture Content", unit: "%", value: "5 – 8" },
      { property: "Modulus of Elasticity", unit: "N/mm²", value: "≥ 3200" },
    ],
    maintenance: [
      "Ideal for wet areas but avoid submerging in standing water",
      "Clean with a mild detergent and soft cloth",
      "Ensure proper ventilation in enclosed cabinets to reduce humidity buildup",
      "Periodically check edge seals and re-apply if worn",
      "Use quality hinges to avoid stress on screw joints",
    ],
    installation: [
      { step: "Acclimatize", desc: "Allow boards to adjust to room temperature for 24–48 hours before use." },
      { step: "Precision Cutting", desc: "Use carbide-tipped blades for clean cuts. HDHMR's density requires sharp tools." },
      { step: "Assembly", desc: "Pre-drill all holes. Use high-quality wood screws and waterproof adhesive for lasting joints." },
    ],
  },

  "particle-board": {
    name: "Pre-Laminated Particle Board",
    image: particleBoard,
    tagline: "Cost-Effective, Reliable Performance",
    intro: "Pre-Laminated Particle Board is manufactured from wood chips and resin, pressed under high temperature with a factory-applied laminate finish. It offers an economical yet durable solution for office furniture, modular shelving, and interior fit-outs.",
    features: [
      { icon: DollarSign, title: "Cost-Effective" },
      { icon: Layers, title: "Uniform Density" },
      { icon: Ruler, title: "Standardized Sheet Size" },
      { icon: Shield, title: "Durable Surface" },
      { icon: Anvil, title: "Screw Holding Strength" },
      { icon: Leaf, title: "Sustainable (Wood Waste)" },
    ],
    applications: [
      { name: "Office Furniture", image: appOffice },
      { name: "Modular Shelving", image: appWardrobe },
      { name: "Wall Paneling", image: appWall },
      { name: "Lightweight Furniture", image: appBedroom },
    ],
    specs: [
      { property: "Density", unit: "kg/m³", value: "600 – 700" },
      { property: "Thickness Availability", unit: "mm", value: "6 – 30" },
      { property: "Moisture Content", unit: "%", value: "6 – 9" },
      { property: "Modulus of Elasticity", unit: "N/mm²", value: "≥ 1800" },
    ],
    maintenance: [
      "Keep away from direct water contact",
      "Use laminate or veneer finish for added protection",
      "Dust regularly with a dry cloth",
      "Avoid placing heavy loads on unsupported spans",
      "Edge-band all exposed edges to prevent moisture ingress",
    ],
    installation: [
      { step: "Plan Layout", desc: "Pre-plan all cuts to minimize wastage. Particle board is best used in standard sizes." },
      { step: "Cut Carefully", desc: "Use a sharp blade and cut slowly to avoid edge chipping. Support the board on both sides." },
      { step: "Assemble", desc: "Use cam-lock fittings or dowels with adhesive. Pre-drill for screws to prevent splitting." },
    ],
  },

  "flame-guard-board": {
    name: "Flame Guard Board",
    image: frameguardBoard,
    tagline: "Fire-Retardant MDF for Maximum Safety",
    intro: "Flame Guard Board is a fire-retardant MDF engineered for enhanced safety in public and commercial spaces. With low smoke emission, high fire resistance, and reduced heat release, it meets the strictest safety standards for hotels, schools, hospitals, and theaters.",
    features: [
      { icon: Flame, title: "Low Smoke Emission" },
      { icon: Shield, title: "High Fire Resistance" },
      { icon: Layers, title: "Reduced Heat Release" },
      { icon: Maximize, title: "Structural Stability" },
      { icon: Leaf, title: "Eco-Friendly" },
      { icon: Paintbrush, title: "Easily Processable" },
    ],
    applications: [
      { name: "Door Frames", image: appExterior },
      { name: "Fire-Rated Partitions", image: appOffice2 },
      { name: "Public Building Panels", image: appWall },
      { name: "Theater Acoustics", image: appBedroom },
    ],
    specs: [
      { property: "Density", unit: "kg/m³", value: "750 – 850" },
      { property: "Thickness Availability", unit: "mm", value: "6 – 25" },
      { property: "Moisture Content", unit: "%", value: "5 – 8" },
      { property: "Fire Rating", unit: "Class", value: "Class 1 / B-s1, d0" },
    ],
    maintenance: [
      "Wipe with a damp cloth for regular cleaning",
      "Ensure wall base is properly waterproofed before installation",
      "Avoid drilling unnecessary holes which may weaken the structure",
      "Apply waterproof sealant at floor contact points",
      "Inspect annually for any signs of wear at joints",
    ],
    installation: [
      { step: "Prepare Opening", desc: "Ensure the door opening is plumb and square. Remove any debris from the wall surface." },
      { step: "Cut & Position", desc: "Cut the Flame Guard board to size. Test-fit before final fixing." },
      { step: "Secure & Seal", desc: "Fix using masonry screws and construction adhesive. Seal all edges with waterproof sealant." },
    ],
  },
};

// Alias: old slug still works
productData["frame-guard-board"] = productData["flame-guard-board"];

export const allProducts = [
  { name: "MDF Board", slug: "mdf-board", image: mdfBoard },
  { name: "HDHMR Board", slug: "hdhmr-board", image: hdhmrBoard },
  { name: "Pre-Laminated Particle Board", slug: "particle-board", image: particleBoard },
  { name: "Flame Guard Board", slug: "flame-guard-board", image: frameguardBoard },
];

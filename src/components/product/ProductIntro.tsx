import { Download } from "lucide-react";
import infinityLogo from "@/assets/infinity-logo.jpeg";

interface ProductIntroProps {
  image: string;
  name: string;
  intro: string;
}

const ProductIntro = ({ image, name, intro }: ProductIntroProps) => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={image} alt={name} className="rounded-lg shadow-lg w-full h-80 object-cover" />
          <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
            <img src={infinityLogo} alt="Brand logo" className="h-10 w-auto object-contain" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Introduction to {name}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{intro}</p>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded font-semibold hover:bg-accent transition-colors">
            <Download size={16} /> Download Brochure
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default ProductIntro;

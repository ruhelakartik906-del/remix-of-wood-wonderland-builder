import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedProduct {
  name: string;
  slug: string;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => (
  <section className="section-padding">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">Explore More Products</h2>
      <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {products.map((rp) => (
          <Link key={rp.slug} to={`/products/${rp.slug}`} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={rp.image} alt={rp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 flex items-center justify-between">
              <h3 className="font-heading font-semibold text-lg">{rp.name}</h3>
              <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedProducts;

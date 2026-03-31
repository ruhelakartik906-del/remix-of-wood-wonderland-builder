import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import DownloadCatalog from "@/components/DownloadCatalog";
import pageHeaderBg from "@/assets/page-header-bg.jpg";
import mdfBoard from "@/assets/mdf-board.jpg";
import hdhmrBoard from "@/assets/hdhmr-board.jpg";
import particleBoard from "@/assets/particle-board.jpg";
import frameguardBoard from "@/assets/frameguard-board.jpg";

const products = [
{ name: "MDF Board", image: mdfBoard, slug: "mdf-board", desc: "Medium Density Fibreboard for smooth finishes and versatile applications" },
{ name: "HDHMR Board", image: hdhmrBoard, slug: "hdhmr-board", desc: "High Density High Moisture Resistant boards for demanding environments" },
{ name: "Particle Board", image: particleBoard, slug: "particle-board", desc: "Cost-effective engineered wood for furniture and interiors" },
{ name: "Flame Guard Board", image: frameguardBoard, slug: "flame-guard-board", desc: "Fire-retardant MDF engineered for maximum safety in public spaces" }];


const Products = () =>
<Layout>
    <section className="relative h-48 md:h-64 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={pageHeaderBg} alt="" className="w-full h-full object-cover" style={{ filter: 'blur(1.5px)' }} />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl font-heading font-bold text-white text-center md:text-6xl">Our Products</h1>
        <p className="text-white/80 mt-2 text-center">Premium engineered wood panels for every application</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((p) =>
        <Link
          key={p.slug}
          to={`/products/${p.slug}`}
          className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
          
              <div className="md:w-48 h-48 md:h-auto shrink-0 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-xl mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={14} />
                </span>
              </div>
            </Link>
        )}
        </div>
      </div>
    </section>

    <div style={{ marginTop: '80px', marginBottom: '40px' }}>
      <DownloadCatalog />
    </div>
  </Layout>;


export default Products;
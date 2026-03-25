import { Award, Target, Eye, Leaf, ShieldCheck, Timer, Bug, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import factory from "@/assets/factory.jpg";
import pageHeaderBg from "@/assets/page-header-bg-2.jpg";
import factoryAerial from "@/assets/factory-aerial.png";
import warehouseInterior from "@/assets/warehouse-interior.png";

const features = [
  { icon: Leaf, title: "Eco-Friendly" },
  { icon: ShieldCheck, title: "Superior Quality" },
  { icon: Timer, title: "Durability" },
  { icon: Bug, title: "Termite Resistant" },
  { icon: Sparkles, title: "Premium Finish" },
];

const certifications = [
  { title: "ISO 9001:2015", desc: "Quality Management" },
  { title: "ISI Certified", desc: "Indian Standards" },
  { title: "Green Building", desc: "Sustainable Manufacturing" },
  { title: "FSC Certified", desc: "Responsible Forestry" },
];


const About = () =>
<Layout>
    <section className="relative h-48 md:h-64 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={pageHeaderBg} alt="" className="w-full h-full object-cover" style={{ filter: 'blur(2px)' }} />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl font-heading font-bold text-white text-center md:text-6xl">About Us</h1>
        <p className="text-white/80 mt-2 text-center">Our journey of crafting excellence</p>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={factory} alt="Our facility" className="rounded-lg shadow-lg h-80 w-full object-cover" />
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Eye size={24} className="text-primary" />
                <h2 className="font-heading font-bold text-center text-6xl">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted name in engineered wood solutions, setting global benchmarks in quality, innovation, and sustainability.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Target size={24} className="text-primary" />
                <h2 className="text-2xl font-heading font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver premium quality wood panels that empower architects, designers, and homeowners to create beautiful, lasting spaces while championing environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Infinity Panels */}
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold text-center mb-4">Why Choose Infinity Panels</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Engineered for excellence, built to last</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm">{f.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <img src={factoryAerial} alt="Infinity Panels manufacturing facility" className="w-full h-64 md:h-80 object-cover" />
        </div>
      </div>
    </section>

    {/* Customer Success Stats */}
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={warehouseInterior} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>
      <div className="container mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-12">50,000+ Happy Customers</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">100+</p>
            <p className="text-white/70 mt-2 text-sm">Dealers Nationwide</p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">20+</p>
            <p className="text-white/70 mt-2 text-sm">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c, i) =>
        <div key={i} className="text-center p-8 border border-border rounded-lg hover:shadow-md transition-shadow">
              <Award size={40} className="mx-auto text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg">{c.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{c.desc}</p>
            </div>
        )}
        </div>
      </div>
    </section>
  </Layout>;


export default About;
import { Award, Target, Eye, Shield, Leaf, Gem, Bug } from "lucide-react";
import Layout from "@/components/Layout";
import factoryAerial from "@/assets/factory-aerial.png";
import warehouse from "@/assets/warehouse.png";
import pageHeaderBg from "@/assets/page-header-bg-2.jpg";

const milestones = [
  { year: "2005", title: "Company Founded", desc: "Established with a vision to revolutionize the engineered wood industry in India." },
  { year: "2008", title: "First Factory", desc: "Commissioned our first state-of-the-art manufacturing plant with European machinery." },
  { year: "2012", title: "ISO Certification", desc: "Received ISO 9001:2008 certification for quality management systems." },
  { year: "2016", title: "Product Expansion", desc: "Launched HDHMR and Frame Guard Board product lines to meet growing demand." },
  { year: "2020", title: "Green Certification", desc: "Achieved Green Building certification for sustainable manufacturing practices." },
  { year: "2024", title: "Pan-India Presence", desc: "Expanded distribution to 500+ dealers across all major cities in India." },
];

const certifications = [
  { title: "ISO 9001:2015", desc: "Quality Management" },
  { title: "ISI Certified", desc: "Indian Standards" },
  { title: "Green Building", desc: "Sustainable Manufacturing" },
  { title: "FSC Certified", desc: "Responsible Forestry" },
];

const featureIcons = [
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Gem, label: "Superior Quality" },
  { icon: Shield, label: "Durability" },
  { icon: Bug, label: "Termite Resistant" },
];

const About = () => (
  <Layout>
    {/* Page Header */}
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

    {/* Why Choose Infinity Panels */}
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10">
          Why Choose Infinity Panels
        </h2>

        {/* Intro with aerial image */}
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              At Infinity Panels, we believe that great interiors begin with exceptional raw materials. For nearly two decades, we have been at the forefront of India's engineered wood industry, delivering products that architects, designers, and homeowners trust for their most ambitious projects. Our commitment to <strong className="text-foreground">Eco-Friendly</strong> manufacturing means every board we produce meets the highest environmental standards without compromising on performance.
            </p>
            <p>
              What sets us apart is an unwavering focus on <strong className="text-foreground">Superior Quality</strong>. Each panel undergoes rigorous multi-stage quality checks — from raw material sourcing through pressing, finishing, and final inspection — ensuring consistent density, flawless surfaces, and precise dimensional accuracy. Our <strong className="text-foreground">Premium Finish</strong> technology delivers a surface smoothness that rivals the finest European standards, making our boards the preferred choice for high-end furniture, modular kitchens, and architectural cladding.
            </p>
            <p>
              Built for the Indian climate, Infinity Panels offer outstanding <strong className="text-foreground">Durability</strong> and are inherently <strong className="text-foreground">Termite Resistant</strong>. Our proprietary resin formulations and advanced pressing techniques produce boards that withstand moisture, heat, and biological attack — backed by long-term performance warranties that give our customers complete peace of mind.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src={factoryAerial}
              alt="Infinity Panels manufacturing facility — aerial view"
              className="w-full h-full object-cover rounded-lg shadow-md min-h-[260px]"
            />
          </div>
        </div>

        {/* Feature icon row */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {featureIcons.map((f) => (
            <div key={f.label} className="flex items-center gap-2 text-foreground">
              <f.icon size={22} className="text-primary" />
              <span className="text-sm font-semibold tracking-wide">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Milestones / stats with warehouse image */}
        <div className="grid md:grid-cols-5 gap-10 mb-6">
          <div className="md:col-span-2">
            <img
              src={warehouse}
              alt="Infinity Panels warehouse and logistics"
              className="w-full h-full object-cover rounded-lg shadow-md min-h-[240px]"
            />
          </div>
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              Our growth story is a testament to the trust placed in us by thousands of professionals and homeowners across India. Today, we are proud to say we are <strong className="text-foreground">committed to exceeding the expectations of over 50,000+ Happy Customers</strong> who rely on Infinity Panels for projects ranging from residential interiors to large-scale commercial fit-outs.
            </p>
            <p>
              This nationwide reach would not be possible without our robust distribution network — <strong className="text-foreground">strengthening our commitment to our 100+ dealers nationwide</strong>. From metro cities to emerging towns, our dealer partners ensure that premium-quality engineered wood is always within reach, supported by responsive logistics and dedicated after-sales service.
            </p>
            <p>
              We continue to invest in R&D, sustainable forestry partnerships, and state-of-the-art European machinery to push the boundaries of what engineered wood can achieve. When you choose Infinity Panels, you choose a partner dedicated to quality, innovation, and the long-term success of your projects.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding section-alt">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Eye size={24} className="text-primary" />
              <h2 className="text-2xl font-heading font-bold">Our Vision</h2>
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
    </section>

    {/* Timeline */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />
          {milestones.map((m, i) => (
            <div key={i} className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-1.5 z-10" />
              <div className="ml-14 md:ml-0 md:w-1/2 bg-card border border-border rounded-lg p-5 shadow-sm">
                <span className="text-primary font-bold text-sm">{m.year}</span>
                <h3 className="font-heading font-semibold mt-1">{m.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="section-padding section-alt">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c, i) => (
            <div key={i} className="text-center p-8 border border-border rounded-lg hover:shadow-md transition-shadow bg-card">
              <Award size={40} className="mx-auto text-primary mb-4" />
              <h3 className="font-heading font-bold text-lg">{c.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

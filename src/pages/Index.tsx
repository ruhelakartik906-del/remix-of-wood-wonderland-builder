import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Leaf, Bug, Hammer, ChevronLeft, ChevronRight, Quote, Factory, Users, Award, MapPin, Check, X, Newspaper } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import factory from "@/assets/factory.jpg";
import factoryWide from "@/assets/factory-wide.jpg";
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
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const heroSlides = [
{ image: hero1, title: "Premium Wood Panels for \nModern Spaces", subtitle: "Engineered for strength, designed for beauty" },
{ image: hero2, title: "Transform Your Interiors\nwith Quality", subtitle: "Trusted by architects and designers worldwide" }];


const products = [
{ name: "MDF Board", image: mdfBoard, slug: "mdf-board", desc: "Medium Density Fibreboard for smooth finishes and versatile applications", features: ["Smooth surface finish", "Easy to paint & laminate", "Eco-friendly manufacturing"] },
{ name: "HDHMR Board", image: hdhmrBoard, slug: "hdhmr-board", desc: "High Density High Moisture Resistant boards for demanding environments", features: ["Superior moisture resistance", "Ultra-high density core", "Kitchen & bathroom ready"] },
{ name: "Particle Board", image: particleBoard, slug: "particle-board", desc: "Cost-effective solution for furniture and interior fit-outs", features: ["Uniform structure", "Budget-friendly option", "Laminate-ready surface"] },
{ name: "Flame Guard Board", image: frameguardBoard, slug: "flame-guard-board", desc: "Protective boards engineered specifically for door frames", features: ["Dimensional stability", "Enhanced termite protection", "Long-lasting durability"] }];


const features = [
{ icon: Shield, title: "Superior Quality", desc: "Manufactured with precision using world-class technology" },
{ icon: Leaf, title: "Eco-Friendly", desc: "Sustainable sourcing and green manufacturing practices" },
{ icon: Bug, title: "Termite Resistant", desc: "Advanced treatment ensures complete termite protection" },
{ icon: Hammer, title: "Durability", desc: "Built to last with exceptional structural integrity" }];


const testimonials = [
{ name: "Rajesh Kumar", role: "Interior Designer", quote: "WoodCraft boards have become our go-to for premium projects. The consistency and quality are unmatched." },
{ name: "Priya Sharma", role: "Architect", quote: "The HDHMR boards offer incredible moisture resistance. Perfect for kitchen and bathroom cabinetry." },
{ name: "Amit Patel", role: "Furniture Manufacturer", quote: "We've been sourcing from WoodCraft for 5 years. Reliable quality, timely delivery every time." }];


const applicationTabs: Record<string, {name: string;image: string;}[]> = {
  Kitchen: [
  { name: "Modular Kitchen", image: appKitchen },
  { name: "Kitchen Cabinets", image: appKitchen2 },
  { name: "Kitchen Island", image: appWall }],

  Bedroom: [
  { name: "Wardrobes", image: appWardrobe },
  { name: "Bed Frames", image: appBedroom },
  { name: "Dressing Units", image: appOffice }],

  Office: [
  { name: "Workstations", image: appOffice2 },
  { name: "Conference Rooms", image: appOffice },
  { name: "Reception Desks", image: appWall }],

  Exterior: [
  { name: "Wall Cladding", image: appExterior },
  { name: "Facade Panels", image: appWall },
  { name: "Outdoor Furniture", image: appBedroom }]

};

const comparisonData = [
{ property: "Density", ours: "850-950 kg/m³", ordinary: "400-550 kg/m³", better: true },
{ property: "Termite Resistance", ours: "100% Protected", ordinary: "Vulnerable", better: true },
{ property: "Surface Smoothness", ours: "Ultra Smooth", ordinary: "Rough & Uneven", better: true },
{ property: "Moisture Resistance", ours: "High (HDHMR)", ordinary: "Low", better: true },
{ property: "Screw Holding", ours: "Excellent", ordinary: "Poor", better: true },
{ property: "Lifespan", ours: "25+ Years", ordinary: "8-10 Years", better: true }];


const stats = [
{ icon: MapPin, value: "100+", label: "Dealers Nationwide" },
{ icon: Factory, value: "20+", label: "Years Experience" },
{ icon: Users, value: "50,000+", label: "Happy Customers" },
{ icon: Award, value: "10M+", label: "Sq. Ft. Produced" }];


const newsItems = [
{ image: news1, title: "WoodCraft Featured in Design Magazine", date: "March 15, 2026", excerpt: "Our premium HDHMR boards were highlighted as the top choice for modern kitchen designs." },
{ image: news2, title: "Exhibition at IndiaWood 2026", date: "February 28, 2026", excerpt: "WoodCraft showcased its latest innovations at India's largest wood industry trade fair." },
{ image: news3, title: "Sustainability Milestone Achieved", date: "January 10, 2026", excerpt: "We've planted over 100,000 trees as part of our green initiative commitment." }];


const certLogos = ["ISO 9001:2015", "ISI Certified", "Green Building Council", "FSC Certified", "CARB Compliant", "E1 Standard"];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <Link to="/products" className="absolute inset-0 z-10" aria-label="Explore Products" />
        {heroSlides.map((slide, i) =>
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-contain object-top" />
          </div>
        )}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) =>
          <button key={i} onClick={(e) => {e.preventDefault();setCurrentSlide(i);}} className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? "bg-primary-foreground" : "bg-primary-foreground/40"}`} />
          )}
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="container mx-auto">
        <div className="py-3 overflow-hidden rounded-b-lg bg-secondary-foreground font-medium">
          <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap flex gap-16">
            {[...Array(4)].map((_, i) =>
            <span key={i} className="text-primary-foreground font-heading font-semibold text-sm md:text-base tracking-widest uppercase">
                India's Leading Manufacturer of HDHMR & MDF &nbsp;•&nbsp; Premium Engineered Wood Panels &nbsp;•&nbsp; Trusted by 500+ Dealers &nbsp;•&nbsp;
              </span>
            )}
          </div>
        </div>
      </div>

      {/* About Snippet */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={factory} alt="Manufacturing facility" className="rounded-lg shadow-lg w-full h-80 object-cover" />
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Crafting Excellence Since 2005</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With nearly two decades of expertise in engineered wood manufacturing, we have established ourselves as a trusted name
                in the industry. Our state-of-the-art facilities and commitment to quality ensure every panel meets the highest standards.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-2.5 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Universe */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Our Product Universe</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Explore our comprehensive range of engineered wood solutions designed for every application</p>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p) =>
            <div key={p.slug} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500">
                <div className="grid sm:grid-cols-2">
                  <div className="aspect-square sm:aspect-auto overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="font-heading font-bold text-xl mb-2">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                    <ul className="space-y-2 mb-5">
                      {p.features.map((f, i) =>
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <Check size={14} className="text-primary shrink-0" /> {f}
                        </li>
                    )}
                    </ul>
                    <Link to={`/products/${p.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      View Full Technical Specs <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Applications Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Infinity Possibilities</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Our boards transform every space — from kitchens to exteriors</p>
          <Tabs defaultValue="Kitchen" className="w-full">
            <TabsList className="mx-auto flex w-fit mb-8">
              {Object.keys(applicationTabs).map((tab) =>
              <TabsTrigger key={tab} value={tab} className="px-6">{tab}</TabsTrigger>
              )}
            </TabsList>
            {Object.entries(applicationTabs).map(([tab, images]) =>
            <TabsContent key={tab} value={tab}>
                <div className="grid sm:grid-cols-3 gap-6">
                  {images.map((img, i) =>
                <div key={i} className="group rounded-xl overflow-hidden shadow-md">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={img.image} alt={img.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="p-4 bg-card text-center">
                        <h3 className="font-heading font-semibold text-sm">{img.name}</h3>
                      </div>
                    </div>
                )}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) =>
            <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <f.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Why Our Boards?</h2>
          <p className="text-muted-foreground text-center mb-10">See how our engineered boards outperform ordinary plywood</p>
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Property</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Our HDHMR / MDF</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Ordinary Plywood</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) =>
                <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-section-alt"}>
                    <td className="px-6 py-3.5 text-sm font-medium">{row.property}</td>
                    <td className="px-6 py-3.5 text-sm text-center font-semibold text-primary">
                      <span className="inline-flex items-center gap-1.5"><Check size={14} /> {row.ours}</span>
                    </td>
                    <td className="px-6 py-3.5 text-sm text-center text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5"><X size={14} className="text-destructive" /> {row.ordinary}</span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence - Parallax Stats */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={factoryWide} alt="Manufacturing facility" className="w-full h-full object-cover" style={{ transform: "translateZ(0)" }} />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground text-center mb-4">Manufacturing Excellence</h2>
          <p className="text-primary-foreground/70 text-center max-w-xl mx-auto mb-14">State-of-the-art facilities powered by European technology</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) =>
            <div key={i} className="text-center">
                <s.icon size={32} className="mx-auto mb-3 text-primary" />
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-1">{s.value}</div>
                <p className="text-primary-foreground/70 text-sm">{s.label}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">What Our Clients Say</h2>
          <div className="relative">
            <Quote size={40} className="text-primary/20 mx-auto mb-4" />
            <p className="text-lg text-foreground italic leading-relaxed mb-6">"{testimonials[currentTestimonial].quote}"</p>
            <p className="font-heading font-semibold">{testimonials[currentTestimonial].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].role}</p>
            <div className="flex justify-center gap-4 mt-8">
              <button onClick={() => setCurrentTestimonial((t) => (t - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => setCurrentTestimonial((t) => (t + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">Infinity Goods Video</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
            { title: "Behind the Scenes: Process", desc: "Watch how our high-quality wood panels are made with precision.", src: "/videos/video-1.mp4" },
            { title: "Factory Tour: State-of-the-Art", desc: "Explore our world-class manufacturing facility and European machinery.", src: "/videos/video-2.mp4" },
            { title: "Product Showcase: HDHMR Boards", desc: "See why architects and designers choose our premium engineered boards.", src: "/videos/video-3.mp4" }].
            map((video, i) =>
            <div key={i} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <video src={video.src} controls className="w-full h-full object-cover" preload="metadata" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                  <p className="text-muted-foreground text-sm">{video.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Latest from Media */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Latest from Media</h2>
            <Link to="/media" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, i) =>
            <div key={i} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1"><Newspaper size={12} /> {item.date}</p>
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                </div>
              </div>
            )}
          </div>
          <Link to="/media" className="md:hidden inline-flex items-center gap-2 text-primary font-semibold mt-6">
            View All <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Certifications Slider */}
      <section className="py-10 bg-section-alt border-y border-border overflow-hidden">
        <div className="flex animate-[marquee_15s_linear_infinite] gap-16 items-center">
          {[...certLogos, ...certLogos].map((logo, i) =>
          <div key={i} className="shrink-0 flex items-center gap-2 px-6 py-3 border border-border rounded-lg bg-card">
              <Award size={20} className="text-primary" />
              <span className="font-heading font-semibold text-sm text-muted-foreground whitespace-nowrap">{logo}</span>
            </div>
          )}
        </div>
      </section>
    </Layout>);

};

export default Index;
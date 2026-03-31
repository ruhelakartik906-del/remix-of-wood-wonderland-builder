import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Leaf, Bug, Hammer, ChevronLeft, ChevronRight, Quote, Factory, Users, Award, MapPin, Check, X, Play } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import heroBanner from "@/assets/hero-banner.png";
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
import partnerOyo from "@/assets/partner-oyo.webp";
import partnerDlf from "@/assets/partner-dlf.jpg";
import partnerEmaar from "@/assets/partner-emaar.jpg";
import partnerGodrej from "@/assets/partner-godrej.jpg";
import partnerIndiabulls from "@/assets/partner-indiabulls.jpg";
import partnerLemontree from "@/assets/partner-lemontree.jpg";
import partnerTata from "@/assets/partner-tata.jpg";



const products = [
{ name: "MDF Board", image: mdfBoard, slug: "mdf-board", desc: "Medium Density Fibreboard for smooth finishes and versatile applications", features: ["Smooth surface finish", "Easy to paint & laminate", "Eco-friendly manufacturing"] },
{ name: "HDHMR Board", image: hdhmrBoard, slug: "hdhmr-board", desc: "High Density High Moisture Resistant boards for demanding environments", features: ["Superior moisture resistance", "Ultra-high density core", "Kitchen & bathroom ready"] },
{ name: "Particle Board", image: particleBoard, slug: "particle-board", desc: "Cost-effective solution for furniture and interior fit-outs", features: ["Uniform structure", "Budget-friendly option", "Laminate-ready surface"] },
{ name: "Flame Guard Board", image: frameguardBoard, slug: "flame-guard-board", desc: "Fire-retardant MDF engineered for maximum safety in public spaces", features: ["Low smoke emission", "High fire resistance", "Easily processable"] }];


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


const partnerLogos = [
  { name: "OYO", image: partnerOyo },
  { name: "DLF", image: partnerDlf },
  { name: "EMAAR", image: partnerEmaar },
  { name: "Godrej Properties", image: partnerGodrej },
  { name: "Indiabulls", image: partnerIndiabulls },
  { name: "Lemon Tree Hotels", image: partnerLemontree },
  { name: "Tata Housing", image: partnerTata },
  { name: "OYO", image: partnerOyo },
  { name: "DLF", image: partnerDlf },
  { name: "EMAAR", image: partnerEmaar },
];

const corporateVideos = [
  { id: "eIkQxRty31M", title: "Corporate Video 1" },
  { id: "BOqIpNlPwBg", title: "Corporate Video 2" },
  { id: "si05K7XhoV4", title: "Corporate Video 3" },
  { id: "v4xPPnzYFNw", title: "Corporate Video 4" },
  { id: "kW-cxcoCqP4", title: "Corporate Video 5" },
  { id: "kW-cxcoCqP4", title: "Corporate Video 6" },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState(corporateVideos[0].id);

  return (
    <Layout>
      {/* Hero */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Link to="/products" className="block" aria-label="Explore Products">
          <img src={heroBanner} alt="Infinity Goods - Har ghar ke liye" className="w-full h-auto block" />
        </Link>
      </section>

      {/* Scrolling Marquee */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="py-3 overflow-hidden bg-secondary-foreground font-medium">
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

      {/* Corporate Videos */}
      <section className="my-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border-2 border-[#FFB6C1] bg-background p-6 sm:p-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-[#1a5c2a]">Corporate Videos</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">Explore our brand journey, manufacturing process, and product innovations</p>

            {/* Main Player */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-border">
                <iframe
                  key={activeVideoId}
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0&rel=0`}
                  title="Corporate Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {corporateVideos.map((video, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideoId(video.id)}
                  className={`group relative rounded-md overflow-hidden shadow-md border-2 transition-all duration-300 ${
                    activeVideoId === video.id && i === corporateVideos.findIndex(v => v.id === activeVideoId)
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-transparent hover:border-primary/50"
                  }`}
                >
                  <div className="aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play size={14} className="text-primary-foreground ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
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
      <section className="section-padding pb-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">Infinity Goods Video</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["/videos/video-1.mp4", "/videos/video-2.mp4", "/videos/video-3.mp4"].map((src, i) =>
            <div key={i} className="overflow-hidden rounded-xl border border-border shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="aspect-[4/3] w-full">
                  <video src={src} controls className="block h-full w-full object-cover" preload="metadata" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="bg-white py-16 pb-5">
        <div className="mx-[5%] md:mx-[5%]">
          <div className="rounded-2xl shadow-lg p-8 md:p-12" style={{ backgroundColor: "#BDBDBD" }}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">Get in Touch</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] mb-[10px]">
                <input type="text" placeholder="Name" className="w-full h-12 px-4 rounded-md border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                <input type="tel" placeholder="Phone" className="w-full h-12 px-4 rounded-md border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                <input type="email" placeholder="Email Address" className="w-full h-12 px-4 rounded-md border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                <input type="text" placeholder="City" className="w-full h-12 px-4 rounded-md border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="flex justify-center mt-[15px]">
                <button type="submit" className="px-10 py-3 rounded-md text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#555555" }}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Partner Logo Slider */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-14 overflow-hidden mb-0" style={{ backgroundColor: "#dfedde" }}>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">Our Clients & Partners</h2>
        <div className="relative group w-[90%] mx-auto overflow-hidden">
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft size={18} className="text-foreground" />
          </button>
          <div className="flex animate-[marquee_25s_linear_infinite] gap-8">
            {[...partnerLogos, ...partnerLogos].map((logo, i) =>
              <div key={i} className="shrink-0 w-48 h-28 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
                <img src={logo.image} alt={logo.name} className="max-w-full max-h-full object-contain" />
              </div>
            )}
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight size={18} className="text-foreground" />
          </button>
        </div>
      </section>
    </Layout>);

};

export default Index;
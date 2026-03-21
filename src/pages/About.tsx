import { Award, Target, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import factory from "@/assets/factory.jpg";
import pageHeaderBg from "@/assets/page-header-bg-2.jpg";

const milestones = [
{ year: "2005", title: "Company Founded", desc: "Established with a vision to revolutionize the engineered wood industry in India." },
{ year: "2008", title: "First Factory", desc: "Commissioned our first state-of-the-art manufacturing plant with European machinery." },
{ year: "2012", title: "ISO Certification", desc: "Received ISO 9001:2008 certification for quality management systems." },
{ year: "2016", title: "Product Expansion", desc: "Launched HDHMR and Frame Guard Board product lines to meet growing demand." },
{ year: "2020", title: "Green Certification", desc: "Achieved Green Building certification for sustainable manufacturing practices." },
{ year: "2024", title: "Pan-India Presence", desc: "Expanded distribution to 500+ dealers across all major cities in India." }];


const certifications = [
{ title: "ISO 9001:2015", desc: "Quality Management" },
{ title: "ISI Certified", desc: "Indian Standards" },
{ title: "Green Building", desc: "Sustainable Manufacturing" },
{ title: "FSC Certified", desc: "Responsible Forestry" }];


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

    {/* Timeline */}
    <section className="section-padding section-alt">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />
          {milestones.map((m, i) =>
        <div key={i} className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-1.5 z-10" />
              <div className="ml-14 md:ml-0 md:w-1/2 bg-card border border-border rounded-lg p-5 shadow-sm">
                <span className="text-primary font-bold text-sm">{m.year}</span>
                <h3 className="font-heading font-semibold mt-1">{m.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
              </div>
            </div>
        )}
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
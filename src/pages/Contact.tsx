import { useState } from "react";
import { Phone, Mail, Building2, Factory, Send } from "lucide-react";
import Layout from "@/components/Layout";
import pageHeaderBg from "@/assets/page-header-bg.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      <section className="relative h-48 md:h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={pageHeaderBg} alt="" className="w-full h-full object-cover" style={{ filter: 'blur(1.5px)' }} />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl font-heading font-bold text-white text-center md:text-6xl">Contact Us</h1>
          <p className="text-white/80 mt-2 text-center">Get in touch with our team</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Phone</h3>
                    <p className="text-muted-foreground text-sm">91+ ​96545 91696   </p>
                    
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Email</h3>
                    <p className="text-muted-foreground text-sm">Info@infinityboards.in</p>
                    <p className="text-muted-foreground text-sm">​</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Head Office</h3>
                    <p className="text-muted-foreground text-sm">E-503, Dilbagh Rose Garden, Fazalganj,<br />Kanpur, Uttar Pradesh - 208012</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Factory size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Manufacturing Unit:</h3>
                    <p className="text-muted-foreground text-sm">Village Pardhana, Tehsil Israna,<br />Panipat, Haryana - 132107</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-8">Send an Inquiry</h2>
              {submitted ?
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 text-center">
                  <h3 className="font-heading font-bold text-lg text-primary">Thank You!</h3>
                  <p className="text-muted-foreground mt-2">Your inquiry has been submitted. We'll get back to you soon.</p>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background" />
                
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background" />
                  
                    <input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background" />
                  
                  </div>
                  <select
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background text-muted-foreground">
                  
                    <option value="">Select Product Interest</option>
                    <option>MDF Board</option>
                    <option>HDHMR Board</option>
                    <option>Particle Board</option>
                    <option>Frame Guard Board</option>
                  </select>
                  <textarea
                  rows={4}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none" />
                
                  <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded font-bold hover:bg-accent transition-colors inline-flex items-center justify-center gap-2">
                  
                    <Send size={16} /> Send Inquiry
                  </button>
                </form>
              }
            </div>
          </div>
        </div>
      </section>

    </Layout>);

};

export default Contact;
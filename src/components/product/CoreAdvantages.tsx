interface CoreAdvantagesProps {
  features: { icon: any; title: string }[];
}

const CoreAdvantages = ({ features }: CoreAdvantagesProps) => (
  <section className="section-padding section-alt">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Core Advantages</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
              <f.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold mt-2">{f.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreAdvantages;

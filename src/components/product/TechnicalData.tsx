import type { ProductSpec } from "@/data/productData";

interface TechnicalDataProps {
  specs: ProductSpec[];
}

const TechnicalData = ({ specs }: TechnicalDataProps) => (
  <section className="section-padding section-alt">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Technical Data</h2>
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="px-6 py-3 text-left text-sm font-semibold">Property</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Unit</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Value/Range</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((s, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-section-alt"}>
                <td className="px-6 py-3 text-sm font-medium">{s.property}</td>
                <td className="px-6 py-3 text-sm text-muted-foreground">{s.unit}</td>
                <td className="px-6 py-3 text-sm">{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default TechnicalData;

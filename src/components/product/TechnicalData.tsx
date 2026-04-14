import type { ProductSpec } from "@/data/productData";

interface TechnicalDataProps {
  specs: ProductSpec[];
}

const TechnicalData = ({ specs }: TechnicalDataProps) => (
  <section className="section-padding section-alt">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Technical Data</h2>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[420px]">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold">Property</th>
              <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold">Unit</th>
              <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-semibold">Value/Range</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((s, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-section-alt"}>
                <td className="px-3 md:px-6 py-3 text-xs md:text-sm font-medium">{s.property}</td>
                <td className="px-3 md:px-6 py-3 text-xs md:text-sm text-muted-foreground">{s.unit}</td>
                <td className="px-3 md:px-6 py-3 text-xs md:text-sm">{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default TechnicalData;

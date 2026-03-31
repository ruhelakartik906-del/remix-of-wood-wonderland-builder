import type { ProductApplication } from "@/data/productData";

interface ApplicationsSectionProps {
  productName: string;
  applications: ProductApplication[];
}

const ApplicationsSection = ({ productName, applications }: ApplicationsSectionProps) => (
  <section className="section-padding">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">Where to Use {productName}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {applications.map((app, i) => (
          <div key={i} className="group rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-4 bg-card text-center">
              <h3 className="font-heading font-semibold">{app.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ApplicationsSection;

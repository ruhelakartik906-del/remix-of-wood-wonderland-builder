import { Link } from "react-router-dom";
import { FileText, Download } from "lucide-react";
import Layout from "@/components/Layout";
import policiesBanner from "@/assets/policies-banner.jpg";

const policies = [
  { title: "Whistle Blower Policy", slug: "whistle-blower-policy" },
  { title: "CSR Policy", slug: "csr-policy" },
];

const Policies = () => (
  <Layout>
    {/* Banner */}
    <div className="relative w-full h-48 md:h-64 overflow-hidden">
      <img src={policiesBanner} alt="Policies Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white font-heading">
          Infinity Board Policies
        </h1>
      </div>
    </div>

    {/* Policy Cards */}
    <div className="container mx-auto px-4 py-12 max-w-3xl space-y-4">
      {policies.map((policy) => (
        <div
          key={policy.slug}
          className="bg-card rounded-lg shadow-md border border-border p-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <FileText className="text-primary shrink-0" size={24} />
            <span className="text-lg font-medium text-foreground">{policy.title}</span>
          </div>
          <Link
            to={`/policies/${policy.slug}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <Download size={16} />
            DOWNLOAD
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

export default Policies;

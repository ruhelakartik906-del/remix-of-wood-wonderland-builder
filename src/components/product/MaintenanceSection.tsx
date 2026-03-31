import { CheckCircle, ClipboardList } from "lucide-react";

interface MaintenanceSectionProps {
  tips: string[];
}

const MaintenanceSection = ({ tips }: MaintenanceSectionProps) => (
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <div className="flex items-center gap-3 justify-center mb-8">
        <ClipboardList size={28} className="text-primary" />
        <h2 className="text-2xl md:text-3xl font-heading font-bold">Maintenance & Care Tips</h2>
      </div>
      <div className="bg-card border border-border rounded-xl p-8">
        <ul className="space-y-4">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default MaintenanceSection;

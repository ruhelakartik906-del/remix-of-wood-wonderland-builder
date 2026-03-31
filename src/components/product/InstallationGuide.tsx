import { Wrench } from "lucide-react";
import type { ProductInstallStep } from "@/data/productData";

interface InstallationGuideProps {
  steps: ProductInstallStep[];
}

const InstallationGuide = ({ steps }: InstallationGuideProps) => (
  <section className="section-padding section-alt">
    <div className="container mx-auto max-w-4xl">
      <div className="flex items-center gap-3 justify-center mb-10">
        <Wrench size={28} className="text-primary" />
        <h2 className="text-2xl md:text-3xl font-heading font-bold">Installation Guide</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">{i + 1}</span>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{step.step}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InstallationGuide;

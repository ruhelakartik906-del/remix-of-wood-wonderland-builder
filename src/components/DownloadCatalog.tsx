import { useState } from "react";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const DOWNLOADS = {
  profile: "https://drive.google.com/uc?export=download&id=17g8QmRpCMVmYtxey0pCNUgwGKR27nV6g",
  catalog: "https://drive.google.com/uc?export=download&id=14Gp0ARje-aLd-N11VhNPKJUy_whj3W9H",
};

const DownloadCatalog = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", whatsapp: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.whatsapp.trim()) return;

    setSubmitting(true);

    // Trigger both downloads
    const a1 = document.createElement("a");
    a1.href = DOWNLOADS.profile;
    a1.target = "_blank";
    a1.rel = "noopener noreferrer";
    a1.click();

    const a2 = document.createElement("a");
    a2.href = DOWNLOADS.catalog;
    a2.target = "_blank";
    a2.rel = "noopener noreferrer";
    a2.click();

    setTimeout(() => {
      setOpen(false);
      setSubmitting(false);
      setFormData({ name: "", company: "", whatsapp: "" });
      toast.success("Thank you! Your download has started.");
    }, 600);
  };

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border-2 border-border p-8 sm:p-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-2 text-[#1a5c2a]">
              Download Catalog
            </h2>
            <p className="text-muted-foreground text-center mb-8 text-sm">
              Get our complete company profile and product catalog
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              {/* Company Profile */}
              <button
                onClick={() => setOpen(true)}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <FileText size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-heading font-semibold text-sm">Company Profile</span>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  <Download size={14} /> Download
                </span>
              </button>

              {/* Product Catalog */}
              <button
                onClick={() => setOpen(true)}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <FileText size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-heading font-semibold text-sm">Product Catalog</span>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                  <Download size={14} /> Download
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading">Download Our Catalog</DialogTitle>
            <DialogDescription>
              Please fill in your details to download the company profile and product catalog.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div className="space-y-2">
              <Label htmlFor="dl-name">Full Name *</Label>
              <Input
                id="dl-name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                required
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dl-company">Business / Company Name</Label>
              <Input
                id="dl-company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dl-whatsapp">WhatsApp Number *</Label>
              <Input
                id="dl-whatsapp"
                placeholder="+91 XXXXX XXXXX"
                value={formData.whatsapp}
                onChange={(e) => setFormData((p) => ({ ...p, whatsapp: e.target.value }))}
                required
                maxLength={20}
              />
            </div>
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Processing..." : "Submit & Download"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DownloadCatalog;

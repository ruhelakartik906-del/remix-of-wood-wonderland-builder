import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import pageHeaderBg from "@/assets/page-header-bg-2.jpg";
import factory from "@/assets/factory.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import appKitchen from "@/assets/app-kitchen.jpg";
import appWardrobe from "@/assets/app-wardrobe.jpg";
import appOffice from "@/assets/app-office.jpg";
import appWall from "@/assets/app-wall.jpg";

const galleryImages = [
  { src: factory, title: "Gloss Up Your Lifestyle", subtitle: "8077 - Graphite" },
  { src: hero1, title: "Modern Elegance", subtitle: "9012 - Alpine White" },
  { src: hero2, title: "Contemporary Living", subtitle: "7045 - Smoky Oak" },
  { src: appKitchen, title: "Kitchen Perfection", subtitle: "6034 - Tuscan Walnut" },
  { src: appWardrobe, title: "Premium Wardrobes", subtitle: "5021 - Charcoal Teak" },
  { src: appOffice, title: "Workspace Redefined", subtitle: "4018 - Nordic Ash" },
  { src: appWall, title: "Statement Walls", subtitle: "3055 - Sahara Stone" },
];

const Media = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-56 md:h-72 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={pageHeaderBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Media Gallery
          </h1>
          <p className="text-white/80 mt-2 text-lg">Infinity Boards</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold text-foreground text-base">
                    {img.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{img.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-center mb-10 text-3xl">Video Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["/videos/media-video-1.mp4", "/videos/media-video-2.mp4", "/videos/video-3.mp4"].map((src, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video">
                  <video src={src} controls className="w-full h-full object-cover" preload="metadata" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={lightboxIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 border-none bg-black/95 overflow-hidden">
          {lightboxIndex !== null && (
            <div className="relative flex items-center justify-center min-h-[50vh]">
              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].title}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />

              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                <h3 className="text-white font-heading font-semibold text-lg">
                  {galleryImages[lightboxIndex].title}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  {galleryImages[lightboxIndex].subtitle}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Media;

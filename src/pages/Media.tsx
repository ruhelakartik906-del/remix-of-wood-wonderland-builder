import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import pageHeaderBg from "@/assets/page-header-bg-2.jpg";
import gallery1 from "@/assets/gallery-1-kitchen-light.jpg";
import gallery2 from "@/assets/gallery-2-wardrobe-white.jpg";
import gallery3 from "@/assets/gallery-3-office-desk.jpg";
import gallery4 from "@/assets/gallery-4-tv-unit.jpg";
import gallery5 from "@/assets/gallery-5-bedroom-wardrobe.jpg";
import gallery6 from "@/assets/gallery-6-retail-counter.jpg";
import gallery7 from "@/assets/gallery-7-kitchen-gray.jpg";
import gallery8 from "@/assets/gallery-8-wall-panel.jpg";
import gallery9 from "@/assets/gallery-9-conference.jpg";

const galleryImages = [
  { src: gallery1, title: "Gloss Up Your Lifestyle", subtitle: "8077 - Graphite" },
  { src: gallery2, title: "Own Your Magnanimity", subtitle: "8070 - Magma Grey" },
  { src: gallery3, title: "Live Around an Elegant Dove", subtitle: "8074 - Dove Grey" },
  { src: gallery4, title: "Feel the Fluorescence Emotions", subtitle: "8011 - Quartz Grey" },
  { src: gallery5, title: "Brush Up Your Life", subtitle: "8022 - Brushed Grey" },
  { src: gallery6, title: "Write Happiness with Graphite", subtitle: "8018 - Graphite Grey" },
  { src: gallery7, title: "Give A Feather Touch", subtitle: "8017 - Feather" },
  { src: gallery8, title: "Add Eternal Golden Bliss", subtitle: "9003 - White Oak" },
  { src: gallery9, title: "Create a Legacy", subtitle: "9021 - Smoked Oak" },
];

const videoSources = [
  "/__l5e/assets-v1/31b5d62d-5d04-4c17-b0a6-d1a3936cc3c0/media-video-1.mp4",
  "/__l5e/assets-v1/acedcc76-7f3b-4813-8ff3-073515ff55f6/media-video-2.mp4",
  "/__l5e/assets-v1/bd675604-9f5a-4282-9169-754338850ed7/media-video-3.mp4",
  "/__l5e/assets-v1/bdf309c4-8095-447d-a278-31e0a61a3c98/media-video-4.mp4",
  "/__l5e/assets-v1/562aae5f-17ff-493e-b1c1-d49d86f61fa1/media-video-5.mp4",
  "/__l5e/assets-v1/5af23aec-719b-4c1e-a0c6-9b7faaab44b4/media-video-6.mp4",
];

const Media = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

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

  const openVideoModal = (i: number) => setActiveVideoIndex(i);
  const closeVideoModal = () => setActiveVideoIndex(null);

  useEffect(() => {
    if (activeVideoIndex !== null && modalVideoRef.current) {
      modalVideoRef.current.play();
    }
  }, [activeVideoIndex]);

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
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading font-bold text-center mb-10 text-3xl">Video Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 justify-items-center">
            {videoSources.map((src, i) => (
              <div
                key={i}
                onClick={() => openVideoModal(i)}
                className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[240px] aspect-[9/16] cursor-pointer group"
              >
                <video
                  src={src}
                  className="block h-full w-full object-cover"
                  preload="metadata"
                  muted
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-foreground fill-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
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

      {/* Video Popup Modal */}
      {activeVideoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeVideoModal}
        >
          <button
            onClick={closeVideoModal}
            className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
          >
            <X className="h-7 w-7 text-white" />
          </button>
          <div
            className="relative w-[85vw] max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src={videoSources[activeVideoIndex]}
              controls
              autoPlay
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Media;

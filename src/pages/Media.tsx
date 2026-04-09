import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import Layout from "@/components/Layout";
import CompanyMeetSlider from "@/components/CompanyMeetSlider";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import pageHeaderBg from "@/assets/page-header-bg-2.jpg";
import gallery1 from "@/assets/gallery-new-1.jpg";
import gallery2 from "@/assets/gallery-new-2.jpg";
import gallery3 from "@/assets/gallery-new-3.jpg";
import gallery4 from "@/assets/gallery-new-4.jpg";
import gallery5 from "@/assets/gallery-new-5.jpg";
import gallery6 from "@/assets/gallery-new-6.jpg";
import gallery7 from "@/assets/gallery-new-7.jpg";
import gallery8 from "@/assets/gallery-new-8.jpg";
import gallery9 from "@/assets/gallery-new-9.jpg";

const galleryImages = [
  { src: gallery8, title: "Leading with Vision", subtitle: "Brand Ambassador" },
  { src: gallery2, title: "Craftsmanship & Innovation", subtitle: "CNC Jali & Panel Design" },
  { src: gallery3, title: "Infinity Boards Cafeteria Setup", subtitle: "Exhibition Lounge" },
  { src: gallery4, title: "Client Interactions", subtitle: "Business Meetings" },
  { src: gallery5, title: "Industry Partners", subtitle: "Networking at Exhibition" },
  { src: gallery6, title: "Building Connections", subtitle: "Partner Collaborations" },
  { src: gallery7, title: "Women Power at Infinity", subtitle: "Team Excellence" },
  { src: gallery1, title: "Team at Infinity Boards Exhibition", subtitle: "Exhibition Highlights" },
  { src: gallery9, title: "Product Showcase", subtitle: "HDSMR Board Samples" },
];

const videoItems = [
  { src: "/videos/media-video-1.mp4", thumbnail: "/videos/media-video-1-thumb.webp" },
  { src: "/videos/media-video-2.mp4", thumbnail: "/videos/media-video-2-thumb.webp" },
  { src: "/videos/media-video-3.mp4", thumbnail: "/videos/media-video-3-thumb.webp" },
  { src: "/videos/media-video-4.mp4", thumbnail: "/videos/media-video-4-thumb.webp" },
  { src: "/videos/media-video-5.mp4", thumbnail: "/videos/media-video-5-thumb.webp" },
  { src: "/videos/media-video-6.mp4", thumbnail: "/videos/media-video-6-thumb.webp" },
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

  const closeVideoModal = () => {
    modalVideoRef.current?.pause();
    setActiveVideoIndex(null);
  };

  useEffect(() => {
    if (activeVideoIndex !== null && modalVideoRef.current) {
      modalVideoRef.current.load();
      modalVideoRef.current.play().catch(() => undefined);
    }
  }, [activeVideoIndex]);

  return (
    <Layout>
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
                    loading="lazy"
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

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading font-bold text-center mb-10 text-3xl">Video Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 justify-items-center">
            {videoItems.map((video, i) => (
              <div
                key={i}
                onClick={() => openVideoModal(i)}
                className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[240px] aspect-[9/16] cursor-pointer group"
              >
                <img
                  src={video.thumbnail}
                  alt={`Infinity Boards video thumbnail ${i + 1}`}
                  loading="lazy"
                  className="block h-full w-full object-cover"
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
              src={videoItems[activeVideoIndex].src}
              poster={videoItems[activeVideoIndex].thumbnail}
              controls
              autoPlay
              preload="metadata"
              playsInline
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Media;

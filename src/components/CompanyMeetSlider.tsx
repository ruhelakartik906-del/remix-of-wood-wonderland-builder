import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import meet1 from "@/assets/company-meet-1.jpg";
import meet2 from "@/assets/company-meet-2.jpg";
import meet3 from "@/assets/company-meet-3.jpg";
import meet4 from "@/assets/company-meet-4.jpg";
import meet5 from "@/assets/company-meet-5.jpg";
import meet6 from "@/assets/company-meet-6.jpg";
import meet7 from "@/assets/company-meet-7.jpg";
import meet8 from "@/assets/company-meet-8.jpg";
import meet9 from "@/assets/company-meet-9.jpg";
import meet10 from "@/assets/company-meet-10.jpg";
import meet11 from "@/assets/company-meet-11.jpg";
import meet12 from "@/assets/company-meet-12.jpg";
import meet13 from "@/assets/company-meet-13.jpg";
import meet14 from "@/assets/company-meet-14.jpg";

const slides = [
  { src: meet1, title: "TA Hardware, Gurgaon" },
  { src: meet2, title: "Deepak Bedi (Dy. GM)" },
  { src: meet3, title: "Manish Mani (Regional Head)" },
  { src: meet4, title: "Naveen Joshi (Business Development Manager)" },
  { src: meet5, title: "Kishore (Area Sales Manager)" },
  { src: meet6, title: "Infinity Team Highlights" },
  { src: meet7, title: "Delegates Welcome Session" },
  { src: meet8, title: "Partner Recognition" },
  { src: meet9, title: "Product Handover Ceremony" },
  { src: meet10, title: "Business Presentation" },
  { src: meet11, title: "Team Group Photo" },
  { src: meet12, title: "Leadership Team" },
  { src: meet13, title: "Certificate Distribution" },
  { src: meet14, title: "Dealer Felicitation" },
];

const CompanyMeetSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? slides.length - 1 : lightboxIndex - 1);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === slides.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-center mb-10 text-3xl">Companies Meet</h2>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0"
                >
                  <div
                    className="bg-white rounded-2xl shadow-sm overflow-hidden mx-1 cursor-pointer hover:shadow-md transition-shadow duration-300"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={slide.src}
                        alt={slide.title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-muted-foreground text-sm text-center">{slide.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors disabled:opacity-40"
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors disabled:opacity-40"
            disabled={!canScrollNext}
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>

      <Dialog open={lightboxIndex !== null} onOpenChange={() => setLightboxIndex(null)}>
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
                src={slides[lightboxIndex].src}
                alt={slides[lightboxIndex].title}
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
                  {slides[lightboxIndex].title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CompanyMeetSlider;

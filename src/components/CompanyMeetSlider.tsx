import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import meet1 from "@/assets/company-meet-1.jpg";
import meet2 from "@/assets/company-meet-2.jpg";
import meet3 from "@/assets/company-meet-3.jpg";
import meet4 from "@/assets/company-meet-4.jpg";
import meet5 from "@/assets/company-meet-5.jpg";
import meet6 from "@/assets/company-meet-6.jpg";

const slides = [
  { src: meet1, title: "TA Hardware, Gurgaon" },
  { src: meet2, title: "Deepak Bedi (Dy. GM)" },
  { src: meet3, title: "Manish Mani (Regional Head)" },
  { src: meet4, title: "Naveen Joshi (Business Development Manager)" },
  { src: meet5, title: "Kishore (Area Sales Manager)" },
  { src: meet6, title: "Infinity Team Highlights" },
];

const CompanyMeetSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-center mb-10 text-3xl">Company Meet</h2>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0"
                >
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden mx-1">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={slide.src}
                        alt={slide.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
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
    </section>
  );
};

export default CompanyMeetSlider;

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  quote: string;
};

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 3);

  // Embla for mobile swipe
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedSnap, setSelectedSnap] = useState(0);

  const onEmblaSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onEmblaSelect();
    emblaApi.on("select", onEmblaSelect);
    emblaApi.on("reInit", onEmblaSelect);
    return () => { emblaApi.off("select", onEmblaSelect); };
  }, [emblaApi, onEmblaSelect]);

  const TestimonialCard = ({ t, mobile = false }: { t: Testimonial; mobile?: boolean }) => (
    <div className={`bg-white rounded-xl shadow-lg flex flex-col justify-between ${mobile ? "p-4" : "p-4 md:p-8"}`}>
      <div>
        <div className="flex gap-1 mb-3 md:mb-4">
          {[...Array(5)].map((_, s) => (
            <Star key={s} size={mobile ? 14 : 18} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className={`text-foreground leading-relaxed mb-4 md:mb-6 ${mobile ? "text-sm" : ""}`}>"{t.quote}"</p>
      </div>
      <div className="flex items-center justify-between border-t border-gray-100 pt-3 md:pt-4">
        <p className={`font-heading font-semibold ${mobile ? "text-base" : "text-sm"}`}>{t.name}</p>
        <Quote size={mobile ? 22 : 28} className="text-primary/30" />
      </div>
    </div>
  );

  return (
    <section className="py-8 md:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-3">What Our Customers Say</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Hear from our trusted partners and clients about their experience with our premium board solutions.
          </p>
        </div>

        {/* Mobile: Embla horizontal swipe */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_85%] min-w-0 pl-3 first:pl-0">
                  <TestimonialCard t={t} mobile />
                </div>
              ))}
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === selectedSnap ? "bg-primary" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid with arrows */}
        <div className="hidden md:block">
          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={() => setCurrentPage((p) => (p - 1 + totalPages) % totalPages)}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentPage((p) => (p + 1) % totalPages)}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            <div className="grid grid-cols-3 gap-6">
              {testimonials.slice(currentPage * 3, currentPage * 3 + 3).map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === currentPage ? "bg-primary" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

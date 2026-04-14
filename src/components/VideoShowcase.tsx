import { useRef, useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = ["/videos/video-1.mp4", null, "/videos/video-3.mp4"] as const;

const YT_SRC = "https://www.youtube.com/embed/v4xPPnzYFNw?controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&loop=1&playlist=v4xPPnzYFNw&enablejsapi=1";

function VideoCard({ src, index, isVisible, videoRefs, iframeRef, pauseOthers }: {
  src: string | null;
  index: number;
  isVisible: boolean;
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
  iframeRef: React.MutableRefObject<HTMLIFrameElement | null>;
  pauseOthers: (i: number) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg w-full aspect-[9/16]">
      {src ? (
        <video
          ref={(el) => { videoRefs.current[index] = el; }}
          src={isVisible ? src : undefined}
          controls
          className="block h-full w-full object-cover"
          preload="none"
          onPlay={() => pauseOthers(index)}
        />
      ) : (
        <div className="relative w-full h-full overflow-hidden">
          {isVisible && (
            <iframe
              ref={iframeRef}
              src={YT_SRC}
              allow="encrypted-media"
              allowFullScreen
              loading="lazy"
              className="absolute border-0"
              style={{ top: '-60px', left: 0, width: '100%', height: 'calc(100% + 120px)' }}
              title="Infinity Goods Video"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default function VideoShowcase() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveSlide(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const pauseOthers = useCallback((activeIndex: number) => {
    videos.forEach((src, i) => {
      if (i === activeIndex) return;
      if (src) {
        videoRefs.current[i]?.pause();
      } else {
        iframeRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
          "*"
        );
      }
    });
  }, []);

  return (
    <section className="section-padding pb-10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">Infinity Goods Video</h2>

        {/* Mobile: Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {videos.map((src, i) => (
                <div key={i} className="flex-[0_0_55%] min-w-0 flex justify-center">
                  <div className="w-full max-w-[180px]">
                    <VideoCard
                      src={src}
                      index={i}
                      isVisible={isVisible}
                      videoRefs={videoRefs}
                      iframeRef={iframeRef}
                      pauseOthers={pauseOthers}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Nav arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 border border-border rounded-full p-1 shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 border border-border rounded-full p-1 shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all ${activeSlide === i ? "bg-primary w-5" : "bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-x-4 gap-y-6 justify-items-center">
          {videos.map((src, i) => (
            <div key={i} className="w-full max-w-[300px]">
              <VideoCard
                src={src}
                index={i}
                isVisible={isVisible}
                videoRefs={videoRefs}
                iframeRef={iframeRef}
                pauseOthers={pauseOthers}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

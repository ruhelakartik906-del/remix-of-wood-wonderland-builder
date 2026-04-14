import { useRef, useCallback, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = ["/videos/video-1.mp4", null, "/videos/video-3.mp4"] as const;

const YT_SRC = "https://www.youtube.com/embed/v4xPPnzYFNw?controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&loop=1&playlist=v4xPPnzYFNw&enablejsapi=1";

export default function VideoShowcase() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);

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

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % videos.length);
    }, 3000);
    return () => clearInterval(interval);
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
        <h2 className="md:text-4xl font-heading font-bold mb-10 text-center text-3xl">Infinity Goods Video</h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrent((c) => (c - 1 + videos.length) % videos.length)}
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % videos.length)}
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>

          {/* Slider */}
          <div className="overflow-hidden mx-6 md:mx-0">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {videos.map((src, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2 md:px-3" style={{ minWidth: '100%' }}>
                  <div className="flex gap-3 md:gap-6 justify-center">
                    {/* Show current + next 2 on desktop, only current on mobile */}
                    {[0, 1, 2].map((offset) => {
                      const idx = (i + offset) % videos.length;
                      const videoSrc = videos[idx];
                      return (
                        <div
                          key={idx}
                          className={`relative overflow-hidden rounded-2xl border border-border shadow-lg transition-all duration-300 hover:shadow-xl w-full max-w-[200px] aspect-[9/16] ${offset > 0 ? 'hidden md:block' : ''}`}
                        >
                          {videoSrc ? (
                            <video
                              ref={(el) => { videoRefs.current[idx] = el; }}
                              src={isVisible ? videoSrc : undefined}
                              controls
                              className="block h-full w-full object-cover"
                              preload="none"
                              onPlay={() => pauseOthers(idx)}
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
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

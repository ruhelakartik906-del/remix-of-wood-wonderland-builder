import { useRef, useState, useEffect } from "react";

const VIDEO_SRC = "/videos/video-1.mp4";

export default function VideoShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section className="section-padding py-12" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">Infinity Goods Video</h2>

        <div className="flex justify-center">
          <div className="w-full max-w-[280px] md:max-w-[800px]">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg w-full aspect-[9/16] md:aspect-video">
              <video
                src={isVisible ? VIDEO_SRC : undefined}
                controls
                className="block h-full w-full object-cover"
                preload="none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

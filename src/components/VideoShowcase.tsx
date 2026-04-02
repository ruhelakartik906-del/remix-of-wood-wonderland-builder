import { useRef, useCallback } from "react";

const videos = ["/videos/video-1.mp4", null, "/videos/video-3.mp4"] as const;

const YT_SRC = "https://www.youtube.com/embed/v4xPPnzYFNw?controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&loop=1&playlist=v4xPPnzYFNw&enablejsapi=1";

export default function VideoShowcase() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const pauseOthers = useCallback((activeIndex: number) => {
    videos.forEach((src, i) => {
      if (i === activeIndex) return;
      if (src) {
        videoRefs.current[i]?.pause();
      } else {
        // Pause YouTube via postMessage
        iframeRef.current?.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
          "*"
        );
      }
    });
  }, []);

  return (
    <section className="section-padding pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">Infinity Goods Video</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 justify-items-center">
          {videos.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-border shadow-lg transition-all duration-300 hover:shadow-xl w-full max-w-[300px] aspect-[9/16]">
              {src ? (
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={src}
                  controls
                  className="block h-full w-full object-cover"
                  preload="metadata"
                  onPlay={() => pauseOthers(i)}
                />
              ) : (
                <div className="relative w-full h-full overflow-hidden">
                  <iframe
                    ref={iframeRef}
                    src={YT_SRC}
                    allow="encrypted-media"
                    allowFullScreen
                    className="absolute border-0"
                    style={{ top: '-60px', left: 0, width: '100%', height: 'calc(100% + 120px)' }}
                    title="Infinity Goods Video"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Play } from "lucide-react";
import Layout from "@/components/Layout";
import pageHeaderBg from "@/assets/page-header-bg-2.jpg";
import factory from "@/assets/factory.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import appKitchen from "@/assets/app-kitchen.jpg";
import appWardrobe from "@/assets/app-wardrobe.jpg";
import appOffice from "@/assets/app-office.jpg";
import appWall from "@/assets/app-wall.jpg";

const categories = ["All", "Factory Views", "Events", "Completed Projects"];

const galleryImages = [
{ src: factory, category: "Factory Views", title: "Manufacturing Plant" },
{ src: hero1, category: "Completed Projects", title: "Modern Kitchen" },
{ src: hero2, category: "Completed Projects", title: "Office Interior" },
{ src: appKitchen, category: "Completed Projects", title: "Kitchen Cabinets" },
{ src: appWardrobe, category: "Completed Projects", title: "Premium Wardrobes" },
{ src: appOffice, category: "Events", title: "Industry Exhibition" },
{ src: appWall, category: "Completed Projects", title: "Wall Paneling" }];


const Media = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <Layout>
      <section className="relative h-48 md:h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={pageHeaderBg} alt="" className="w-full h-full object-cover" style={{ filter: 'blur(2px)' }} />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl font-heading font-bold text-white text-center md:text-6xl">Media</h1>
          <p className="text-white/80 mt-2 text-center">Gallery, events & brand stories</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Photo Gallery</h2>
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((c) =>
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === c ? "bg-primary text-primary-foreground" : "bg-section-alt text-muted-foreground hover:bg-primary/10"}`
              }>
              
                {c}
              </button>
            )}
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) =>
            <div key={i} className="break-inside-avoid group rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  <img src={img.src} alt={img.title} className="w-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                    <span className="text-primary-foreground font-medium text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {img.title}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-center mb-10 text-3xl">Video Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["/videos/media-video-1.mp4", "/videos/media-video-2.mp4", "/videos/video-3.mp4"].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3]">
                  <video src={src} controls className="w-full h-full object-cover" preload="metadata" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>);

};

export default Media;
interface ProductHeroProps {
  image: string;
  name: string;
  tagline: string;
}

const ProductHero = ({ image, name, tagline }: ProductHeroProps) => (
  <section className="relative h-64 md:h-80 overflow-hidden">
    <img src={image} alt={name} className="w-full h-full object-cover scale-110" />
    <div className="absolute inset-0 bg-foreground/70" />
    <div className="relative z-10 h-full flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">{name}</h1>
        <p className="text-primary-foreground/80 text-lg mt-2">{tagline}</p>
      </div>
    </div>
  </section>
);

export default ProductHero;

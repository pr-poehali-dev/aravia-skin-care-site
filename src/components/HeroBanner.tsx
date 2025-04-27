import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-cover bg-center h-[500px] flex items-center" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070')" }}>
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Профессиональная косметика ARAVIA</h1>
          <p className="text-lg mb-6">Инновационные формулы и натуральные ингредиенты для безупречного ухода за кожей</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/catalog">Каталог продукции</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30">
              <Link to="/about">О бренде</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
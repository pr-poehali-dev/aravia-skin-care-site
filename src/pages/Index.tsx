import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroBanner />
        
        <section className="py-16 container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold text-lg mb-2">Натуральные ингредиенты</h3>
              <p className="text-muted-foreground">Наши продукты созданы на основе природных компонентов высочайшего качества</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🧪</div>
              <h3 className="font-bold text-lg mb-2">Научный подход</h3>
              <p className="text-muted-foreground">Инновационные формулы, разработанные ведущими косметологами</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="font-bold text-lg mb-2">Профессиональный уход</h3>
              <p className="text-muted-foreground">Салонные процедуры теперь доступны для ежедневного использования дома</p>
            </div>
          </div>
        </section>
        
        <FeaturedProducts />
        
        <section className="py-16 bg-accent/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Профессиональный уход в домашних условиях</h2>
                <p className="mb-6 text-lg">ARAVIA – это профессиональная косметика, которая сочетает в себе инновационные формулы и натуральные ингредиенты для достижения видимых результатов. Наши продукты разработаны с учетом потребностей разных типов кожи.</p>
                <p className="mb-8">Благодаря многолетнему опыту и современным технологиям, мы создаем эффективные средства для ухода за кожей лица и тела, которые помогают решать различные косметические проблемы.</p>
                <Button asChild size="lg">
                  <Link to="/about">Узнать больше о бренде</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=2069&auto=format&fit=crop"
                  alt="ARAVIA Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 container">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border">
              <div className="flex items-center text-amber-400 mb-4">
                ★★★★★
              </div>
              <p className="mb-4 italic">"Пользуюсь продукцией ARAVIA уже больше года и очень довольна результатом. Кожа стала более увлажненной и подтянутой."</p>
              <div className="font-medium">Анна М.</div>
            </div>
            
            <div className="bg-background p-6 rounded-lg border">
              <div className="flex items-center text-amber-400 mb-4">
                ★★★★★
              </div>
              <p className="mb-4 italic">"Альгинатные маски просто спасение для моей чувствительной кожи. Покраснения уходят, кожа выглядит отдохнувшей."</p>
              <div className="font-medium">Елена В.</div>
            </div>
            
            <div className="bg-background p-6 rounded-lg border">
              <div className="flex items-center text-amber-400 mb-4">
                ★★★★★
              </div>
              <p className="mb-4 italic">"Как косметолог, я рекомендую ARAVIA своим клиентам для домашнего ухода. Качество на уровне профессиональных средств."</p>
              <div className="font-medium">Ирина К., косметолог</div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
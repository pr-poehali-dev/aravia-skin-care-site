import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";

const mockProducts = [
  {
    id: 1,
    name: "Aravia Professional Крем-парафин Цветочный нектар с маслом ши и манго",
    price: 890,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Уход за телом",
    isNew: true,
    isBestseller: false
  },
  {
    id: 2,
    name: "Aravia Professional Маска альгинатная с экстрактом черники",
    price: 1250,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Уход за лицом",
    isNew: false,
    isBestseller: true
  },
  {
    id: 3,
    name: "Aravia Professional Сливки для тела питательные с маслом какао и орехов",
    price: 1490,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Уход за телом",
    isNew: false,
    isBestseller: true
  },
  {
    id: 4,
    name: "Aravia Professional Увлажняющий флюид для лица с гиалуроновой кислотой",
    price: 1790,
    image: "https://images.unsplash.com/photo-1628606202057-634b337c4ae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Уход за лицом",
    isNew: true,
    isBestseller: false
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Наши продукты</h2>
        
        <Tabs defaultValue="bestsellers" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="bestsellers">Бестселлеры</TabsTrigger>
              <TabsTrigger value="new">Новинки</TabsTrigger>
              <TabsTrigger value="face">Для лица</TabsTrigger>
              <TabsTrigger value="body">Для тела</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="bestsellers">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockProducts.filter(p => p.isBestseller).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
              {/* Добавляем продукты из другой категории, чтобы заполнить сетку */}
              {mockProducts.filter(p => !p.isBestseller).slice(0, 2).map((product) => (
                <ProductCard key={`bestseller-extra-${product.id}`} {...product} isBestseller={true} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockProducts.filter(p => p.isNew).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
              {/* Добавляем продукты из другой категории, чтобы заполнить сетку */}
              {mockProducts.filter(p => !p.isNew).slice(0, 2).map((product) => (
                <ProductCard key={`new-extra-${product.id}`} {...product} isNew={true} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="face">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockProducts.filter(p => p.category === "Уход за лицом").map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
              {/* Добавляем продукты из другой категории, чтобы заполнить сетку */}
              {mockProducts.filter(p => p.category !== "Уход за лицом").slice(0, 2).map((product) => (
                <ProductCard 
                  key={`face-extra-${product.id}`} 
                  {...product} 
                  category="Уход за лицом" 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="body">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockProducts.filter(p => p.category === "Уход за телом").map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
              {/* Добавляем продукты из другой категории, чтобы заполнить сетку */}
              {mockProducts.filter(p => p.category !== "Уход за телом").slice(0, 2).map((product) => (
                <ProductCard 
                  key={`body-extra-${product.id}`} 
                  {...product} 
                  category="Уход за телом" 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProducts;
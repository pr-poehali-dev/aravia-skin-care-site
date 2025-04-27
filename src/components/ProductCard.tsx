import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  isNew = false, 
  isBestseller = false 
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative overflow-hidden h-64">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-primary text-white px-2 py-1 text-xs rounded-md font-medium">
              Новинка
            </span>
          )}
          {isBestseller && (
            <span className="bg-accent text-accent-foreground px-2 py-1 text-xs rounded-md font-medium">
              Бестселлер
            </span>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full h-8 w-8" 
          aria-label="Добавить в избранное"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <Link to={`/product/${id}`} className="hover:underline">
          <h3 className="font-medium line-clamp-2 mb-2">{name}</h3>
        </Link>
        <div className="font-semibold">{price.toLocaleString()} ₽</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingBag className="h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
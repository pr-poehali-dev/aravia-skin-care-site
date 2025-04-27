import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categoryItems = [
  {
    title: "Уход за лицом",
    categories: ["Очищение", "Тонизирование", "Увлажнение", "Маски", "Серумы"],
  },
  {
    title: "Уход за телом",
    categories: ["Скрабы", "Лосьоны", "Масла", "Обертывания", "SPA-уход"],
  },
  {
    title: "Профессиональная линия",
    categories: ["Для салонов", "Наборы", "Акции для мастеров"],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight text-primary">ARAVIA</h1>
            </Link>

            <div className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {categoryItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.categories.map((category) => (
                            <li key={category}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={`/category/${category.toLowerCase()}`}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">{category}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <Link to="/blog" className={navigationMenuTriggerStyle()}>
                      Блог
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/about" className={navigationMenuTriggerStyle()}>
                      О бренде
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Поиск">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Аккаунт">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Корзина">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-3 space-y-2">
            {categoryItems.map((item) => (
              <div key={item.title} className="py-2">
                <div className="font-medium mb-1">{item.title}</div>
                <div className="pl-4 space-y-1">
                  {item.categories.map((category) => (
                    <Link 
                      key={category} 
                      to={`/category/${category.toLowerCase()}`}
                      className="block py-1 text-sm"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link to="/blog" className="block py-2 font-medium">Блог</Link>
            <Link to="/about" className="block py-2 font-medium">О бренде</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
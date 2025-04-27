import { Link } from "react-router-dom";
import { Instagram, Facebook, Video, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ARAVIA</h3>
            <p className="mb-4">Профессиональная косметика для ухода за кожей лица и тела</p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/20">
                <Video className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/category/face" className="hover:underline">Уход за лицом</Link></li>
              <li><Link to="/category/body" className="hover:underline">Уход за телом</Link></li>
              <li><Link to="/category/professional" className="hover:underline">Профессиональная линия</Link></li>
              <li><Link to="/category/new" className="hover:underline">Новинки</Link></li>
              <li><Link to="/category/sets" className="hover:underline">Наборы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline">О бренде</Link></li>
              <li><Link to="/blog" className="hover:underline">Блог</Link></li>
              <li><Link to="/delivery" className="hover:underline">Доставка и оплата</Link></li>
              <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
              <li><Link to="/faq" className="hover:underline">Вопросы и ответы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>г. Москва, ул. Профессиональная, д. 10, офис 205</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+74951234567" className="hover:underline">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@aravia.ru" className="hover:underline">info@aravia.ru</a>
              </li>
            </ul>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Подпишитесь на рассылку</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-primary hover:bg-white/90">ОК</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20">
        <div className="container py-4 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>© 2025 ARAVIA. Все права защищены.</div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:underline">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:underline">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
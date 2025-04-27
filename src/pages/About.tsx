import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">О бренде ARAVIA</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Наша философия</h2>
              <p className="text-lg mb-4">
                ARAVIA – это профессиональная косметика, созданная с любовью и заботой о красоте и здоровье кожи каждого человека.
              </p>
              <p className="text-lg mb-4">
                Мы верим, что настоящая красота начинается с заботы о себе и бережного отношения к своей коже. Именно поэтому в основе нашей философии лежит стремление создавать продукты, которые не только эффективно решают косметологические задачи, но и дарят удовольствие от использования.
              </p>
              <p className="text-lg">
                Наши средства основаны на синергии передовых научных разработок и природных компонентов для достижения максимальной эффективности и безопасности.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Философия бренда" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Наши ценности</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-medium mb-3 text-primary">Качество</h3>
                <p>Мы придерживаемся самых высоких стандартов качества на всех этапах производства, от выбора сырья до конечного продукта.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-medium mb-3 text-primary">Эффективность</h3>
                <p>Каждая формула проходит тщательное тестирование, чтобы гарантировать видимый результат от применения наших средств.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-medium mb-3 text-primary">Инновации</h3>
                <p>Мы постоянно следим за новейшими разработками в косметологии и внедряем передовые компоненты в наши продукты.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">История бренда</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="История бренда" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-lg mb-4">
                  Бренд ARAVIA был основан в 2008 году группой энтузиастов-косметологов, которые мечтали создать профессиональную косметику для ухода, доступную не только салонам красоты, но и для домашнего использования.
                </p>
                <p className="text-lg mb-4">
                  За 15 лет мы прошли путь от небольшой лаборатории до крупного производства с международным признанием. Сегодня продукция ARAVIA представлена более чем в 20 странах мира.
                </p>
                <p className="text-lg">
                  Мы гордимся тем, что заслужили доверие профессионалов индустрии красоты и тысяч клиентов, которые выбирают нашу продукцию для ежедневного ухода.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-6">Присоединяйтесь к сообществу ARAVIA</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Станьте частью нашей большой семьи ценителей качественного ухода за кожей. Подпишитесь на наши социальные сети, чтобы быть в курсе новинок, акций и получать полезные советы по уходу.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Подписаться на рассылку
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
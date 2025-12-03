import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: "Home",
      title: "Ламинат",
      description: "Долговечное и практичное решение для любых помещений с широким выбором текстур и цветов"
    },
    {
      icon: "Sparkles",
      title: "Паркетная доска",
      description: "Элегантное натуральное покрытие, создающее уютную атмосферу в вашем доме"
    },
    {
      icon: "Layers",
      title: "Виниловое покрытие",
      description: "Современный материал с превосходной влагостойкостью и простотой ухода"
    },
    {
      icon: "Grid3x3",
      title: "Плитка ПВХ",
      description: "Идеальное решение для коммерческих помещений и зон с высокой проходимостью"
    }
  ];

  const gallery = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/projects/23538884-27ad-4199-83ed-b9baf395259c/files/2126aa84-75c5-404d-9648-7331f9843342.jpg",
      title: "Минималистичная гостиная"
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/projects/23538884-27ad-4199-83ed-b9baf395259c/files/88d7ca43-9d19-4ee0-a3ce-fa961f8fcacc.jpg",
      title: "Элегантная гостиная"
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/projects/23538884-27ad-4199-83ed-b9baf395259c/files/a6367412-d8fe-4f90-8a48-ee556588595a.jpg",
      title: "Современный офис"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">FloorMaster</h1>
          <div className="flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Идеальное напольное покрытие<br />для вашего пространства
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональная укладка и широкий выбор материалов высочайшего качества
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-16">Наши услуги</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-4">Наши работы</h3>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Примеры реализованных проектов с различными видами покрытий
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                onClick={() => setSelectedImage(item.url)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                <Button className="w-full py-6 text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">FloorMaster</h4>
              <p className="text-background/80">Профессиональная укладка напольных покрытий любой сложности</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p>+7 (999) 123-45-67</p>
                <p>info@floormaster.ru</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-background/80">
                <p>Пн-Пт: 9:00 - 19:00</p>
                <p>Сб-Вс: 10:00 - 16:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2024 FloorMaster. Все права защищены</p>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Полноразмерное изображение"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

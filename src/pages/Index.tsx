import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const games = [
    {
      id: 1,
      title: "Lucky Slots",
      image: "https://cdn.poehali.dev/projects/23538884-27ad-4199-83ed-b9baf395259c/files/0e7a020e-7b01-4b22-9dba-2b360d483ec3.jpg",
      category: "Слоты",
      hot: true
    },
    {
      id: 2,
      title: "Golden Roulette",
      image: "https://cdn.poehali.dev/projects/23538884-27ad-4199-83ed-b9baf395259c/files/25143f8e-ec39-4653-9a2b-f3327e91ca0c.jpg",
      category: "Рулетка",
      hot: true
    },
    {
      id: 3,
      title: "Royal Poker",
      image: "https://cdn.poehali.dev/projects/23538884-27ad-4199-83ed-b9baf395259c/files/1a7e2ebc-64b2-411f-8ed8-eb970a36cf88.jpg",
      category: "Покер",
      hot: false
    }
  ];

  const bonuses = [
    {
      icon: "Gift",
      title: "Бонус на первый депозит",
      amount: "100%",
      description: "До 50 000 ₽ + 100 фриспинов"
    },
    {
      icon: "Zap",
      title: "Кэшбэк каждую неделю",
      amount: "15%",
      description: "Возврат проигрышей без вейджера"
    },
    {
      icon: "Trophy",
      title: "VIP программа",
      amount: "5 уровней",
      description: "Эксклюзивные привилегии и бонусы"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🎰</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                LuckyWin Casino
              </h1>
            </div>
            <div className="flex gap-4 items-center">
              <a href="#games" className="text-foreground hover:text-primary transition-colors hidden md:block">Игры</a>
              <a href="#bonuses" className="text-foreground hover:text-primary transition-colors hidden md:block">Бонусы</a>
              <Button variant="outline" size="sm">Войти</Button>
              <Button size="sm" className="shadow-neon">Регистрация</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-background"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-4 py-2">
              🔥 Лучшее онлайн-казино 2024
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Выигрывай<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                по-крупному
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Тысячи слотов, live-казино и щедрые бонусы. Мгновенный вывод средств 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 shadow-neon">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Демо режим
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} />
                <span>Лицензия</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Lock" size={16} />
                <span>SSL шифрование</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" size={16} />
                <span>Моментальные выплаты</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-4xl font-bold mb-2">🎮 Популярные игры</h3>
              <p className="text-muted-foreground">Топ игр с максимальными выигрышами</p>
            </div>
            <Button variant="outline">
              Все игры
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="group overflow-hidden hover:shadow-neon-secondary transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative">
                  {game.hot && (
                    <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground animate-pulse">
                      🔥 HOT
                    </Badge>
                  )}
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Button className="w-full shadow-neon">
                        <Icon name="Play" size={20} className="mr-2" />
                        Играть
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{game.category}</Badge>
                  <h4 className="text-xl font-semibold">{game.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="bonuses" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">🎁 Бонусы и акции</h3>
            <p className="text-muted-foreground text-lg">Щедрые предложения для новых и постоянных игроков</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="text-center hover:shadow-neon transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name={bonus.icon} size={40} className="text-background" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                    {bonus.amount}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{bonus.title}</h4>
                  <p className="text-muted-foreground">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden border-2 border-primary/30 shadow-neon">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-3xl font-bold mb-4">Готов к большим выигрышам?</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Регистрируйся прямо сейчас и получи приветственный бонус 100% + 100 фриспинов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-10 py-6 shadow-neon">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                18+ | Играй ответственно | Азартные игры могут вызывать зависимость
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card/80 border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🎰</div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  LuckyWin
                </h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Лучшее онлайн-казино с лицензией и честной игрой
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Игры</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p className="hover:text-primary cursor-pointer transition-colors">Слоты</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Рулетка</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Live-казино</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Покер</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p className="hover:text-primary cursor-pointer transition-colors">О нас</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Лицензия</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Правила</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Ответственная игра</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Онлайн-чат 24/7</p>
                <p>support@luckywin.com</p>
                <div className="flex gap-3 mt-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 cursor-pointer transition-colors">
                    <Icon name="MessageCircle" size={16} />
                  </div>
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 cursor-pointer transition-colors">
                    <Icon name="Mail" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p className="mb-2">&copy; 2024 LuckyWin Casino. Все права защищены</p>
            <p>18+ | Лицензия №12345 | Играйте ответственно</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

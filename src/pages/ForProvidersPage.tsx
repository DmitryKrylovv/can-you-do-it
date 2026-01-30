import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Users, TrendingUp, Shield, Zap, 
  BarChart3, Headphones, Globe, CheckCircle2, 
  Rocket, Server, Database, Cloud, HardDrive,
  Lock, Mail, MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  { icon: Server, name: 'VDS / VPS', desc: 'Виртуальные серверы' },
  { icon: HardDrive, name: 'Dedicated', desc: 'Выделенные серверы' },
  { icon: Globe, name: 'Хостинг', desc: 'Веб-хостинг' },
  { icon: Database, name: 'Colocation', desc: 'Размещение оборудования' },
  { icon: Cloud, name: 'Облако', desc: 'Облачные решения' },
  { icon: Lock, name: 'SSL', desc: 'Сертификаты' },
];

const ForProvidersPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero - Full Screen */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1.5">
                <Zap className="w-4 h-4 mr-2" />
                Партнёрская программа
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-[1.1]">
                Разместите ваши услуги
                <br />
                <span className="text-primary">в каталоге Plooza</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-background/70 mb-10 max-w-2xl leading-relaxed">
                Единая платформа для продажи хостинг-услуг. 
                Получите доступ к тысячам клиентов без затрат на маркетинг.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl text-base h-14 px-10 text-lg">
                  Стать партнёром
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl text-base h-14 px-10 text-lg border-background/30 text-background hover:bg-background/10">
                  Смотреть презентацию
                </Button>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/50">
            <span className="text-sm">Листайте вниз</span>
            <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-background/50 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* Services We Accept */}
        <section className="container py-20 md:py-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Какие услуги размещаем
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plooza — маркетплейс для всех видов хостинг-услуг
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-semibold text-foreground mb-1">{service.name}</div>
                <div className="text-xs text-muted-foreground">{service.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Big Stats */}
        <section className="bg-muted/30">
          <div className="container py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div className="text-center md:border-r border-border">
                <div className="text-6xl md:text-8xl font-bold text-primary mb-2">15K+</div>
                <div className="text-lg text-muted-foreground">активных пользователей</div>
              </div>
              <div className="text-center md:border-r border-border">
                <div className="text-6xl md:text-8xl font-bold text-primary mb-2">₽5M+</div>
                <div className="text-lg text-muted-foreground">оборот партнёров в месяц</div>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold text-primary mb-2">40%</div>
                <div className="text-lg text-muted-foreground">средний рост продаж</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Plooza - Split */}
        <section className="container py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">Почему мы</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Фокус на результат,
                <br />
                <span className="text-primary">а не на обещания</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Мы не берём деньги за размещение. Вы платите только за реальные заказы. 
                Никаких скрытых платежей и обязательств.
              </p>
              
              <div className="space-y-4">
                {[
                  'Оплата только за результат',
                  'Прозрачная аналитика в реальном времени',
                  'Персональный менеджер для каждого партнёра',
                  'Гибкие условия сотрудничества',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-primary-foreground">
                <TrendingUp className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-2">+40%</div>
                <div className="text-primary-foreground/80">средний рост заказов у партнёров</div>
              </div>
              <div className="bg-card border border-border rounded-3xl p-6">
                <Users className="w-8 h-8 text-primary mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">15K+</div>
                <div className="text-sm text-muted-foreground">пользователей</div>
              </div>
              <div className="bg-card border border-border rounded-3xl p-6">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">0₽</div>
                <div className="text-sm text-muted-foreground">за подключение</div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works - Timeline */}
        <section className="bg-foreground text-background">
          <div className="container py-20 md:py-28">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Как начать работу
              </h2>
              <p className="text-lg text-background/70 max-w-2xl mx-auto">
                От заявки до первых заказов — всего несколько дней
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { num: '01', title: 'Заявка', desc: 'Заполните форму на сайте' },
                  { num: '02', title: 'Созвон', desc: 'Обсудим условия сотрудничества' },
                  { num: '03', title: 'Интеграция', desc: 'Настроим API или загрузим прайс' },
                  { num: '04', title: 'Запуск', desc: 'Начинайте получать заказы' },
                ].map((step, i) => (
                  <div key={step.num} className="relative text-center">
                    <div className="text-6xl font-bold text-primary/30 mb-4">{step.num}</div>
                    <div className="text-xl font-semibold mb-2">{step.title}</div>
                    <div className="text-background/60 text-sm">{step.desc}</div>
                    {i < 3 && (
                      <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container py-20 md:py-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Что вы получаете
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: 'Аналитика', desc: 'Детальная статистика показов, кликов и конверсий в реальном времени' },
              { icon: Globe, title: 'Охват', desc: 'Доступ к аудитории со всей России и СНГ, готовой к покупке' },
              { icon: Headphones, title: 'Поддержка', desc: 'Персональный менеджер и техническая помощь 24/7' },
              { icon: Rocket, title: 'Быстрый старт', desc: 'Запуск за 1-3 дня, минимум бюрократии' },
              { icon: Lock, title: 'Безопасность', desc: 'Защищённые транзакции и проверенные клиенты' },
              { icon: Zap, title: 'API интеграция', desc: 'Автоматическая синхронизация тарифов и заказов' },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA - Full Width */}
        <section className="container pb-20 md:pb-28">
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-[2rem] p-10 md:p-16 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-32 -right-32 w-96 h-96 border-2 border-primary-foreground rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 border-2 border-primary-foreground rounded-full" />
              <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-primary-foreground rounded-full" />
            </div>
            
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Готовы расти вместе?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
                Присоединяйтесь к платформе и начните получать клиентов уже сегодня
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-xl text-lg h-14 px-10">
                  <Mail className="w-5 h-5 mr-2" />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="ghost" className="rounded-xl text-lg h-14 px-10 text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForProvidersPage;

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowDown, Users, TrendingUp, 
  BarChart3, Headphones, Globe, CheckCircle2, 
  Rocket, Server, Database, Cloud, HardDrive,
  Lock, Zap, Mail, MessageSquare, Home,
  FileText, Phone, Settings, Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { icon: Server, name: 'VDS / VPS' },
  { icon: HardDrive, name: 'Dedicated' },
  { icon: Globe, name: 'Хостинг' },
  { icon: Database, name: 'Colocation' },
  { icon: Cloud, name: 'Облако' },
  { icon: Lock, name: 'SSL / Домены' },
];

const ForProvidersPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      {/* Floating Nav */}
      <nav className="fixed top-6 left-6 z-50">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground text-primary rounded-full font-medium hover:bg-primary-foreground/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          На главную
        </Link>
      </nav>

      {/* Hero - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-primary-foreground/10 rounded-bl-[200px]" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-primary-foreground/5 rounded-tr-[150px]" />
        </div>
        
        <div className="container relative z-10 text-center px-6">
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] mb-8">
            <span className="text-primary-foreground">Стань</span>
            <br />
            <span className="text-primary-foreground/40">партнёром</span>
            <br />
            <span className="text-primary-foreground">Plooza</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl mx-auto mb-12">
            Разместите хостинг-услуги в каталоге и получите доступ к тысячам клиентов
          </p>

          <Button 
            size="lg" 
            variant="secondary" 
            className="rounded-full text-lg h-14 px-10"
            onClick={scrollToContent}
          >
            Узнать больше
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div 
            className="w-8 h-14 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-3 cursor-pointer"
            onClick={scrollToContent}
          >
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* What we accept */}
      <section ref={contentRef} className="bg-background text-foreground py-24 md:py-32">
        <div className="container px-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Размещаем
            <br />
            <span className="text-primary">все услуги</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-xl mb-16">
            Plooza — маркетплейс для провайдеров хостинг-услуг любого типа
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary hover:shadow-lg transition-all"
              >
                <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="font-semibold">{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground text-background py-24 md:py-32">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            <div>
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary mb-4">15K</div>
              <div className="text-xl text-background/60">пользователей</div>
            </div>
            <div>
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary mb-4">+40%</div>
              <div className="text-xl text-background/60">рост продаж</div>
            </div>
            <div>
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary mb-4">0₽</div>
              <div className="text-xl text-background/60">за подключение</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-background text-foreground py-24 md:py-32">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Платите
                <br />
                <span className="text-primary">только за результат</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10">
                Никаких скрытых платежей. Вы платите только за реальные заказы от клиентов Plooza.
              </p>
              
              <div className="space-y-5">
                {[
                  'Бесплатное размещение в каталоге',
                  'Оплата только за конверсии',
                  'Прозрачная аналитика',
                  'Персональный менеджер',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-primary rounded-3xl p-8 text-primary-foreground">
                <TrendingUp className="w-12 h-12 mb-6" />
                <div className="text-4xl font-bold mb-2">+40%</div>
                <div className="text-primary-foreground/70 text-lg">средний рост заказов</div>
              </div>
              <div className="bg-muted rounded-3xl p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-bold mb-1">15K+</div>
                <div className="text-sm text-muted-foreground">активных пользователей</div>
              </div>
              <div className="bg-muted rounded-3xl p-6">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">аналитика в реальном времени</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-foreground text-background py-24 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/5 rounded-full" />
        </div>
        
        <div className="container px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
            Как <span className="text-primary">подключиться</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Connection line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
              
              <div className="grid grid-cols-4 gap-6">
                {[
                  { num: '01', icon: FileText, title: 'Заявка', desc: 'Заполните форму на сайте — это займёт 2 минуты' },
                  { num: '02', icon: Phone, title: 'Созвон', desc: 'Обсудим условия и ответим на все вопросы' },
                  { num: '03', icon: Settings, title: 'Интеграция', desc: 'Настроим API или загрузим ваш прайс-лист' },
                  { num: '04', icon: Play, title: 'Запуск', desc: 'Ваши услуги появятся в каталоге Plooza' },
                ].map((step, i) => (
                  <div key={step.num} className="relative group">
                    {/* Connector dot */}
                    <div className="absolute top-[5.5rem] left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-foreground z-10 group-hover:scale-125 transition-transform" />
                    
                    {/* Card */}
                    <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-3xl p-6 hover:bg-background/10 hover:border-primary/50 transition-all group-hover:-translate-y-2 duration-300">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-5xl font-bold text-primary">{step.num}</span>
                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-foreground transition-colors">
                          <step.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-background/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {[
                { num: '01', icon: FileText, title: 'Заявка', desc: 'Заполните форму на сайте — это займёт 2 минуты' },
                { num: '02', icon: Phone, title: 'Созвон', desc: 'Обсудим условия и ответим на все вопросы' },
                { num: '03', icon: Settings, title: 'Интеграция', desc: 'Настроим API или загрузим ваш прайс-лист' },
                { num: '04', icon: Play, title: 'Запуск', desc: 'Ваши услуги появятся в каталоге Plooza' },
              ].map((step, i) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-foreground font-bold text-xl">
                      {step.num}
                    </div>
                    {i < 3 && (
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-primary/30" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-background/60 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-24 md:py-32">
        <div className="container px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center">
            Что вы <span className="text-primary">получаете</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Globe, title: 'Доступ к аудитории', desc: 'Тысячи пользователей ищут хостинг каждый день' },
              { icon: BarChart3, title: 'Аналитика', desc: 'Статистика показов, кликов и конверсий' },
              { icon: Headphones, title: 'Поддержка', desc: 'Персональный менеджер для каждого партнёра' },
              { icon: Rocket, title: 'Быстрый старт', desc: 'Запуск за 1-3 рабочих дня' },
              { icon: Zap, title: 'API интеграция', desc: 'Автоматическая синхронизация тарифов' },
              { icon: Lock, title: 'Безопасность', desc: 'Проверенные клиенты и защита данных' },
            ].map((feature) => (
              <div key={feature.title} className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-shadow">
                <feature.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 md:py-32">
        <div className="container px-6 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-12 max-w-xl mx-auto">
            Оставьте заявку и мы свяжемся в течение 24 часов
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full text-lg h-14 px-10">
              <Mail className="w-5 h-5 mr-2" />
              Оставить заявку
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="rounded-full text-lg h-14 px-10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/60 py-8">
        <div className="container px-6 text-center">
          <p>© 2024 Plooza. Партнёрская программа для хостинг-провайдеров.</p>
        </div>
      </footer>
    </div>
  );
};

export default ForProvidersPage;

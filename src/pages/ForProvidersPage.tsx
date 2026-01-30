import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ArrowRight, Users, TrendingUp, Shield, Zap, 
  BarChart3, Headphones, Globe, CheckCircle2, 
  Rocket, Target, Award, HandshakeIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const benefits = [
  {
    icon: Users,
    title: 'Доступ к аудитории',
    description: 'Более 10 000 активных пользователей ищут VDS/VPS каждый месяц',
    color: 'from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:border-blue-500/40',
    iconColor: 'bg-blue-500/20 text-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Рост продаж',
    description: 'В среднем +35% к заказам после подключения к платформе',
    color: 'from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40',
    iconColor: 'bg-emerald-500/20 text-emerald-600',
  },
  {
    icon: Target,
    title: 'Целевые клиенты',
    description: 'Пользователи приходят с конкретной задачей — купить сервер',
    color: 'from-violet-500/10 to-violet-500/5 border-violet-500/20 hover:border-violet-500/40',
    iconColor: 'bg-violet-500/20 text-violet-600',
  },
  {
    icon: BarChart3,
    title: 'Аналитика',
    description: 'Подробная статистика показов, кликов и конверсий',
    color: 'from-amber-500/10 to-amber-500/5 border-amber-500/20 hover:border-amber-500/40',
    iconColor: 'bg-amber-500/20 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Без рисков',
    description: 'Оплата только за результат — за реальные заказы',
    color: 'from-rose-500/10 to-rose-500/5 border-rose-500/20 hover:border-rose-500/40',
    iconColor: 'bg-rose-500/20 text-rose-600',
  },
  {
    icon: Headphones,
    title: 'Поддержка',
    description: 'Персональный менеджер и помощь в настройке интеграции',
    color: 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 hover:border-cyan-500/40',
    iconColor: 'bg-cyan-500/20 text-cyan-600',
  },
];

const steps = [
  {
    number: '01',
    title: 'Заявка',
    description: 'Заполните форму и расскажите о ваших тарифах',
  },
  {
    number: '02',
    title: 'Интеграция',
    description: 'Подключим API или загрузим тарифы вручную',
  },
  {
    number: '03',
    title: 'Запуск',
    description: 'Ваши тарифы появятся в каталоге Plooza',
  },
  {
    number: '04',
    title: 'Заказы',
    description: 'Получайте клиентов и отслеживайте статистику',
  },
];

const stats = [
  { value: '10K+', label: 'пользователей' },
  { value: '50K+', label: 'заказов' },
  { value: '35%', label: 'рост продаж' },
  { value: '24/7', label: 'поддержка' },
];

const ForProvidersPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container relative py-16 md:py-24">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-6">
                <HandshakeIcon className="w-3 h-3 mr-1" />
                Для провайдеров
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Разместите тарифы в 
                <span className="text-primary"> крупнейшем каталоге</span> VDS России
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                Plooza — единая платформа, где пользователи выбирают и покупают серверы. 
                Подключитесь и получите доступ к тысячам потенциальных клиентов.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl text-base h-12 px-8">
                  Стать партнёром
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl text-base h-12 px-8">
                  Узнать условия
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-card">
          <div className="container py-8 md:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Преимущества</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Почему провайдеры выбирают Plooza
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы создаём условия для роста вашего бизнеса и заботимся о качестве каждого клиента
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`bg-gradient-to-br ${benefit.color} border rounded-2xl p-6 transition-colors`}
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.iconColor} flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-muted/30">
          <div className="container py-16 md:py-24">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Как это работает</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Простое подключение за 4 шага
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="bg-card border border-border rounded-2xl p-6 h-full">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features comparison */}
        <section className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Интеграция</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Гибкие варианты подключения
              </h2>
              <p className="text-muted-foreground mb-8">
                Выбирайте удобный способ интеграции — от простой загрузки прайса до полноценного API
              </p>
              
              <div className="space-y-4">
                {[
                  'Автоматическая синхронизация тарифов через API',
                  'Загрузка прайс-листа в формате CSV/Excel',
                  'Webhook-уведомления о новых заказах',
                  'Белая метка для вашего бренда',
                  'Детальная аналитика и отчёты',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
                <Rocket className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold mb-1">Быстрый старт</div>
                <p className="text-primary-foreground/80 text-sm">Запуск за 1-3 дня</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <Globe className="w-6 h-6 text-primary mb-3" />
                <div className="font-semibold text-foreground">Любые локации</div>
                <p className="text-xs text-muted-foreground mt-1">Россия, Европа, мир</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <Award className="w-6 h-6 text-primary mb-3" />
                <div className="font-semibold text-foreground">Верификация</div>
                <p className="text-xs text-muted-foreground mt-1">Знак качества</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container pb-16 md:pb-24">
          <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 border-2 border-primary-foreground rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-primary-foreground rounded-full" />
            </div>
            
            <div className="relative max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                Готовы увеличить продажи?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Оставьте заявку и мы свяжемся с вами в течение 24 часов, 
                чтобы обсудить условия сотрудничества
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-xl text-base h-12 px-8">
                  Оставить заявку
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="ghost" className="rounded-xl text-base h-12 px-8 text-primary-foreground hover:bg-primary-foreground/10">
                  Связаться с нами
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

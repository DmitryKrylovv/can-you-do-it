import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Star, Check, Server, Cpu, HardDrive, Gauge, Globe, 
  Zap, Shield, Clock, Award, ChevronDown, ChevronRight,
  TrendingUp, Users, Headphones, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Tariff {
  name: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  price: number;
  oldPrice?: number;
  popular?: boolean;
}

interface Provider {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  locations: string[];
  features: string[];
  tariffs: Tariff[];
  highlight?: string;
}

const providers: Provider[] = [
  {
    id: 'timeweb',
    name: 'Timeweb Cloud',
    rating: 4.8,
    reviewCount: 1245,
    description: 'Надежный облачный хостинг с отличной поддержкой и современной инфраструктурой',
    locations: ['Москва', 'Санкт-Петербург', 'Амстердам'],
    features: ['SSD NVMe', 'Бесплатный SSL', 'DDoS защита', 'Бэкапы'],
    highlight: 'Лучшая поддержка',
    tariffs: [
      { name: 'Start', cpu: '1 vCPU', ram: '1 ГБ', storage: '20 ГБ NVMe', bandwidth: '100 Мбит/с', price: 199 },
      { name: 'Basic', cpu: '2 vCPU', ram: '2 ГБ', storage: '40 ГБ NVMe', bandwidth: '200 Мбит/с', price: 399, popular: true },
      { name: 'Standard', cpu: '2 vCPU', ram: '4 ГБ', storage: '60 ГБ NVMe', bandwidth: '300 Мбит/с', price: 699 },
      { name: 'Advanced', cpu: '4 vCPU', ram: '8 ГБ', storage: '100 ГБ NVMe', bandwidth: '500 Мбит/с', price: 1299 },
    ],
  },
  {
    id: 'selectel',
    name: 'Selectel',
    rating: 4.7,
    reviewCount: 892,
    description: 'Крупнейший независимый провайдер IT-инфраструктуры в России',
    locations: ['Москва', 'Санкт-Петербург'],
    features: ['Enterprise SSD', 'API управление', 'Kubernetes', '24/7 поддержка'],
    highlight: 'Enterprise решения',
    tariffs: [
      { name: 'Lite', cpu: '1 vCPU', ram: '1 ГБ', storage: '10 ГБ SSD', bandwidth: '100 Мбит/с', price: 249 },
      { name: 'Base', cpu: '2 vCPU', ram: '2 ГБ', storage: '30 ГБ SSD', bandwidth: '200 Мбит/с', price: 499 },
      { name: 'Pro', cpu: '4 vCPU', ram: '4 ГБ', storage: '50 ГБ SSD', bandwidth: '500 Мбит/с', price: 899, popular: true },
      { name: 'Enterprise', cpu: '8 vCPU', ram: '16 ГБ', storage: '200 ГБ SSD', bandwidth: '1 Гбит/с', price: 2499 },
    ],
  },
  {
    id: 'ruvds',
    name: 'RUVDS',
    rating: 4.6,
    reviewCount: 756,
    description: 'Виртуальные серверы с мгновенным развертыванием и гибкой конфигурацией',
    locations: ['Москва', 'Казань', 'Новосибирск', 'Лондон'],
    features: ['Почасовая оплата', 'Снапшоты', 'IPv6', 'Windows/Linux'],
    tariffs: [
      { name: 'Micro', cpu: '1 vCPU', ram: '512 МБ', storage: '10 ГБ SSD', bandwidth: '100 Мбит/с', price: 149, oldPrice: 199 },
      { name: 'Small', cpu: '1 vCPU', ram: '1 ГБ', storage: '20 ГБ SSD', bandwidth: '200 Мбит/с', price: 299 },
      { name: 'Medium', cpu: '2 vCPU', ram: '2 ГБ', storage: '40 ГБ SSD', bandwidth: '300 Мбит/с', price: 549, popular: true },
      { name: 'Large', cpu: '4 vCPU', ram: '8 ГБ', storage: '80 ГБ SSD', bandwidth: '500 Мбит/с', price: 1099 },
    ],
  },
  {
    id: 'vdsina',
    name: 'VDSina',
    rating: 4.5,
    reviewCount: 534,
    description: 'Быстрые VDS серверы на NVMe дисках с защитой от DDoS атак',
    locations: ['Москва', 'Амстердам', 'Франкфурт'],
    features: ['NVMe диски', 'DDoS защита', 'Бесплатный перенос', 'ISPmanager'],
    tariffs: [
      { name: 'VDS-1', cpu: '1 vCPU', ram: '1 ГБ', storage: '25 ГБ NVMe', bandwidth: '100 Мбит/с', price: 179 },
      { name: 'VDS-2', cpu: '2 vCPU', ram: '2 ГБ', storage: '50 ГБ NVMe', bandwidth: '200 Мбит/с', price: 349, popular: true },
      { name: 'VDS-4', cpu: '4 vCPU', ram: '4 ГБ', storage: '80 ГБ NVMe', bandwidth: '500 Мбит/с', price: 649 },
      { name: 'VDS-8', cpu: '8 vCPU', ram: '8 ГБ', storage: '160 ГБ NVMe', bandwidth: '1 Гбит/с', price: 1199 },
    ],
  },
  {
    id: 'beget',
    name: 'Beget',
    rating: 4.9,
    reviewCount: 2156,
    description: 'Один из лучших хостингов России с превосходной технической поддержкой',
    locations: ['Санкт-Петербург'],
    features: ['Бесплатный домен', 'Автобэкапы', 'SSL сертификаты', 'Тех. поддержка 24/7'],
    highlight: 'Выбор редакции',
    tariffs: [
      { name: 'Старт', cpu: '1 vCPU', ram: '1 ГБ', storage: '15 ГБ SSD', bandwidth: '100 Мбит/с', price: 199 },
      { name: 'Базовый', cpu: '2 vCPU', ram: '2 ГБ', storage: '30 ГБ SSD', bandwidth: '200 Мбит/с', price: 399, popular: true },
      { name: 'Стандарт', cpu: '3 vCPU', ram: '4 ГБ', storage: '60 ГБ SSD', bandwidth: '300 Мбит/с', price: 699 },
      { name: 'Бизнес', cpu: '4 vCPU', ram: '8 ГБ', storage: '120 ГБ SSD', bandwidth: '500 Мбит/с', price: 1299 },
    ],
  },
];

const quickFilters = [
  { label: 'Все', value: 'all' },
  { label: 'До 300₽', value: 'cheap' },
  { label: 'NVMe диски', value: 'nvme' },
  { label: '4+ ГБ RAM', value: 'highram' },
  { label: 'Москва', value: 'moscow' },
];

const stats = [
  { icon: Server, value: '15+', label: 'Провайдеров' },
  { icon: Users, value: '50K+', label: 'Пользователей' },
  { icon: Star, value: '4.7', label: 'Средний рейтинг' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
];

const faqs = [
  {
    question: 'Что такое VDS/VPS сервер?',
    answer: 'VDS (Virtual Dedicated Server) или VPS (Virtual Private Server) — это виртуальный выделенный сервер, который работает на физическом сервере, но имеет выделенные ресурсы (CPU, RAM, диск). Это золотая середина между обычным хостингом и выделенным сервером.',
  },
  {
    question: 'Какой VDS выбрать для начала?',
    answer: 'Для небольших проектов и сайтов достаточно VDS с 1-2 vCPU, 1-2 ГБ RAM и 20-40 ГБ SSD. Для более требовательных приложений выбирайте конфигурации с 4+ vCPU и 4+ ГБ RAM.',
  },
  {
    question: 'Чем отличается SSD от NVMe?',
    answer: 'NVMe — это более современный и быстрый тип SSD накопителей. Скорость чтения/записи NVMe в 3-5 раз выше обычных SSD, что критично для баз данных и высоконагруженных приложений.',
  },
  {
    question: 'Можно ли перенести сайт с другого хостинга?',
    answer: 'Да, большинство провайдеров предлагают бесплатный перенос сайтов. Обычно это занимает от нескольких часов до 1-2 дней в зависимости от объема данных.',
  },
];

const VDSPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedProvider, setExpandedProvider] = useState<string | null>(providers[0].id);

  const topProvider = providers.find(p => p.id === 'beget')!;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-10 md:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 md:mb-6">
                <Zap className="w-3 h-3 mr-1" />
                Обновлено сегодня
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Лучшие VDS/VPS серверы
                <span className="text-primary"> 2024</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8">
                Сравните {providers.length} проверенных провайдеров. 
                Найдите идеальный сервер за 2 минуты.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 text-primary mb-2">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Filters */}
        <section className="py-4 md:py-6 border-y border-border bg-muted/30 sticky top-[105px] z-30">
          <div className="container">
            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-1 scrollbar-hide">
              {quickFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    activeFilter === filter.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-foreground hover:border-primary/50"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Top Pick - Featured Provider */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <Award className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg md:text-xl font-semibold text-foreground">Выбор редакции</h2>
            </div>
            
            <div className="relative bg-gradient-to-br from-primary/5 via-card to-primary/10 border-2 border-primary/20 rounded-2xl md:rounded-3xl p-5 md:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Provider Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-background rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Server className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{topProvider.name}</h3>
                        <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          {topProvider.rating}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {topProvider.reviewCount} отзывов
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 md:mb-6">
                    {topProvider.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {topProvider.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background/80 rounded-full text-xs md:text-sm font-medium">
                        <Check className="w-3 h-3 text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {topProvider.locations.map((location) => (
                      <Badge key={location} variant="outline" className="text-xs">
                        <Globe className="w-3 h-3 mr-1" />
                        {location}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Best Tariff */}
                <div className="lg:w-72 bg-background rounded-xl md:rounded-2xl p-5 md:p-6 border border-border shadow-lg">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Лучший тариф</div>
                  <div className="text-lg font-semibold text-foreground mb-4">
                    {topProvider.tariffs.find(t => t.popular)?.name || topProvider.tariffs[1].name}
                  </div>
                  
                  <div className="space-y-2 text-sm mb-5">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Cpu className="w-4 h-4 text-primary" />
                      <span>{topProvider.tariffs[1].cpu}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Gauge className="w-4 h-4 text-primary" />
                      <span>{topProvider.tariffs[1].ram} RAM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <HardDrive className="w-4 h-4 text-primary" />
                      <span>{topProvider.tariffs[1].storage}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-foreground">{topProvider.tariffs[1].price}₽</span>
                    <span className="text-sm text-muted-foreground">/мес</span>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Перейти к провайдеру
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Providers - Accordion Style */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">
              Все провайдеры
            </h2>
            
            <div className="space-y-4">
              {providers.map((provider, index) => (
                <div
                  key={provider.id}
                  className={cn(
                    "bg-card border rounded-xl md:rounded-2xl overflow-hidden transition-all",
                    expandedProvider === provider.id ? "border-primary/50 shadow-lg" : "border-border"
                  )}
                >
                  {/* Provider Header - Clickable */}
                  <button
                    onClick={() => setExpandedProvider(expandedProvider === provider.id ? null : provider.id)}
                    className="w-full p-4 md:p-6 flex items-center gap-4 text-left hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-bold text-muted-foreground">
                      {index + 1}
                    </div>
                    
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                      <Server className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-foreground">{provider.name}</h3>
                        {provider.highlight && (
                          <Badge variant="secondary" className="text-[10px] md:text-xs">
                            {provider.highlight}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-0.5">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{provider.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground hidden sm:inline">
                          {provider.reviewCount} отзывов
                        </span>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">от</div>
                        <div className="font-semibold text-foreground">{Math.min(...provider.tariffs.map(t => t.price))}₽/мес</div>
                      </div>
                    </div>
                    
                    <ChevronDown className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform",
                      expandedProvider === provider.id && "rotate-180"
                    )} />
                  </button>
                  
                  {/* Expanded Content */}
                  {expandedProvider === provider.id && (
                    <div className="border-t border-border">
                      <div className="p-4 md:p-6 bg-muted/20">
                        <p className="text-sm text-muted-foreground mb-4">
                          {provider.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {provider.features.map((feature) => (
                            <span key={feature} className="inline-flex items-center gap-1 px-2 py-1 bg-background rounded-md text-xs">
                              <Check className="w-3 h-3 text-primary" />
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {provider.locations.map((location) => (
                            <Badge key={location} variant="outline" className="text-xs">
                              <Globe className="w-3 h-3 mr-1" />
                              {location}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Tariffs Grid */}
                      <div className="p-4 md:p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                          {provider.tariffs.map((tariff) => (
                            <div
                              key={tariff.name}
                              className={cn(
                                "relative p-4 rounded-xl border transition-all hover:shadow-md",
                                tariff.popular
                                  ? "border-primary bg-primary/5"
                                  : "border-border bg-background hover:border-primary/30"
                              )}
                            >
                              {tariff.popular && (
                                <Badge className="absolute -top-2 right-3 text-[10px]">
                                  Популярный
                                </Badge>
                              )}
                              
                              <h4 className="font-semibold text-foreground mb-3">
                                {tariff.name}
                              </h4>
                              
                              <div className="space-y-1.5 text-sm mb-4">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Cpu className="w-3.5 h-3.5 text-primary/70" />
                                  <span>{tariff.cpu}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Gauge className="w-3.5 h-3.5 text-primary/70" />
                                  <span>{tariff.ram} RAM</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <HardDrive className="w-3.5 h-3.5 text-primary/70" />
                                  <span>{tariff.storage}</span>
                                </div>
                              </div>
                              
                              <div className="mb-3">
                                <div className="flex items-baseline gap-1">
                                  <span className="text-xl font-bold text-foreground">
                                    {tariff.price}₽
                                  </span>
                                  <span className="text-xs text-muted-foreground">/мес</span>
                                </div>
                                {tariff.oldPrice && (
                                  <span className="text-xs text-muted-foreground line-through">
                                    {tariff.oldPrice}₽
                                  </span>
                                )}
                              </div>
                              
                              <Button 
                                className="w-full" 
                                variant={tariff.popular ? 'default' : 'outline'}
                                size="sm"
                              >
                                Заказать
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10 md:py-16">
          <div className="container">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8 md:mb-12">
              Почему выбирают нас
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Проверенные провайдеры',
                  description: 'Мы тестируем каждого провайдера лично и публикуем только честные обзоры',
                },
                {
                  icon: Clock,
                  title: 'Актуальные цены',
                  description: 'Цены обновляются ежедневно. Вы всегда видите реальную стоимость тарифов',
                },
                {
                  icon: Headphones,
                  title: 'Помощь в выборе',
                  description: 'Не можете определиться? Наши эксперты помогут подобрать оптимальный вариант',
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                      <Icon className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 md:py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8 md:mb-12">
              Часто задаваемые вопросы
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-4 md:p-5 flex items-center justify-between gap-4 text-left hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <ChevronRight className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                      expandedFaq === index && "rotate-90"
                    )} />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                  Нужна помощь с выбором?
                </h2>
                <p className="text-primary-foreground/80 mb-6 md:mb-8 max-w-xl mx-auto">
                  Оставьте заявку, и наш эксперт поможет подобрать оптимальный VDS под ваши задачи
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Получить консультацию
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Сравнить тарифы
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VDSPage;

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Star, Check, Server, Cpu, HardDrive, Gauge, Globe, 
  Zap, Shield, Clock, ChevronDown, ArrowRight, Layers,
  CreditCard, Settings, BarChart3, RefreshCw, Headphones,
  Filter, SortAsc
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Tariff {
  id: string;
  provider: string;
  providerLogo?: string;
  name: string;
  cpu: number;
  ram: number;
  storage: number;
  storageType: 'SSD' | 'NVMe';
  bandwidth: number;
  location: string;
  price: number;
  oldPrice?: number;
  popular?: boolean;
  features: string[];
}

const allTariffs: Tariff[] = [
  // Timeweb
  { id: 'tw-1', provider: 'Timeweb', name: 'Start', cpu: 1, ram: 1, storage: 20, storageType: 'NVMe', bandwidth: 100, location: 'Москва', price: 199, features: ['DDoS защита', 'Бэкапы'] },
  { id: 'tw-2', provider: 'Timeweb', name: 'Basic', cpu: 2, ram: 2, storage: 40, storageType: 'NVMe', bandwidth: 200, location: 'Москва', price: 399, popular: true, features: ['DDoS защита', 'Бэкапы', 'SSL'] },
  { id: 'tw-3', provider: 'Timeweb', name: 'Standard', cpu: 2, ram: 4, storage: 60, storageType: 'NVMe', bandwidth: 300, location: 'СПб', price: 699, features: ['DDoS защита', 'Бэкапы', 'SSL'] },
  { id: 'tw-4', provider: 'Timeweb', name: 'Advanced', cpu: 4, ram: 8, storage: 100, storageType: 'NVMe', bandwidth: 500, location: 'Амстердам', price: 1299, features: ['DDoS защита', 'Бэкапы', 'SSL', 'Приоритетная поддержка'] },
  // Selectel
  { id: 'sel-1', provider: 'Selectel', name: 'Lite', cpu: 1, ram: 1, storage: 10, storageType: 'SSD', bandwidth: 100, location: 'Москва', price: 249, features: ['API', 'Мониторинг'] },
  { id: 'sel-2', provider: 'Selectel', name: 'Base', cpu: 2, ram: 2, storage: 30, storageType: 'SSD', bandwidth: 200, location: 'Москва', price: 499, features: ['API', 'Мониторинг', 'Снапшоты'] },
  { id: 'sel-3', provider: 'Selectel', name: 'Pro', cpu: 4, ram: 4, storage: 50, storageType: 'SSD', bandwidth: 500, location: 'СПб', price: 899, popular: true, features: ['API', 'Мониторинг', 'Снапшоты', 'Kubernetes'] },
  { id: 'sel-4', provider: 'Selectel', name: 'Enterprise', cpu: 8, ram: 16, storage: 200, storageType: 'SSD', bandwidth: 1000, location: 'Москва', price: 2499, features: ['API', 'Мониторинг', 'Снапшоты', 'Kubernetes', 'SLA 99.95%'] },
  // RUVDS
  { id: 'ru-1', provider: 'RUVDS', name: 'Micro', cpu: 1, ram: 0.5, storage: 10, storageType: 'SSD', bandwidth: 100, location: 'Москва', price: 149, oldPrice: 199, features: ['IPv6', 'Windows'] },
  { id: 'ru-2', provider: 'RUVDS', name: 'Small', cpu: 1, ram: 1, storage: 20, storageType: 'SSD', bandwidth: 200, location: 'Казань', price: 299, features: ['IPv6', 'Windows', 'Снапшоты'] },
  { id: 'ru-3', provider: 'RUVDS', name: 'Medium', cpu: 2, ram: 2, storage: 40, storageType: 'SSD', bandwidth: 300, location: 'Лондон', price: 549, popular: true, features: ['IPv6', 'Windows', 'Снапшоты'] },
  { id: 'ru-4', provider: 'RUVDS', name: 'Large', cpu: 4, ram: 8, storage: 80, storageType: 'SSD', bandwidth: 500, location: 'Новосибирск', price: 1099, features: ['IPv6', 'Windows', 'Снапшоты', 'Почасовая оплата'] },
  // VDSina
  { id: 'vds-1', provider: 'VDSina', name: 'VDS-1', cpu: 1, ram: 1, storage: 25, storageType: 'NVMe', bandwidth: 100, location: 'Москва', price: 179, features: ['DDoS защита', 'ISPmanager'] },
  { id: 'vds-2', provider: 'VDSina', name: 'VDS-2', cpu: 2, ram: 2, storage: 50, storageType: 'NVMe', bandwidth: 200, location: 'Амстердам', price: 349, popular: true, features: ['DDoS защита', 'ISPmanager'] },
  { id: 'vds-3', provider: 'VDSina', name: 'VDS-4', cpu: 4, ram: 4, storage: 80, storageType: 'NVMe', bandwidth: 500, location: 'Франкфурт', price: 649, features: ['DDoS защита', 'ISPmanager', 'Бесплатный перенос'] },
  // Beget
  { id: 'bg-1', provider: 'Beget', name: 'Старт', cpu: 1, ram: 1, storage: 15, storageType: 'SSD', bandwidth: 100, location: 'СПб', price: 199, features: ['Домен в подарок', 'SSL'] },
  { id: 'bg-2', provider: 'Beget', name: 'Базовый', cpu: 2, ram: 2, storage: 30, storageType: 'SSD', bandwidth: 200, location: 'СПб', price: 399, popular: true, features: ['Домен в подарок', 'SSL', 'Автобэкапы'] },
  { id: 'bg-3', provider: 'Beget', name: 'Стандарт', cpu: 3, ram: 4, storage: 60, storageType: 'SSD', bandwidth: 300, location: 'СПб', price: 699, features: ['Домен в подарок', 'SSL', 'Автобэкапы'] },
];

const providers = ['Все', 'Timeweb', 'Selectel', 'RUVDS', 'VDSina', 'Beget'];
const locations = ['Все', 'Москва', 'СПб', 'Амстердам', 'Франкфурт', 'Лондон', 'Казань'];
const ramOptions = ['Любой', '1 ГБ', '2 ГБ', '4+ ГБ', '8+ ГБ'];

const features = [
  {
    icon: Layers,
    title: 'Один кабинет',
    description: 'Управляйте серверами от разных провайдеров в едином интерфейсе',
  },
  {
    icon: CreditCard,
    title: 'Единый счёт',
    description: 'Оплачивайте все серверы одним платежом, без множества счетов',
  },
  {
    icon: BarChart3,
    title: 'Общая аналитика',
    description: 'Мониторинг и статистика всех серверов на одном дашборде',
  },
  {
    icon: RefreshCw,
    title: 'Легкая миграция',
    description: 'Переносите проекты между провайдерами в пару кликов',
  },
  {
    icon: Settings,
    title: 'Унифицированный API',
    description: 'Один API для управления серверами любого провайдера',
  },
  {
    icon: Headphones,
    title: 'Единая поддержка',
    description: 'Решаем все вопросы — не нужно писать каждому провайдеру',
  },
];

const VDSPage = () => {
  const [selectedProvider, setSelectedProvider] = useState('Все');
  const [selectedLocation, setSelectedLocation] = useState('Все');
  const [selectedRam, setSelectedRam] = useState('Любой');
  const [sortBy, setSortBy] = useState<'price' | 'ram' | 'storage'>('price');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTariffs = allTariffs
    .filter(t => selectedProvider === 'Все' || t.provider === selectedProvider)
    .filter(t => selectedLocation === 'Все' || t.location === selectedLocation)
    .filter(t => {
      if (selectedRam === 'Любой') return true;
      if (selectedRam === '1 ГБ') return t.ram === 1;
      if (selectedRam === '2 ГБ') return t.ram === 2;
      if (selectedRam === '4+ ГБ') return t.ram >= 4;
      if (selectedRam === '8+ ГБ') return t.ram >= 8;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'ram') return b.ram - a.ram;
      if (sortBy === 'storage') return b.storage - a.storage;
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted/80 via-muted/30 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 text-sm px-4 py-1.5" variant="secondary">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Новый способ работы с VDS
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Все провайдеры.
                <br />
                <span className="text-primary">Один кабинет.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Покупайте VDS у лучших провайдеров России и управляйте всеми серверами 
                в едином личном кабинете Plooza
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto text-base px-8">
                  Выбрать сервер
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                  Как это работает?
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 md:py-16 border-y border-border bg-card">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tariffs Section */}
        <section className="py-10 md:py-16">
          <div className="container">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Выберите тариф
                </h2>
                <p className="text-muted-foreground">
                  {filteredTariffs.length} тарифов от {providers.length - 1} провайдеров
                </p>
              </div>
              
              {/* Mobile Filter Toggle */}
              <Button 
                variant="outline" 
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Фильтры
                {(selectedProvider !== 'Все' || selectedLocation !== 'Все' || selectedRam !== 'Любой') && (
                  <Badge className="ml-2 h-5 w-5 p-0 justify-center">
                    {[selectedProvider !== 'Все', selectedLocation !== 'Все', selectedRam !== 'Любой'].filter(Boolean).length}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Filters */}
            <div className={cn(
              "bg-muted/50 rounded-2xl p-4 md:p-6 mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-6",
              !showFilters && "hidden md:flex"
            )}>
              {/* Provider Filter */}
              <div className="flex-1">
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Провайдер</label>
                <div className="flex flex-wrap gap-2">
                  {providers.map((provider) => (
                    <button
                      key={provider}
                      onClick={() => setSelectedProvider(provider)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                        selectedProvider === provider
                          ? "bg-primary text-primary-foreground"
                          : "bg-background border border-border text-foreground hover:border-primary/50"
                      )}
                    >
                      {provider}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Location Filter */}
              <div className="md:w-48">
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Локация</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full h-10 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              
              {/* RAM Filter */}
              <div className="md:w-36">
                <label className="text-xs font-medium text-muted-foreground mb-2 block">RAM</label>
                <select
                  value={selectedRam}
                  onChange={(e) => setSelectedRam(e.target.value)}
                  className="w-full h-10 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {ramOptions.map((ram) => (
                    <option key={ram} value={ram}>{ram}</option>
                  ))}
                </select>
              </div>
              
              {/* Sort */}
              <div className="md:w-44">
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Сортировка</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price' | 'ram' | 'storage')}
                  className="w-full h-10 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="price">По цене</option>
                  <option value="ram">По RAM</option>
                  <option value="storage">По диску</option>
                </select>
              </div>
            </div>

            {/* Tariffs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {filteredTariffs.map((tariff) => (
                <div
                  key={tariff.id}
                  className={cn(
                    "group relative bg-card rounded-2xl border p-5 transition-all hover:shadow-lg hover:-translate-y-1",
                    tariff.popular 
                      ? "border-primary/50 shadow-md" 
                      : "border-border hover:border-primary/30"
                  )}
                >
                  {tariff.popular && (
                    <Badge className="absolute -top-2.5 left-4 text-[10px]">
                      Популярный
                    </Badge>
                  )}
                  
                  {/* Provider Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {tariff.provider}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {tariff.location}
                    </span>
                  </div>
                  
                  {/* Tariff Name */}
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {tariff.name}
                  </h3>
                  
                  {/* Specs */}
                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Cpu className="w-4 h-4 text-primary/70" />
                        CPU
                      </span>
                      <span className="text-sm font-medium text-foreground">{tariff.cpu} vCPU</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Gauge className="w-4 h-4 text-primary/70" />
                        RAM
                      </span>
                      <span className="text-sm font-medium text-foreground">{tariff.ram} ГБ</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <HardDrive className="w-4 h-4 text-primary/70" />
                        Диск
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {tariff.storage} ГБ {tariff.storageType}
                      </span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tariff.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                    {tariff.features.length > 2 && (
                      <span className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                        +{tariff.features.length - 2}
                      </span>
                    )}
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-foreground">{tariff.price}₽</span>
                        <span className="text-sm text-muted-foreground">/мес</span>
                      </div>
                      {tariff.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">{tariff.oldPrice}₽</span>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant={tariff.popular ? 'default' : 'outline'}>
                    Заказать
                  </Button>
                </div>
              ))}
            </div>
            
            {filteredTariffs.length === 0 && (
              <div className="text-center py-16">
                <Server className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Нет тарифов по выбранным фильтрам</p>
                <Button variant="link" onClick={() => {
                  setSelectedProvider('Все');
                  setSelectedLocation('Все');
                  setSelectedRam('Любой');
                }}>
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Как это работает
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Три простых шага от выбора до полного контроля над серверами
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Выберите тариф',
                  description: 'Сравните цены и характеристики серверов от разных провайдеров в одном месте',
                  icon: Server,
                },
                {
                  step: '02',
                  title: 'Оплатите через Plooza',
                  description: 'Единый платёж через нашу платформу. Никаких отдельных счетов от провайдеров',
                  icon: CreditCard,
                },
                {
                  step: '03',
                  title: 'Управляйте в кабинете',
                  description: 'Все серверы, метрики и настройки — в одном интерфейсе Plooza',
                  icon: Settings,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center h-full">
                      <div className="text-5xl md:text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
                <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground rounded-full" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>
              
              <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                  Готовы упростить управление серверами?
                </h2>
                <p className="text-primary-foreground/80 mb-8 text-lg">
                  Присоединяйтесь к тысячам пользователей, которые уже оценили удобство единого кабинета
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base px-8">
                    Создать аккаунт бесплатно
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Связаться с нами
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

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Star, Check, Server, Cpu, HardDrive, Gauge, Globe, 
  Zap, Shield, ArrowRight, Layers, CreditCard, Settings, 
  BarChart3, RefreshCw, Headphones, ChevronRight, Play,
  Monitor, Smartphone, Clock, Users, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Tariff {
  id: string;
  provider: string;
  name: string;
  cpu: number;
  ram: number;
  storage: number;
  storageType: 'SSD' | 'NVMe';
  location: string;
  price: number;
  oldPrice?: number;
  popular?: boolean;
}

const featuredTariffs: Tariff[] = [
  { id: 'tw-2', provider: 'Timeweb', name: 'Basic', cpu: 2, ram: 2, storage: 40, storageType: 'NVMe', location: 'Москва', price: 399, popular: true },
  { id: 'sel-3', provider: 'Selectel', name: 'Pro', cpu: 4, ram: 4, storage: 50, storageType: 'SSD', location: 'СПб', price: 899 },
  { id: 'vds-2', provider: 'VDSina', name: 'VDS-2', cpu: 2, ram: 2, storage: 50, storageType: 'NVMe', location: 'Амстердам', price: 349 },
  { id: 'ru-1', provider: 'RUVDS', name: 'Micro', cpu: 1, ram: 0.5, storage: 10, storageType: 'SSD', location: 'Москва', price: 149, oldPrice: 199 },
  { id: 'bg-2', provider: 'Beget', name: 'Базовый', cpu: 2, ram: 2, storage: 30, storageType: 'SSD', location: 'СПб', price: 399 },
  { id: 'tw-4', provider: 'Timeweb', name: 'Advanced', cpu: 4, ram: 8, storage: 100, storageType: 'NVMe', location: 'Москва', price: 1299 },
];

const providers = [
  { name: 'Timeweb', count: 12 },
  { name: 'Selectel', count: 8 },
  { name: 'RUVDS', count: 15 },
  { name: 'VDSina', count: 10 },
  { name: 'Beget', count: 6 },
];

const VDSPage = () => {
  const [hoveredTariff, setHoveredTariff] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container py-6 md:py-10">
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            
            {/* Hero Block - Large */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-20 -right-20 w-64 h-64 border-2 border-primary-foreground/30 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-primary-foreground/30 rounded-full" />
              </div>
              
              <div className="relative h-full flex flex-col">
                <Badge className="w-fit mb-4 bg-primary-foreground/20 text-primary-foreground border-0">
                  <Zap className="w-3 h-3 mr-1" />
                  VDS / VPS
                </Badge>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
                  Все провайдеры.<br/>
                  Один кабинет.
                </h1>
                
                <p className="text-primary-foreground/80 text-sm md:text-base mb-6 max-w-md">
                  Покупайте серверы у лучших провайдеров и управляйте ими в едином интерфейсе Plooza
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  <Button size="lg" variant="secondary" className="rounded-xl">
                    Смотреть тарифы
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="ghost" className="rounded-xl text-primary-foreground hover:bg-primary-foreground/10">
                    <Play className="w-4 h-4 mr-2" />
                    Демо
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Stats Block */}
            <div className="bg-card border border-border rounded-3xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Статистика</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">51</span>
                  <span className="text-xs text-muted-foreground">тарифов</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">5</span>
                  <span className="text-xs text-muted-foreground">провайдеров</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl md:text-3xl font-bold text-primary">от 149₽</span>
                  <span className="text-xs text-muted-foreground">в месяц</span>
                </div>
              </div>
            </div>
            
            {/* Quick Feature - Unified Billing */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-3xl p-5 md:p-6 group hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Единый счёт</h3>
              <p className="text-sm text-muted-foreground">Один платёж за все серверы</p>
            </div>
            
            {/* Quick Feature - Dashboard */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-3xl p-5 md:p-6 group hover:border-blue-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Единый дашборд</h3>
              <p className="text-sm text-muted-foreground">Мониторинг всех серверов</p>
            </div>
            
            {/* Quick Feature - API */}
            <div className="bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20 rounded-3xl p-5 md:p-6 group hover:border-violet-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Settings className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Единый API</h3>
              <p className="text-sm text-muted-foreground">Управление через один API</p>
            </div>
            
            {/* Providers List */}
            <div className="md:col-span-2 bg-card border border-border rounded-3xl p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Провайдеры</h3>
                <Button variant="ghost" size="sm" className="text-xs">
                  Все <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {providers.map((provider) => (
                  <button
                    key={provider.name}
                    className="flex items-center gap-2 px-4 py-2.5 bg-muted hover:bg-muted/80 rounded-xl transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center">
                      <Server className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-foreground">{provider.name}</div>
                      <div className="text-[10px] text-muted-foreground">{provider.count} тарифов</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Dashboard Preview Block */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-muted/80 to-muted/40 border border-border rounded-3xl p-5 md:p-6 overflow-hidden relative">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Личный кабинет</h3>
                  <p className="text-xs text-muted-foreground">Управляйте всеми серверами в одном месте</p>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Mini Dashboard UI */}
              <div className="bg-background rounded-2xl border border-border p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-[10px] text-muted-foreground ml-2">dashboard.plooza.ru</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-[10px] text-muted-foreground mb-1">Серверы</div>
                    <div className="text-lg font-bold text-foreground">4</div>
                    <div className="flex gap-1 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-[10px] text-muted-foreground mb-1">CPU</div>
                    <div className="text-lg font-bold text-foreground">23%</div>
                    <div className="w-full h-1.5 bg-muted rounded-full mt-2">
                      <div className="w-1/4 h-full bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-[10px] text-muted-foreground mb-1">Траффик</div>
                    <div className="text-lg font-bold text-foreground">1.2TB</div>
                    <div className="flex items-end gap-0.5 mt-2 h-3">
                      <div className="w-1 bg-primary/40 rounded-full" style={{height: '40%'}} />
                      <div className="w-1 bg-primary/40 rounded-full" style={{height: '60%'}} />
                      <div className="w-1 bg-primary/40 rounded-full" style={{height: '30%'}} />
                      <div className="w-1 bg-primary/40 rounded-full" style={{height: '80%'}} />
                      <div className="w-1 bg-primary rounded-full" style={{height: '100%'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Featured Tariffs - Full Width */}
            <div className="md:col-span-2 lg:col-span-4">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">Популярные тарифы</h2>
                  <p className="text-sm text-muted-foreground mt-1">Лучшие предложения от проверенных провайдеров</p>
                </div>
                <Button variant="outline" className="hidden md:flex rounded-xl">
                  Все тарифы
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredTariffs.map((tariff) => (
                  <div
                    key={tariff.id}
                    onMouseEnter={() => setHoveredTariff(tariff.id)}
                    onMouseLeave={() => setHoveredTariff(null)}
                    className={cn(
                      "relative bg-card rounded-2xl border p-5 transition-all duration-300",
                      tariff.popular 
                        ? "border-primary shadow-lg shadow-primary/10" 
                        : "border-border hover:border-primary/30 hover:shadow-md"
                    )}
                  >
                    {tariff.popular && (
                      <div className="absolute -top-px left-6 right-6 h-0.5 bg-primary rounded-full" />
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="text-[10px] mb-2">
                          {tariff.provider}
                        </Badge>
                        <h3 className="font-semibold text-foreground">{tariff.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-foreground">{tariff.price}₽</div>
                        <div className="text-[10px] text-muted-foreground">/мес</div>
                        {tariff.oldPrice && (
                          <div className="text-xs text-muted-foreground line-through">{tariff.oldPrice}₽</div>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-2 bg-muted/50 rounded-lg">
                        <Cpu className="w-4 h-4 text-primary mx-auto mb-1" />
                        <div className="text-xs font-medium">{tariff.cpu} CPU</div>
                      </div>
                      <div className="text-center p-2 bg-muted/50 rounded-lg">
                        <Gauge className="w-4 h-4 text-primary mx-auto mb-1" />
                        <div className="text-xs font-medium">{tariff.ram} ГБ</div>
                      </div>
                      <div className="text-center p-2 bg-muted/50 rounded-lg">
                        <HardDrive className="w-4 h-4 text-primary mx-auto mb-1" />
                        <div className="text-xs font-medium">{tariff.storage} ГБ</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {tariff.location}
                      </span>
                      <Button 
                        size="sm" 
                        className={cn(
                          "rounded-lg transition-all",
                          hoveredTariff === tariff.id ? "px-4" : "px-3"
                        )}
                      >
                        {hoveredTariff === tariff.id ? 'Заказать' : 'Выбрать'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4 md:hidden rounded-xl">
                Все тарифы
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            {/* Support Block */}
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-3xl p-5 md:p-6 group hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Единая поддержка</h3>
              <p className="text-sm text-muted-foreground">Решаем вопросы за вас</p>
            </div>
            
            {/* Migration Block */}
            <div className="bg-gradient-to-br from-rose-500/10 to-rose-500/5 border border-rose-500/20 rounded-3xl p-5 md:p-6 group hover:border-rose-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Лёгкая миграция</h3>
              <p className="text-sm text-muted-foreground">Перенос между провайдерами</p>
            </div>
            
            {/* CTA Block */}
            <div className="md:col-span-2 bg-card border border-border rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Не знаете, какой тариф выбрать?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Наши эксперты помогут подобрать оптимальную конфигурацию под ваши задачи
                </p>
              </div>
              <Button size="lg" className="w-full md:w-auto rounded-xl whitespace-nowrap">
                Получить консультацию
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="md:col-span-2 lg:col-span-4 bg-muted/30 rounded-3xl p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Безопасные платежи</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Активация за 5 минут</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">10,000+ пользователей</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Рейтинг 4.9/5</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VDSPage;

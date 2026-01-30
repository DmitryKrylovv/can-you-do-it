import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Server, Cpu, HardDrive, Gauge, Globe, 
  ArrowRight, CreditCard, BarChart3, Settings, 
  Check, Zap, Shield, Clock, ChevronRight
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
  highlight?: boolean;
}

const featuredTariffs: Tariff[] = [
  { id: 'ru-1', provider: 'RUVDS', name: 'Micro', cpu: 1, ram: 0.5, storage: 10, storageType: 'SSD', location: 'Москва', price: 149, oldPrice: 199 },
  { id: 'vds-2', provider: 'VDSina', name: 'VDS-2', cpu: 2, ram: 2, storage: 50, storageType: 'NVMe', location: 'Амстердам', price: 349 },
  { id: 'tw-2', provider: 'Timeweb', name: 'Basic', cpu: 2, ram: 2, storage: 40, storageType: 'NVMe', location: 'Москва', price: 399, highlight: true },
  { id: 'sel-3', provider: 'Selectel', name: 'Pro', cpu: 4, ram: 4, storage: 50, storageType: 'SSD', location: 'СПб', price: 899 },
  { id: 'tw-4', provider: 'Timeweb', name: 'Advanced', cpu: 4, ram: 8, storage: 100, storageType: 'NVMe', location: 'Москва', price: 1299 },
  { id: 'bg-2', provider: 'Beget', name: 'Базовый', cpu: 2, ram: 2, storage: 30, storageType: 'SSD', location: 'СПб', price: 399 },
];

const providers = ['Timeweb', 'Selectel', 'RUVDS', 'VDSina', 'Beget'];

const VDSPage = () => {
  const [activeProvider, setActiveProvider] = useState<string | null>(null);

  const filteredTariffs = activeProvider 
    ? featuredTariffs.filter(t => t.provider === activeProvider)
    : featuredTariffs;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
                <Zap className="w-4 h-4" />
                Единая платформа для VDS/VPS
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                5 провайдеров.
                <br />
                <span className="text-primary">Один кабинет.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Выбирайте лучшие тарифы от Timeweb, Selectel, RUVDS и других. 
                Управляйте всеми серверами в едином интерфейсе Plooza.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button size="lg" className="rounded-xl text-base h-12 px-8">
                  Выбрать тариф
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl text-base h-12 px-8">
                  Узнать больше
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Без комиссии
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Активация за 5 минут
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Безопасные платежи
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Banner */}
        <section className="border-y border-border bg-card">
          <div className="container py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 first:pl-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Единый счёт</div>
                  <div className="text-sm text-muted-foreground">Один платёж за все серверы</div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 md:py-0 md:px-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Единый дашборд</div>
                  <div className="text-sm text-muted-foreground">Мониторинг всех серверов</div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 last:pr-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Единый API</div>
                  <div className="text-sm text-muted-foreground">Автоматизация управления</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tariffs Section */}
        <section className="container py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Тарифы VDS/VPS
              </h2>
              <p className="text-muted-foreground">
                от {Math.min(...featuredTariffs.map(t => t.price))}₽/мес • {featuredTariffs.length} тарифов от {providers.length} провайдеров
              </p>
            </div>
            <Button variant="outline" className="rounded-xl w-fit">
              Все тарифы
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Provider Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveProvider(null)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                !activeProvider 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Все
            </button>
            {providers.map((provider) => (
              <button
                key={provider}
                onClick={() => setActiveProvider(provider)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                  activeProvider === provider 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {provider}
              </button>
            ))}
          </div>
          
          {/* Tariff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTariffs.map((tariff) => (
              <div
                key={tariff.id}
                className={cn(
                  "relative bg-card rounded-2xl border p-6 transition-all hover:shadow-lg",
                  tariff.highlight 
                    ? "border-primary shadow-md shadow-primary/10" 
                    : "border-border hover:border-primary/30"
                )}
              >
                {tariff.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Server className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">{tariff.provider}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{tariff.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{tariff.price}₽</div>
                    <div className="text-xs text-muted-foreground">/месяц</div>
                    {tariff.oldPrice && (
                      <div className="text-sm text-muted-foreground line-through">{tariff.oldPrice}₽</div>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="flex items-center gap-2 text-sm">
                    <Cpu className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{tariff.cpu} vCPU</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Gauge className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{tariff.ram} ГБ</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <HardDrive className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{tariff.storage} ГБ {tariff.storageType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{tariff.location}</span>
                  </div>
                </div>
                
                <Button 
                  className={cn(
                    "w-full rounded-xl",
                    tariff.highlight ? "" : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  Заказать
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container pb-16 md:pb-24">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Не можете выбрать?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
              Наши эксперты помогут подобрать оптимальную конфигурацию под ваши задачи
            </p>
            <Button size="lg" variant="secondary" className="rounded-xl">
              Получить консультацию
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VDSPage;

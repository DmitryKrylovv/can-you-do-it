import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Server, Cpu, HardDrive, Gauge, Globe, 
  ArrowRight, CreditCard, BarChart3, Settings
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
}

const featuredTariffs: Tariff[] = [
  { id: 'tw-2', provider: 'Timeweb', name: 'Basic', cpu: 2, ram: 2, storage: 40, storageType: 'NVMe', location: 'Москва', price: 399 },
  { id: 'sel-3', provider: 'Selectel', name: 'Pro', cpu: 4, ram: 4, storage: 50, storageType: 'SSD', location: 'СПб', price: 899 },
  { id: 'vds-2', provider: 'VDSina', name: 'VDS-2', cpu: 2, ram: 2, storage: 50, storageType: 'NVMe', location: 'Амстердам', price: 349 },
  { id: 'ru-1', provider: 'RUVDS', name: 'Micro', cpu: 1, ram: 0.5, storage: 10, storageType: 'SSD', location: 'Москва', price: 149, oldPrice: 199 },
];

const features = [
  { icon: CreditCard, title: 'Единый счёт', desc: 'Один платёж за все серверы' },
  { icon: BarChart3, title: 'Единый дашборд', desc: 'Мониторинг в одном месте' },
  { icon: Settings, title: 'Единый API', desc: 'Управление через один API' },
];

const VDSPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container py-12 md:py-20">
          
          {/* Hero */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">VDS / VPS</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Все провайдеры — один кабинет
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Покупайте серверы у лучших провайдеров и управляйте ими в едином интерфейсе
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" className="rounded-xl">
                Смотреть тарифы
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl">
                Как это работает
              </Button>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tariffs */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Популярные тарифы</h2>
              <Button variant="ghost" className="text-muted-foreground">
                Все тарифы <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredTariffs.map((tariff) => (
                <div
                  key={tariff.id}
                  className="bg-card rounded-2xl border border-border p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {tariff.provider}
                    </Badge>
                    <div className="text-right">
                      <span className="text-xl font-bold text-foreground">{tariff.price}₽</span>
                      <span className="text-xs text-muted-foreground">/мес</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      <span>{tariff.cpu} vCPU</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4" />
                      <span>{tariff.ram} ГБ RAM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4" />
                      <span>{tariff.storage} ГБ {tariff.storageType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>{tariff.location}</span>
                    </div>
                  </div>
                  
                  <Button size="sm" className="w-full rounded-lg">
                    Выбрать
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VDSPage;

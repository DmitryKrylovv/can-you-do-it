import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CloudConfigurator from '@/components/cloud/CloudConfigurator';
import CloudProvidersList from '@/components/cloud/CloudProvidersList';
import { Cloud, Server, Shield, Zap } from 'lucide-react';

export interface CloudConfig {
  provider: string | null;
  location: string | null;
  os: string | null;
  cpu: number;
  ram: number;
  storage: number;
  storageType: 'ssd' | 'nvme';
}

export interface CloudProvider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  locations: string[];
  operatingSystems: string[];
  pricePerCore: number;
  pricePerGbRam: number;
  pricePerGbStorage: number;
  pricePerGbNvme: number;
  minCpu: number;
  maxCpu: number;
  minRam: number;
  maxRam: number;
  minStorage: number;
  maxStorage: number;
  features: string[];
}

const cloudProviders: CloudProvider[] = [
  {
    id: 'timeweb',
    name: 'Timeweb Cloud',
    logo: '⚡',
    rating: 4.8,
    locations: ['Москва', 'Санкт-Петербург', 'Казань', 'Амстердам'],
    operatingSystems: ['Ubuntu 22.04', 'Ubuntu 20.04', 'Debian 12', 'CentOS 9', 'Windows Server 2022'],
    pricePerCore: 150,
    pricePerGbRam: 100,
    pricePerGbStorage: 5,
    pricePerGbNvme: 10,
    minCpu: 1,
    maxCpu: 32,
    minRam: 1,
    maxRam: 128,
    minStorage: 10,
    maxStorage: 1000,
    features: ['DDoS-защита', 'Бэкапы', 'API'],
  },
  {
    id: 'selectel',
    name: 'Selectel',
    logo: '🔷',
    rating: 4.7,
    locations: ['Москва', 'Санкт-Петербург'],
    operatingSystems: ['Ubuntu 22.04', 'Ubuntu 20.04', 'Debian 12', 'Debian 11', 'CentOS 9', 'Rocky Linux 9'],
    pricePerCore: 180,
    pricePerGbRam: 120,
    pricePerGbStorage: 6,
    pricePerGbNvme: 12,
    minCpu: 1,
    maxCpu: 64,
    minRam: 1,
    maxRam: 256,
    minStorage: 10,
    maxStorage: 2000,
    features: ['Kubernetes', 'S3 Storage', 'Managed DBs'],
  },
  {
    id: 'vdsina',
    name: 'VDSina',
    logo: '🟢',
    rating: 4.5,
    locations: ['Москва', 'Амстердам', 'Франкфурт'],
    operatingSystems: ['Ubuntu 22.04', 'Ubuntu 20.04', 'Debian 12', 'CentOS 8'],
    pricePerCore: 120,
    pricePerGbRam: 80,
    pricePerGbStorage: 4,
    pricePerGbNvme: 8,
    minCpu: 1,
    maxCpu: 16,
    minRam: 0.5,
    maxRam: 64,
    minStorage: 5,
    maxStorage: 500,
    features: ['Низкие цены', 'Быстрый старт'],
  },
  {
    id: 'ruvds',
    name: 'RuVDS',
    logo: '🔴',
    rating: 4.4,
    locations: ['Москва', 'Новосибирск', 'Казань', 'Екатеринбург'],
    operatingSystems: ['Ubuntu 22.04', 'Debian 12', 'CentOS 9', 'Windows Server 2019', 'Windows Server 2022'],
    pricePerCore: 140,
    pricePerGbRam: 90,
    pricePerGbStorage: 5,
    pricePerGbNvme: 9,
    minCpu: 1,
    maxCpu: 24,
    minRam: 1,
    maxRam: 96,
    minStorage: 10,
    maxStorage: 800,
    features: ['Региональные ЦОД', 'Windows лицензии'],
  },
  {
    id: 'beget',
    name: 'Beget',
    logo: '🟡',
    rating: 4.6,
    locations: ['Москва', 'Санкт-Петербург'],
    operatingSystems: ['Ubuntu 22.04', 'Ubuntu 20.04', 'Debian 12'],
    pricePerCore: 160,
    pricePerGbRam: 110,
    pricePerGbStorage: 5,
    pricePerGbNvme: 11,
    minCpu: 1,
    maxCpu: 16,
    minRam: 1,
    maxRam: 64,
    minStorage: 10,
    maxStorage: 500,
    features: ['Простая панель', 'Техподдержка 24/7'],
  },
];

const allLocations = Array.from(new Set(cloudProviders.flatMap(p => p.locations)));
const allOS = Array.from(new Set(cloudProviders.flatMap(p => p.operatingSystems)));

const CloudPage = () => {
  const [config, setConfig] = useState<CloudConfig>({
    provider: null,
    location: null,
    os: null,
    cpu: 2,
    ram: 4,
    storage: 40,
    storageType: 'ssd',
  });

  const filteredProviders = useMemo(() => {
    return cloudProviders.filter(provider => {
      if (config.location && !provider.locations.includes(config.location)) return false;
      if (config.os && !provider.operatingSystems.includes(config.os)) return false;
      if (config.cpu < provider.minCpu || config.cpu > provider.maxCpu) return false;
      if (config.ram < provider.minRam || config.ram > provider.maxRam) return false;
      if (config.storage < provider.minStorage || config.storage > provider.maxStorage) return false;
      return true;
    });
  }, [config]);

  const calculatePrice = (provider: CloudProvider) => {
    const cpuPrice = config.cpu * provider.pricePerCore;
    const ramPrice = config.ram * provider.pricePerGbRam;
    const storagePrice = config.storage * (config.storageType === 'nvme' ? provider.pricePerGbNvme : provider.pricePerGbStorage);
    return cpuPrice + ramPrice + storagePrice;
  };

  const providersWithPrices = useMemo(() => {
    return filteredProviders
      .map(provider => ({
        ...provider,
        calculatedPrice: calculatePrice(provider),
      }))
      .sort((a, b) => a.calculatedPrice - b.calculatedPrice);
  }, [filteredProviders, config]);

  const availableLocations = config.provider
    ? cloudProviders.find(p => p.id === config.provider)?.locations || []
    : allLocations;

  const availableOS = config.provider
    ? cloudProviders.find(p => p.id === config.provider)?.operatingSystems || []
    : allOS;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              Облачные серверы
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Конфигуратор облачных серверов
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Настройте идеальную конфигурацию и сравните цены от {cloudProviders.length} провайдеров
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{cloudProviders.length}</div>
                <div className="text-sm text-muted-foreground">провайдеров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{allLocations.length}</div>
                <div className="text-sm text-muted-foreground">локаций</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{allOS.length}</div>
                <div className="text-sm text-muted-foreground">ОС</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">Мгновенный запуск</div>
                <div className="text-sm text-muted-foreground">Сервер за 60 секунд</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">DDoS-защита</div>
                <div className="text-sm text-muted-foreground">Включена бесплатно</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">NVMe диски</div>
                <div className="text-sm text-muted-foreground">Максимальная скорость</div>
              </div>
            </div>
          </div>
        </section>

        {/* Configurator */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <CloudConfigurator
                  config={config}
                  onConfigChange={setConfig}
                  locations={availableLocations}
                  operatingSystems={availableOS}
                  providers={cloudProviders}
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <CloudProvidersList
                providers={providersWithPrices}
                selectedProvider={config.provider}
                onProviderSelect={(id) => setConfig(prev => ({ ...prev, provider: id }))}
                config={config}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CloudPage;

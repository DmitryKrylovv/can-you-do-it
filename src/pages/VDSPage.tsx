import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Check, Server, Cpu, HardDrive, Gauge, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  logo: string;
  rating: number;
  reviewCount: number;
  description: string;
  locations: string[];
  features: string[];
  tariffs: Tariff[];
}

const providers: Provider[] = [
  {
    id: 'timeweb',
    name: 'Timeweb Cloud',
    logo: 'https://timeweb.com/favicon.ico',
    rating: 4.8,
    reviewCount: 1245,
    description: 'Надежный облачный хостинг с отличной поддержкой и современной инфраструктурой',
    locations: ['Москва', 'Санкт-Петербург', 'Амстердам'],
    features: ['SSD NVMe', 'Бесплатный SSL', 'DDoS защита', 'Бэкапы'],
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
    logo: 'https://selectel.ru/favicon.ico',
    rating: 4.7,
    reviewCount: 892,
    description: 'Крупнейший независимый провайдер IT-инфраструктуры в России',
    locations: ['Москва', 'Санкт-Петербург'],
    features: ['Enterprise SSD', 'API управление', 'Kubernetes', '24/7 поддержка'],
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
    logo: 'https://ruvds.com/favicon.ico',
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
    logo: 'https://vdsina.ru/favicon.ico',
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
    logo: 'https://beget.com/favicon.ico',
    rating: 4.9,
    reviewCount: 2156,
    description: 'Один из лучших хостингов России с превосходной технической поддержкой',
    locations: ['Санкт-Петербург'],
    features: ['Бесплатный домен', 'Автобэкапы', 'SSL сертификаты', 'Тех. поддержка 24/7'],
    tariffs: [
      { name: 'Старт', cpu: '1 vCPU', ram: '1 ГБ', storage: '15 ГБ SSD', bandwidth: '100 Мбит/с', price: 199 },
      { name: 'Базовый', cpu: '2 vCPU', ram: '2 ГБ', storage: '30 ГБ SSD', bandwidth: '200 Мбит/с', price: 399, popular: true },
      { name: 'Стандарт', cpu: '3 vCPU', ram: '4 ГБ', storage: '60 ГБ SSD', bandwidth: '300 Мбит/с', price: 699 },
      { name: 'Бизнес', cpu: '4 vCPU', ram: '8 ГБ', storage: '120 ГБ SSD', bandwidth: '500 Мбит/с', price: 1299 },
    ],
  },
];

const VDSPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">
                <Server className="w-3 h-3 mr-1" />
                VDS / VPS серверы
              </Badge>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Сравните тарифы VDS хостинга
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                Выберите лучший виртуальный сервер из {providers.length} проверенных провайдеров. 
                Сравнивайте цены, характеристики и отзывы в одном месте.
              </p>
            </div>
          </div>
        </section>

        {/* Providers List */}
        <section className="py-6 md:py-10">
          <div className="container space-y-6 md:space-y-8">
            {providers.map((provider) => (
              <div
                key={provider.id}
                className="bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden"
              >
                {/* Provider Header */}
                <div className="p-4 md:p-6 border-b border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                        <Server className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-foreground">
                          {provider.name}
                        </h2>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{provider.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            ({provider.reviewCount} отзывов)
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="sm:ml-auto flex flex-wrap gap-2">
                      {provider.locations.map((location) => (
                        <Badge key={location} variant="outline" className="text-xs">
                          <Globe className="w-3 h-3 mr-1" />
                          {location}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-3 md:mt-4">
                    {provider.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                    {provider.features.map((feature) => (
                      <span key={feature} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tariffs Grid */}
                <div className="p-4 md:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {provider.tariffs.map((tariff) => (
                      <div
                        key={tariff.name}
                        className={`relative p-4 rounded-xl border ${
                          tariff.popular
                            ? 'border-primary bg-primary/5'
                            : 'border-border bg-muted/30'
                        }`}
                      >
                        {tariff.popular && (
                          <Badge className="absolute -top-2 right-3 text-[10px]">
                            Популярный
                          </Badge>
                        )}
                        
                        <h3 className="font-semibold text-foreground mb-3">
                          {tariff.name}
                        </h3>
                        
                        <div className="space-y-2 text-sm mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Cpu className="w-4 h-4 text-primary/70" />
                            <span>{tariff.cpu}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Gauge className="w-4 h-4 text-primary/70" />
                            <span>{tariff.ram} RAM</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <HardDrive className="w-4 h-4 text-primary/70" />
                            <span>{tariff.storage}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Globe className="w-4 h-4 text-primary/70" />
                            <span>{tariff.bandwidth}</span>
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl md:text-2xl font-bold text-foreground">
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
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VDSPage;

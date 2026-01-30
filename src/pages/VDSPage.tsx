import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VDSFilters from '@/components/vds/VDSFilters';
import VDSTariffCard from '@/components/vds/VDSTariffCard';
import VDSProviderBar from '@/components/vds/VDSProviderBar';
import { 
  ArrowRight, CreditCard, BarChart3, Settings, 
  Check, Zap, Shield, Clock, SlidersHorizontal,
  ArrowUpDown, Grid3X3, List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

const allTariffs: Tariff[] = [
  { id: 'ru-1', provider: 'RUVDS', name: 'Micro', cpu: 1, ram: 0.5, storage: 10, storageType: 'SSD', location: 'Москва', price: 149, oldPrice: 199 },
  { id: 'vds-1', provider: 'VDSina', name: 'VDS-1', cpu: 1, ram: 1, storage: 25, storageType: 'NVMe', location: 'Москва', price: 199 },
  { id: 'bg-1', provider: 'Beget', name: 'Start', cpu: 1, ram: 1, storage: 20, storageType: 'SSD', location: 'СПб', price: 249 },
  { id: 'vds-2', provider: 'VDSina', name: 'VDS-2', cpu: 2, ram: 2, storage: 50, storageType: 'NVMe', location: 'Амстердам', price: 349 },
  { id: 'tw-2', provider: 'Timeweb', name: 'Basic', cpu: 2, ram: 2, storage: 40, storageType: 'NVMe', location: 'Москва', price: 399, highlight: true },
  { id: 'bg-2', provider: 'Beget', name: 'Базовый', cpu: 2, ram: 2, storage: 30, storageType: 'SSD', location: 'СПб', price: 399 },
  { id: 'ru-2', provider: 'RUVDS', name: 'Start', cpu: 2, ram: 2, storage: 40, storageType: 'SSD', location: 'Москва', price: 449 },
  { id: 'sel-1', provider: 'Selectel', name: 'Basic', cpu: 2, ram: 2, storage: 30, storageType: 'SSD', location: 'Москва', price: 499 },
  { id: 'tw-3', provider: 'Timeweb', name: 'Standard', cpu: 2, ram: 4, storage: 60, storageType: 'NVMe', location: 'Москва', price: 699 },
  { id: 'vds-3', provider: 'VDSina', name: 'VDS-4', cpu: 4, ram: 4, storage: 80, storageType: 'NVMe', location: 'Франкфурт', price: 749 },
  { id: 'sel-2', provider: 'Selectel', name: 'Pro', cpu: 4, ram: 4, storage: 50, storageType: 'SSD', location: 'СПб', price: 899 },
  { id: 'ru-3', provider: 'RUVDS', name: 'Pro', cpu: 4, ram: 4, storage: 80, storageType: 'NVMe', location: 'Казань', price: 899 },
  { id: 'bg-3', provider: 'Beget', name: 'Pro', cpu: 4, ram: 8, storage: 100, storageType: 'NVMe', location: 'Москва', price: 999 },
  { id: 'tw-4', provider: 'Timeweb', name: 'Advanced', cpu: 4, ram: 8, storage: 100, storageType: 'NVMe', location: 'Москва', price: 1299 },
  { id: 'sel-3', provider: 'Selectel', name: 'Business', cpu: 8, ram: 16, storage: 200, storageType: 'NVMe', location: 'Москва', price: 2499 },
  { id: 'tw-5', provider: 'Timeweb', name: 'Business', cpu: 8, ram: 16, storage: 200, storageType: 'NVMe', location: 'СПб', price: 2699 },
];

const VDSPage = () => {
  const [activeProvider, setActiveProvider] = useState<string | null>(null);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedRam, setSelectedRam] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortBy, setSortBy] = useState<string>('price-asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const providers = useMemo(() => {
    const counts = allTariffs.reduce((acc, t) => {
      acc[t.provider] = (acc[t.provider] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);

  const locations = useMemo(() => [...new Set(allTariffs.map(t => t.location))], []);
  const ramOptions = useMemo(() => [...new Set(allTariffs.map(t => t.ram))].sort((a, b) => a - b), []);
  const maxPrice = useMemo(() => Math.max(...allTariffs.map(t => t.price)), []);

  const filteredTariffs = useMemo(() => {
    let result = allTariffs;

    // Provider bar filter (quick filter)
    if (activeProvider) {
      result = result.filter(t => t.provider === activeProvider);
    }

    // Advanced filters
    if (selectedProviders.length > 0) {
      result = result.filter(t => selectedProviders.includes(t.provider));
    }
    if (selectedLocations.length > 0) {
      result = result.filter(t => selectedLocations.includes(t.location));
    }
    if (selectedRam.length > 0) {
      result = result.filter(t => selectedRam.includes(t.ram));
    }
    result = result.filter(t => t.price >= priceRange[0] && t.price <= priceRange[1]);

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'ram-desc':
        result = [...result].sort((a, b) => b.ram - a.ram);
        break;
      case 'cpu-desc':
        result = [...result].sort((a, b) => b.cpu - a.cpu);
        break;
    }

    return result;
  }, [activeProvider, selectedProviders, selectedLocations, selectedRam, priceRange, sortBy]);

  const resetFilters = () => {
    setSelectedProviders([]);
    setSelectedLocations([]);
    setSelectedRam([]);
    setPriceRange([0, maxPrice]);
    setActiveProvider(null);
  };

  const activeFiltersCount = selectedProviders.length + selectedLocations.length + selectedRam.length + 
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0);

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
          
          <div className="container relative py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
                <Zap className="w-4 h-4" />
                Единая платформа для VDS/VPS
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {providers.length} провайдеров.{' '}
                <span className="text-primary">Один кабинет.</span>
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Выбирайте лучшие тарифы и управляйте всеми серверами в едином интерфейсе Plooza
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  Без комиссии
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  Активация 5 мин
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-primary" />
                  Безопасные платежи
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Banner */}
        <section className="border-y border-border bg-card">
          <div className="container py-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Единый счёт</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Единый дашборд</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Единый API</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tariffs Section */}
        <section className="container py-8 md:py-12">
          {/* Provider Quick Filter */}
          <div className="mb-6">
            <VDSProviderBar 
              providers={providers}
              activeProvider={activeProvider}
              onProviderClick={setActiveProvider}
            />
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              {/* Mobile Filters */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden rounded-xl">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Фильтры
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 justify-center">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Фильтры</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <VDSFilters
                      providers={providers.map(p => p.name)}
                      selectedProviders={selectedProviders}
                      onProviderChange={setSelectedProviders}
                      locations={locations}
                      selectedLocations={selectedLocations}
                      onLocationChange={setSelectedLocations}
                      priceRange={priceRange}
                      maxPrice={maxPrice}
                      onPriceChange={setPriceRange}
                      ramOptions={ramOptions}
                      selectedRam={selectedRam}
                      onRamChange={setSelectedRam}
                      onReset={resetFilters}
                    />
                  </div>
                </SheetContent>
              </Sheet>

              <span className="text-sm text-muted-foreground">
                Найдено: <span className="font-medium text-foreground">{filteredTariffs.length}</span> тарифов
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Сначала дешёвые</SelectItem>
                  <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                  <SelectItem value="ram-desc">По RAM</SelectItem>
                  <SelectItem value="cpu-desc">По CPU</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden md:flex border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "p-2 transition-colors",
                    viewMode === 'grid' ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
                  )}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    "p-2 transition-colors",
                    viewMode === 'list' ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
                  )}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-4 bg-card border border-border rounded-2xl p-5">
                <VDSFilters
                  providers={providers.map(p => p.name)}
                  selectedProviders={selectedProviders}
                  onProviderChange={setSelectedProviders}
                  locations={locations}
                  selectedLocations={selectedLocations}
                  onLocationChange={setSelectedLocations}
                  priceRange={priceRange}
                  maxPrice={maxPrice}
                  onPriceChange={setPriceRange}
                  ramOptions={ramOptions}
                  selectedRam={selectedRam}
                  onRamChange={setSelectedRam}
                  onReset={resetFilters}
                />
              </div>
            </aside>

            {/* Tariff Grid */}
            <div className="flex-1">
              {filteredTariffs.length > 0 ? (
                <div className={cn(
                  "grid gap-4",
                  viewMode === 'grid' 
                    ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                    : "grid-cols-1"
                )}>
                  {filteredTariffs.map((tariff) => (
                    <VDSTariffCard key={tariff.id} tariff={tariff} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card border border-border rounded-2xl">
                  <p className="text-muted-foreground mb-4">Тарифы не найдены</p>
                  <Button variant="outline" onClick={resetFilters} className="rounded-xl">
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container pb-12 md:pb-16">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-3">
              Не можете выбрать тариф?
            </h2>
            <p className="text-primary-foreground/80 mb-5 max-w-lg mx-auto text-sm">
              Наши эксперты помогут подобрать оптимальную конфигурацию
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

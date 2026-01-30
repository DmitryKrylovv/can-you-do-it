import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Star, TrendingUp, Award, Users, ArrowUpDown,
  ExternalLink, ChevronUp, ChevronDown, Filter, Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Provider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewsCount: number;
  category: string;
  since: number;
  uptime: number;
  support: number;
  price: number;
  features: string[];
  badge?: string;
  trend: 'up' | 'down' | 'stable';
}

const providers: Provider[] = [
  {
    id: 'timeweb',
    name: 'Timeweb',
    logo: 'TW',
    rating: 4.9,
    reviewsCount: 2847,
    category: 'VPS, Хостинг',
    since: 2006,
    uptime: 99.98,
    support: 4.9,
    price: 4.7,
    features: ['NVMe SSD', 'Бесплатный SSL', 'Антивирус'],
    badge: 'Выбор пользователей',
    trend: 'up',
  },
  {
    id: 'selectel',
    name: 'Selectel',
    logo: 'SE',
    rating: 4.8,
    reviewsCount: 1923,
    category: 'VPS, Облако, Colocation',
    since: 2008,
    uptime: 99.99,
    support: 4.8,
    price: 4.3,
    features: ['Собственные ЦОД', 'API', 'S3 хранилище'],
    badge: 'Лучший uptime',
    trend: 'stable',
  },
  {
    id: 'ruvds',
    name: 'RUVDS',
    logo: 'RU',
    rating: 4.7,
    reviewsCount: 1654,
    category: 'VPS',
    since: 2014,
    uptime: 99.95,
    support: 4.6,
    price: 4.8,
    features: ['DDoS защита', 'Windows VPS', 'Криптооплата'],
    trend: 'up',
  },
  {
    id: 'beget',
    name: 'Beget',
    logo: 'BG',
    rating: 4.7,
    reviewsCount: 3421,
    category: 'Хостинг, VPS',
    since: 2007,
    uptime: 99.96,
    support: 4.9,
    price: 4.9,
    features: ['Бесплатный домен', 'Автобэкап', 'SSH доступ'],
    badge: 'Лучшая поддержка',
    trend: 'stable',
  },
  {
    id: 'vdsina',
    name: 'VDSina',
    logo: 'VD',
    rating: 4.6,
    reviewsCount: 987,
    category: 'VPS',
    since: 2016,
    uptime: 99.94,
    support: 4.5,
    price: 4.9,
    features: ['Почасовая оплата', 'API', 'Snapshots'],
    badge: 'Лучшая цена',
    trend: 'up',
  },
  {
    id: 'reg',
    name: 'REG.RU',
    logo: 'RG',
    rating: 4.5,
    reviewsCount: 4521,
    category: 'Домены, Хостинг, VPS',
    since: 2006,
    uptime: 99.92,
    support: 4.4,
    price: 4.2,
    features: ['№1 по доменам', 'Конструктор сайтов', 'SSL'],
    trend: 'stable',
  },
  {
    id: 'firstvds',
    name: 'FirstVDS',
    logo: 'FV',
    rating: 4.4,
    reviewsCount: 876,
    category: 'VPS, Dedicated',
    since: 2002,
    uptime: 99.90,
    support: 4.3,
    price: 4.5,
    features: ['Арендные серверы', 'ISPmanager', 'IPv6'],
    trend: 'down',
  },
  {
    id: 'hetzner',
    name: 'Hetzner',
    logo: 'HZ',
    rating: 4.8,
    reviewsCount: 2156,
    category: 'VPS, Dedicated, Colocation',
    since: 1997,
    uptime: 99.99,
    support: 4.2,
    price: 4.9,
    features: ['Европейские ЦОД', 'Cloud', 'Низкие цены'],
    badge: 'Лучшее соотношение цена/качество',
    trend: 'up',
  },
  {
    id: 'techru',
    name: 'Tech.ru',
    logo: 'TR',
    rating: 4.5,
    reviewsCount: 654,
    category: 'Colocation, Dedicated',
    since: 2005,
    uptime: 99.97,
    support: 4.6,
    price: 4.4,
    features: ['Московские ЦОД', 'Remote Hands', 'Cross-connect'],
    trend: 'up',
  },
  {
    id: 'dataline',
    name: 'DataLine',
    logo: 'DL',
    rating: 4.6,
    reviewsCount: 432,
    category: 'Colocation, Облако',
    since: 2007,
    uptime: 99.98,
    support: 4.7,
    price: 4.0,
    features: ['Tier III ЦОД', 'Гибридное облако', 'SLA'],
    trend: 'stable',
  },
];

type SortField = 'rating' | 'reviewsCount' | 'uptime' | 'support' | 'price';
type SortDirection = 'asc' | 'desc';

const ProvidersRatingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('rating');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    providers.forEach(p => {
      p.category.split(', ').forEach(c => cats.add(c));
    });
    return Array.from(cats).sort();
  }, []);

  const filteredAndSorted = useMemo(() => {
    let result = [...providers];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category.includes(categoryFilter));
    }

    // Sort
    result.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const modifier = sortDirection === 'desc' ? -1 : 1;
      return (aVal - bVal) * modifier;
    });

    return result;
  }, [searchQuery, categoryFilter, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const SortHeader = ({ field, label }: { field: SortField; label: string }) => (
    <button
      onClick={() => handleSort(field)}
      className={cn(
        "flex items-center gap-1 text-xs font-medium transition-colors",
        sortField === field ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
      {sortField === field && (
        sortDirection === 'desc' ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />
      )}
    </button>
  );

  const getRatingColor = (rating: number) => {
    if (rating >= 4.7) return 'text-emerald-600';
    if (rating >= 4.4) return 'text-amber-600';
    return 'text-muted-foreground';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-background border-b border-border">
          <div className="container py-10 md:py-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  Рейтинг провайдеров
                </h1>
                <p className="text-sm text-muted-foreground">
                  Актуальный рейтинг на основе {providers.reduce((sum, p) => sum + p.reviewsCount, 0).toLocaleString()} отзывов
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Обновлено сегодня</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{providers.length} провайдеров</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border bg-muted/30">
          <div className="container py-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px] max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск провайдера..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 rounded-xl"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="hidden md:flex items-center gap-2 ml-auto text-sm text-muted-foreground">
                <ArrowUpDown className="w-4 h-4" />
                <span>Сортировка:</span>
              </div>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="container py-6 md:py-8">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-muted/50 border-b border-border text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <div className="col-span-1">#</div>
              <div className="col-span-3">Провайдер</div>
              <div className="col-span-2">
                <SortHeader field="rating" label="Рейтинг" />
              </div>
              <div className="col-span-1">
                <SortHeader field="uptime" label="Uptime" />
              </div>
              <div className="col-span-1">
                <SortHeader field="support" label="Поддержка" />
              </div>
              <div className="col-span-1">
                <SortHeader field="price" label="Цены" />
              </div>
              <div className="col-span-2">Особенности</div>
              <div className="col-span-1"></div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {filteredAndSorted.map((provider, index) => (
                <div
                  key={provider.id}
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-6 py-4 md:py-5 hover:bg-muted/30 transition-colors",
                    provider.badge && "bg-primary/5"
                  )}
                >
                  {/* Rank */}
                  <div className="hidden md:flex col-span-1 items-center">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm",
                      index === 0 && "bg-amber-500 text-white",
                      index === 1 && "bg-slate-400 text-white",
                      index === 2 && "bg-amber-700 text-white",
                      index > 2 && "bg-muted text-muted-foreground"
                    )}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Provider Info */}
                  <div className="col-span-1 md:col-span-3 flex items-center gap-3">
                    <div className="md:hidden w-6 h-6 rounded-md bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                      {index + 1}
                    </div>
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shrink-0",
                      index === 0 ? "bg-primary" : "bg-slate-600"
                    )}>
                      {provider.logo}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-foreground">{provider.name}</span>
                        {provider.trend === 'up' && (
                          <ChevronUp className="w-4 h-4 text-emerald-500" />
                        )}
                        {provider.trend === 'down' && (
                          <ChevronDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {provider.category}
                      </div>
                      {provider.badge && (
                        <Badge className="mt-1 bg-primary/10 text-primary text-[10px] font-medium">
                          {provider.badge}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className={cn("w-5 h-5 fill-current", getRatingColor(provider.rating))} />
                      <span className={cn("text-lg font-bold", getRatingColor(provider.rating))}>
                        {provider.rating}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({provider.reviewsCount.toLocaleString()})
                    </span>
                  </div>

                  {/* Uptime */}
                  <div className="hidden md:flex col-span-1 items-center">
                    <span className={cn(
                      "text-sm font-medium",
                      provider.uptime >= 99.95 ? "text-emerald-600" : "text-muted-foreground"
                    )}>
                      {provider.uptime}%
                    </span>
                  </div>

                  {/* Support */}
                  <div className="hidden md:flex col-span-1 items-center">
                    <div className="flex items-center gap-1">
                      <div className="w-8 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${(provider.support / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{provider.support}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="hidden md:flex col-span-1 items-center">
                    <div className="flex items-center gap-1">
                      <div className="w-8 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
                          style={{ width: `${(provider.price / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{provider.price}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="hidden md:flex col-span-2 items-center gap-1 flex-wrap">
                    {provider.features.slice(0, 2).map(feature => (
                      <Badge key={feature} variant="secondary" className="text-[10px] font-normal">
                        {feature}
                      </Badge>
                    ))}
                    {provider.features.length > 2 && (
                      <Badge variant="outline" className="text-[10px]">
                        +{provider.features.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Action */}
                  <div className="col-span-1 flex items-center justify-end">
                    <Link to={`/provider/${provider.id}`}>
                      <Button size="sm" variant="outline" className="rounded-lg text-xs">
                        Подробнее
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>

                  {/* Mobile: Additional info */}
                  <div className="md:hidden col-span-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span>Uptime: {provider.uptime}%</span>
                    <span>•</span>
                    <span>С {provider.since} г.</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredAndSorted.length === 0 && (
              <div className="px-6 py-12 text-center text-muted-foreground">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Провайдеры не найдены</p>
                <p className="text-sm">Попробуйте изменить фильтры</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProvidersRatingPage;

import { useState } from 'react';
import { Menu, Search, Phone, MapPin, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import ProductsMenu from '@/components/header/ProductsMenu';
import SearchFilter from '@/components/header/SearchFilter';
import ploozaLogo from '@/assets/plooza-logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const quickLinks = [
    { label: 'Рейтинг провайдеров', href: '#' },
    { label: 'Сравнить', href: '#' },
    { label: 'Отзывы', href: '#' },
    { label: 'Блог', href: '#' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-background">
        {/* Top utility bar */}
        <div className="bg-foreground text-background">
          <div className="container">
            <div className="flex items-center justify-between h-9 text-xs">
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                  <MapPin className="w-3 h-3" />
                  <span>Москва</span>
                  <ChevronDown className="w-3 h-3" />
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-6">
                <a href="#" className="hover:opacity-80 transition-opacity">Для провайдеров</a>
                <a href="#" className="hover:opacity-80 transition-opacity">Помощь</a>
                <a href="tel:+78001234567" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity font-medium">
                  <Phone className="w-3 h-3" />
                  8 800 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="border-b border-border bg-background">
          <div className="container">
            <div className="flex items-center h-16 gap-4">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <img src={ploozaLogo} alt="Plooza" className="h-8" />
              </Link>

              {/* Products Menu Button - Desktop */}
              <div className="hidden md:block">
                <ProductsMenu
                  isOpen={isProductsOpen}
                  onOpenChange={setIsProductsOpen}
                />
              </div>

              {/* Search Button - Desktop */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center gap-3 flex-1 max-w-md h-11 px-4 bg-muted rounded-xl text-sm text-muted-foreground hover:bg-muted/80 transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>Поиск провайдеров...</span>
                <kbd className="ml-auto hidden lg:inline-flex h-5 items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  ⌘K
                </kbd>
              </button>

              {/* Quick Links - Desktop */}
              <nav className="hidden xl:flex items-center gap-1">
                {quickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-muted"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center ml-auto">
                <Button size="sm" className="text-sm font-medium gap-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-primary-foreground">
                  <User className="w-4 h-4" />
                  Войти
                </Button>
              </div>

              {/* Mobile Actions */}
              <div className="flex md:hidden items-center gap-2 ml-auto">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2.5 hover:bg-muted rounded-lg transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>

                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <button className="p-2.5 hover:bg-muted rounded-lg transition-colors">
                      <Menu className="w-5 h-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] p-0">
                    <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Filter Modal */}
      <SearchFilter isOpen={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};

// Mobile Menu Component
const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const mobileCategories = [
    {
      id: 'hosting',
      label: 'Хостинг',
      items: ['Виртуальный хостинг', 'WordPress хостинг', 'DNS-хостинг'],
    },
    {
      id: 'vps',
      label: 'VPS серверы',
      items: ['VPS на SSD', 'VPS на NVMe', 'High-CPU VPS'],
    },
    {
      id: 'domains',
      label: 'Домены',
      items: ['Регистрация', 'Трансфер'],
    },
    {
      id: 'ssl',
      label: 'SSL-сертификаты',
      items: ['Бесплатный SSL', 'Коммерческий SSL'],
    },
    {
      id: 'services',
      label: 'Сервисы',
      items: ['Выделенные серверы', 'Защита от DDoS', 'Бэкап'],
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Header */}
      <div className="p-4 border-b border-border">
        <img src={ploozaLogo} alt="Plooza" className="h-7" />
      </div>

      {/* Mobile Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        <div className="text-xs font-medium text-muted-foreground px-3 py-2 uppercase tracking-wider">
          Каталог услуг
        </div>
        {mobileCategories.map((category) => (
          <div key={category.id}>
            <button
              onClick={() => setExpandedCategory(
                expandedCategory === category.id ? null : category.id
              )}
              className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              <span>{category.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`} />
            </button>
            {expandedCategory === category.id && (
              <div className="ml-4 space-y-1">
                {category.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="border-t border-border mt-4 pt-4">
          <div className="text-xs font-medium text-muted-foreground px-3 py-2 uppercase tracking-wider">
            Навигация
          </div>
          <a href="#" className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors" onClick={onClose}>
            Рейтинг провайдеров
          </a>
          <a href="#" className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors" onClick={onClose}>
            Сравнить тарифы
          </a>
          <a href="#" className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors" onClick={onClose}>
            Отзывы
          </a>
          <a href="#" className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors" onClick={onClose}>
            Блог
          </a>
        </div>
      </nav>

      {/* Mobile Footer */}
      <div className="p-4 border-t border-border space-y-3">
        <a href="tel:+78001234567" className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Phone className="w-4 h-4" />
          8 800 123-45-67
        </a>
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-primary-foreground" size="sm">
          <User className="w-4 h-4 mr-2" />
          Войти
        </Button>
      </div>
    </div>
  );
};

export default Header;

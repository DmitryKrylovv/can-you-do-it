import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogPostCard from '@/components/blog/BlogPostCard';
import BlogCategories from '@/components/blog/BlogCategories';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PenLine } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  views: number;
  commentsCount: number;
  category: string;
  readTime: number;
  isBookmarked?: boolean;
}

const categories = [
  'Все темы',
  'Хостинг',
  'VPS/VDS',
  'Облако',
  'Домены',
  'Безопасность',
  'DevOps',
  'Разработка',
  'Бизнес',
];

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'ТОП-10 провайдеров VPS в России: сравнение и рейтинг 2026',
    excerpt: 'Подробный обзор лучших VPS-провайдеров с анализом цен, производительности и качества поддержки.',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    author: { name: 'Plooza', avatar: '🚀' },
    publishedAt: 'Сегодня в 14:30',
    views: 1247,
    commentsCount: 23,
    category: 'VPS/VDS',
    readTime: 8,
  },
  {
    id: '2',
    title: 'Как выбрать облачный сервер для высоконагруженного проекта',
    excerpt: 'Разбираемся в нюансах выбора облачной инфраструктуры для проектов с большим трафиком.',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    author: { name: 'CloudExpert', avatar: '☁️' },
    publishedAt: 'Вчера в 18:45',
    views: 892,
    commentsCount: 15,
    category: 'Облако',
    readTime: 12,
  },
  {
    id: '3',
    title: 'Защита сервера от DDoS-атак: полное руководство',
    excerpt: 'Практические советы по настройке защиты от DDoS-атак разной сложности.',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
    author: { name: 'SecureHost', avatar: '🔒' },
    publishedAt: '28 янв в 10:00',
    views: 2341,
    commentsCount: 47,
    category: 'Безопасность',
    readTime: 15,
  },
  {
    id: '4',
    title: 'Docker и Kubernetes: когда что использовать',
    excerpt: 'Сравнение контейнеризации и оркестрации для разных масштабов проектов.',
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop',
    author: { name: 'DevOpsGuru', avatar: '🐳' },
    publishedAt: '25 янв в 16:20',
    views: 1856,
    commentsCount: 31,
    category: 'DevOps',
    readTime: 10,
  },
  {
    id: '5',
    title: 'Миграция сайта на новый хостинг без простоя',
    excerpt: 'Пошаговая инструкция по переносу сайта с минимальным downtime.',
    coverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop',
    author: { name: 'HostMaster', avatar: '🔄' },
    publishedAt: '22 янв в 12:15',
    views: 1123,
    commentsCount: 19,
    category: 'Хостинг',
    readTime: 7,
  },
];

const popularPosts = [
  { id: '1', title: 'Промокоды для хостинга и VPS в 2026 году', date: '10 янв 2026', comments: 89 },
  { id: '2', title: 'Лучшие панели управления сервером: ISPmanager vs Plesk', date: '15 янв в 11:30', comments: 45 },
  { id: '3', title: 'Как настроить SSL-сертификат бесплатно', date: '08 янв в 14:20', comments: 32 },
  { id: '4', title: 'Сравнение NVMe и SSD дисков для VPS', date: '05 янв в 09:45', comments: 28 },
  { id: '5', title: 'Выбираем домен: гайд для начинающих', date: '02 янв в 16:00', comments: 21 },
];

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [activeCategory, setActiveCategory] = useState('Все темы');

  const filteredPosts = activeCategory === 'Все темы' 
    ? mockPosts 
    : mockPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Categories Bar */}
        <div className="border-b border-border bg-card/50 sticky top-[72px] z-30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <BlogCategories 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              <Button className="hidden md:flex gap-2">
                <PenLine className="w-4 h-4" />
                Написать статью
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="feed">Моя лента</TabsTrigger>
                  <TabsTrigger value="new">Новое</TabsTrigger>
                  <TabsTrigger value="popular">Популярное</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Posts */}
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <BlogPostCard 
                    key={post.id} 
                    post={post} 
                    featured={index === 0}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center pt-4">
                <Button variant="outline" size="lg">
                  Загрузить ещё
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar popularPosts={popularPosts} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;

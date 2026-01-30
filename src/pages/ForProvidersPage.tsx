import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, Variants } from 'framer-motion';
import { 
  ArrowRight, ArrowDown, Users, TrendingUp, 
  BarChart3, Headphones, Globe, CheckCircle2, 
  Rocket, Server, Database, Cloud, HardDrive,
  Lock, Zap, Mail, MessageSquare, Home,
  FileText, Phone, Settings, Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { icon: Server, name: 'VDS / VPS' },
  { icon: HardDrive, name: 'Dedicated' },
  { icon: Globe, name: 'Хостинг' },
  { icon: Database, name: 'Colocation' },
  { icon: Cloud, name: 'Облако' },
  { icon: Lock, name: 'SSL / Домены' },
];

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ForProvidersPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      {/* Floating Nav */}
      <nav className="fixed top-6 left-6 z-50">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground text-primary rounded-full font-medium hover:bg-primary-foreground/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          На главную
        </Link>
      </nav>

      {/* Hero - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background shapes */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-0 right-0 w-[60%] h-[80%] bg-primary-foreground/10 rounded-bl-[200px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-primary-foreground/5 rounded-tr-[150px]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        <div className="container relative z-10 text-center px-6">
          <motion.h1 
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="text-primary-foreground inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Стань
            </motion.span>
            <br />
            <motion.span 
              className="text-primary-foreground/40 inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              партнёром
            </motion.span>
            <br />
            <motion.span 
              className="text-primary-foreground inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Plooza
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Разместите хостинг-услуги в каталоге и получите доступ к тысячам клиентов
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button 
              size="lg" 
              variant="secondary" 
              className="rounded-full text-lg h-14 px-10"
              onClick={scrollToContent}
            >
              Узнать больше
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div 
            className="w-8 h-14 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-3 cursor-pointer"
            onClick={scrollToContent}
          >
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* What we accept */}
      <section ref={contentRef} className="bg-background text-foreground py-24 md:py-32">
        <div className="container px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Размещаем
              <br />
              <span className="text-primary">все услуги</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection>
            <p className="text-xl text-muted-foreground max-w-xl mb-16">
              Plooza — маркетплейс для провайдеров хостинг-услуг любого типа
            </p>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary hover:shadow-lg transition-colors"
              >
                <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="font-semibold">{service.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground text-background py-24 md:py-32 overflow-hidden">
        <div className="container px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { value: "15K", label: "пользователей" },
              { value: "+40%", label: "рост продаж" },
              { value: "0₽", label: "за подключение" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xl text-background/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-background text-foreground py-24 md:py-32 overflow-hidden">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Платите
                <br />
                <span className="text-primary">только за результат</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10">
                Никаких скрытых платежей. Вы платите только за реальные заказы от клиентов Plooza.
              </p>
              
              <motion.div 
                className="space-y-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  'Бесплатное размещение в каталоге',
                  'Оплата только за конверсии',
                  'Прозрачная аналитика',
                  'Персональный менеджер',
                ].map((item, i) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center gap-4"
                    variants={fadeInUp}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    </motion.div>
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div 
                className="col-span-2 bg-primary rounded-3xl p-8 text-primary-foreground"
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
              >
                <TrendingUp className="w-12 h-12 mb-6" />
                <div className="text-4xl font-bold mb-2">+40%</div>
                <div className="text-primary-foreground/70 text-lg">средний рост заказов</div>
              </motion.div>
              <motion.div 
                className="bg-muted rounded-3xl p-6"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-bold mb-1">15K+</div>
                <div className="text-sm text-muted-foreground">активных пользователей</div>
              </motion.div>
              <motion.div 
                className="bg-muted rounded-3xl p-6"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">аналитика в реальном времени</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-foreground text-background py-24 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/5 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>
        
        <div className="container px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
              Как <span className="text-primary">подключиться</span>
            </h2>
          </AnimatedSection>
          
          <div className="max-w-6xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Connection line */}
              <motion.div 
                className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <motion.div 
                className="grid grid-cols-4 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {[
                  { num: '01', icon: FileText, title: 'Заявка', desc: 'Заполните форму на сайте — это займёт 2 минуты' },
                  { num: '02', icon: Phone, title: 'Созвон', desc: 'Обсудим условия и ответим на все вопросы' },
                  { num: '03', icon: Settings, title: 'Интеграция', desc: 'Настроим API или загрузим ваш прайс-лист' },
                  { num: '04', icon: Play, title: 'Запуск', desc: 'Ваши услуги появятся в каталоге Plooza' },
                ].map((step, i) => (
                  <motion.div 
                    key={step.num} 
                    className="relative group"
                    variants={fadeInUp}
                  >
                    {/* Connector dot */}
                    <motion.div 
                      className="absolute top-[5.5rem] left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-foreground z-10 group-hover:scale-125 transition-transform"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                    />
                    
                    {/* Card */}
                    <motion.div 
                      className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-3xl p-6 hover:bg-background/10 hover:border-primary/50 transition-colors"
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-5xl font-bold text-primary">{step.num}</span>
                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-foreground transition-colors">
                          <step.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-background/60 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Mobile Cards */}
            <motion.div 
              className="md:hidden space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { num: '01', icon: FileText, title: 'Заявка', desc: 'Заполните форму на сайте — это займёт 2 минуты' },
                { num: '02', icon: Phone, title: 'Созвон', desc: 'Обсудим условия и ответим на все вопросы' },
                { num: '03', icon: Settings, title: 'Интеграция', desc: 'Настроим API или загрузим ваш прайс-лист' },
                { num: '04', icon: Play, title: 'Запуск', desc: 'Ваши услуги появятся в каталоге Plooza' },
              ].map((step, i) => (
                <motion.div 
                  key={step.num} 
                  className="flex gap-4 items-start"
                  variants={fadeInUp}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-foreground font-bold text-xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.num}
                    </motion.div>
                    {i < 3 && (
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-primary/30" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-background/60 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-24 md:py-32 overflow-hidden">
        <div className="container px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center">
              Что вы <span className="text-primary">получаете</span>
            </h2>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: Globe, title: 'Доступ к аудитории', desc: 'Тысячи пользователей ищут хостинг каждый день' },
              { icon: BarChart3, title: 'Аналитика', desc: 'Статистика показов, кликов и конверсий' },
              { icon: Headphones, title: 'Поддержка', desc: 'Персональный менеджер для каждого партнёра' },
              { icon: Rocket, title: 'Быстрый старт', desc: 'Запуск за 1-3 рабочих дня' },
              { icon: Zap, title: 'API интеграция', desc: 'Автоматическая синхронизация тарифов' },
              { icon: Lock, title: 'Безопасность', desc: 'Проверенные клиенты и защита данных' },
            ].map((feature, i) => (
              <motion.div 
                key={feature.title} 
                className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-shadow"
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  <feature.icon className="w-10 h-10 text-primary mb-5" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 md:py-32 overflow-hidden">
        <div className="container px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6"
              variants={fadeInUp}
            >
              Готовы начать?
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-foreground/70 mb-12 max-w-xl mx-auto"
              variants={fadeInUp}
            >
              Оставьте заявку и мы свяжемся в течение 24 часов
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeInUp}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="rounded-full text-lg h-14 px-10">
                  <Mail className="w-5 h-5 mr-2" />
                  Оставить заявку
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="rounded-full text-lg h-14 px-10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Telegram
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-foreground text-background/60 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container px-6 text-center">
          <p>© 2024 Plooza. Партнёрская программа для хостинг-провайдеров.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default ForProvidersPage;

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
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Floating orbs */}
          <motion.div 
            className="absolute top-20 left-[10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"
            animate={{ 
              y: [0, 40, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-3xl"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        <div className="container relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
          >
            <motion.span 
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-white/90 text-sm font-medium">Открыта регистрация партнёров</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Размещайте
            </motion.span>
            <motion.span 
              className="text-white/50 block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              тарифы
            </motion.span>
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              в Plooza
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Маркетплейс хостинг-услуг с 15 000+ активных пользователей.
            <br className="hidden sm:block" />
            Подключение бесплатно. Платите только за результат.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 rounded-full text-lg h-14 px-10 font-semibold shadow-xl shadow-black/20"
              >
                Стать партнёром
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="ghost"
                className="rounded-full text-lg h-14 px-10 text-white border-2 border-white/30 hover:bg-white/10"
                onClick={scrollToContent}
              >
                Узнать больше
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center pt-3 cursor-pointer backdrop-blur-sm"
            onClick={scrollToContent}
            whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.5)" }}
          >
            <motion.div 
              className="w-1.5 h-3 bg-white/60 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
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
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Moving gradient blobs */}
          <motion.div 
            className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, -60, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.line 
              x1="0%" y1="30%" x2="100%" y2="70%"
              stroke="url(#gradient1)" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            <motion.line 
              x1="0%" y1="60%" x2="100%" y2="20%"
              stroke="url(#gradient1)" 
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              4 простых шага
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Как <span className="text-primary">подключиться</span>
            </h2>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-4 gap-8 relative">
              {/* Animated connection line */}
              <motion.div 
                className="absolute top-32 left-[12.5%] right-[12.5%] h-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
                {/* Glowing effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full blur-md opacity-50"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
              
              {[
                { num: '01', icon: FileText, title: 'Заявка', desc: 'Заполните форму на сайте — это займёт всего 2 минуты', color: 'from-blue-500 to-blue-600' },
                { num: '02', icon: Phone, title: 'Созвон', desc: 'Обсудим условия сотрудничества и ответим на вопросы', color: 'from-cyan-500 to-blue-500' },
                { num: '03', icon: Settings, title: 'Интеграция', desc: 'Настроим API или загрузим ваш прайс-лист в систему', color: 'from-violet-500 to-blue-500' },
                { num: '04', icon: Play, title: 'Запуск', desc: 'Ваши услуги появятся в каталоге Plooza', color: 'from-primary to-blue-400' },
              ].map((step, i) => (
                <motion.div 
                  key={step.num}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                >
                  {/* Connector node */}
                  <motion.div 
                    className="absolute top-[7.5rem] left-1/2 -translate-x-1/2 z-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.2, type: "spring" }}
                  >
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-foreground relative">
                      <motion.div 
                        className="absolute inset-0 bg-primary rounded-full"
                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Card */}
                  <motion.div 
                    className="group relative"
                    whileHover={{ y: -12 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Card glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    <div className="relative bg-gradient-to-br from-background/10 to-background/5 backdrop-blur-xl border border-background/20 rounded-3xl p-8 h-full group-hover:border-primary/50 transition-colors">
                      {/* Number badge */}
                      <motion.div 
                        className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 12, scale: 1.1 }}
                      >
                        <span className="text-xl font-bold text-white">{step.num}</span>
                      </motion.div>
                      
                      {/* Icon */}
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-background group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-background/60 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            {/* Tablet Layout */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
              {[
                { num: '01', icon: FileText, title: 'Заявка', desc: 'Заполните форму на сайте — это займёт всего 2 минуты', color: 'from-blue-500 to-blue-600' },
                { num: '02', icon: Phone, title: 'Созвон', desc: 'Обсудим условия сотрудничества и ответим на вопросы', color: 'from-cyan-500 to-blue-500' },
                { num: '03', icon: Settings, title: 'Интеграция', desc: 'Настроим API или загрузим ваш прайс-лист в систему', color: 'from-violet-500 to-blue-500' },
                { num: '04', icon: Play, title: 'Запуск', desc: 'Ваши услуги появятся в каталоге Plooza', color: 'from-primary to-blue-400' },
              ].map((step, i) => (
                <motion.div 
                  key={step.num}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative bg-background/10 backdrop-blur-xl border border-background/20 rounded-3xl p-6 group-hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-primary font-bold">{step.num}</span>
                          <h3 className="text-xl font-bold text-background">{step.title}</h3>
                        </div>
                        <p className="text-background/60 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Layout */}
            <div className="md:hidden space-y-4">
              {[
                { num: '01', icon: FileText, title: 'Заявка', desc: 'Заполните форму — это займёт 2 минуты', color: 'from-blue-500 to-blue-600' },
                { num: '02', icon: Phone, title: 'Созвон', desc: 'Обсудим условия и ответим на вопросы', color: 'from-cyan-500 to-blue-500' },
                { num: '03', icon: Settings, title: 'Интеграция', desc: 'Настроим API или загрузим прайс-лист', color: 'from-violet-500 to-blue-500' },
                { num: '04', icon: Play, title: 'Запуск', desc: 'Услуги появятся в каталоге Plooza', color: 'from-primary to-blue-400' },
              ].map((step, i) => (
                <motion.div 
                  key={step.num}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex gap-4">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      {i < 3 && (
                        <motion.div 
                          className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent mt-2"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          style={{ transformOrigin: "top" }}
                        />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary text-sm font-bold">{step.num}</span>
                        <h3 className="text-lg font-bold text-background">{step.title}</h3>
                      </div>
                      <p className="text-background/60 text-sm">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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

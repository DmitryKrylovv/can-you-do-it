import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ColocationWizard from '@/components/colocation/ColocationWizard';
import { 
  ArrowRight, Building2, Check, Shield, Clock, 
  Zap, Server, Thermometer, Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ColocationPage = () => {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Split Layout */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-500/5 via-background to-background">
          <div className="container py-10 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left - Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-sm text-green-600 font-medium mb-5">
                  <Building2 className="w-4 h-4" />
                  Colocation
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Найдите идеальный
                  <br />
                  <span className="text-green-600">дата-центр</span>
                </h1>
                
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-md">
                  Разместите своё оборудование в надёжных ЦОД по всей России и Европе. Подберём оптимальное решение под ваши задачи.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <Button 
                    size="lg" 
                    className="rounded-xl bg-green-600 hover:bg-green-700"
                    onClick={() => setShowWizard(true)}
                  >
                    Подобрать ЦОД
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-xl">
                    Консультация
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-green-600" />
                    Tier III/IV ЦОД
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-green-600" />
                    SLA 99.99%
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-green-600" />
                    24/7 охрана
                  </div>
                </div>
              </div>

              {/* Right - Blocks */}
              <div className="grid grid-cols-2 gap-3">
                {/* Stats Block */}
                <div className="col-span-2 bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-foreground">50+</div>
                      <div className="text-sm text-muted-foreground">дата-центров</div>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <div className="text-3xl font-bold text-foreground">12</div>
                      <div className="text-sm text-muted-foreground">городов</div>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <div className="text-3xl font-bold text-green-600">от 3000₽</div>
                      <div className="text-sm text-muted-foreground">за 1U/мес</div>
                    </div>
                  </div>
                </div>

                {/* Feature Block 1 */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-4 hover:border-green-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mb-3">
                    <Server className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="font-semibold text-foreground text-sm">Любые стойки</div>
                  <div className="text-xs text-muted-foreground">От 1U до full-rack</div>
                </div>

                {/* Feature Block 2 */}
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-4 hover:border-blue-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="font-semibold text-foreground text-sm">Гибкое питание</div>
                  <div className="text-xs text-muted-foreground">До 20 кВт на стойку</div>
                </div>

                {/* Feature Block 3 */}
                <div className="bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20 rounded-2xl p-4 hover:border-violet-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center mb-3">
                    <Thermometer className="w-5 h-5 text-violet-600" />
                  </div>
                  <div className="font-semibold text-foreground text-sm">Климат-контроль</div>
                  <div className="text-xs text-muted-foreground">Точное охлаждение</div>
                </div>

                {/* Feature Block 4 */}
                <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-2xl p-4 hover:border-amber-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-3">
                    <Lock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="font-semibold text-foreground text-sm">Физическая охрана</div>
                  <div className="text-xs text-muted-foreground">Биометрия + СКУД</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wizard Section */}
        <section className="container py-8 md:py-12">
          <ColocationWizard 
            isOpen={showWizard} 
            onClose={() => setShowWizard(false)} 
          />
          
          {!showWizard && (
            <div className="text-center py-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Подберите дата-центр за 2 минуты
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ответьте на несколько вопросов, и мы подберём оптимальные варианты размещения вашего оборудования
              </p>
              <Button 
                size="lg" 
                className="rounded-xl bg-green-600 hover:bg-green-700"
                onClick={() => setShowWizard(true)}
              >
                Начать подбор
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ColocationPage;

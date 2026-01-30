import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Server, Wrench, User, 
  ArrowRight, ArrowLeft, Check, Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface ColocationWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  { id: 1, title: 'Локация', icon: MapPin, description: 'Выберите регион размещения' },
  { id: 2, title: 'Мощность', icon: Server, description: 'Укажите требования к оборудованию' },
  { id: 3, title: 'Услуги', icon: Wrench, description: 'Дополнительные сервисы' },
  { id: 4, title: 'Контакты', icon: User, description: 'Оставьте заявку' },
];

const locations = [
  { id: 'moscow', name: 'Москва', flag: '🇷🇺', datacenters: 15 },
  { id: 'spb', name: 'Санкт-Петербург', flag: '🇷🇺', datacenters: 8 },
  { id: 'kazan', name: 'Казань', flag: '🇷🇺', datacenters: 3 },
  { id: 'novosibirsk', name: 'Новосибирск', flag: '🇷🇺', datacenters: 4 },
  { id: 'amsterdam', name: 'Амстердам', flag: '🇳🇱', datacenters: 6 },
  { id: 'frankfurt', name: 'Франкфурт', flag: '🇩🇪', datacenters: 8 },
];

const rackSizes = [
  { id: '1u', label: '1U', description: '1 юнит' },
  { id: '2u', label: '2U', description: '2 юнита' },
  { id: '4u', label: '4U', description: '4 юнита' },
  { id: 'quarter', label: '1/4 стойки', description: '10-11 юнитов' },
  { id: 'half', label: '1/2 стойки', description: '20-21 юнит' },
  { id: 'full', label: 'Полная стойка', description: '42 юнита' },
];

const powerOptions = [
  { id: '0.5kw', label: '0.5 кВт' },
  { id: '1kw', label: '1 кВт' },
  { id: '2kw', label: '2 кВт' },
  { id: '5kw', label: '5 кВт' },
  { id: '10kw', label: '10 кВт' },
  { id: 'custom', label: 'Другое' },
];

const services = [
  { id: 'remote-hands', label: 'Remote Hands', description: 'Удалённые руки для работы с оборудованием' },
  { id: 'monitoring', label: 'Мониторинг 24/7', description: 'Круглосуточный мониторинг серверов' },
  { id: 'backup-power', label: 'Резервное питание', description: 'ДГУ и ИБП на случай аварий' },
  { id: 'ddos', label: 'Защита от DDoS', description: 'Фильтрация вредоносного трафика' },
  { id: 'vpn', label: 'VPN-каналы', description: 'Выделенные защищённые каналы' },
  { id: 'crossconnect', label: 'Cross-connect', description: 'Прямые соединения с операторами' },
];

const ColocationWizard = ({ isOpen, onClose }: ColocationWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    rackSize: '',
    power: '',
    services: [] as string[],
    name: '',
    email: '',
    phone: '',
    company: '',
    comment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return !!formData.location;
      case 2: return !!formData.rackSize && !!formData.power;
      case 3: return true;
      case 4: return !!formData.name && !!formData.email && !!formData.phone;
      default: return false;
    }
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Заявка отправлена!
        </h2>
        <p className="text-muted-foreground mb-6">
          Мы свяжемся с вами в течение 2 часов и подберём оптимальные варианты размещения
        </p>
        <Button 
          variant="outline" 
          className="rounded-xl"
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setFormData({
              location: '',
              rackSize: '',
              power: '',
              services: [],
              name: '',
              email: '',
              phone: '',
              company: '',
              comment: '',
            });
            onClose();
          }}
        >
          Закрыть
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Progress Header */}
      <div className="bg-muted/50 p-4 md:p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-foreground">Подбор дата-центра</span>
          </div>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>
        
        {/* Steps */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <div key={step.id} className="flex items-center">
                <div 
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-xl transition-all whitespace-nowrap",
                    isActive && "bg-green-600 text-white",
                    isCompleted && "bg-green-500/20 text-green-600",
                    !isActive && !isCompleted && "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium hidden sm:inline">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "w-6 h-0.5 mx-1",
                    isCompleted ? "bg-green-500" : "bg-border"
                  )} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 min-h-[400px]">
        <AnimatePresence mode="wait">
          {/* Step 1: Location */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Выберите локацию
              </h3>
              <p className="text-muted-foreground mb-6">
                Где вы хотите разместить оборудование?
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setFormData({ ...formData, location: loc.id })}
                    className={cn(
                      "p-4 rounded-xl border-2 text-left transition-all",
                      formData.location === loc.id
                        ? "border-green-600 bg-green-500/10"
                        : "border-border hover:border-green-600/50"
                    )}
                  >
                    <div className="text-2xl mb-2">{loc.flag}</div>
                    <div className="font-medium text-foreground">{loc.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {loc.datacenters} ЦОД
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Capacity */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Требования к размещению
              </h3>
              <p className="text-muted-foreground mb-6">
                Укажите размер и мощность
              </p>
              
              <div className="space-y-6">
                {/* Rack Size */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Размер размещения</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {rackSizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setFormData({ ...formData, rackSize: size.id })}
                        className={cn(
                          "p-3 rounded-xl border-2 text-left transition-all",
                          formData.rackSize === size.id
                            ? "border-green-600 bg-green-500/10"
                            : "border-border hover:border-green-600/50"
                        )}
                      >
                        <div className="font-medium text-foreground">{size.label}</div>
                        <div className="text-xs text-muted-foreground">{size.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Power */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Потребляемая мощность</Label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    {powerOptions.map((power) => (
                      <button
                        key={power.id}
                        onClick={() => setFormData({ ...formData, power: power.id })}
                        className={cn(
                          "p-2 rounded-xl border-2 text-center text-sm transition-all",
                          formData.power === power.id
                            ? "border-green-600 bg-green-500/10"
                            : "border-border hover:border-green-600/50"
                        )}
                      >
                        {power.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Services */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Дополнительные услуги
              </h3>
              <p className="text-muted-foreground mb-6">
                Выберите нужные сервисы (опционально)
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={cn(
                      "flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                      formData.services.includes(service.id)
                        ? "border-green-600 bg-green-500/10"
                        : "border-border hover:border-green-600/50"
                    )}
                  >
                    <Checkbox
                      checked={formData.services.includes(service.id)}
                      onCheckedChange={() => toggleService(service.id)}
                      className="mt-0.5"
                    />
                    <div>
                      <div className="font-medium text-foreground">{service.label}</div>
                      <div className="text-xs text-muted-foreground">{service.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Contacts */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Контактные данные
              </h3>
              <p className="text-muted-foreground mb-6">
                Мы свяжемся с вами для уточнения деталей
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Компания</Label>
                  <Input
                    id="company"
                    placeholder="Название компании"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Input
                    id="comment"
                    placeholder="Дополнительная информация"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="bg-muted/50 p-4 md:p-6 border-t border-border flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 1}
          className="rounded-xl"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Button>
        
        {currentStep < 4 ? (
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="rounded-xl bg-green-600 hover:bg-green-700"
          >
            Далее
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canProceed()}
            className="rounded-xl bg-green-600 hover:bg-green-700"
          >
            Отправить заявку
            <Check className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ColocationWizard;

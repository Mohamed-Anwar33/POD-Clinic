import { Button } from '@/components/ui/button';
import { Calendar, Shield, Users } from 'lucide-react';
import fit3dService from '@/assets/image services/Fit3D Body Composition Test.png';
import rmrService from '@/assets/image services/Resting Metabolic Rate Test.webp';
import vo2maxService from '@/assets/image services/VO2max.avif';
import heroBg from '@/assets/hero-image.jpg';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  
  // Auto-rotating hero images (no controls)
  const slides = useMemo(() => [fit3dService, rmrService, vo2maxService], []);
  const [slideIndex, setSlideIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides]);

  // Parallax scroll effect for background
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center bg-pattern-luxury floating-shapes relative overflow-hidden ${dir === 'ltr' ? 'pt-36' : 'pt-36'}`}
      dir={dir}
    >
      {/* Integrated Navigation */}
      <Navigation />
      {/* Spectacular animated background image layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-20 hero-bg-drift mix-blend-soft-light"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            transform: window.innerWidth <= 640 ? 'scale(1.02)' : `translateY(${scrollY * 0.3}px) translateX(${Math.sin(scrollY * 0.01) * 10}px) scale(${1.08 + scrollY * 0.0001})`,
            filter: window.innerWidth <= 640 ? 'brightness(1.02) saturate(1.1)' : `brightness(${1.02 + scrollY * 0.0002}) saturate(${1.1 + scrollY * 0.0001}) hue-rotate(${scrollY * 0.02}deg)`
          }}
          aria-hidden="true"
        />
        {/* Dynamic gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent dark:from-black/60 dark:via-black/40" 
          style={{
            opacity: Math.max(0.4, 1 - scrollY * 0.001),
            background: `linear-gradient(${45 + scrollY * 0.1}deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)`
          }}
          aria-hidden="true" 
        />
        {/* Additional floating particles effect */}
        <div className="absolute inset-0 hero-particles" aria-hidden="true" />
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1200">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-luxury leading-tight" data-aos="fade-up" data-aos-delay="200">
                <span className="text-luxury block">
                  POD Clinic
                </span>
                <span className="text-foreground font-cairo text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl block mt-2">
                  {t('hero.subtitle')}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed font-semibold max-w-2xl mx-auto lg:mx-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-card border border-primary/10" data-aos="fade-up" data-aos-delay="400">
                {t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="600">
              <Button size="lg" className="btn-cheerful shadow-luxury text-base sm:text-lg w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
                {t('common.book_appointment')}
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-smooth text-base sm:text-lg font-semibold backdrop-blur-sm bg-white/20 w-full sm:w-auto" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('common.see_services')}
              </Button>
            </div>

            {/* Features - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 pt-8 lg:pt-12" data-aos="fade-up" data-aos-delay="800">
              <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-primary/10 shadow-card" data-aos="zoom-in" data-aos-delay="900">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full gradient-luxury flex items-center justify-center shadow-glow flex-shrink-0">
                  <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm lg:text-lg leading-tight">{t('hero.feature_accuracy.title')}</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-tight">{t('hero.feature_accuracy.text')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-primary/10 shadow-card" data-aos="zoom-in" data-aos-delay="1000">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full gradient-luxury flex items-center justify-center shadow-glow flex-shrink-0">
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm lg:text-lg leading-tight">{t('hero.feature_experts.title')}</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-tight">{t('hero.feature_experts.text')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-primary/10 shadow-card sm:col-span-2 lg:col-span-1" data-aos="zoom-in" data-aos-delay="1100">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full gradient-luxury flex items-center justify-center shadow-glow flex-shrink-0">
                  <Calendar className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm lg:text-lg leading-tight">{t('hero.feature_flexible.title')}</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-tight">{t('hero.feature_flexible.text')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image - Auto slideshow - Mobile Optimized */}
          <div className="relative order-first lg:order-last" data-aos="fade-left" data-aos-duration="1200">
            <div className="relative z-10 h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-2xl lg:rounded-3xl overflow-hidden border border-primary/20 shadow-luxury bg-white/60 dark:bg-black/30">
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={t('hero.image_alt')}
                  className={`absolute inset-1 sm:inset-2 w-[calc(100%-0.5rem)] sm:w-[calc(100%-1rem)] h-[calc(100%-0.5rem)] sm:h-[calc(100%-1rem)] object-contain transition-opacity duration-1000 ease-in-out ${i === slideIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              
              {/* Logo Overlay */}
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl p-2 border border-primary/20 shadow-lg">
                <img 
                  src="/logo pod.png" 
                  alt="POD Clinic Logo" 
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </div>
              
              {/* subtle overlay for premium feel */}
              {/* overlay removed to avoid obscuring image edges */}
            </div>
            {/* Luxury Background decorations - Hidden on mobile for performance */}
            <div className="hidden lg:block absolute -top-8 -right-8 w-full h-full gradient-premium rounded-3xl -z-10"></div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-4/5 h-4/5 gradient-luxury rounded-3xl opacity-30 -z-20"></div>
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl -z-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#services', label: t('nav.services') },
    { href: '#about', label: t('nav.about') },
    { href: '#testimonials', label: t('nav.testimonials') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const next = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(next);
    try { localStorage.setItem('lng', next); } catch {}
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={
        `fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-white/60 dark:bg-black/40 backdrop-blur-2xl border-b border-primary/20 shadow-luxury'
            : 'bg-transparent backdrop-blur-0 border-b-0 shadow-none'
        }`
      }
      dir={dir}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <img 
                src="/logo pod.png" 
                alt="POD Clinic Logo" 
                className="h-20 md:h-24 w-auto object-contain drop-shadow-xl brightness-110 contrast-110 [filter:drop-shadow(0_8px_28px_rgba(0,0,0,0.35))] hover:brightness-125 transition-all duration-300"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/90 hover:text-primary transition-smooth font-semibold text-lg relative after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex btn-cheerful shadow-luxury" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Phone className="w-4 h-4 ml-2" />
              {t('nav.book_now')}
            </Button>

            {/* Language Toggle */}
            <Button variant="outline" size="sm" onClick={toggleLanguage} className="border-primary/30 bg-white/40 backdrop-blur">
              {i18n.language === 'ar' ? 'EN' : 'عربي'}
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={dir === 'rtl' ? 'right' : 'left'} className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-smooth"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button className="mt-8 btn-cheerful shadow-luxury" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }}>
                    <Phone className="w-4 h-4 ml-2" />
                    {t('nav.book_now')}
                  </Button>
                  <Button variant="outline" onClick={toggleLanguage}>
                    {i18n.language === 'ar' ? 'EN' : 'عربي'}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
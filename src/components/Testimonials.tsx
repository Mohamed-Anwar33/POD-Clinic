import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  const testimonials = useMemo(() => (
    (t('testimonials.items', { returnObjects: true }) as Array<any>).map((item, idx) => ({
      id: idx + 1,
      rating: 5,
      ...item,
    }))
  ), [t]);

  // Carousel state
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials]);

  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/20 bg-pattern-dots relative overflow-hidden floating-shapes" dir={dir}>
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t('testimonials.title1')} </span>
            <span className="gradient-primary bg-clip-text text-transparent">{t('testimonials.title2')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Slide */}
          {testimonials.length > 0 && (
            <Card key={testimonials[index].id} className="p-8 md:p-10 card-hover border-0 shadow-premium bg-white/80 backdrop-blur-xl ring-1 ring-[#437E7B]/20">
              <CardContent className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1 justify-center">
                  {renderStars(testimonials[index].rating)}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-medium">
                  "{testimonials[index].text}"
                </p>

                {/* User */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t">
                  <Avatar className="w-14 h-14 shadow-md">
                    <AvatarFallback className="gradient-primary text-white font-semibold">
                      {testimonials[index].initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground text-lg">{testimonials[index].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[index].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Controls */}
          <button aria-label={i18n.language === 'ar' ? 'السابق' : 'Previous'} onClick={prev} className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg border border-[#437E7B]/20 transition">
            <ChevronLeft className="w-5 h-5 text-[#437E7B]" />
          </button>
          <button aria-label={i18n.language === 'ar' ? 'التالي' : 'Next'} onClick={next} className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg border border-[#437E7B]/20 transition">
            <ChevronRight className="w-5 h-5 text-[#437E7B]" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`slide-${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-[#437E7B]' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Testimonials;
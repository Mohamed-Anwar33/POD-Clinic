import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import vo2maxImage from '@/assets/image services/VO2max.avif';
import rmrImage from '@/assets/image services/Resting Metabolic Rate Test.webp';
import fit3dImage from '@/assets/image services/Fit3D Body Composition Test.png';

const Services = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const services = [
    {
      id: 1,
      titleAr: "قياس Vo2max الأستهلاك الأقصى للأكسجين",
      titleEn: "Vo2max Test",
      descriptionAr: "اختبار متقدم لقياس الحد الأقصى لاستهلاك الأكسجين وتحديد مستوى اللياقة القلبية التنفسية",
      descriptionEn: "Advanced test to measure maximum oxygen consumption and determine cardiovascular fitness level",
      image: vo2maxImage,
      featuresAr: [
        "قياس دقيق للأداء القلبي التنفسي",
        "تحديد مناطق التدريب المثلى",
        "تقرير مفصل مع التوصيات"
      ],
      featuresEn: [
        "Accurate cardiovascular performance measurement",
        "Optimal training zones identification",
        "Detailed report with recommendations"
      ],
      icon: <Award className="w-8 h-8" />,
      popular: false
    },
    {
      id: 2,
      titleAr: "قياس RMR الأيض خلال الراحة",
      titleEn: "Resting Metabolic Rate Test - RMR",
      descriptionAr: "قياس معدل الأيض الأساسي لتحديد احتياجاتك اليومية من السعرات الحرارية بدقة علمية",
      descriptionEn: "Measure your basal metabolic rate to determine your daily caloric needs with scientific precision",
      image: rmrImage,
      featuresAr: [
        "قياس دقيق لمعدل الأيض الأساسي",
        "تحديد احتياجات السعرات اليومية",
        "خطة غذائية مخصصة"
      ],
      featuresEn: [
        "Accurate basal metabolic rate measurement",
        "Daily caloric needs determination",
        "Personalized nutrition plan"
      ],
      icon: <Clock className="w-8 h-8" />,
      popular: true
    },
    {
      id: 3,
      titleAr: "قياس مكونات الجسم ثلاثي الأبعاد Fit3D",
      titleEn: "Fit3D Test",
      descriptionAr: "مسح ثلاثي الأبعاد متطور لتحليل مكونات الجسم وقياس التغيرات بدقة عالية",
      descriptionEn: "Advanced 3D body scanning for precise body composition analysis and progress tracking",
      image: fit3dImage,
      featuresAr: [
        "مسح ثلاثي الأبعاد للجسم",
        "قياس دقيق لنسب الدهون والعضلات",
        "متابعة التطور بصرياً"
      ],
      featuresEn: [
        "3D body scanning technology",
        "Precise fat and muscle ratio measurement",
        "Visual progress tracking"
      ],
      icon: <Users className="w-8 h-8" />,
      popular: false
    },
    {
      id: 4,
      titleAr: "باقة كل الاختبارات",
      titleEn: "All Tests Package",
      descriptionAr: "احصل على تقييم شامل لحالتك الصحية واللياقية مع جميع الاختبارات المتقدمة في باقة واحدة مميزة",
      descriptionEn: "Get a comprehensive health and fitness assessment with all advanced tests in one premium package",
      image: vo2maxImage, // Using vo2max as placeholder for package
      featuresAr: [
        "جميع الاختبارات الثلاثة",
        "تقرير شامل ومفصل"
      ],
      featuresEn: [
        "All three tests included",
        "Comprehensive detailed report"
      ],
      icon: <Package className="w-8 h-8" />,
      popular: true,
      isPackage: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-pattern-grid relative overflow-hidden" dir={dir}>
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img 
          src="/logo pod.png" 
          alt="POD Clinic Background" 
          className="w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] object-contain opacity-5 transform rotate-12 scale-150"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-luxury mb-8 text-luxury" data-aos="fade-up" data-aos-delay="200">
            {i18n.language === 'ar' ? 'خدماتنا المتقدمة' : 'Our Advanced Services'}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="400">
            {i18n.language === 'ar' 
              ? 'اكتشف مستوى جديد من التقييم الصحي واللياقي مع أحدث التقنيات العالمية'
              : 'Discover a new level of health and fitness assessment with the latest global technologies'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => (
            <Card key={service.id} className={`
              group relative overflow-hidden card-hover
              bg-white/90 backdrop-blur-xl border-0 shadow-luxury
              transform transition-all duration-500 hover:scale-105
            `} data-aos="fade-up" data-aos-delay={`${600 + index * 200}`}>
              
              {/* Full Image Display */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={i18n.language === 'ar' ? service.titleAr : service.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#437E7B] mb-2 font-cairo">
                    {i18n.language === 'ar' ? service.titleAr : service.titleEn}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  {i18n.language === 'ar' ? service.descriptionAr : service.descriptionEn}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {(i18n.language === 'ar' ? service.featuresAr : service.featuresEn).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#437E7B] to-[#437E7B]/70"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-[#437E7B] to-[#437E7B]/80 hover:from-[#437E7B]/90 hover:to-[#437E7B] text-white py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
                  {i18n.language === 'ar' ? 'احجز الآن' : 'Book Now'}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Package Service - Full Width */}
        {services.slice(3).map((service) => (
          <Card
            key={service.id}
            className={`relative overflow-hidden card-hover mb-12 bg-white/90 backdrop-blur-xl border-0 shadow-luxury transform transition-all duration-500 hover:scale-[1.02]`}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            
            
            <div className="flex flex-col lg:flex-row">
              {/* Package Image */}
              <div className="lg:w-1/2 h-96 lg:h-auto relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={i18n.language === 'ar' ? service.titleAr : service.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent lg:bg-gradient-to-t lg:from-black/60 lg:via-transparent lg:to-transparent"></div>
                
                
              </div>

              {/* Package Content */}
              <div className="lg:w-1/2 p-12">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-[#437E7B] mb-4 font-cairo">
                    {i18n.language === 'ar' ? service.titleAr : service.titleEn}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  {i18n.language === 'ar' ? service.descriptionAr : service.descriptionEn}
                </p>

                {/* Package Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {(i18n.language === 'ar' ? service.featuresAr : service.featuresEn).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#437E7B] to-[#437E7B]/70"></div>
                      <span className="text-gray-700 font-medium text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-gradient-to-r from-[#437E7B] to-[#437E7B]/80 hover:from-[#437E7B]/90 hover:to-[#437E7B] text-white py-6 rounded-xl text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
                  {i18n.language === 'ar' ? 'احجز الباقة الكاملة' : 'Book Complete Package'}
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-br from-[#437E7B]/10 to-[#437E7B]/5 rounded-3xl p-12 bg-white/90 backdrop-blur-xl border border-[#437E7B]/20 shadow-luxury" data-aos="zoom-in" data-aos-delay="600">
            <h3 className="text-3xl md:text-4xl font-luxury mb-6 text-[#437E7B]">
              {i18n.language === 'ar' ? 'ابدأ رحلتك نحو الصحة المثلى' : 'Start Your Journey to Optimal Health'}
            </h3>
            <p className="text-gray-600 mb-8 text-xl font-medium max-w-2xl mx-auto">
              {i18n.language === 'ar' 
                ? 'احجز استشارتك اليوم واكتشف الخدمة المناسبة لأهدافك الصحية'
                : 'Book your consultation today and discover the right service for your health goals'
              }
            </p>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-[#437E7B] to-[#437E7B]/80 hover:from-[#437E7B]/90 hover:to-[#437E7B] text-white px-12 py-4 rounded-xl text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
              {i18n.language === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
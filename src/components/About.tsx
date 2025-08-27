import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '500+', label: t('about.stats.happy_clients') },
    { icon: <Award className="w-6 h-6" />, number: '3', label: t('about.stats.years_experience') },
    { icon: <Clock className="w-6 h-6" />, number: '1000+', label: t('about.stats.tests_done') },
    { icon: <Target className="w-6 h-6" />, number: '100%', label: t('about.stats.accuracy') },
  ];

  const qualifications = [
    t('about.qualifications.0'),
    t('about.qualifications.1'),
    t('about.qualifications.2'),
    t('about.qualifications.3'),
    t('about.qualifications.4'),
  ];

  return (
    <section id="about" className="py-20 bg-background bg-pattern-luxury relative overflow-hidden floating-shapes" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-primary bg-clip-text text-transparent font-luxury drop-shadow">{t('about.title')}</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t('about.p1', { brand: 'POD Clinic' })}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
              </div>
            </div>

            
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 card-hover border border-primary/10 backdrop-blur-sm bg-white/70">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1 text-luxury">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 gradient-primary text-white card-hover border-0 shadow-premium">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{t('about.mission.title')}</h3>
                <p className="text-white/90 leading-relaxed">{t('about.mission.text')}</p>
              </CardContent>
            </Card>

            <Card className="p-8 gradient-vision text-white card-hover border-0 shadow-premium">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('about.vision.title')}</h3>
                <p className="text-white font-semibold leading-relaxed">{t('about.vision.text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
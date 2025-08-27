import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  Mail
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  // Controlled form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const serviceOptions = (t('contact.form.service_options', { returnObjects: true }) as string[]) || [];
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const contactInfo = (t('contact.info.methods', { returnObjects: true }) as Array<any>).map((m: any) => ({
    ...m,
    icon: m.title === t('contact.info.methods.0.title') ? (
      <Phone className="w-6 h-6" />
    ) : m.title === t('contact.info.methods.1.title') ? (
      <MessageCircle className="w-6 h-6" />
    ) : (
      <MapPin className="w-6 h-6" />
    ),
  }));

  const workingHours = t('contact.info.hours', { returnObjects: true }) as Array<{ day: string; hours: string }>;

  return (
    <section id="contact" className="py-20 bg-background bg-pattern-grid relative overflow-hidden floating-shapes" dir={dir}>
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent font-luxury">{t('contact.title1')}</span>
            <span className="text-foreground font-luxury"> {t('contact.title2')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <Card className="p-8 card-hover border border-primary/10 backdrop-blur-sm bg-white/70">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl gradient-primary bg-clip-text text-transparent">
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (submitting) return;
                    // basic validation
                    const isAr = i18n.language === 'ar';
                    const phoneDigits = phone.replace(/\D/g, '');
                    const validPhone = /^(?:966?5|05|5)\d{8}$/.test(phoneDigits);
                    if (!name.trim() || !phone.trim()) {
                      toast({
                        description: isAr ? 'يرجى إدخال الاسم ورقم الهاتف' : 'Please enter your name and phone number',
                      });
                      return;
                    }
                    if (!validPhone) {
                      toast({ description: isAr ? 'رقم الهاتف غير صحيح (السعودية)' : 'Invalid KSA phone number' });
                      return;
                    }
                    setSubmitting(true);
                    try {
                      // Example action: open WhatsApp with prefilled message
                      const text = encodeURIComponent(
                        `${isAr ? 'طلب تواصل' : 'Contact Request'}\n` +
                        `${isAr ? 'الاسم' : 'Name'}: ${name}\n` +
                        `${isAr ? 'الهاتف' : 'Phone'}: ${phone}\n` +
                        `${isAr ? 'البريد' : 'Email'}: ${email || '-'}\n` +
                        `${isAr ? 'الخدمة' : 'Service'}: ${selectedService || '-'}\n` +
                        `${isAr ? 'الرسالة' : 'Message'}: ${message || '-'}\n`
                      );
                      window.open(`https://wa.me/966501234567?text=${text}`, '_blank');
                      toast({ description: isAr ? 'تم إرسال طلبك عبر واتساب' : 'Your request was opened in WhatsApp' });
                      // reset form
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                      setSelectedService(null);
                    } catch (err) {
                      toast({ description: isAr ? 'حدث خطأ أثناء الإرسال' : 'Something went wrong while sending' });
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  aria-labelledby="contact-form-title"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="name">{t('contact.form.name_label')}</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t('contact.form.name_placeholder')}
                        className="h-12"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="phone">{t('contact.form.phone_label')}</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        placeholder={t('contact.form.phone_placeholder')}
                        className="h-12"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">{t('contact.form.email_label')}</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('contact.form.email_placeholder')}
                      className="h-12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t('contact.form.service_label')}</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((opt, i) => (
                        <Badge
                          key={i}
                          variant={selectedService === opt ? 'default' : 'outline'}
                          className={`cursor-pointer transition-smooth ${selectedService === opt ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                          onClick={() => setSelectedService(selectedService === opt ? null : opt)}
                          role="button"
                          aria-pressed={selectedService === opt}
                          aria-label={`service-${opt}`}
                        >
                          {opt}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="message">{t('contact.form.message_label')}</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t('contact.form.message_placeholder')}
                      className="min-h-[120px] resize-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button className="w-full gradient-primary text-white disabled:opacity-70" size="lg" type="submit" disabled={submitting} aria-busy={submitting} aria-live="polite">
                    <Send className="w-5 h-5 ml-2" />
                    {submitting ? (i18n.language === 'ar' ? 'جاري الإرسال...' : 'Sending...') : t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Hours */}
          <div className="space-y-6" data-aos="fade-left">
            
            {/* Contact Methods */}
            <Card className="p-6 card-hover border border-primary/10 backdrop-blur-sm bg-white/70">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">{t('contact.info.title')}</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <h3 className="font-semibold">{info.title}</h3>
                    </div>
                    <div className="mr-13">
                      {info.details.map((detail: string, idx: number) => (
                        <p key={idx} className="text-muted-foreground">
                          {info.action ? (
                            <a 
                              href={info.action}
                              className="hover:text-primary transition-smooth"
                              target={info.action?.startsWith('http') ? '_blank' : undefined}
                              rel={info.action?.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="p-6 card-hover border border-primary/10 backdrop-blur-sm bg-white/70">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {t('contact.info.hours_title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 gradient-primary text-white card-hover shadow-premium">
              <CardContent className="px-0 space-y-4">
                <h3 className="text-xl font-bold">{t('contact.info.quick_title')}</h3>
                <p className="text-white/90 text-sm">{t('contact.info.quick_sub')}</p>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
                    onClick={() => { window.location.href = 'tel:+966123456789'; }}
                  >
                    <Phone className="w-4 h-4 ml-2" />
                    {t('contact.info.call_now')}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
                    onClick={() => { window.open('https://wa.me/966501234567', '_blank'); }}
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    {t('contact.info.whatsapp')}
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              {t('contact.bottom.title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('contact.bottom.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => { window.open('https://wa.me/966501234567', '_blank'); }}
              >
                <Calendar className="w-5 h-5 ml-2" />
                {t('contact.bottom.consult')}
              </Button>
              <Button 
                size="lg" 
                className="gradient-primary text-white"
                onClick={() => { window.location.href = 'mailto:booking@podclinic.sa'; }}
              >
                <Mail className="w-5 h-5 ml-2" />
                {t('contact.bottom.email')}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
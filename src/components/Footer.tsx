import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  Linkedin
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden" dir={dir}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(67,126,123,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Teal accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#437E7B] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12" data-aos="fade-up">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left" data-aos="fade-right" data-aos-delay="200">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img 
                  src="/logo pod.png" 
                  alt="POD Clinic Logo" 
                  className="h-12 sm:h-16 w-auto object-contain"
                />
              </button>
              <h3 className="text-xl sm:text-2xl font-bold text-white">POD Clinic</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              {t('footer.desc')}
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#437E7B] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 relative">
              {t('footer.quick_links')}
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:transform-none w-12 h-0.5 bg-[#437E7B]"></div>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#437E7B] transition-colors duration-300 flex items-center justify-center sm:justify-start group text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-[#437E7B] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="600">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 relative">
              {t('footer.contact_info')}
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:transform-none w-12 h-0.5 bg-[#437E7B]"></div>
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#437E7B] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <p className="hover:text-white transition-colors">+965 2234 5678</p>
                  <p className="hover:text-white transition-colors">+965 9012 3456</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#437E7B] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <p className="hover:text-white transition-colors">info@podclinic.kw</p>
                  <p className="hover:text-white transition-colors">booking@podclinic.kw</p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#437E7B] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <p className="hover:text-white transition-colors">الكويت، دولة الكويت</p>
                  <p className="hover:text-white transition-colors">حولي، شارع سالم المبارك</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours & CTA */}
          <div className="text-center sm:text-left" data-aos="fade-left" data-aos-delay="800">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 relative">
              ساعات العمل
              <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:transform-none w-12 h-0.5 bg-[#437E7B]"></div>
            </h4>
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#437E7B] flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>السبت - الخميس: 8:00 ص - 10:00 م</p>
                  <p>الجمعة: 2:00 م - 10:00 م</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2 sm:space-y-3">
              <button 
                onClick={() => window.location.href = 'tel:+96522345678'}
                className="w-full bg-[#437E7B] hover:bg-[#437E7B]/90 text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                اتصل الآن
              </button>
              <button 
                onClick={() => window.open('https://wa.me/96590123456', '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4" />
                واتساب
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8" data-aos="fade-up" data-aos-delay="1000">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} POD Clinic. جميع الحقوق محفوظة.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-[#437E7B] transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-[#437E7B] transition-colors">الشروط والأحكام</a>
              <a href="#" className="hover:text-[#437E7B] transition-colors">اتصل بنا</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FloatingWhatsApp = () => {
  const { i18n } = useTranslation();
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const handleClick = () => {
    const text = encodeURIComponent(i18n.language === 'ar' ? 'مرحباً، أود الاستفسار.' : 'Hello, I have an inquiry.');
    window.open(`https://wa.me/966501234567?text=${text}`, '_blank');
  };

  return (
    <div
      dir={dir}
      className={`fixed z-[60] ${dir === 'rtl' ? 'right-4 sm:right-6' : 'left-4 sm:left-6'} bottom-4 sm:bottom-6 group`}
      aria-live="polite"
    >
      {/* Outer pulse rings */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <span className="fab-ring"></span>
        <span className="fab-ring fab-ring-delay"></span>
      </div>

      {/* Orbiting dot */}
      <span className="fab-orbit" aria-hidden></span>

      {/* Main FAB */}
      <button
        onClick={handleClick}
        className="whatsapp-fab"
        aria-label={i18n.language === 'ar' ? 'تواصل واتساب' : 'WhatsApp Chat'}
      >
        <div className="absolute inset-0 fab-sheen" aria-hidden></div>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow" />
      </button>

      {/* Tiny tooltip */}
      <div className={`pointer-events-none opacity-0 group-hover:opacity-100 transition-smooth ${dir === 'rtl' ? 'mr-3 right-full' : 'ml-3 left-full'} absolute top-1/2 -translate-y-1/2`}
        role="tooltip"
      >
        <div className="px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-black/80 text-white shadow-soft whitespace-nowrap">
          {i18n.language === 'ar' ? 'تواصل معنا على واتساب' : 'Chat with us on WhatsApp'}
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;

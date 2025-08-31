import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { useLanguage, Language } from './LanguageContext';
import { Globe, ChevronDown, Sparkles } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isAutoDetected, setIsAutoDetected] = useState(false);

  // Check if language was auto-detected (no stored preference)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('sage-language');
      setIsAutoDetected(!storedLanguage);
    }
  }, []);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'he', name: 'עברית', flag: '🇮🇱' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
    { code: 'ti', name: 'ትግርኛ', flag: '🇪🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'ka', name: 'ქართული', flag: '🇬🇪' },
    { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
    setIsAutoDetected(false); // User made a manual selection
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-6 z-50 ${isRTL ? 'left-6' : 'right-6'}`}
    >
      {/* Auto-detection welcome popup */}
      <AnimatePresence>
        {isAutoDetected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onAnimationComplete={() => {
              // Auto-hide the popup after 5 seconds
              setTimeout(() => setIsAutoDetected(false), 5000);
            }}
            transition={{ duration: 0.4, delay: 1.5 }}
            className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-full mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-secondary/20 p-3 max-w-[250px] pointer-events-none z-[60]`}
          >
            <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              </motion.div>
              <div className="text-xs text-secondary">
                <div className="font-medium">Language detected!</div>
                <div className="opacity-75">We set {currentLanguage?.name} based on your browser. You can change it anytime.</div>
              </div>
            </div>
            {/* Small arrow pointing to button */}
            <div className={`absolute top-[-4px] ${isRTL ? 'left-4' : 'right-4'} w-2 h-2 bg-white/95 border-l border-t border-secondary/20 transform rotate-45`} />
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative">
        {/* Main Language Button */}
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            bg-white/90 backdrop-blur-md border border-primary/20 shadow-2xl rounded-full 
            px-3 py-2 h-auto transition-all duration-300 hover:bg-primary/5 max-w-[240px]
            ${isOpen ? 'bg-primary/10' : ''}
          `}
        >
          <div className="flex items-center">
            <Globe className="w-4 h-4 text-primary mr-2" />
            {isAutoDetected && (
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 720]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mr-1"
              >
                <Sparkles className="w-3 h-3 text-secondary" />
              </motion.div>
            )}
          </div>
          <span className="text-sm font-medium text-primary language-button-text overflow-hidden">
            <span className="flex items-center gap-1">
              <span>{currentLanguage?.flag}</span>
              <span className="truncate">{currentLanguage?.name}</span>
              {isAutoDetected && (
                <span className="text-xs text-secondary opacity-75 flex-shrink-0">
                  (Auto)
                </span>
              )}
            </span>
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-2"
          >
            <ChevronDown className="w-4 h-4 text-primary" />
          </motion.div>
        </Button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`
                absolute top-full mt-2 w-[260px] sm:w-[280px] bg-white/95 backdrop-blur-md 
                rounded-2xl border border-primary/20 py-2 z-50 max-h-[400px] 
                language-dropdown-scrollbar language-dropdown-container language-dropdown-enhanced-shadow
                ${isRTL ? 'left-0' : 'right-0'}
              `}
              style={{
                maxWidth: 'min(280px, calc(100vw - 3rem))',
                minWidth: '240px'
              }}
            >
              {/* Auto-detection notice */}
              {isAutoDetected && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-3 py-2 mb-2 mx-2 bg-secondary/10 rounded-xl text-xs text-secondary flex items-center"
                >
                  <Sparkles className="w-3 h-3 mr-2 flex-shrink-0" />
                  <span className="language-button-text text-xs leading-tight">
                    Language auto-detected from your browser
                  </span>
                </motion.div>
              )}
              {languages.map((lang, index) => (
                <motion.div 
                  key={lang.code}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1, delay: index * 0.02 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`
                      w-full justify-start px-3 py-2.5 rounded-xl mx-2 mb-1 transition-all duration-200
                      flex items-center gap-2 text-left min-h-[40px] overflow-hidden
                      language-button-hover-effect language-dropdown-item
                      ${language === lang.code 
                        ? 'bg-primary text-white shadow-md transform scale-[0.98]' 
                        : 'text-primary hover:bg-primary/10 hover:transform hover:scale-[1.02]'
                      }
                    `}
                    dir={['he', 'ar'].includes(lang.code) ? 'rtl' : 'ltr'}
                  >
                    <span className="text-sm flex-shrink-0" role="img" aria-label={`${lang.name} flag`}>
                      {lang.flag}
                    </span>
                    <span className="font-medium text-sm language-button-text flex-1 min-w-0">
                      {lang.name}
                    </span>
                    {language === lang.code && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="w-2 h-2 bg-white rounded-full flex-shrink-0"
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay to close dropdown */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </motion.div>
  );
}
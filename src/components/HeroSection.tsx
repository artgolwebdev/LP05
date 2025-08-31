import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Leaf, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function HeroSection() {
  const { t, isRTL, language } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1648233750012-52148f08f07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWdlJTIwaGVyYiUyMGZyZXNoJTIwZ3JlZW58ZW58MXx8fHwxNzU2NTg4MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0
            }}
            animate={{
              y: [null, -20, 0, -10, 0],
              x: [null, Math.random() * 50 - 25, Math.random() * 30 - 15],
              scale: [0, 1, 0.8, 1, 0.7],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <div className={`w-2 h-2 rounded-full ${
              Math.random() > 0.5 ? 'bg-primary/30' : 'bg-secondary/30'
            }`} />
          </motion.div>
        ))}
      </div>

      {/* Floating Sage Leaves Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
              rotate: 0,
              scale: Math.random() * 0.3 + 0.2
            }}
            animate={{ 
              y: -100,
              rotate: 360,
              x: [null, Math.random() * 200 - 100]
            }}
            transition={{
              duration: Math.random() * 20 + 25,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          >
            <Leaf size={Math.random() * 50 + 30} />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Premium Quality Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-8 px-8 py-4 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-md"
        >
          <motion.span 
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary font-black text-sm sm:text-base lg:text-xl tracking-wider"
            dir={isRTL ? 'rtl' : 'ltr'}
            lang={language}
          >
            {t.hero.badge}
          </motion.span>
        </motion.div>

        {/* Main title with enhanced typography */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground mb-4 sm:mb-6 leading-none tracking-tight relative font-display"
          dir={isRTL ? 'rtl' : 'ltr'}
          lang={language}
        >
          {t.hero.title.split('').map((letter, index) => {
            const letterDelay = 0.5 + index * 0.15;
            const isEvenLetter = index % 2 === 0;
            
            return (
              <motion.span
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: isEvenLetter ? 150 : -150,
                  x: isEvenLetter ? -50 : 50,
                  rotateX: -180,
                  rotateY: isEvenLetter ? -45 : 45,
                  rotateZ: isEvenLetter ? -30 : 30,
                  scale: 0.3
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: 0,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                  scale: 1
                }}
                transition={{
                  duration: 1.2,
                  delay: letterDelay,
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  mass: 0.8
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotateY: isEvenLetter ? 15 : -15,
                  rotateX: 10,
                  y: -10,
                  color: 'var(--primary)',
                  transition: { duration: 0.3, type: "spring", stiffness: 400 }
                }}
                className="inline-block cursor-pointer relative artistic-letter"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.h1>
        
        {/* Subtitle with enhanced typography */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-heading"
          dir={isRTL ? 'rtl' : 'ltr'}
          lang={language}
        >
          <motion.span
            className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            animate={{
              backgroundSize: ['200% 200%', '300% 300%', '200% 200%']
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {t.hero.subtitle.split('\n').map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </motion.span>
        </motion.h2>

        {/* Description with improved typography */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-base sm:text-lg lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-muted-foreground leading-relaxed font-body"
          dir={isRTL ? 'rtl' : 'ltr'}
          lang={language}
        >
          {t.hero.description}
        </motion.p>

        {/* Action buttons with smooth scroll functionality */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 h-auto transform transition-all duration-300 shadow-2xl font-black relative overflow-hidden group"
              dir={isRTL ? 'rtl' : 'ltr'}
              lang={language}
              onClick={() => scrollToSection('cta-section')}
            >
              <span className="relative z-10 flex items-center">
                {t.hero.shopNow}
                <motion.div
                  animate={{ 
                    x: isRTL ? [-5, 0, -5] : [0, 5, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className={isRTL ? 'mr-2 sm:mr-3' : 'ml-2 sm:ml-3'}
                >
                  <ArrowRight className={`h-5 w-5 sm:h-6 sm:w-6 ${isRTL ? 'rotate-180' : ''}`} />
                </motion.div>
              </span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 h-auto border-2 sm:border-4 border-primary text-primary hover:bg-primary hover:text-white transform transition-all duration-300 font-bold relative overflow-hidden group bg-background/80 backdrop-blur-sm"
              dir={isRTL ? 'rtl' : 'ltr'}
              lang={language}
              onClick={() => scrollToSection('features-section')}
            >
              <motion.div
                className={`absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isRTL ? 'origin-right' : 'origin-left'}`}
              />
              <span className="relative z-10 flex items-center gap-2">
                <span>{t.hero.learnMore}</span>
                <motion.div
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Leaf className="h-4 w-4" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('features-section')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-primary/70 hover:text-primary transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-2 tracking-wider">
            {isRTL ? 'גלול למטה' : 'SCROLL DOWN'}
          </span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
      
      {/* Enhanced decorative elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-2xl"
      />
      
      {/* Additional floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-sm"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
}
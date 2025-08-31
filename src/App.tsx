import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { LoadingAnimation } from './components/LoadingAnimation';
import { HeroSection } from './components/HeroSection';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Leaf, Sparkles, Heart, Hand } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';


function AppContent() {
  const { t, isRTL, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingAnimation />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className={`min-h-screen bg-background ${
          (language === 'am' || language === 'ti') ? 'font-geez' : 
          language === 'ar' ? 'font-arabic' : 
          (language === 'ru' || language === 'uk') ? 'font-cyrillic' : 
          language === 'ka' ? 'font-georgian' :
          (language === 'tl' || language === 'fr' || language === 'es' || language === 'pt' || language === 'de' || language === 'nl' || language === 'ro') ? 'font-latin' :
          ''
        } ${isRTL ? 'rtl-layout' : 'ltr-layout'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
        lang={language}
      >
        <LanguageSwitcher />

        <HeroSection />

        {/* Features Section - Big Blocks */}
        <motion.section 
          id="features-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 lg:mb-20 text-foreground"
              dir={isRTL ? 'rtl' : 'ltr'}
              lang={language}
            >
              {t.features.title}
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 xl:gap-6 justify-items-center">
              {[
                {
                  icon: <Leaf className="h-16 w-16" />,
                  title: t.features.wildHarvested.title,
                  description: t.features.wildHarvested.description,
                  color: "bg-gradient-to-br from-primary to-secondary",
                  textColor: "text-white"
                },
                {
                  icon: <Sparkles className="h-16 w-16" />,
                  title: t.features.energyCleansing.title,
                  description: t.features.energyCleansing.description,
                  color: "bg-gradient-to-br from-secondary to-accent",
                  textColor: "text-white"
                },
                {
                  icon: <Heart className="h-16 w-16" />,
                  title: t.features.mindfulRitual.title,
                  description: t.features.mindfulRitual.description,
                  color: "bg-gradient-to-br from-accent to-primary",
                  textColor: "text-white"
                },
                {
                  icon: <Hand className="h-16 w-16" />,
                  title: t.features.handpickedPerfection.title,
                  description: t.features.handpickedPerfection.description,
                  color: "bg-gradient-to-br from-muted to-primary",
                  textColor: "text-foreground"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5
                  }}
                >
                  <Card className={`${feature.color} ${feature.textColor} border-0 transform transition-all duration-500 shadow-2xl h-80 sm:h-96 hover:shadow-4xl relative overflow-hidden w-full max-w-sm rounded-3xl`}>
                    <CardContent className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center text-center h-full">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-6 sm:mb-8 opacity-90 relative z-10"
                      >
                        {feature.icon}
                      </motion.div>
                      
                      {/* Sage leaf background pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-12 pointer-events-none">
                        <Leaf className="w-full h-full" />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 sm:mb-6" dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
                        {feature.title}
                      </h3>
                      <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-95 font-medium" dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      {/* Product Showcase */}
      <section className="relative py-32 overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1712366895921-78cc465ef900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMHNhZ2UlMjBjb29raW5nJTIwaGVyYnN8ZW58MXx8fHwxNzU2NTg4MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/90" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <motion.div 
              className={`max-w-4xl text-center space-y-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-full font-bold text-sm sm:text-base lg:text-xl" dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
                {t.product.badge}
              </div>
              
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight" 
                dir={isRTL ? 'rtl' : 'ltr'} 
                lang={language}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {t.product.title}
                </motion.span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  {t.product.subtitle}
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-2xl text-muted-foreground leading-relaxed" 
                dir={isRTL ? 'rtl' : 'ltr'} 
                lang={language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {t.product.description}
              </motion.p>
              
              <div className="space-y-8 relative features-container">
                {t.product.features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ 
                      opacity: 0, 
                      x: isRTL ? 100 : -100,
                      y: 50,
                      scale: 0.8,
                      rotateX: -30
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotateX: 0
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      x: isRTL ? -10 : 10,
                      transition: { duration: 0.3 }
                    }}
                    className={`group flex items-center text-base sm:text-lg lg:text-xl ${isRTL ? 'flex-row-reverse text-right' : 'text-left'} relative`} 
                    dir={isRTL ? 'rtl' : 'ltr'} 
                    lang={language}
                  >
                    {/* Enhanced Checkmark with artistic animations */}
                    <motion.div
                      className={`relative ${isRTL ? 'ml-6 order-2' : 'mr-6 order-1'} flex items-center justify-center`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 1,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Animated background circle */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2 + 0.5,
                          type: "spring"
                        }}
                        className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 backdrop-blur-sm"
                      />
                      
                      {/* Pulsing energy ring */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.7, 0.3],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.2 + 1,
                          ease: "easeInOut"
                        }}
                        className="absolute w-16 h-16 rounded-full border-2 border-primary/30"
                      />
                      
                      {/* SVG Checkmark with drawing animation */}
                      <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="z-10 relative"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + 0.7,
                          type: "spring",
                          stiffness: 300
                        }}
                      >
                        <motion.path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary drop-shadow-lg"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.2 + 0.8,
                            ease: "easeInOut"
                          }}
                          viewport={{ once: true }}
                          filter="url(#checkGlow)"
                        />
                        
                        {/* SVG Filter for glow effect */}
                        <defs>
                          <filter id="checkGlow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge> 
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                      </motion.svg>
                      
                      {/* Sparkle particles on checkmark completion */}
                      {[...Array(4)].map((_, sparkleIndex) => (
                        <motion.div
                          key={sparkleIndex}
                          className="absolute w-2 h-2 bg-primary rounded-full"
                          initial={{ 
                            scale: 0, 
                            opacity: 0,
                            x: 0,
                            y: 0
                          }}
                          animate={{ 
                            scale: [0, 1.5, 0], 
                            opacity: [0, 1, 0],
                            x: [0, (sparkleIndex - 1.5) * 20],
                            y: [0, (sparkleIndex % 2 === 0 ? -1 : 1) * 15],
                            rotate: [0, 180 + sparkleIndex * 90]
                          }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.2 + 2 + sparkleIndex * 0.1,
                            repeat: Infinity,
                            repeatDelay: 4,
                            ease: "easeOut"
                          }}
                          style={{
                            filter: 'blur(0.5px)',
                            boxShadow: `0 0 8px rgba(74, 124, 89, 0.6)`
                          }}
                        />
                      ))}
                      
                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ 
                          scale: 2, 
                          opacity: 0.3,
                          boxShadow: "0 0 30px rgba(74, 124, 89, 0.5)"
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background: 'radial-gradient(circle, rgba(74, 124, 89, 0.3) 0%, transparent 70%)'
                        }}
                      />
                    </motion.div>
                    
                    {/* Feature text with enhanced animations */}
                    <motion.span 
                      className={`text-foreground font-semibold leading-relaxed ${isRTL ? 'order-1' : 'order-2'} group-hover:text-primary transition-colors duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.4
                      }}
                      viewport={{ once: true }}
                    >
                      {item.substring(2)}
                    </motion.span>
                    
                    {/* Background accent line */}
                    <motion.div
                      className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1/2 h-0.5 bg-gradient-to-r from-primary/20 to-transparent group-hover:from-primary/40`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2 + 0.6
                      }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Hover magnetic field effect */}
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ 
                        scale: 1.05, 
                        opacity: 0.1,
                        background: 'radial-gradient(ellipse, rgba(74, 124, 89, 0.1) 0%, transparent 70%)'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial/Experience Section - Compact & Artistic */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
        
        {/* Floating Sage Leaves Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          {[...Array(8)].map((_, i) => (
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
              <Leaf size={Math.random() * 30 + 20} />
            </motion.div>
          ))}
        </div>
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          {/* Quote Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl sm:text-8xl font-black text-primary mb-6 leading-none"
          >
            "
          </motion.div>
          
          {/* Quote Text */}
          <motion.blockquote 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-12 text-foreground/90 max-w-2xl mx-auto relative"
            dir={isRTL ? 'rtl' : 'ltr'} 
            lang={language}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="italic">
              {t.testimonial.quote}
            </span>
            
            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"
            />
          </motion.blockquote>
          
          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            <div className="text-base sm:text-lg font-medium text-foreground" dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
              {t.testimonial.author}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground" dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
              {t.testimonial.title}
            </div>
          </motion.div>
          
          {/* Minimalistic Stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className={`flex justify-center mt-8 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
          >
            {[1, 2, 3, 4, 5].map((star, index) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="relative py-32 overflow-hidden">
        {/* Enhanced Sage-themed Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-sage"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        
        {/* Enhanced Overlay with greenish tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-900/70 via-sage-800/50 to-sage-700/60" />
        
        {/* Floating Sage Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl pointer-events-none text-primary/30"
              style={{
                left: `${20 + (i * 10) % 60}%`,
                top: `${25 + (i * 12) % 50}%`,
              }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            >
              <Leaf />
            </motion.div>
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-6 text-white">
          {/* Enhanced Sage Title with modern typography for all languages */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-none tracking-tight font-display" 
            dir={isRTL ? 'rtl' : 'ltr'} 
            lang={language}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="block cta-title-main font-black"
              style={{ color: '#2d5016', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              {t.cta.title}
            </motion.span>
            
            <motion.span 
              className="block cta-subtitle-main font-black"
              initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              style={{ color: '#4a7c59', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              {t.cta.subtitle}
            </motion.span>
          </motion.h2>
          
          {/* Enhanced Description with styling for all languages */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed font-bold cta-description-main"
            dir={isRTL ? 'rtl' : 'ltr'} 
            lang={language}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            style={{ color: '#1a2e1a', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
          >
            {t.cta.description}
          </motion.p>
          
          {/* Enhanced Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                size="lg" 
                className="btn-sage-primary text-xl sm:text-2xl lg:text-4xl px-8 sm:px-16 lg:px-24 py-6 sm:py-8 lg:py-12 h-auto transform transition-all duration-300 shadow-sage-2xl font-black rounded-full relative overflow-hidden hover-sage-lift"
                dir={isRTL ? 'rtl' : 'ltr'}
                lang={language}
              >
                <span className={`relative z-10 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t.cta.button}
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 15, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`${isRTL ? 'mr-3 sm:mr-4 lg:mr-6' : 'ml-3 sm:ml-4 lg:ml-6'}`}
                  >
                    <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
            
                      {/* Enhanced Guarantee Text with Hebrew-specific styling */}
          <motion.div 
            className="text-lg sm:text-xl lg:text-2xl font-bold text-sage-900" 
            dir={isRTL ? 'rtl' : 'ltr'} 
            lang={language}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <span className="font-black" style={{ color: '#0a260a', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
              {t.cta.guarantee}
            </span>
          </motion.div>
          </motion.div>
          
          {/* Pulsing Energy Ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full border-2 border-white/20 pointer-events-none"
          />
        </div>
      </section>

      {/* Enhanced Sage Footer with Animated Greenish Gradients */}
      <footer className="py-16 bg-gradient-sage text-white relative overflow-hidden footer-animated">
        <div className="absolute inset-0 bg-sage-900/40" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-sage-conic"
          animate={{ 
            background: [
              'conic-gradient(from 0deg, rgba(34, 139, 34, 0.8), rgba(50, 205, 50, 0.6), rgba(144, 238, 144, 0.8), rgba(152, 251, 152, 0.6), rgba(0, 255, 127, 0.8), rgba(34, 139, 34, 0.8))',
              'conic-gradient(from 180deg, rgba(34, 139, 34, 0.8), rgba(50, 205, 50, 0.6), rgba(144, 238, 144, 0.8), rgba(152, 251, 152, 0.6), rgba(0, 255, 127, 0.8), rgba(34, 139, 34, 0.8))',
              'conic-gradient(from 360deg, rgba(34, 139, 34, 0.8), rgba(50, 205, 50, 0.6), rgba(144, 238, 144, 0.8), rgba(152, 251, 152, 0.6), rgba(0, 255, 127, 0.8), rgba(34, 139, 34, 0.8))'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-sage-400/20 to-sage-600/20 blur-xl"
              style={{
                left: `${20 + (i * 10) % 60}%`,
                top: `${25 + (i * 12) % 50}%`,
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          {/* Simple Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.div 
              className="flex justify-center items-center gap-4 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="footer-leaf-left"
              >
                <Leaf className="w-8 h-8 text-sage-100 drop-shadow-lg" />
              </motion.div>
              <motion.h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-sage-gradient footer-title" 
                dir={isRTL ? 'rtl' : 'ltr'} 
                lang={language}
                animate={{ 
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 20px rgba(34, 139, 34, 0.3)",
                    "0 0 40px rgba(34, 139, 34, 0.6)",
                    "0 0 20px rgba(34, 139, 34, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {t.footer.title}
              </motion.h3>
              <motion.div
                animate={{ 
                  rotate: [0, -360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="footer-leaf-right"
              >
                <Leaf className="w-8 h-8 text-sage-100 drop-shadow-lg" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-sage-50 font-medium" 
            dir={isRTL ? 'rtl' : 'ltr'} 
            lang={language}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.footer.subtitle}
          </motion.p>
          
          <motion.div 
            className="text-sm sm:text-base lg:text-lg text-sage-100 border-t border-sage-200/30 pt-6" 
            dir={isRTL ? 'rtl' : 'ltr'} 
            lang={language}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t.footer.copyright}
          </motion.div>
        </div>
        
        {/* Background sage leaves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl text-secondary"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 15 + 20,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
            >
              <Leaf />
            </motion.div>
          ))}
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      </motion.div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

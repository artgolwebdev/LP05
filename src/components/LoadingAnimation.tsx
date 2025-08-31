import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function LoadingAnimation() {
  const { t, isRTL, language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/10 z-50 flex items-center justify-center"
    >
      {/* Floating leaves background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -100,
              rotate: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: window.innerHeight + 100,
              rotate: 360,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            <Leaf size={Math.random() * 40 + 20} />
          </motion.div>
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Sage logo with pulse effect */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl"
          >
            <Leaf className="w-16 h-16 text-white" />
          </motion.div>
        </motion.div>

        {/* Animated SAGE text with enhanced cinematic animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-none tracking-tight relative overflow-visible"
          dir={isRTL ? 'rtl' : 'ltr'}
          lang={language}
        >
          {/* Loading energy field */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0.2], 
              scale: [0, 2, 1.5],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              delay: 0.3, 
              duration: 2, 
              ease: "easeOut"
            }}
            className="absolute inset-0 bg-gradient-conic from-primary/15 via-secondary/25 to-accent/15 blur-2xl -z-10"
            style={{ transform: 'scale(2.5)' }}
          />

          {t.hero.title.split('').map((letter, index) => {
            const letterDelay = 0.7 + index * 0.2;
            const letterCount = t.hero.title.length;
            const centerIndex = Math.floor(letterCount / 2);
            const distanceFromCenter = Math.abs(index - centerIndex);
            
            // More dramatic loading entrance
            const entranceVariations = [
              { y: -150, rotateX: -180, scale: 0.3 },
              { y: 150, rotateX: 180, scale: 0.3 },
              { x: -100, rotateZ: -90, scale: 0.4 },
              { x: 100, rotateZ: 90, scale: 0.4 }
            ];
            const variation = entranceVariations[index % 4];
            
            return (
              <motion.span
                key={index}
                initial={{ 
                  opacity: 0,
                  ...variation,
                  filter: 'blur(8px)'
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: 0,
                  rotateX: 0,
                  rotateZ: 0,
                  scale: 1,
                  filter: 'blur(0px)'
                }}
                transition={{ 
                  delay: letterDelay,
                  duration: 1.2,
                  type: "spring",
                  stiffness: 100 + (distanceFromCenter * 10),
                  damping: 12,
                  restDelta: 0.001
                }}
                className="inline-block relative"
                style={{
                  perspective: "1500px",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Enhanced glow layers */}
                <motion.span
                  initial={{ opacity: 0, scale: 2, blur: 15 }}
                  animate={{ 
                    opacity: [0, 0.7, 0.4], 
                    scale: [2, 1.3, 1],
                    filter: ['blur(15px)', 'blur(3px)', 'blur(1px)']
                  }}
                  transition={{
                    delay: letterDelay + 0.3,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 text-primary/50 pointer-events-none -z-5"
                >
                  {letter}
                </motion.span>

                {/* Letter shimmer effect */}
                <motion.span
                  initial={{ opacity: 0, x: isRTL ? 150 : -150 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    x: [isRTL ? 150 : -150, 0, isRTL ? -150 : 150] 
                  }}
                  transition={{
                    delay: letterDelay + 0.6,
                    duration: 1.8,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/40 to-transparent"
                  style={{ 
                    width: '250%',
                    height: '120%',
                    left: '-75%',
                    top: '-10%'
                  }}
                />
                
                {/* Main letter with enhanced color transitions and auto-display effects */}
                <motion.span
                  animate={{
                    color: [
                      'var(--foreground)',
                      'var(--primary)',
                      'var(--secondary)',
                      'var(--accent)',
                      'var(--primary)',
                      'var(--foreground)'
                    ],
                    textShadow: [
                      '0 0 5px rgba(74, 124, 89, 0.3)',
                      '0 0 15px rgba(74, 124, 89, 0.7)',
                      '0 0 25px rgba(135, 169, 107, 0.8)',
                      '0 0 20px rgba(156, 175, 136, 0.6)',
                      '0 0 15px rgba(74, 124, 89, 0.7)',
                      '0 0 5px rgba(74, 124, 89, 0.3)'
                    ],
                    scale: [1, 1.08, 1.05, 1.1, 1.03, 1],
                    filter: [
                      'brightness(1) saturate(1)',
                      'brightness(1.2) saturate(1.3)',
                      'brightness(1.3) saturate(1.4)',
                      'brightness(1.25) saturate(1.35)',
                      'brightness(1.2) saturate(1.3)',
                      'brightness(1) saturate(1)'
                    ]
                  }}
                  transition={{
                    delay: letterDelay + 1,
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                  className="relative z-10"
                >
                  {letter}
                </motion.span>
                
                {/* Enhanced floating sparkles */}
                {[...Array(3)].map((_, sparkleIndex) => (
                  <motion.div
                    key={sparkleIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0.7, 0], 
                      scale: [0, 1.5, 1, 0],
                      y: [0, -30 - sparkleIndex * 10, -60 - sparkleIndex * 15],
                      x: [(sparkleIndex - 1) * 15, (sparkleIndex - 1) * 25],
                      rotate: [0, 180 + sparkleIndex * 90, 360 + sparkleIndex * 120]
                    }}
                    transition={{
                      delay: letterDelay + 1.4 + sparkleIndex * 0.2,
                      duration: 2.5,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
                      sparkleIndex === 0 ? 'bg-primary' : 
                      sparkleIndex === 1 ? 'bg-secondary' : 'bg-accent'
                    }`}
                    style={{
                      filter: 'blur(0.5px)',
                      boxShadow: `0 0 12px rgba(74, 124, 89, ${0.8 + sparkleIndex * 0.1})`
                    }}
                  />
                ))}

                {/* Energy burst on letter reveal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0.8, 0], 
                    scale: [0, 6, 10] 
                  }}
                  transition={{
                    delay: letterDelay + 1.2,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(74, 124, 89, 0.4) 0%, rgba(135, 169, 107, 0.2) 50%, transparent 100%)',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </motion.span>
            );
          })}
          
          {/* Enhanced overall glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 3 }}
            animate={{ 
              opacity: [0, 0.3, 0.15], 
              scale: [3, 1.5, 2],
              rotate: [0, 90, 180]
            }}
            transition={{ 
              delay: 2, 
              duration: 2.5, 
              ease: "easeOut" 
            }}
            className="absolute inset-0 bg-gradient-radial from-primary/25 via-secondary/20 to-accent/15 blur-2xl pointer-events-none -z-15"
          />

          {/* Pulsing energy ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute inset-0 bg-gradient-conic from-primary/20 via-secondary/25 to-accent/20 blur-xl pointer-events-none -z-20"
            style={{ transform: 'scale(1.8)' }}
          />
        </motion.h1>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-2xl text-muted-foreground mb-12"
          dir={isRTL ? 'rtl' : 'ltr'}
          lang={language}
        >
          {t.loading.awakening}
        </motion.p>

        {/* Loading dots */}
        <div className="flex justify-center space-x-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="mt-12 mx-auto max-w-xs h-2 bg-primary/20 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
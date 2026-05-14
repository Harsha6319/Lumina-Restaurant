import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background with Parallax & Scale */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity, scale }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})`, filter: 'brightness(0.6) contrast(1.2)' }}
        />
        {/* Neon Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/80" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.p 
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          className="text-primary tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6 neon-text-primary"
        >
          Cyber Culinary Experience
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          style={{ perspective: 1000 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-white leading-tight mb-6 max-w-5xl"
        >
          FUTURE OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary neon-text-primary animate-pulse">DINING</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 mt-8"
        >
          <a href="#reservation" className="relative group px-10 py-5 bg-transparent border border-primary neon-border-primary overflow-hidden font-bold tracking-widest uppercase text-sm text-white">
            <span className="absolute inset-0 w-full h-full bg-primary/20 group-hover:bg-primary transition-all duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">Reserve a Table</span>
          </a>
          <a href="#menu" className="relative group px-10 py-5 bg-transparent border border-accent neon-border-accent overflow-hidden font-bold tracking-widest uppercase text-sm text-white">
            <span className="absolute inset-0 w-full h-full bg-accent/20 group-hover:bg-accent transition-all duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">Explore Menu</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1 neon-border-primary">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-primary rounded-full neon-bg" 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

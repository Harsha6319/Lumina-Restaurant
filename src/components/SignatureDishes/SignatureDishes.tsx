import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import signatureDish from '../../assets/signature_dish.png';

const SignatureDishes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <section id="signature" ref={containerRef} className="py-32 relative bg-[#020202] overflow-hidden flex items-center min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-black" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, type: "spring" }}
            className="w-full lg:w-5/12"
          >
            <h4 className="text-accent tracking-[0.2em] uppercase text-sm font-bold mb-4 flex items-center neon-text-accent">
              <span className="w-12 h-[2px] bg-accent mr-4 neon-bg"></span>
              Cyber Special
            </h4>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-6 leading-tight">
              NEON <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent animate-pulse">WAGYU</span>
            </h2>
            <p className="text-gray-300 font-light text-lg mb-8 leading-relaxed">
              Our signature A5 Wagyu is dry-aged for 45 days, delicately seared to perfection, and infused with bioluminescent edible extracts. Served alongside a rich truffle bordelaise sauce, it is a cyberpunk masterpiece designed to tantalize all senses.
            </p>
            
            <div className="flex items-center space-x-8 mb-12">
              <div>
                <span className="block text-gray-500 text-sm uppercase tracking-widest mb-1">Credits</span>
                <span className="text-4xl font-serif text-primary neon-text-primary font-bold">185</span>
              </div>
              <div className="w-[1px] h-12 bg-accent/50 neon-bg"></div>
              <div>
                <span className="block text-gray-500 text-sm uppercase tracking-widest mb-1">Pairing</span>
                <span className="text-lg font-serif text-accent neon-text-accent">Synthetic Wine</span>
              </div>
            </div>

            <button className="group relative px-10 py-5 bg-transparent overflow-hidden neon-border-primary border">
              <div className="absolute inset-0 w-0 bg-primary/30 transition-all duration-300 ease-out group-hover:w-full"></div>
              <span className="relative text-white group-hover:text-white tracking-widest uppercase text-sm font-bold transition-colors duration-300 flex items-center justify-center">
                Order Experience
              </span>
            </button>
          </motion.div>

          <motion.div 
            style={{ y, scale }}
            className="w-full lg:w-7/12 relative"
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
              <div className="absolute inset-10 bg-accent/20 rounded-full blur-[80px] mix-blend-screen"></div>
              <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                src={signatureDish} 
                alt="Golden Wagyu Steak" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_0_50px_rgba(0,243,255,0.5)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;

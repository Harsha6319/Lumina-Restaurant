import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 group">
              <div className="absolute inset-0 bg-primary/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover filter brightness-50 group-hover:brightness-100 transition-all duration-700 border border-white/10 group-hover:neon-border-primary relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-black/80 backdrop-blur-md border border-primary p-6 hidden md:flex flex-col justify-center items-center z-20 neon-border-primary">
                <span className="text-5xl font-serif text-primary mb-2 neon-text-primary font-black">2077</span>
                <span className="text-xs tracking-widest uppercase text-accent font-bold">Est. Future</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-primary tracking-[0.3em] uppercase text-sm font-bold mb-4 neon-text-primary">System Override</h4>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-tight">
              A Legacy of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-pulse">Cyber Mastery</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-light text-lg">
              <p>
                Reborn in 2077, Lumina exists at the intersection of culinary tradition and cybernetic enhancement. We believe that food is code, compiled perfectly to speak to the soul.
              </p>
              <p>
                Our philosophy is rooted in sourcing the finest synthesized ingredients globally and preparing them with quantum techniques. Every dish executes a program of passion, precision, and perfection.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-4xl font-serif text-primary mb-2 neon-text-primary font-bold">50k+</h3>
                <p className="text-xs tracking-widest uppercase text-gray-400 font-bold">Synths Served</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-primary mb-2 neon-text-primary font-bold">120+</h3>
                <p className="text-xs tracking-widest uppercase text-gray-400 font-bold">Algorithms</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-primary mb-2 neon-text-primary font-bold">15</h3>
                <p className="text-xs tracking-widest uppercase text-gray-400 font-bold">Neon Stars</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-primary mb-2 neon-text-primary font-bold">5</h3>
                <p className="text-xs tracking-widest uppercase text-gray-400 font-bold">Master Coders</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

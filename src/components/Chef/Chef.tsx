import React from 'react';
import { motion } from 'framer-motion';

const Chef: React.FC = () => {
  return (
    <section className="py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">Master of Culinary Arts</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Meet Executive Chef <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Marcus Rossi</span>
            </h2>
            <p className="text-gray-300 font-light text-lg mb-8 leading-relaxed">
              With over two decades of experience in Michelin-starred kitchens across Paris, Tokyo, and New York, Chef Rossi brings an unparalleled level of artistry and precision to Lumina. His philosophy marries traditional techniques with avant-garde innovation, resulting in dishes that are both visually stunning and profoundly flavorful.
            </p>
            <div className="mb-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Signature_of_John_Hancock.svg" alt="Signature" className="h-16 filter invert opacity-50" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto group">
              <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              <img 
                src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Executive Chef Marcus Rossi" 
                className="w-full h-full object-cover relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chef;

import React from 'react';
import { motion } from 'framer-motion';

const SpecialOffers: React.FC = () => {
  return (
    <section className="py-32 relative bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4"
          >
            Exclusive Experiences
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            Special <span className="italic text-gray-400">Offers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden group aspect-[16/9] md:aspect-auto md:h-80"
          >
            <img 
              src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1000" 
              alt="Romantic Dinner" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors">Romantic Couple's Dinner</h3>
              <p className="text-gray-300 font-light mb-4 text-sm max-w-sm">A curated 5-course tasting menu with premium wine pairings.</p>
              <a href="#reservation" className="text-sm tracking-widest uppercase text-primary hover:text-white transition-colors w-max">
                Book Now &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden group aspect-[16/9] md:aspect-auto md:h-80"
          >
            <img 
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1000" 
              alt="Weekend Brunch" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors">Weekend Champagne Brunch</h3>
              <p className="text-gray-300 font-light mb-4 text-sm max-w-sm">Indulge in unlimited champagne and an exquisite selection of delicacies.</p>
              <a href="#reservation" className="text-sm tracking-widest uppercase text-primary hover:text-white transition-colors w-max">
                View Menu &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Mocktails'];

const menuItems = [
  { id: 1, name: 'Truffle Arancini', category: 'Starters', price: '$24', desc: 'Crispy risotto balls with black truffle and mozzarella.', image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Wagyu Beef Carpaccio', category: 'Starters', price: '$32', desc: 'Thinly sliced A5 wagyu, parmesan, rocket, truffle oil.', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Lobster Ravioli', category: 'Main Course', price: '$48', desc: 'Handmade ravioli, Maine lobster, saffron cream sauce.', image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Pan-Seared Scallops', category: 'Main Course', price: '$42', desc: 'Diver scallops, cauliflower purée, pancetta crisp.', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Dark Chocolate Sphere', category: 'Desserts', price: '$22', desc: 'Valrhona chocolate, hazelnut praline, hot caramel pour.', image: 'https://images.pexels.com/photos/2373507/pexels-photo-2373507.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Crimson Sunset', category: 'Mocktails', price: '$16', desc: 'Blood orange, pomegranate, rosemary syrup, sparkling water.', image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 relative bg-[#0d0d0d] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4"
          >
            Culinary Delights
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            A La Carte
          </motion.h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm tracking-wider uppercase font-bold ${
                activeCategory === category 
                  ? 'border-primary bg-primary/20 text-primary neon-border-primary neon-text-primary' 
                  : 'border-white/20 text-white/70 hover:border-accent hover:text-accent hover:neon-border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={item.id}
                className="group cursor-pointer relative bg-black/40 border border-white/5 p-4 hover:border-primary hover:neon-border-primary transition-all duration-500 rounded-xl"
              >
                <div className="relative overflow-hidden mb-6 aspect-[4/3] rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 filter brightness-75 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 border border-primary/50 text-primary font-serif font-bold neon-text-primary rounded-full">
                    {item.price}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2 group-hover:text-primary transition-colors neon-text-primary">{item.name}</h3>
                    <p className="text-sm text-gray-400 font-light pr-4">{item.desc}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black group-hover:neon-border-primary transition-all">
                    <span className="sr-only">Add to order</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

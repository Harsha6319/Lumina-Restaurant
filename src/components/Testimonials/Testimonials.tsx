import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Alexander Reed",
    role: "Food Critic",
    text: "An absolute masterclass in fine dining. Every dish is composed like a symphony, creating flavor profiles that are simply out of this world.",
    rating: 5
  },
  {
    name: "Sophia Martinez",
    role: "Guest",
    text: "The ambiance, the service, and of course, the food—everything was perfect. The golden wagyu is an experience I will never forget.",
    rating: 5
  },
  {
    name: "James Chen",
    role: "Culinary Enthusiast",
    text: "Lumina redefines what luxury means in the modern culinary world. The attention to detail in their mocktails alone is staggering.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4"
          >
            Guestbook
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            Words of <span className="italic text-gray-400">Praise</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#111] p-8 border border-white/5 relative group hover:border-primary/50 transition-colors duration-500"
            >
              <div className="text-primary mb-6 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 font-light italic mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <h5 className="text-white font-serif text-lg">{testimonial.name}</h5>
                <p className="text-sm tracking-widest uppercase text-gray-500 mt-1">{testimonial.role}</p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-6xl font-serif text-white pointer-events-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

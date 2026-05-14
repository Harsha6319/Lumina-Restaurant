import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-4">Get in Touch</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Contact <span className="italic text-gray-400">Us</span>
            </h2>
            <p className="text-gray-300 font-light text-lg mb-12">
              Have a question or special request? We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
            </p>

            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-primary transition-colors font-light placeholder-gray-600"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-primary transition-colors font-light placeholder-gray-600"
                />
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="Your Message" 
                  className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-primary transition-colors font-light placeholder-gray-600 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 tracking-widest uppercase text-sm font-medium mt-4">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="w-full h-64 md:h-80 bg-[#111] border border-white/10 mb-8 overflow-hidden relative group">
              <iframe 
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527998699!2d-74.14448787425253!3d40.69763123339893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1686657922253!5m2!1sen!2s" 
                className="w-full h-full filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-white font-serif text-lg mb-2">Location</h5>
                <p className="text-gray-400 font-light leading-relaxed">
                  123 Luxury Avenue,<br/>
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h5 className="text-white font-serif text-lg mb-2">Contact</h5>
                <p className="text-gray-400 font-light leading-relaxed">
                  info@luminarestaurant.com<br/>
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

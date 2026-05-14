import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="text-3xl font-serif font-bold text-white tracking-wider mb-6 block">
              LUMINA<span className="text-primary">.</span>
            </a>
            <p className="text-gray-400 font-light mb-6">
              Redefining fine dining through passion, innovation, and unparalleled service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300 text-xs font-serif">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300 text-xs font-serif">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-300 text-xs font-serif">
                TW
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors font-light">About Us</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-primary transition-colors font-light">Our Menu</a></li>
              <li><a href="#reservation" className="text-gray-400 hover:text-primary transition-colors font-light">Reservations</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-primary transition-colors font-light">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400 font-light">
                <span>Monday - Friday</span>
                <span>17:00 - 23:00</span>
              </li>
              <li className="flex justify-between text-gray-400 font-light">
                <span>Saturday</span>
                <span>16:00 - 00:00</span>
              </li>
              <li className="flex justify-between text-gray-400 font-light">
                <span>Sunday</span>
                <span>16:00 - 22:30</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-gray-400 font-light mb-4">
              Subscribe to receive updates, access to exclusive events, and more.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-[#111] border border-white/10 text-white px-4 py-2 w-full focus:outline-none focus:border-primary transition-colors font-light"
              />
              <button type="submit" className="bg-primary text-background px-4 py-2 font-medium hover:bg-white transition-colors duration-300 uppercase tracking-wider text-xs">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lumina Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500 font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform duration-300 z-50"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import SignatureDishes from './components/SignatureDishes/SignatureDishes';
import Reservation from './components/Reservation/Reservation';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Chef from './components/Chef/Chef';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-white min-h-screen font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <SignatureDishes />
        <Reservation />
        <Gallery />
        <Testimonials />
        <Chef />
        <SpecialOffers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

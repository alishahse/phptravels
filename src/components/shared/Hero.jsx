import React from 'react';
import heroImg from '../../assets/hero-img.jpg';
import { Plane, Hotel, Map, Car, CreditCard, Calendar, Users, Search, ArrowLeftRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full relative">
      
      {/* ================= Hero Background & Text Content ==================== */}
      <div
        className="relative w-full min-h-112.5 md:h-137 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* ====================== Dark Overlay ========================= */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ======================== Text Content ====================== */}
        <div className="relative z-10 px-4 text-white text-center -translate-y-15">
          <h1 className="text-2xl md:text-4xl font-bold mb-1 drop-shadow-lg">
            Your Trip Starts Here!
          </h1>
          <p className="text-base md:text-medium opacity-90 max-w-2xl mx-auto mb-2">
            Let us help you plan your next journey — the one that will leave a lifetime of memories.
          </p>

          {/* ================= Glassmorphism Tabs Bar ================= */}
          <div className="flex justify-center w-full">
            <ul className="flex flex-wrap items-center justify-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-3 rounded-full border border-white/20 shadow-xl">
              
              {/* ================= Flights ctive State =================== */}
              <li>
                <button className="bg-white text-black px-5 py-2.5 rounded-full font-bold shadow-md flex items-center gap-2 active:scale-95">
                  <Plane size={18} /> Flights
                </button>
              </li>

              {/* ========================= Other Tabs ====================== */}
              <li>
                <button className="text-white px-5 py-2.5 rounded-full font-medium hover:bg-white/10 flex items-center gap-2">
                  <Hotel size={18} strokeWidth={2} /> Hotels
                </button>
              </li>
              <li>
                <button className="text-white px-5 py-2.5 rounded-full font-medium hover:bg-white/10 flex items-center gap-2">
                  <Map size={18} strokeWidth={2} /> Tours
                </button>
              </li>
              <li>
                <button className="text-white px-5 py-2.5 rounded-full font-medium hover:bg-white/10 flex items-center gap-2">
                  <Car size={18} strokeWidth={2} /> Cars
                </button>
              </li>
              <li>
                <button className="text-white px-5 py-2.5 rounded-full font-medium hover:bg-white/10 flex items-center gap-2">
                  <CreditCard size={18} strokeWidth={2} /> Visa
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
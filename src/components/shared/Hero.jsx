import React from 'react';
import heroImg from '../../assets/hero-img.jpg';
import FlightSearch from '../module/flightCom/FlightSearch.jsx';

const Hero = () => {
  return (
    <section className="w-full relative">
      {/* 1. Height ko h-110 se badha kar min-h ya dynamic kiya taake form fit ho jaye */}
      <div
        className="relative w-full min-h-70 md:min-h-90 bg-cover bg-center bg-no-repeat flex flex-col items-center pt-24 md:pt-32 pb-20" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* ====================== Dark Overlay ========================= */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* ======================== Text & Content Container ====================== */}
        <div className="relative z-10 px-4 w-full max-w-6xl mx-auto flex flex-col items-center">
          
          {/* text size ko fix kiya: choti screen par text-3xl, bari par 5xl */}
          <h1 className="text-2xl md:text-3xl font-bold drop-shadow-2xl text-white text-center">
            Your Trip Starts Here!
          </h1>
          
          <p className="text-sm md:text-lg opacity-90 max-w-2xl mb-6 text-white text-center leading-relaxed">
            Let us help you plan your next journey — the one that will leave a lifetime of memories.
          </p>

          {/* 2. Flight Search Section */}
          <div className="w-full">
             <FlightSearch />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
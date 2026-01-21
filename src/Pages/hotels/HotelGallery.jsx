import React, { useState, useRef } from 'react';
import { MapPin, Star, Maximize2, Search, ChevronDown } from 'lucide-react';
import { useLocation } from "react-router-dom"
import RoomSelection from '../../components/module/hotelsCom/RoomSelection';
import PropertyDescription from '../../components/module/hotelsCom/PropertyDescription';
import HotelPolicy from '../../components/module/hotelsCom/HotelPolicy';


const HotelGallery = () => {
  const location = useLocation();
  const incomingHotel = location.state?.hotel;

  const hotelData = incomingHotel?.gallery || [
    { 
      id: 1, 
      src: incomingHotel?.url || "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000", 
      title: incomingHotel?.title || "Main Luxury Suite",
      location: incomingHotel?.description || "Casablanca St - Dubai"
    },
  ];


  const myHotelData = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000", 
      title: "Main Luxury Suite",
      location: "Casablanca St - Dubai"
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000", 
      title: "Infinity Pool View",
      location: "Poolside Area"
    },
    { 
      id: 3, 
      src: "https://phptravels.net/uploads/508456-29-01-2023-1675019630.jpg", 
      title: "Modern Bedroom",
      location: "Floor 12, Room 1204"
    },
  ];

  const [activeImage, setActiveImage] = useState(hotelData[0]);

  const checkinRef = useRef(null);
  const checkoutRef = useRef(null);

  const formOptions = [
    { label: 'Adults', options: ['1', '2', '3', '4'] },
    { label: 'Child', options: ['0', '1', '2', '3'] },
    { label: 'Rooms', options: ['1', '2', '3', '4', '5'] },
    { label: 'Nationality', options: ['United States', 'Pakistan', 'UAE', 'UK'] },
  ];

  return (
    <div className='bg-sky-50'>
    <div className="max-w-7xl mx-auto mt-5 p-5 font-sans">
      
      {/* HEADER ====================================================*/}
      <div className="mb-6 bg-white">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-800 p-2">
            Movenpick Grand Al Bustan
          </h1>
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>

        <p className="text-black text-sm flex items-center gap-1 mt-1">
          <MapPin size={22} className="text-black p-1" />
          {activeImage.location} — Casablanca St, Garhoud, Dubai
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        
        {/* Left GALLERY =================================================*/}
        <div className="lg:col-span-2 flex gap-1 h-450px bg-white p-3">
          <div className="flex flex-col gap-2 w-24 overflow-y-auto">
            {hotelData.map((img) => (
              <div
                key={img.id}
                onClick={() => setActiveImage(img)}
                className={`h-20 rounded-sm overflow-hidden cursor-pointer border ${
                  activeImage.id === img.id ? 'border-black' : 'border-transparent'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 rounded-md overflow-hidden relative">
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="w-full h-full object-cover"
            />
            <button className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-md">
              <Maximize2 size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT: BOOKING =======================================================*/}
        <div className="bg-white border-gray-100 rounded-md p-6 shadow-sm">
          
          {/* DATES ================================================================*/}
          <div className="grid grid-cols-2 gap-3 mb-6">
            
            {/* CHECKIN =============================================================*/}
            <div
              onClick={() => checkinRef.current?.showPicker()}
              className="border rounded-lg p-2 cursor-pointer hover:bg-gray-50"
            >
              <label className="text-[10px] uppercase text-gray-400 font-bold block mb-1">
                Checkin
              </label>
              <input
                ref={checkinRef}
                type="date"
                defaultValue="2026-01-23"
                className="w-full text-xs font-semibold bg-transparent outline-none border-none cursor-pointer"
              />
            </div>

            {/* CHECKOUT =========================================================*/}
            <div
              onClick={() => checkoutRef.current?.showPicker()}
              className="border rounded-lg p-2 cursor-pointer hover:bg-gray-50"
            >
              <label className="text-[10px] uppercase text-gray-400 font-bold block mb-1">
                Checkout
              </label>
              <input
                ref={checkoutRef}
                type="date"
                defaultValue="2026-01-24"
                className="w-full text-xs font-semibold bg-transparent outline-none border-none cursor-pointer"
              />
            </div>
          </div>

          {/* DROPDOWNS =======================================================*/}
          <div className="space-y-4">
            {formOptions.map((item, idx) => (
              <div key={idx} className="relative border-b pb-1 group">
                <label className="text-[10px] uppercase text-gray-400 font-bold block mb-1">
                  {item.label}
                </label>

                <div className="relative">
                  <select className="w-full bg-transparent text-sm font-semibold outline-none appearance-none pr-6 cursor-pointer">
                    {item.options.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>

                  <ChevronDown
                    size={14}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON ======================================================================*/}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mt-8 flex items-center justify-center gap-2 shadow-lg">
            <Search size={18} />
            Search Now
          </button>
        </div>
      </div>

      {/* ROOMSelection Imported ==========================================*/}
      <div className="mt-12">
        <RoomSelection />
      </div>


     {/* PropertyDescription Imported ==========================================*/}
    <div className="mt-3">
        <PropertyDescription />
      </div>
       
       <div className="mt-3">
        <HotelPolicy />
      </div>


    </div>
    </div>
  );
};

export default HotelGallery;

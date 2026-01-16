import React from "react";
import { Plane, Hotel, Map, Car, CreditCard, Calendar, Users, Search, ArrowLeftRight } from 'lucide-react';


const Flight = () => {
    return(
        <>
         {/* =============================== Search Box ============================ */}
         <div className="w-full mx-auto px-3 relative z-30 mt-4">
            <div className="bg-white shadow-2xl rounded-xl px-8 py-3 border border-gray-100 w-full">
                {/* ======================1. Top Options ============================= */}
     <div className="flex gap-4 mb-4">
      <select className="bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg focus:ring-1 focus:ring-blue-500 cursor-pointer px-3 py-1.5 font-medium outline-none">
        <option>One Way</option>
        <option>Round Trip</option>
      </select>
      <select className="bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg focus:ring-1 focus:ring-blue-500 cursor-pointer px-3 py-1.5 font-medium outline-none">
        <option>Economy</option>
        <option>Business</option>
      </select>
    </div>

    {/*========================== 2. Main Search Inputs Row ============================= */}
    <div className="flex flex-col lg:flex-row items-stretch gap-2">
      
      {/* ============================== Flying From  ====================================*/}
      <div className="relative flex-1 group">
        <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-2xl transition-all duration-300 focus-within:border-blue-500 hover:border-blue-300 bg-white h-full">
          <Plane className="text-gray-900 shrink-0" size={18} />
          <div className="flex flex-col">
            <label className="text-[12px] font-medium text-gray-900 leading-tight group-focus-within:text-blue-500">Flying From</label>
          </div>
        </div>
        
        {/* ============================= Swap Button  =================================== */}
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white p-1.5 rounded-full shadow-md hover:scale-110 transition-all hidden lg:block border-2 border-white">
          <ArrowLeftRight size={14} />
        </button>
      </div>

      {/* ================================== Destination To =============================== */}
      <div className="flex-1 group">
        <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-2xl transition-all duration-300 focus-within:border-blue-500 hover:border-blue-300 bg-white h-full">
          <Plane className="text-gray-900 rotate-90 shrink-0" size={18} />
          <div className="flex flex-col">
            <label className="text-[12px] font-medium text-sm text-gray-900  leading-tight group-focus-within:text-blue-500">Destination To</label>
          </div>
        </div>
      </div>

      {/* ================================== Depart Date ===================================*/}
      <div className="flex-1 group">
        <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-2xl transition-all duration-300 focus-within:border-blue-500 hover:border-blue-300 bg-white h-full">
          <Calendar className="text-gray-900 shrink-0" size={18} />
          <div className="flex flex-col">
            <label className="text-[12px] font-medium text-sm text-gray-900 leading-tight group-focus-within:text-blue-500">Depart Date</label>
          </div>
        </div>
      </div>

      {/* ===================================== Travellers ================================== */}
      <div className="flex-1 group">
        <div className="flex items-center gap-2 p-3 border border-gray-200 hover:border-blue-500 rounded-2xl transition-all duration-300 focus-within:border-blue-500 bg-white h-full">
          <Users className="text-gray-900 shrink-0" size={18} />
          <div className="flex flex-col w-full">
            <label className="text-[12px] font-semibold text-gray-900 group-focus-within:text-blue-500">Travellers</label>
            <select className="border-none outline-none p-0 focus:ring-0 text-gray-900 font-medium text-sm bg-transparent w-full cursor-pointer">
              <option>1 Traveller</option>
              <option>2 Travellers</option>
            </select>
          </div>
        </div>
      </div>

      {/* ==================================== Search Button  =================================*/}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center shrink-0">
        <Search size={22} strokeWidth={3} />
      </button>
      </div>
      </div>
      </div>
    </>
         
    )
}

export default Flight;
import React, { useState } from "react";
import { Plane, Hotel, Map, Car, CreditCard, Calendar, Users, Search, ArrowLeftRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const Flight = () => {
  const navigate = useNavigate()
  const [formData, setFormData]=useState({
  from : "",
  destination:"",
  Date:"",
  returnDate:"",
  class:'economy',
  flightType:"one-way",
  travelers:{
    adults:0,
    child:0,
    infants:0

  }

  // Inputm from ========================================
 })
    const handleInputChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    // Destination Date ========================================
    const handledestinationChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

      // departure Date ========================================
    const handleDateChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    // Class  ========================================
    const handleClassChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    // Return Type
    const handleFlightTypeChange = (e) => {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };



    // Travlers  ========================================
    const handleTravlerChange = (type, value) => {
      setFormData({
        ...formData,
        travelers : {
          ...formData.travelers,
          [type]: parseInt(value) || 0
        }
      });
    };


    const handleSubmit = (e) => {
     e.preventDefault(); // Ye page refresh hone se rokega
     console.log("Mera Form Data:", formData);
      navigate(`/flights/${formData.from}/${formData.destination}/...`);
   };

    return(
        <>
         {/* =============================== Search Box ============================ */}
         <div className="w-full mx-auto px-3 relative z-30 mt-4">
          <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-xl px-8 py-3 border border-gray-100">
                {/* ======================1. Top Options ============================= */}
    
      <div className="flex gap-2 mb-1">
         
       <select 
           name="flightType"
           value={formData.flightType}
           onChange={handleInputChange}
           >
          <option value="one-way">One Way</option>
          <option value="return">Return</option>
       </select> 
        
      <select 
         name="class"
         value={formData.class}
         onChange={handleInputChange}
        >
  <option value="economy">Economy</option>
  <option value="business">Business</option>
  <option value="first">First</option>
</select>
    </div>

    {/*========================== 2. Main Search Inputs Row ============================= */}
    <div className="flex flex-col lg:flex-row items-stretch gap-2">
      
      {/* ============================== Flying From  ====================================*/}
      <div className="relative flex-1 group">
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl transition-all duration-300 focus-within:border-blue-500 hover:border-blue-300 bg-white h-full">
          <Plane className="text-gray-900 shrink-0" size={18} />
          <div className="flex flex-col">
            <label className="text-[12px] font-medium text-gray-900 leading-tight group-focus-within:text-blue-500">Flying From</label>
            <input 
            name="from"
            value={formData.from}
            onChange={handleInputChange}
             className="outline-none text-sm font-bold bg-transparent"
            />
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
            <input 
             name="destination"
             value={formData.destination}
             onChange={handledestinationChange}
             className="outline-none text-sm font-bold bg-transparent"/>
          </div>
        </div>
      </div>

      {/* ================================== Depart Date ===================================*/}
      <div className="flex-1 group">
        <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-2xl transition-all duration-300 focus-within:border-blue-500 hover:border-blue-300 bg-white h-full">
          <Calendar className="text-gray-900 shrink-0" size={18} />
          <div className="flex flex-col">
            <label className="text-[12px] font-medium text-sm text-gray-900 leading-tight group-focus-within:text-blue-500">Depart Date</label>
            <input 
             name="Date"
             value={formData.Date}
             onChange={handleDateChange}
             className="outline-none text-sm font-bold bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* ===================================== Travellers ================================== */}
      <div className="flex-1 group">
        <div className="flex items-center gap-2 p-3 border border-gray-200 hover:border-blue-500 rounded-2xl transition-alcall duration-300 focus-within:border-blue-500 bg-white h-full">
          <Users className="text-gray-900 shrink-0" size={18} />
          <div className="flex flex-col w-full">
            <label className="text-[12px] font-semibold text-gray-900 group-focus-within:text-blue-500">Travellers</label>

            <input 
            type="number" 
            value={formData.travelers.adults}
            onChange={(e) => handleTravlerChange('adults', e.target.value)} 
            className="border p-2 w-20"
           />
            <select className="border-none outline-none placeholder:Travlers p-0 focus:ring-0 text-gray-900 font-medium text-sm bg-transparent w-full cursor-pointer">
              <option>Rooms</option>
              <option>Adults</option>
              <option>Childs</option>
            </select>
          </div>
        </div>
      </div>

      {/* ==================================== Search Button  =================================*/}
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center shrink-0">
        <Search size={22} strokeWidth={3} />
      </button>
      </div>
      </form>
      </div>
    </>
         
    )
}

export default Flight;
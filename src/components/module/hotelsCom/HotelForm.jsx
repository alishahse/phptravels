import React from "react";
import { MapPin, Calendar, Users, Search } from 'lucide-react';

const HotelForm = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-4">
            <div className="bg-white shadow-2xl rounded-xl p-4 border border-gray-100">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
                    
                    {/* Destination ====================================================== */}
                    <div className="lg:col-span-4 group">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-18.75 transition-all focus-within:border-blue-500">
                            <MapPin className="shrink-0" size={22} />
                            <div className="flex flex-col w-full min-w-0">
                                <input type="text" placeholder="Search By City" className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Check-in =========================================================== */}
                    <div className="lg:col-span-2 group">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-[75px] focus-within:border-blue-500">
                            <div className="flex flex-col w-full">
                                <label className="text-[11px] font-bold text-gray-400">Check-in</label>
                                <input type="date" className="text-[13px] font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* Check-out: 2.5 Columns wide approx */}
                    <div className="lg:col-span-2 group">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-[75px] focus-within:border-blue-500">
                            <div className="flex flex-col w-full">
                                <label className="text-[11px] font-bold text-gray-400">Check-out</label>
                                <input type="date" className="text-[13px] font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* Guests & Rooms: 3 Columns wide */}
                    <div className="lg:col-span-3 group">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-[75px] focus-within:border-blue-500">
                            <Users className="shrink-0" size={22} />
                            <div className="flex flex-col w-full">
                                <select className="text-sm text-gray-900 outline-none w-full bg-transparent cursor-pointer">
                                    <option>2 Adults, 1 Room</option>
                                    <option>1 Adult, 1 Room</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Search Button: 1 Column wide */}
                    <div className="lg:col-span-1">
                        <button className="w-full h-[75px] bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all">
                            <Search size={28} strokeWidth={3} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HotelForm;
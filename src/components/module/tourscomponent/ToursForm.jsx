import React from "react";
import { MapPin, Calendar, Users, Search, ChevronDown } from 'lucide-react';

const ToursForm = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-4">
            <div className="bg-white shadow-2xl rounded-xl p-4 border border-gray-100">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center w-full">
                    
                    {/* 1. Destination Dropdown ==============================================*/}
                    <div className="lg:col-span-5 group relative">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-[75px] transition-all focus-within:border-blue-500 bg-white">
                            <MapPin className="shrink-0" size={22} />
                            <div className="flex flex-col w-full">
                                <span className="text-[10px] uppercase font-bold text-gray-400">Search By City</span>
                            
                                <div className="relative flex items-center">
                                    <select className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer appearance-none pr-8">
                                        <option value="">Select City</option>
                                        <option value="lahore">Lahore, Pakistan</option>
                                        <option value="dubai">Dubai, UAE</option>
                                        <option value="london">London, UK</option>
                                    </select>
                                    {/* Select arrow ko custom look dene ke liye ChevronDown icon */}
                                    <ChevronDown size={16} className="absolute right-0 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Tour Date */}
                    <div className="lg:col-span-3 group">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-[75px] transition-all focus-within:border-blue-500">
                            <Calendar className="shrink-0" size={20} />
                            <div className="flex flex-col w-full">
                                <span className="text-[10px] uppercase font-bold text-gray-400">Date</span>
                                <input 
                                    type="date" 
                                    className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* 3. Travellers */}
                    <div className="lg:col-span-3 group">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-[75px] transition-all focus-within:border-blue-500">
                            <Users className=" shrink-0" size={22} />
                            <div className="flex flex-col w-full">
                                <span className="text-[10px] uppercase font-bold text-gray-400">Travellers</span>
                                <div className="relative flex items-center">
                                    <select className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer appearance-none pr-8">
                                        <option>0 Travellers</option>
                                        <option>1 Traveller</option>
                                        <option>2 Travellers</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-0 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Search Button */}
                    <div className="lg:col-span-1">
                        <button className="w-full h-[75px] bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all active:scale-95 shrink-0">
                            <Search size={28} strokeWidth={3} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ToursForm;
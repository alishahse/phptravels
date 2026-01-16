import React from "react";
import { MapPin, Calendar, Search, ChevronDown } from 'lucide-react';

const VisaForm = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-4">
            <div className="bg-white shadow-2xl rounded-xl p-4 border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center w-full">
                    
                    {/* 1. From Country ==========================================================*/}
                    <div className="lg:col-span-4 group relative">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl h-[75px] transition-all focus-within:border-blue-500 bg-white">
                            <MapPin className="text-blue-600 shrink-0" size={22} />
                            <div className="flex flex-col w-full">
                                <span className="text-[10px] uppercase font-bold text-gray-400">From Country</span>
                                <div className="relative flex items-center">
                                    <select className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer appearance-none pr-8">
                                        <option value="pakistan">Pakistan</option>
                                        <option value="india">India</option>
                                        <option value="uae">United Arab Emirates</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-0 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. To Country =================================================================*/}
                    <div className="lg:col-span-4 group relative">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-[75px] transition-all focus-within:border-blue-500 bg-white">
                            <MapPin className="text-blue-600 shrink-0" size={22} />
                            <div className="flex flex-col w-full">
                                <span className="text-[10px] uppercase font-bold text-gray-400">To Country</span>
                                <div className="relative flex items-center">
                                    <select className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer appearance-none pr-8">
                                        <option value="">Select Country</option>
                                        <option value="saudi">Saudi Arabia</option>
                                        <option value="turkey">Turkey</option>
                                        <option value="malaysia">Malaysia</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-0 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Date =============================================================================== */}
                    <div className="lg:col-span-3 group">
                        <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-[75px] transition-all focus-within:border-blue-500 bg-white">
                            <Calendar className="text-blue-600 shrink-0" size={20} />
                            <div className="flex flex-col w-full">
                                <span className="text-[10px] uppercase font-bold text-gray-400">Date</span>
                                <input 
                                    type="date" 
                                    className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* 4. Search Button =======================================================================*/}
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

export default VisaForm;
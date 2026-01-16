import React from "react";
import { MapPin, Calendar, Users, Search, ChevronDown, Clock, Car } from 'lucide-react';

const CarsForm = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-4">
            <div className="bg-white shadow-2xl rounded-xl p-4 md:p-6 border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                    
                    <div className="lg:col-span-6 group">
                        <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-2xl h-[18.75] transition-all focus-within:border-blue-500 bg-white">
                            <Car className=" shrink-0" size={22} />
                            <div className="flex flex-col w-full">
                                <span className="text-[10px] font-bold text-gray-400">From Airport</span>
                                <div className="relative flex items-center">
                                    <select className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer appearance-none pr-6">
                                        <option>Select City</option>
                                        <option>Lahore Airport</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-0 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 group">
                        <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-2xl h-[18.75] transition-all focus-within:border-blue-500 bg-white">
                            <MapPin className="shrink-0" size={22} />
                            <div className="flex flex-col w-full">
                                <span className="text-[10px] font-bold text-gray-400">To Location</span>
                                <div className="relative flex items-center">
                                    <select className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent cursor-pointer appearance-none pr-8">
                                        <option>Select</option>
                                        <option>Hotel / City Center</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-0 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    {/* Pick-up Section ======================================================= */}
                    <div className="lg:col-span-4 flex gap-2">
                        <div className="flex-1 p-3 border border-gray-200 rounded-2xl h-[17.75]">
                            <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                                <Calendar size={12}/> Pick-up Date
                            </span>
                            <input type="date" className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent mt-1" />
                        </div>
                        <div className="w-1/3 p-3 border border-gray-200 rounded-2xl h-[17.75]">
                            <span className="text-[10px]  font-bold text-gray-400 flex items-center gap-1">
                                <Clock size={12}/> Time
                            </span>
                            <select className="text-[12px] font-bold outline-none w-full bg-transparent mt-1 appearance-none">
                                <option>00:00 AM</option>
                                <option>10:00 AM</option>
                            </select>
                        </div>
                    </div>

                    {/* Drop-off Section */}
                    <div className="lg:col-span-4 flex gap-2">
                        <div className="flex-1 p-3 border border-gray-200 rounded-2xl h-[17.5]">
                            <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                                <Calendar size={12}/> Drop-off Date
                            </span>
                            <input type="date" className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent mt-1" />
                        </div>
                        <div className="w-1/3 p-3 border border-gray-200 rounded-2xl h-[17.75]">
                            <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                                <Clock size={12}/> Time
                            </span>
                            <select className="text-[12px] font-bold outline-none w-full bg-transparent mt-1 appearance-none">
                                <option>00:00 AM</option>
                                <option>10:00 AM</option>
                            </select>
                        </div>
                    </div>

                    {/* Travellers & Search Button */}
                    <div className="lg:col-span-3">
                         <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl h-[17.75] bg-white">
                            <Users className="text-blue-600 shrink-0" size={20} />
                            <div className="flex flex-col w-full">
                                <span className="text-[10px] font-bold text-gray-400">Travellers</span>
                                <select className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent">
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <button className="w-full h-[17.5] bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all p-3">
                            <Search size={35} strokeWidth={2} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CarsForm;
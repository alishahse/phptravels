import { useState } from "react";
import Flight from "./Flight";
import HotelForm from "../hotelsCom/HotelForm";
import ToursForm from "../tourscomponent/ToursForm";
import CarsForm from "../cars/CarsForm";
import VisaForm from "../visacomponents/VisaForm";

const FlightSearch = () => {
    const myFlightSearch = [
        {id: 1, moduleName: "Flights", icon:""},
        {id: 2, moduleName: "Hotels", icon:""},
        {id: 3, moduleName: "Tours", icon:""},
        {id: 4, moduleName: "Cars", icon:""},
        {id: 5, moduleName: "Visa", icon:""},
    ];

    const [activeTab, setActiveTab] = useState("Flights");

    return (
        <div className="w-full max-w-7xl mx-auto">
            
            {/* Search Bar hotel ================================================== */}
            <ul className="flex flex-wrap items-center justify-center gap-3 bg-white/10 backdrop-blur-medium py-3 px-3 rounded-full border border-white/20 shadow-xl max-w-2xl mx-auto">
                {myFlightSearch.map((item) => {
                    const isActive = activeTab === item.moduleName;
                    return (
                        <li key={item.id}>
                            <button
                                onClick={() => setActiveTab(item.moduleName)}
                                className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 active:scale-95 text-sm md:text-base
                                    ${isActive ? "bg-white text-black shadow-md" : "bg-transparent text-white hover:bg-white/5"}`}
                            >
                                {item.moduleName}
                            </button>
                        </li>
                    );
                })}
            </ul>

            <div>
                {activeTab === "Flights" && <Flight />}
                {activeTab === "Hotels" && <HotelForm />}
                {activeTab === "Tours" && <ToursForm />}
                {activeTab === "Cars" && <CarsForm />}
                {activeTab === "Visa" && <VisaForm />}
            </div>
        </div>
    
    );
}

export default FlightSearch;
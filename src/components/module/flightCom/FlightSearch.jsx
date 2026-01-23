import { useState } from "react";
import Flight from "./Flight.jsx";
import HotelForm from "../hotelsCom/HotelForm";
import ToursForm from "../tourscomponent/ToursForm";
import CarsForm from "../cars/CarsForm";
import VisaForm from "../visacomponents/VisaForm";

const FlightSearch = () => {
    const myFlightSearch = [
        {id: 1, moduleName: "Flights", icon:(<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="m9.925 21.125l-2.475-4.6l-4.6-2.475l1.775-1.75l3.625.625l2.55-2.55L2.875 7l2.1-2.15l9.625 1.7l3.1-3.1q.575-.575 1.425-.575t1.425.575t.575 1.412t-.575 1.413L17.425 9.4l1.7 9.6L17 21.125L13.6 13.2l-2.55 2.55l.65 3.6z"/></svg>)},
        {id: 2, moduleName: "Hotels", icon:(<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zm0 4v-2h4V5h-9v1.4l-2-1.45V3h13v18zM1 21V11l7-5l7 5v10H9v-5H7v5zm2-2h2v-5h6v5h2v-7L8 8.45L3 12zm8 0v-5H5v5v-5h6z"/></svg>)},
        {id: 3, moduleName: "Tours", icon:(<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M3 19v-8.923q0-.69.463-1.153t1.152-.462H7.5V6.615q0-.69.463-1.153T9.116 5h5.769q.69 0 1.153.462t.462 1.153v1.846h2.885q.69 0 1.152.463T21 10.077V19zm4.385-4.77v1h-1v-1H4V18h16v-3.77h-2.384v1h-1v-1zM4 10.078v3.154h2.385v-1h1v1h9.23v-1h1v1H20v-3.154q0-.23-.192-.423q-.193-.192-.424-.192H4.616q-.231 0-.424.192T4 10.077m4.5-1.616h7V6.615q0-.23-.192-.423T14.885 6h-5.77q-.23 0-.423.192t-.192.424z"/></svg>)},
        {id: 4, moduleName: "Cars", icon:(<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.77q-.213 0-.357-.145t-.143-.356v-2.5H5q-.213 0-.356-.144t-.144-.357t.144-.356T5 16.77h14q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143h-6.5v2.5q0 .213-.144.357t-.357.143m-3.383-8.73q.309 0 .539-.23t.23-.54t-.23-.54t-.54-.229t-.539.23t-.23.54t.23.539t.54.23m6.769 0q.31 0 .539-.23t.23-.54t-.23-.54t-.54-.229t-.539.23t-.23.54t.23.539t.54.23m-8.886 3.73q-.212 0-.356-.144T6 15.27V9.791q0-.142.016-.273q.015-.131.06-.262l1.2-3.406q.157-.48.569-.78t.946-.3h6.416q.534 0 .946.3t.569.78l1.202 3.406q.044.13.06.262q.015.131.015.273v5.478q0 .213-.144.357t-.357.143t-.356-.143t-.143-.357v-1.5H7v1.5q0 .213-.144.356t-.357.144m.805-7h9.392l-.912-2.596q-.057-.192-.211-.298t-.365-.106H8.792q-.211 0-.365.106t-.211.298z"/></svg>)},
        {id: 5, moduleName: "Visa", icon:(<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10h5V8h-5zm0 6h5v-2h-5zm-3-5q.825 0 1.413-.587T11 9t-.587-1.412T9 7t-1.412.588T7 9t.588 1.413T9 11m0 6q.825 0 1.413-.587T11 15t-.587-1.412T9 13t-1.412.588T7 15t.588 1.413T9 17m-4 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"/></svg>)}
    ]

    const [activeTab, setActiveTab] = useState("Flights");

    return (
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
    
    {/* Search Bar Tabs */}
    <ul className="flex flex-wrap gap-1 bg-white/10 backdrop-blur-md py-2.5 px-2.5 rounded-full border border-white/20 shadow-xl max-w-fit mx-auto relative z-10">
        {myFlightSearch.map((item) => {
            const isActive = activeTab === item.moduleName;
            return (
                <li key={item.id}>
                    <button
                        onClick={() => setActiveTab(item.moduleName)}
                        className={`px-6 py-4 rounded-full font-bold flex items-center gap-2 transition-all duration-300 active:scale-95 text-sm
                            ${isActive ? "bg-white text-black shadow-md" : "bg-transparent text-white hover:bg-white/10"}`}
                    >
                        <span className="text-lg">{item.icon}</span>
                        {item.moduleName}
                    </button>
                </li>
            );
        })}
    </ul>

    {/* Form Section - Negative margin added to pull it UP */}
    <div className="w-full -mt-4 relative z-0"> 
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
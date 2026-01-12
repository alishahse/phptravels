import React from "react";
import { Link } from "react-router-dom";


const Featuredflights = () => {

    const featuredFlights = [
       { id: 1, from: "Lahore", to: "Dubai", airline: "Pakistan Internatio...", price: "100.00" },
       { id: 2, from: "Kuala Lumpur", to: "Dubai", airline: "Malaysia Airlines", price: "620.00" },
       { id: 3,  from: "Berlin", to: "Istanbul", airline: "Turkish Airlines", price: "600.00" },
       { id: 4, from: "Dubai", to: "Sharjah", airline: "Emirates", price: "460.00" },
       { id: 5, from: "Dhaka", to: "Jeddah", airline: "Australian Airlines", price: "385.00" },
       { id: 6, from: "Delhi", to: "Moscow", airline: "Air India Limited", price: "760.00" },
       { id: 7, from: "Manila", to: "Dubai", airline: "Air Philippines", price: "450.00" },
       { id: 8, from: "Surabaya", to: "New York", airline: "American Airlines", price: "800.00" },
       { id: 9, from: "Berlin", to: "Dubai", airline: "Air Arabia", price: "240.00" },
      ];
      
    return(
        <>


 {/* ===================== Flights Featured ====================== */}
<section className="-mt-25">
  <div className="max-w-6xl mx-auto px-8">
    <div className="mb-5">
      <h2 className="text-2xl font-bold text-gray-900">Featured Flights</h2>
      <p className="text-lg text-gray-900">These alluring destinations are picked just for you.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {featuredFlights.map((flight, id) => (
        <Link
                                to={`/flight-details/${flight.id}`} 
                                key={flight.id}
                                className={`bg-white p-5 rounded-2xl shadow-sm border flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer ${
                                    id === 0 ? "border-blue-500 ring-1 ring-blue-500" : "border-gray-100"
                                }`}
                            >
          {/* Left Side: Departure */}
          <div className="text-left flex-1">
            <h3 className="text-medium font-bold text-gray-800">{flight.from}</h3>
            <p className="text-sm text-gray-400 truncate max-w-[120px]">{flight.airline}</p>
          </div>

          {/* Middle: Icon with subtle vertical line */}
          <div className="flex flex-col items-center px-4 relative">
             <div className="w-[1px] h-full bg-gray-100 absolute top-0 bottom-0"></div>
             <div className="bg-blue-600 text-white p-1.5 rounded-full z-10 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 rotate-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
             </div>
          </div>

          {/* Right Side: Arrival & Price */}
          <div className="text-right flex-1">
            <h3 className="text-medium font-bold text-gray-800">{flight.to}</h3>
            <p className="text-sm text-gray-500">
                From <span className="text-gray-400">USD {flight.price}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
        </>
    )
}

export default Featuredflights;
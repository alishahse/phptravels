import { useNavigate } from "react-router-dom"; // 1. useNavigate import karein
import HotelForm from "./HotelForm";

const Hotelcard = () => {
  const navigate = useNavigate(); // 2. Hook initialize karein

  const hotels = [
    {
      id: 1,
      name: "Burj Al Arab Jumeirah",
      location: "Dubai, Jumeirah Beach Road, Dubai, UAE",
      rating: 5.0,
      price: "1800.00",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500",
      type: "HOTELS",
      features: ["Free WiFi", "Swimming Pool", "Parking", "+7"],
      refundable: true,
      discount: "10% OFF"
    },
    {
      id: 2,
      name: "Atlantis The Royal",
      location: "Palm Jumeirah, Dubai, UAE",
      rating: 4.9,
      price: "1200.00",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500",
      type: "RESORTS",
      features: ["Free WiFi", "Beach Front", "Spa", "+12"],
      bestseller: true,
      refundable: true
    },
    {
      id: 3,
      name: "JW Marriott Marquis Hotel",
      location: "Business Bay, Dubai, UAE",
      rating: 4.5,
      price: "350.00",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
      type: "HOTELS",
      features: ["Free WiFi", "Gym", "Breakfast Included", "+5"],
      valueForMoney: true
    }
  ];

  // 3. Navigation handler function
  const handleBookNow = (hotel) => {
    // Aap yahan state bhi pass kar sakte hain taake booking page ko pata ho konsa hotel hai
    navigate("/RoomSelection", { state: { selectedHotel: hotel } });
  };

  return (
    <>
      <HotelForm />

      <div className="bg-white min-h-screen p-4 md:p-8 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          
          {/* LEFT SIDEBAR: Filters */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold flex items-center gap-2">
                  <span className="text-blue-600">≡</span> Filters <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">3</span>
                </h2>
                <button className="text-sm text-gray-500 hover:text-blue-600">Clear Filter</button>
              </div>

              {/* Search, Price, etc. (Same as before) */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Search by Name</label>
                <input type="text" placeholder="Type Hotel Name..." className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 text-sm outline-none" />
              </div>
              {/* ... other filters ... */}
            </div>
          </aside>

          {/* RIGHT SIDE: Hotel Cards */}
          <main className="lg:w-3/4 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-xl font-bold text-gray-800">{hotels.length} Hotels</h1>
                <p className="text-xs text-gray-500">Found From 1 Supplier(s)</p>
              </div>
            </div>

            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
                {/* Image Section */}
                <div className="md:w-1/3 relative">
                  <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover min-h-50" />
                  <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    ★ {hotel.rating}
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">📍 {hotel.location}</p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {hotel.features.map((f, i) => (
                        <span key={i} className="text-[10px] text-blue-600">{f}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-end mt-6 pt-4 border-t border-gray-50">
                    <div>
                      <span className="text-[10px] text-gray-400 block">From</span>
                      <span className="text-xl font-black text-gray-900">USD {hotel.price}</span>
                    </div>
                    
                    {/* 4. Button par onClick listener lagayein */}
                    <button 
                      onClick={() => handleBookNow(hotel)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors"
                    >
                      Book Now <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default Hotelcard;
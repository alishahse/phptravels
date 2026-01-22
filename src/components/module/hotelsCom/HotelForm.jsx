import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Users,
  Search,
  Plus,
  Minus,
  ChevronDown,
  Globe,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// ===== Static City Data =====
const citiesData = [
  { id: 1, name: "Dubai", country: "UAE" },
  { id: 2, name: "Karachi", country: "Pakistan" },
  { id: 3, name: "Lahore", country: "Pakistan" },
  { id: 4, name: "Islamabad", country: "Pakistan" },
  { id: 5, name: "Mumbai", country: "India" },
  { id: 6, name: "New York", country: "USA" },
  { id: 7, name: "London", country: "UK" },
];

const HotelForm = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const cityRef = useRef(null);
  const checkoutRef = useRef(null); // for auto open

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [showCityList, setShowCityList] = useState(false);

  const [bookingData, setBookingData] = useState({
    rooms: 1,
    adults: 2,
    childs: 0,
    nationality: "Pakistan",
  });

  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);

  // ===== Click Outside Logic =====
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (cityRef.current && !cityRef.current.contains(event.target)) {
        setShowCityList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ===== Filter Cities =====
  const filteredCities = citiesData.filter((city) =>
    city.name.toLowerCase().includes(citySearch.toLowerCase())
  );

  // ===== Handle Checkin/Checkout Dates =====
  const handleCheckinChange = (date) => {
    setCheckin(date);
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setCheckout(nextDay);

    // Auto open checkout picker after a short delay
    setTimeout(() => {
      checkoutRef.current.setOpen(true);
    }, 100);
  };

  // ===== Update Travelers Count =====
  const updateCount = (field, action) => {
    setBookingData((prev) => {
      let value = prev[field];
      if (action === "inc") value += 1;
      if (action === "dec") value -= 1;
      if (field === "rooms" && value < 1) value = 1;
      if (field === "adults" && value < 1) value = 1;
      if (field === "childs" && value < 0) value = 0;
      return { ...prev, [field]: value };
    });
  };

  // ===== Handle Search =====
  const handleSearch = (e) => {
    e.preventDefault();
    if (!citySearch) {
      alert("Please select a city");
      return;
    }

    const staticHotels = [
      {
        id: 1,
        name: "Luxury Palace",
        location: citySearch,
        price: "Rs. 45,000",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: 2,
        name: "City View Hotel",
        location: citySearch,
        price: "Rs. 25,000",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
      },
    ];

    navigate("/Hotelcard", {
      state: { hotels: staticHotels, searchQuery: { city: citySearch, ...bookingData } },
    });
  };

  return (
    <div className="w-full min-h-[15vh] flex flex-col items-center justify-start px-4 mt-3 relative z-40">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-md p-5 border border-gray-100">
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center"
        >
          {/* ===== City Input ===== */}
          <div className="lg:col-span-4 relative" ref={cityRef}>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-md h-[18.75] focus-within:border-blue-500 transition-all">
              <MapPin className="text-gray-400" size={22} />
              <div className="flex flex-col w-full">
                <label className="text-[11px] font-bold text-gray-400 tracking-wide">
                  Search By City
                </label>
                <input
                  type="text"
                  placeholder="Enter city..."
                  value={citySearch}
                  onFocus={() => setShowCityList(true)}
                  onChange={(e) => setCitySearch(e.target.value)}
                  className="text-sm font-bold text-gray-900 outline-none w-full bg-transparent"
                />
              </div>
            </div>

            {showCityList && filteredCities.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-lg mt-1 z-50 border border-gray-100 max-h-60 overflow-y-auto">
                {filteredCities.map((city) => (
                  <div
                    key={city.id}
                    onClick={() => {
                      setCitySearch(city.name);
                      setShowCityList(false);
                    }}
                    className="p-3 hover:bg-blue-50 cursor-pointer flex items-center gap-3 border-b border-gray-50 last:border-0"
                  >
                    <MapPin size={16} className="text-gray-400" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">{city.name}</p>
                      <p className="text-[10px] text-gray-500 uppercase">{city.country}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ===== Checkin Date ===== */}
          <div className="lg:col-span-2">
            <div className="flex flex-col w-full">
              <DatePicker
                selected={checkin}
                onChange={handleCheckinChange}
                minDate={new Date()}
                className="w-full p-5 border border-gray-200 rounded-md outline-none text-gray-900"
                placeholderText="Select checkin"
                
              />
            </div>
          </div>

          {/* ===== Checkout Date ===== */}
          <div className="lg:col-span-2">
            <div className="flex flex-col w-full">
              <DatePicker
                selected={checkout}
                onChange={(date) => setCheckout(date)}
                minDate={checkin ? new Date(checkin.getTime() + 24 * 60 * 60 * 1000) : new Date()}
                className="w-full p-5 border border-gray-200 rounded-md outline-none text-gray-900 bg-gray-50"
                placeholderText="Select checkout"
                ref={checkoutRef}
              />
            </div>
          </div>

          {/* ===== Travelers Dropdown ===== */}
          <div className="lg:col-span-3 relative" ref={dropdownRef}>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-md h-[18.75] cursor-pointer hover:border-gray-300 transition-all"
            >
              <div className="flex items-center gap-3">
                <Users className="text-gray-400" size={22} />
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-gray-400 tracking-wide">
                    Travellers
                  </label>
                  <span className="text-[13px] font-bold text-gray-900">
                    {bookingData.adults + bookingData.childs} Travelers, {bookingData.rooms} Room
                  </span>
                </div>
              </div>
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 w-full md:w-80 bg-white shadow-2xl rounded-2xl p-5 z-50 border border-gray-100">
                <CounterRow label="Rooms" count={bookingData.rooms} onDec={() => updateCount("rooms", "dec")} onInc={() => updateCount("rooms", "inc")} />
                <CounterRow label="Adults" count={bookingData.adults} onDec={() => updateCount("adults", "dec")} onInc={() => updateCount("adults", "inc")} />
                <CounterRow label="Childs" count={bookingData.childs} onDec={() => updateCount("childs", "dec")} onInc={() => updateCount("childs", "inc")} />
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <label className="text-[10px] font-bold text-gray-400 block mb-2">Nationality</label>
                  <div className="relative">
                    <select
                      value={bookingData.nationality}
                      onChange={(e) => setBookingData({ ...bookingData, nationality: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold outline-none appearance-none cursor-pointer"
                    >
                      <option value="Pakistan">Pakistan</option>
                      <option value="India">India</option>
                      <option value="UAE">UAE</option>
                    </select>
                    <Globe size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <button type="submit" className="w-full h-15.5 bg-blue-600 hover:bg-black text-white rounded-md flex items-center justify-center shadow-lg active:scale-95 transition-all">
              <Search size={20} strokeWidth={3} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CounterRow = ({ label, count, onDec, onInc }) => (
  <div className="flex justify-between items-center mb-4 last:mb-0">
    <span className="font-bold text-gray-700 text-sm">{label}</span>
    <div className="flex items-center gap-3">
      <button type="button" onClick={onDec} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
        <Minus size={14} />
      </button>
      <span className="w-4 text-center font-bold text-gray-900 text-sm">{count}</span>
      <button type="button" onClick={onInc} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
        <Plus size={14} />
      </button>
    </div>
  </div>
);

export default HotelForm;

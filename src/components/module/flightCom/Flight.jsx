import React, { useState, useRef, useEffect } from "react";

import {
  Calendar,
  Users,
  Search,
  Plus,
  Minus,
  ChevronDown,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

// static array object ============================================

const airportsData = [
  {
    id: 1,
    code: "KHI",
    name: "Jinnah International Airport",
    city: "Karachi",
    country: "Pakistan",
  },

  {
    id: 2,
    code: "LHE",
    name: "Allama Iqbal International Airport",
    city: "Lahore",
    country: "Pakistan",
  },

  {
    id: 3,
    code: "ISB",
    name: "Islamabad International Airport",
    city: "Islamabad",
    country: "Pakistan",
  },

  {
    id: 4,
    code: "DXB",
    name: "Dubai International Airport",
    city: "Dubai",
    country: "UAE",
  },

  {
    id: 5,
    code: "SHJ",
    name: "Sharjah International Airport",
    city: "Sharjah",
    country: "UAE",
  },

  {
    id: 6,
    code: "DEL",
    name: "Indira Gandhi International Airport",
    city: "Delhi",
    country: "India",
  },

  {
    id: 7,
    code: "BOM",
    name: "Chhatrapati Shivaji Airport",
    city: "Mumbai",
    country: "India",
  },

  {
    id: 8,
    code: "LHR",
    name: "Heathrow Airport",
    city: "London",
    country: "United Kingdom",
  },

  {
    id: 9,
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
    country: "USA",
  },

  {
    id: 10,
    code: "YYZ",
    name: "Toronto Pearson International Airport",
    city: "Toronto",
    country: "Canada",
  },

  {
    id: 11,
    code: "CDG",
    name: "Charles de Gaulle Airport",
    city: "Paris",
    country: "France",
  },

  {
    id: 12,
    code: "FRA",
    name: "Frankfurt Airport",
    city: "Frankfurt",
    country: "Germany",
  },

  {
    id: 13,
    code: "IST",
    name: "Istanbul Airport",
    city: "Istanbul",
    country: "Turkey",
  },

  {
    id: 14,
    code: "SIN",
    name: "Changi Airport",
    city: "Singapore",
    country: "Singapore",
  },

  {
    id: 15,
    code: "HND",
    name: "Haneda Airport",
    city: "Tokyo",
    country: "Japan",
  },
];

// Flight main Function ==========================================

const Flight = () => {
  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    from: "",

    destination: "",

    Date: "2006-01-20",

    returnDate: "",

    class: "economy",

    flightType: "one-way",

    travelers: { adults: 1, child: 0, infants: 0 }, // Default 1 Adult
  });

  // For Close the Dropdwon ========================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Travelers Update Function =================================================

  const updateTravelers = (type, operation) => {
    setFormData((prev) => {
      let currentVal = prev.travelers[type];

      let newVal = operation === "inc" ? currentVal + 1 : currentVal - 1;

      // Rules for adults minimum is 1 =================================

      if (type === "adults" && newVal < 1) newVal = 1;

      if (newVal < 0) newVal = 0;

      return {
        ...prev,

        travelers: { ...prev.travelers, [type]: newVal },
      };
    });
  };

  const totalTravelers = Object.values(formData.travelers).reduce(
    (a, b) => a + b,
    0,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.from || !formData.destination) {
      alert("Please select both 'From' and 'Destination'");
      return;
    }

    // we are send the static data ==========================
    const flightsToPass = [
      {
        id: 1,
        from: formData.from,
        to: formData.destination,
        airline: "PIA",
        price: "Rs. 35,000",
        date: formData.Date,
      },
      {
        id: 2,
        from: formData.from,
        to: formData.destination,
        airline: "Air Sial",
        price: "Rs. 28,000",
        date: formData.Date,
      },
    ];

    // use the navigate hook here to send the data from it to searchResults page ====================
    navigate("/results", {
      state: { flights: flightsToPass },
    });
  };

  return (
    <div className=" mx-auto relative z-30 mt-3 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl px-3 py-5 border border-gray-100"
      >
        {/* Top Options ================================================= */}

        <div className="flex gap-1 mb-2">
          <select
            className="bg-transparent text-xs px-4 py-1 font-bold outline-none text-gray-700 border border-gray-300 rounded-sm"
            name="flightType"
            value={formData.flightType}
            onChange={handleInputChange}
          >
            <option value="one-way">One Way</option>

            <option value="return">Return</option>
          </select>

          <select
            className="bg-transparent text-xs px-4 py-1 font-bold outline-none text-gray-700 border border-gray-300 rounded-sm"
            name="class"
            value={formData.class}
            onChange={handleInputChange}
          >
            <option value="economy">Economy</option>

            <option value="business">Business</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-1">
          {/* Flying From ==================================================*/}

          <div className="flex-1 w-full p-2 border border-gray-200 rounded-md flex items-center ">
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 font-semibold">
                Flying From
              </label>

              <select
                name="from"
                className="outline-none text-xs font-bold text-gray-800"
                value={formData.from}
                onChange={handleInputChange}
              >
                <option value=" ">Select city</option>

                {airportsData.map((a) => (
                  <option key={a.id}>
                    {a.code} {a.city} {a.country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Destination =================================================== */}

          <div className="flex-1 w-full p-2 border border-gray-200 rounded-md flex items-center gap-3">
            <div className="flex flex-col flex-1">
              <label className="text-xs text-gray-500 font-semibold">
                Destination To
              </label>

              <select
                name="destination"
                className="outline-none text-xs font-bold text-gray-800"
                value={formData.destination}
                onChange={handleInputChange}
              >
                <option value="">Select city</option>

                {airportsData.map((a) => (
                  <option key={a.id}>
                    {a.code} {a.city} {a.country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date ==========================================================*/}

          {/* Date Section ==========================================================*/}
          <div className="flex-2 w-full flex flex-col lg:flex-row gap-2">
            {/* Depart Date is show always ====================================*/}
            <div className="flex-1 p-2 border border-gray-200 rounded-md flex items-center gap-3">
              <div className="flex flex-col w-full">
                <label className="text-xs text-gray-500 font-sm">
                  Depart Date
                </label>
                <input
                  type="date"
                  name="Date"
                  value={formData.Date}
                  onChange={handleInputChange}
                  className="outline-none font-bold text-gray-800 text-xs bg-transparent cursor-pointer w-full"
                />
              </div>
            </div>

            {/* Return is ever when selected =====================================  */}
            {formData.flightType === "return" && (
              <div className="flex-1 p-2 border border-gray-200 rounded-md flex items-center gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
                <div className="flex flex-col w-full">
                  <label className="text-xs text-gray-500 font-sm">
                    Return Date
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    className="outline-none font-bold text-gray-800 text-xs bg-transparent cursor-pointer w-full"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Travelers Dropdown ==============================================*/}

          <div className="flex-1 w-full relative" ref={dropdownRef}>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="border border-gray-200 rounded-md py-4.5  px-2 flex items-center justify-between cursor-pointer bg-white"
            >
              <div className="flex items-center gap-3">
                <Users className="text-gray-400" size={18} />

                <div className="flex flex-col">
                  <span className="font-bold text-gray-800 text-xs">
                    {totalTravelers} Travellers
                  </span>
                </div>
              </div>

              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-[110%] right-0 w-72 bg-white shadow-2xl rounded-2xl p-3 z-50 border border-gray-50">
                <TravelerRow
                  label="Adults"
                  sub="+12 Year"
                  count={formData.travelers.adults}
                  type="adults"
                  onUpdate={updateTravelers}
                />

                <TravelerRow
                  label="Childs"
                  sub="2 - 11 Year"
                  count={formData.travelers.child}
                  type="child"
                  onUpdate={updateTravelers}
                />

                <TravelerRow
                  label="Infants"
                  sub="-2 Year"
                  count={formData.travelers.infants}
                  type="infants"
                  onUpdate={updateTravelers}
                />
              </div>
            )}
          </div>

          {/* Search Button ====================================================== */}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl transition-all shadow-lg active:scale-95"
          >
            <Search size={24} strokeWidth={3} />
          </button>
        </div>
      </form>
    </div>
  );
};

// Reusable Row Component Travler ================================

const TravelerRow = ({ label, sub, count, type, onUpdate }) => (
  <div className="flex justify-between items-center mb-4 last:mb-0">
    <div className="flex flex-col">
      <span className="font-bold text-gray-800 text-sm">{label}</span>

      <span className="text-[10px] text-gray-400 uppercase font-semibold">
        {sub}
      </span>
    </div>

    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onUpdate(type, "dec")}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-600 disabled:opacity-20"
      >
        <Minus size={14} />
      </button>

      <span className="w-5 text-center font-bold text-gray-800">{count}</span>

      <button
        type="button"
        onClick={() => onUpdate(type, "inc")}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-600"
      >
        <Plus size={14} />
      </button>
    </div>
  </div>
);

export default Flight;

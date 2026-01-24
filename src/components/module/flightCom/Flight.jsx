import React, { useState, useRef, useEffect } from "react";
import {
  Users,
  Search,
  Plus,
  Minus,
  ChevronDown,
  PlaneTakeoff,
  PlaneLanding,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const customStyles = `
  .custom-date-input::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
  /* Floating Label Logic */
  .floating-label-input:focus ~ .floating-label,
  .floating-label-input:not(:placeholder-shown) ~ .floating-label {
    transform: translateY(-0.6rem) scale(0.85);
    color: gray;
    background-color: white;
    padding: 0 4px;
  }
`;

const airportsData = [
  {
    id: 1,
    code: "KHI",
    city: "KHI - Jinnah International Airport",
    country: "Pakistan",
  },
  {
    id: 2,
    code: "LHE",
    city: "LHE - Allama Iqbal International Airport",
    country: "Pakistan",
  },
  {
    id: 3,
    code: "ISB",
    city: "ISB - New Islamabad International Airport",
    country: "Pakistan",
  },
  {
    id: 4,
    code: "DXB",
    city: "DXB - Dubai International Airport",
    country: "UAE",
  },
];

const Flight = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const departInputRef = useRef(null);
  const returnInputRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSearch, setActiveSearch] = useState(null);

  const [formData, setFormData] = useState({
    from: "",
    destination: "",
    Date: "2026-01-26",
    returnDate: "2026-01-26",
    class: "Economy",
    flightType: "return",
    travelers: { adults: 1, child: 0, infants: 0 },
  });

  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");

  const filteredAirports = (searchTerm) => {
    return airportsData.filter(
      (item) =>
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-container")) setActiveSearch(null);
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openCalendar = (ref) => {
    if (ref.current) {
      try {
        ref.current.showPicker();
      } catch (e) {
        ref.current.click();
      }
    }
  };

  const handleDepartDateChange = (e) => {
    const selectedDate = e.target.value;
    const dateObj = new Date(selectedDate);
    dateObj.setDate(dateObj.getDate() + 1);
    const nextDay = dateObj.toISOString().split("T")[0];
    setFormData({
      ...formData,
      Date: selectedDate,
      returnDate: nextDay,
      flightType: "return",
    });
    setTimeout(() => {
      if (returnInputRef.current) openCalendar(returnInputRef);
    }, 100);
  };

  const updateCount = (type, op) => {
    setFormData((prev) => ({
      ...prev,
      travelers: {
        ...prev.travelers,
        [type]:
          op === "inc"
            ? prev.travelers[type] + 1
            : Math.max(0, prev.travelers[type] - 1),
      },
    }));
  };

  const totalTravelers = Object.values(formData.travelers).reduce(
    (a, b) => a + b,
    0,
  );

  return (
    <div className="mx-auto relative z-30 mt-10 max-w-7xl px-4">
      <style>{customStyles}</style>
      <form className="bg-white shadow-2xl rounded-2xl p-4 border border-gray-100">
        {/* Top Selectors */}
        <div className="flex gap-1 mb-1">
          <select
            className="text-sm font-bold border border-gray-200 rounded-md px-5 outline-none text-gray-800"
            value={formData.flightType}
            onChange={(e) =>
              setFormData({ ...formData, flightType: e.target.value })
            }
          >
            <option value="one-way">One Way</option>
            <option value="return">Return</option>
          </select>
          <select
            className="text-sm font-bold border border-gray-200 rounded-md px-5 py-2 outline-none text-gray-800"
            value={formData.class}
            onChange={(e) =>
              setFormData({ ...formData, class: e.target.value })
            }
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2 bg-white rounded-md">
          {/* Flying From ================================================*/}
          <div className="flex-1 w-full relative search-container border border-gray-200 rounded-md  px-3 flex items-center hover:border-blue-500 transition-all gap-2 h-[58px]">
            <div className="relative flex-1">
              <input
                type="text"
                id="fromInput"
                placeholder=" "
                className="peer w-full outline-none text-sm font-bold text-gray-900 pt-4 pb-1 bg-transparent"
                value={fromSearch}
                onFocus={() => setActiveSearch("from")}
                onChange={(e) => setFromSearch(e.target.value)}
              />

              <label
                htmlFor="fromInput"
                className="
                   absolute left-0 top-1.5
                   flex items-center gap-1.5
                   text-black text-[16px]
                    transition-all duration-200
                    pointer-events-none

                    peer-focus:-top-1.5
                    peer-focus:text-[11px]
                   peer-focus:text-gray-600

                    peer-not-placeholder-shown:-top-2
                    peer-not-placeholder-shown:text-[11px]"
                    >
                   <PlaneTakeoff
                     className="
                       transition-all duration-200
                       peer-focus:scale-75
                       peer-not-placeholder-shown:scale-75"
                       size={17}
                    />
                Flying From
              </label>
            </div>
            {activeSearch === "from" && (
              <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-md z-50 mt-1 overflow-hidden border border-gray-100">
                {filteredAirports(fromSearch).map((a) => (
                  <div
                    key={a.id}
                    className="p-3 hover:bg-blue-50 cursor-pointer text-xs font-bold"
                    onClick={() => {
                      setFromSearch(a.city);
                      setActiveSearch(null);
                    }}
                  >
                    {a.city}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Destination To */}
          <div className="flex-1 w-full relative search-container border border-gray-200 rounded-md  px-3 flex items-center hover:border-blue-500 transition-all gap-2 h-[58px]">
            <div className="relative flex-1">
              <input
                type="text"
                id="fromInput-1"
                placeholder=" "
                className="peer w-full outline-none text-sm font-bold text-gray-900 pt-4 pb-1 bg-transparent"
                value={toSearch}
                onFocus={() => setActiveSearch("from-2")}
                onChange={(e) => setToSearch(e.target.value)}
              />

              <label
                htmlFor="fromInput-1"
                className="
                  absolute left-0 top-1.5
                  flex items-center gap-1.5
                 text-black text-[16px]
                  transition-all duration-200
                  pointer-events-none

                  peer-focus:-top-1.5
                  peer-focus:text-[11px]
                 peer-focus:text-gray-600

                 peer-not-placeholder-shown:-top-2
                 peer-not-placeholder-shown:text-[11px]"
                 >
                 <PlaneTakeoff
                   className="
                     transition-all duration-200
                     peer-focus:scale-75
                     peer-not-placeholder-shown:scale-75"
                     size={17}
                   />
                  Destination
              </label>
            </div>
            {activeSearch === "from-2" && (
              <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-md z-50 mt-1 overflow-hidden border border-gray-100">
                {filteredAirports(toSearch).map((a) => (
                  <div
                    key={a.id}
                    className="p-3 hover:bg-blue-50 cursor-pointer text-xs font-bold"
                    onClick={() => {
                      setToSearch(a.city);
                      setActiveSearch(null);
                    }}
                  >
                    {a.city}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dates Section Updated */}
          <div className="flex-1 flex gap-2 w-full h-[58px]">
            {/* Depart Date */}
            <div
              onClick={() => openCalendar(departInputRef)}
              className="flex-1 p-2 border border-gray-200 hover:border-blue-500 rounded-md cursor-pointer flex flex-col justify-center"
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <Calendar className="text-black" size={12} />
                <label className="text-[12px] text-gray-500 leading-none">
                  Depart Date
                </label>
              </div>
              <input
                ref={departInputRef}
                type="date"
                value={formData.Date}
                onChange={handleDepartDateChange}
                className="custom-date-input w-full outline-none font-bold text-xs cursor-pointer bg-transparent"
              />
            </div>

            {/* Return Date */}
            {formData.flightType === "return" && (
              <div
                onClick={() => openCalendar(returnInputRef)}
                className="flex-1 p-2 border border-gray-200 rounded-md cursor-pointer flex flex-col justify-center hover:border-blue-500"
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Calendar className="text-black" size={12} />
                  <label className="text-[12px] text-gray-500 leading-none">
                    Return Date
                  </label>
                </div>
                <input
                  ref={returnInputRef}
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) =>
                    setFormData({ ...formData, returnDate: e.target.value })
                  }
                  className="custom-date-input w-full outline-none font-bold text-xs cursor-pointer bg-transparent"
                />
              </div>
            )}
          </div>

          {/* Travelers Dropdown */}
          <div className="w-45 relative h-[58px]" ref={dropdownRef}>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-full border border-gray-200 rounded-md px-4 flex items-center justify-between cursor-pointer hover:border-blue-500 hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <Users className="text-black" size={19} />
                <span className="text-md text-black">
                  {totalTravelers} Travellers
                </span>
              </div>
              <ChevronDown
                size={15}
                className={`text-gray-800 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-[110%] right-0 w-65 bg-white shadow-lg rounded-md py-2 px-5 z-50 border border-gray-300">
                <TravelerRow
                  label="Adults"
                  sub="+12 Year"
                  count={formData.travelers.adults}
                  onInc={() => updateCount("adults", "inc")}
                  onDec={() => updateCount("adults", "dec")}
                />
                <div className="my-3"></div>
                <TravelerRow
                  label="Childs"
                  sub="2 - 11 Year"
                  count={formData.travelers.child}
                  onInc={() => updateCount("child", "inc")}
                  onDec={() => updateCount("child", "dec")}
                />
                <div className="my-3"></div>
                <TravelerRow
                  label="Infants"
                  sub="-2 Year"
                  count={formData.travelers.infants}
                  onInc={() => updateCount("infants", "inc")}
                  onDec={() => updateCount("infants", "dec")}
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-5 rounded-md hover:bg-blue-700 shadow-lg transition-all active:scale-95"
          >
            <Search size={20} strokeWidth={3} />
          </button>
        </div>
      </form>
    </div>
  );
};

const TravelerRow = ({ label, sub, count, onInc, onDec }) => (
  <div className="flex justify-between items-center p-1 cursor-pointer hover:bg-gray-200 rounded-lg transition-colors duration-150">
    <div className="flex flex-col">
      <span className="font-bold text-gray-800 text-sm">
        {label} <span className="text-[12px] text-gray-800 font-normal ml-1">{sub}</span>
      </span>
    </div>
    <div className="flex items-center gap-2">
      <button type="button" onClick={onDec} className="w-7 h-7 rounded-full border border-black flex items-center justify-center text-black transition-all">
        <Minus size={10} />
      </button>
      <span className="w-4 text-center font-bold text-sm text-gray-800">{count}</span>
      <button type="button" onClick={onInc} className="w-7 h-7 rounded-full border border-black flex items-center justify-center text-black transition-all">
        <Plus size={10} />
      </button>
    </div>
  </div>
);

export default Flight;

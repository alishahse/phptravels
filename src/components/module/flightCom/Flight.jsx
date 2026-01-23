import React, { useState, useRef, useEffect } from "react";
import { Users, Search, Plus, Minus, ChevronDown, PlaneTakeoff, PlaneLanding, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const hideCalendarStyles = `
  .custom-date-input::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

const airportsData = [
  { id: 1, code: "KHI", city: "KHI -jina International Airport", country: "Pakistan" },
  { id: 2, code: "LHE", city: "LHE -Allama Iqbal International Airport", country: "Pakistan" },
  { id: 3, code: "ISB", city: "ISB -New Islamabad International Airport", country: "Pakistan" },
  { id: 4, code: "DXB", city: "DXB -Dubai International Airport", country: "UAE" },
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
    Date: "26-01-2026",
    returnDate: "",
    class: "Economy",
    flightType: "return",
    travelers: { adults: 1, child: 0, infants: 0 },
  });

  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");

  const filteredAirports = (searchTerm) => {
    return airportsData.filter(item => 
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-container")) setActiveSearch(null);
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openCalendar = (ref) => {
    if (ref.current) {
      try { ref.current.showPicker(); } catch (e) { ref.current.click(); }
    }
  };

  const handleDepartDateChange = (e) => {
    const selectedDate = e.target.value;
    const dateObj = new Date(selectedDate);
    dateObj.setDate(dateObj.getDate() + 1);
    const nextDay = dateObj.toISOString().split('T')[0];

    setFormData({ ...formData, Date: selectedDate, returnDate: nextDay, flightType: "return" });

    // Direct open return calendar
    setTimeout(() => {
      if (returnInputRef.current) openCalendar(returnInputRef);
    }, 100);
  };

  const updateCount = (type, op) => {
    setFormData(prev => ({
      ...prev,
      travelers: {
        ...prev.travelers,
        [type]: op === 'inc' ? prev.travelers[type] + 1 : Math.max(0, prev.travelers[type] -1)
      }
    }));
  };

  const totalTravelers = Object.values(formData.travelers).reduce((a, b) => a + b, 0);

  return (
    <div className="mx-auto relative z-30 mt-10 font-sans max-w-7xl px-4">
      <style>{hideCalendarStyles}</style>
      <form className="bg-white shadow-2xl rounded-2xl p-4 border border-gray-100">
        
        {/* Top Selectors */}
        <div className="flex gap-1 mb-1">
          <select 
            className="text-sm font-bold border border-gray-200 rounded-md px-5 outline-none text-gray-800"
            value={formData.flightType}
            onChange={(e) => setFormData({...formData, flightType: e.target.value})}
          >
            <option value="one-way">One Way</option>
            <option value="return">Return</option>
          </select>
          <select 
            className="text-sm font-bold border border-gray-200 rounded-md px-5 py-2 outline-none text-gray-800"
            value={formData.class}
            onChange={(e) => setFormData({...formData, class: e.target.value})}
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2 bg-white rounded-md">
          
          {/* Flying From */}
          <div className="flex-1 w-full relative search-container border border-gray-200 rounded-md p-2 flex items-center hover:border-blue-500 gap-2">
            <PlaneTakeoff className="text-gray-700" size={14} />
            <div className="flex-1">
              <label className="text-[11px] text-gray-500 block tracking-wider">Flying From</label>
              <input 
                type="text"
                className="w-full outline-none text-sm font-bold text-gray-900 placeholder-gray-900"
                placeholder="Origin City"
                value={fromSearch}
                onFocus={() => setActiveSearch('from')}
                onChange={(e) => setFromSearch(e.target.value)}
              />
            </div>
            {activeSearch === 'from' && (
              <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-md z-50 mt-1 overflow-hidden">
                {filteredAirports(fromSearch).map(a => (
                  <div key={a.id} className="p-3 hover:bg-blue-50 cursor-pointer text-xs font-bold " onClick={() => {setFromSearch(a.city); setActiveSearch(null);}}>
                   {a.city}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Destination */}
          <div className="flex-1 w-full relative search-container border border-gray-200 hover:border-blue-500 rounded-md p-2 flex items-center gap-2">
            <PlaneLanding className="text-gray-600" size={14} />
            <div className="flex-1">
              <label className="text-[11px] text-gray-500 block tracking-wider">Destination To</label>
              <input 
                type="text"
                className="w-full outline-none text-sm font-bold text-gray-900 placeholder-gray-900"
                placeholder="Destination City"
                value={toSearch}
                onFocus={() => setActiveSearch('to')}
                onChange={(e) => setToSearch(e.target.value)}
              />
            </div>
            {activeSearch === 'to' && (
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-md z-50 mt-1 overflow-hidden ">
                {filteredAirports(toSearch).map(a => (
                  <div key={a.id} className="p-3 hover:bg-blue-50 cursor-pointer text-xs font-bold" onClick={() => {setToSearch(a.city); setActiveSearch(null);}}>
                    {a.city}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dates */}
          <div className="flex-1 flex gap-2 w-full">
            <div onClick={() => openCalendar(departInputRef)} className="flex-1 p-1 border border-gray-200 hover:border-blue-500 rounded-md cursor-pointer flex items-center gap-2">
              <Calendar className="text-gray-600" size={15} />
              <div>
                <label className="text-[10px] text-gray-500">Depart Date</label>
                <input ref={departInputRef} type="date" value={formData.Date} onChange={handleDepartDateChange} className="custom-date-input w-full outline-none font-bold text-xs cursor-pointer" />
              </div>
            </div>
            {formData.flightType === 'return' && (
              <div onClick={() => openCalendar(returnInputRef)} className="flex-1 p-1 border border-gray-200 rounded-md cursor-pointer flex items-center gap-2 hover:border-blue-500 ">
                <Calendar className="text-gray-600" size={15} />
                <div>
                  <label className="text-[10px] text-gray-500 font-bold">Return Date</label>
                  <input ref={returnInputRef} type="date" value={formData.returnDate} onChange={(e) => setFormData({...formData, returnDate: e.target.value})} className="custom-date-input w-full outline-none font-bold text-xs cursor-pointer" />
                </div>
              </div>
            )}
          </div>

          {/* Travelers Dropdown */}
          <div className="flex-1 w-full relative" ref={dropdownRef}>
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              className="border border-gray-200 rounded-md p-1 flex items-center justify-between cursor-pointer hover:border-blue-500 hover:bg-gray-50 h-15.5"
            >
              <div className="flex items-center gap-3">
                <Users className="text-gray-600" size={14} />
                <div className="flex flex-col">
                   <label className="text-[11px] text-gray-400 font-bold ">Travellers</label>
                   <span className="font-bold text-sm text-gray-800">{totalTravelers} Travellers</span>
                </div>
              </div>
              <ChevronDown size={18} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-[110%] right-0 w-72 bg-white shadow-2xl rounded-2xl p-5 z-50 border border-gray-100 ring-1 ring-black ring-opacity-5">
                <TravelerRow label="Adults" sub="+12 Year" count={formData.travelers.adults} onInc={() => updateCount('adults', 'inc')} onDec={() => updateCount('adults', 'dec')} />
                <div className="h-[1px] bg-gray-100 my-3"></div>
                <TravelerRow label="Childs" sub="2 - 11 Year" count={formData.travelers.child} onInc={() => updateCount('child', 'inc')} onDec={() => updateCount('child', 'dec')} />
                <div className="h-[1px] bg-gray-100 my-3"></div>
                <TravelerRow label="Infants" sub="-2 Year" count={formData.travelers.infants} onInc={() => updateCount('infants', 'inc')} onDec={() => updateCount('infants', 'dec')} />
              </div>
            )}
          </div>

          <button type="submit" className="bg-blue-600 text-white p-5 rounded-xl hover:bg-blue-700 shadow-lg transition-all active:scale-95">
            <Search size={24} strokeWidth={3} />
          </button>
        </div>
      </form>
    </div>
  );
};

// Traveler Row Component
const TravelerRow = ({ label, sub, count, onInc, onDec }) => (
  <div className="flex justify-between items-center">
    <div className="flex flex-col">
      <span className="font-bold text-gray-800 text-sm">{label} <span className="text-[12px] text-gray-800 font-normal ml-1">{sub}</span></span>
    </div>
    <div className="flex items-center gap-4">
      <button 
        type="button" 
        onClick={onDec} 
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors"
      >
        <Minus size={16} />
      </button>
      <span className="w-4 text-center font-bold text-sm text-gray-800">{count}</span>
      <button 
        type="button" 
        onClick={onInc} 
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors"
      >
        <Plus size={16} />
      </button>
    </div>
  </div>
);

export default Flight;
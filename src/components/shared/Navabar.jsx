import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";

const currencies = [
  { code: "USD", name: "United States", flag: "us" },
  { code: "GBP", name: "United Kingdom", flag: "gb" },
  { code: "SAR", name: "Saudi Arabia", flag: "sa" },
  { code: "EUR", name: "Germany", flag: "de" },
  { code: "PHP", name: "Philippines", flag: "ph" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const languages = [
    { name: "English", code: "us", id: "en" },
    { name: "Arabic", code: "sa", id: "ar" },
    { name: "Turkish", code: "tr", id: "tr" },
    { name: "Russian", code: "ru", id: "ru" },
    { name: "French", code: "fr", id: "fr" },
    { name: "Chinese", code: "cn", id: "zh" },
    { name: "Germany", code: "de", id: "de" },
  ];

  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const navLinks = [
    { name: "Flights", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Tours", path: "/tours" },
    { name: "Cars", path: "/cars" },
    { name: "Visa", path: "/visa" },
    { name: "Blogs", path: "/blog" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Shared User Icon SVG
  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
    </svg>
  );

  return (
    <nav className="flex items-center justify-around px-4 py-5 bg-white sticky top-0 z-100 border-b border-gray-100 shadow-sm">
      {/* Left Side: Logo & Nav */}
      <div className="flex items-center gap-6">
        <Link to="/">
          <img src="src/assets/logo.png" alt="logo" className="h-10 object-contain max-w-35.5" />
        </Link>
      <ul className="flex items-center gap-4">
  {navLinks.map((item) => (
    <li key={item.name} className="relative group">
      <Link
        to={item.path}
        className="text-[14px] font-normal text-black transition-colors group-hover:text-blue-600"
      >
        {item.name}
      </Link>

      {/* Bottom border */}
      <span className="absolute left-0 -bottom-[7.25] h-[0.75] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </li>
  ))}
</ul>

      </div>

      {/* Right Side: Dropdowns */}
      <div className="flex items-center gap-1" ref={dropdownRef}>
        
        {/* Language */}
        <div className="relative">
          <button
            onClick={() => setOpenDropdown(openDropdown === "lang" ? null : "lang")}
            className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 rounded-full text-[14px] text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all min-w-[27.5]"
          >
            <img src={`https://flagcdn.com/w20/${selectedLang.code}.png`} alt="" className="w-4.5 h-3.5 object-cover rounded-[1px]" />
            {selectedLang.name}
            <HiChevronDown className={`text-black transition-transform ${openDropdown === "lang" ? "rotate-180" : ""}`} />
          </button>
          {openDropdown === "lang" && (
            <div className="absolute top-[120%] left-0 w-[35] bg-white shadow-2xl rounded-2xl border border-gray-100 py-2 z-50">
              {languages.map((lang) => (
                <button key={lang.id} onClick={() => { setSelectedLang(lang); setOpenDropdown(null); }} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-[13px] text-gray-700">
                  <img src={`https://flagcdn.com/w20/${lang.code}.png`} className="w-4 h-3" alt="" /> {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Currency */}
        <div className="relative">
          <button
            onClick={() => setOpenDropdown(openDropdown === "currency" ? null : "currency")}
            className="flex items-center gap-1 px-4 py-1.5 border border-gray-200 rounded-full text-[14px] text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all min-w-[23.25]"
          >
            {selectedCurrency.code}
            <HiChevronDown className={`text-gray-400 transition-transform ${openDropdown === "currency" ? "rotate-180" : ""}`} />
          </button>
          {openDropdown === "currency" && (
            <div className="absolute top-[120%] right-0 50 bg-white shadow-2xl rounded-2xl border border-gray-100 py-2 z-50">
              {currencies.map((curr) => (
                <button key={curr.code} onClick={() => { setSelectedCurrency(curr); setOpenDropdown(null); }} className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-left">
                  <img src={`https://flagcdn.com/w20/${curr.flag}.png`} className="w-4 h-3" alt="" />
                  <span className="text-[15px] uppercase">{curr.code}</span>
                  <span className="text-[11px] text-gray-800">- {curr.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Agents */}
        <div className="relative">
          <button 
            onClick={() => setOpenDropdown(openDropdown === "agents" ? null : "agents")}
            className="flex items-center gap-1 px-4 py-1.5 border border-gray-200 rounded-full text-[14px] text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all"
          >
            <UserIcon /> Agents <HiChevronDown className="text-gray-400" />
          </button>
          {openDropdown === "agents" && (
            <div className="absolute top-[120%] right-0 w-[37.5] p-2 bg-white shadow-2xl rounded-2xl border border-gray-100 py-2 z-50">
              <Link to="/agent-login" className="block px-4 py-2 rounded-xl  text-[13px] hover:bg-gray-200">Login</Link>
              <Link to="/agent-signup" className="block px-4 py-2 rounded-xl  text-[13px] text-gray-700 hover:bg-gray-200">Signup</Link>
            </div>
          )}
        </div>

        {/* Customer */}
        <div className="relative">
          <button 
            onClick={() => setOpenDropdown(openDropdown === "customer" ? null : "customer")}
            className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-[14px] transition-all border
              ${openDropdown === "customer" ? "border-blue-400 bg-white text-blue-600" : "bg-gray-100 border-transparent text-gray-700 hover:border-blue-400 hover:bg-white hover:text-blue-600"}`}
          >
            <UserIcon /> Customer <HiChevronDown className="text-gray-400" />
          </button>
          {openDropdown === "customer" && (
            <div className="absolute top-[120%] p-2 right-0 w-[37.25] bg-white shadow-2xl rounded-2xl border border-gray-100 py-2 z-50">
              <Link to="/login" className="block px-4 py-2 rounded-xl text-[13px] hover:bg-gray-200">Login</Link>
              <Link to="/signup" className="block px-4 py-2 rounded-xl text-[13px] text-gray-700 hover:bg-gray-200">Signup</Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
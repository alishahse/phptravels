import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { 
  FaPlane, FaHotel, FaSuitcase, FaCar, FaIdCard, 
  FaSearch, FaExchangeAlt, FaCalendarAlt, FaUserFriends 
} from 'react-icons/fa';


// ============================ Links =============================
const navLinks = [
  { name: 'Flights', path: '/' },
  { name: 'Hotels', path: '/hotel' },
  { name: 'Tours', path: '/tours' },
  { name: 'Cars', path: '/cars' },
  { name: 'Visa', path: '/visa' },
  { name: 'Blog', path: '/blog' },
];

// <========================= Currency helper ========================>
const CurrencyItem = ({ flag, code, name }) => (
  <div className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer rounded-xl">
    <span className="text-sm">{flag}</span>
    <span className="text-xs font-bold w-10">{code}</span>
    <span className="text-xs text-gray-400">- {name}</span>
  </div>
);

const Navbar = () => {
  const countries = [
    { name: "English", code: "us" },
    { name: "Arabic", code: "sa" },
    { name: "Turkish", code: "tr" },
    { name: "Russian", code: "ru" },
    { name: "French", code: "fr" },
    { name: "Chinese", code: "cn" },
    { name: "German", code: "de" }
    
  ];

  const currencies = [
    { name: "United States", code: "USD", flag: "🇺🇸" },
    { name: "United Kingdom", code: "GBP", flag: "🇬🇧" },
    { name: "Saudi Arabia", code: "SAR", flag: "🇸🇦" },
    { name: "Germany", code: "EUR", flag: "🇩🇪" },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLang, setSelectedLang] = useState(countries[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const dropdownRef = useRef(null);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null); 
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-start justify-between px-10 bg-white sticky top-5 z-50">

       {/*<============================== Left side Nav ========================> */}
      <div className="flex items-center gap-10">
        <div className="font-bold  cursor-pointer text-xl">PHPTRAVELS</div>
        <ul className="flex gap-5 text-gray-900 text-sm color:#3f3f3f">
         {navLinks.map((item) => (
          <li key={item.name} className="hover:text-blue-500 hover:border-b-2 border-transparent transition-all cursor-pointer py-1">
            <Link to={item.path}>{item.name}</Link>
    </li>
  ))}
        </ul>
      </div>

      {/*<============================== Right side Nav ========================> */}
      <div className="flex items-center gap-3 p-2" ref={dropdownRef}>

        {/*<============================== Language Dropdwon ========================> */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === 'lang' ? null : 'lang')
            }
            className="flex items-center gap-2 px-4 py-2 border rounded-full border-gray-300 text-sm hover:bg-gray-200"
          >
            <img
              src={`https://flagcdn.com/w20/${selectedLang.code}.png`}
              alt={selectedLang.name}
              className="w-4 h-4 object-cover"
            />
            {selectedLang.name}
            <ChevronDownIcon className="w-3 h-3 text-gray-600" />
          </button>

          {openDropdown === 'lang' && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border shadow-2xl rounded-2xl overflow-hidden z-50 p-2">
              {countries.map(c => (
                <div
                  key={c.code}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer rounded-xl"
                  onClick={() => {
                     setSelectedLang(c);
                     i18n.changeLanguage(c.code);      // ===== This Line For Language Converting ======
                     setOpenDropdown(null);
                    }}
                >
                  <img
                    src={`https://flagcdn.com/w20/${c.code}.png`}
                    alt={c.name}
                    className="w-4 h-4 object-cover"
                  />
                  <span className="text-sm text-gray-700">{c.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/*<============================== Currency Dropdown ========================> */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === 'currency' ? null : 'currency')
            }
            className="flex px-4 py-2 border rounded-full border-gray-300 text-sm hover:bg-gray-200 "
          >
            <span className='mr-1'>{selectedCurrency.code}</span> <ChevronDownIcon className="w-3 h-5 text-gray-600"/>
          </button>

          {openDropdown === 'currency' && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white border shadow-2xl rounded-2xl overflow-hidden z-50 p-2">
              {currencies.map(c => (
                <div
                  key={c.code}
                  onClick={() => {
                    setSelectedCurrency(c);
                    setOpenDropdown(null);
                  }}
                >
                  <CurrencyItem {...c} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/*<============================== Agents Dropdown ========================> */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === 'agents' ? null : 'agents')
            }
            className="flex items-center gap-2 px-4 py-2 border rounded-full border-gray-300 text-sm hover:bg-gray-200 transition"
          >
            👤 Agents <ChevronDownIcon className="w-3 h-3 text-gray-600" />
          </button>

          {openDropdown === 'agents' && (
            <div className="absolute top-full right-0 mt-2 w-44 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-50"
                onClick={() => setOpenDropdown(null)}
              >
                Agent Login
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-50"
                onClick={() => setOpenDropdown(null)}
              >
                Agent Signup
              </a>
            </div>
          )}
        </div>

        {/*<============================== Customers Dropdown ========================> */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === 'customer' ? null : 'customer')
            }
            className="flex items-center gap-2 px-4 py-2 border rounded-full border-gray-300 text-sm bg-gray-100 hover:bg-gray-200 "
          >
            👤 Customer <ChevronDownIcon className="w-3 h-3 text-gray-600" />
          </button>

          {openDropdown === 'customer' && (
            <div className="absolute top-full right-0 mt-2 w-44 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-50 font-medium text-blue-600 border-b border-gray-50"
                onClick={() => setOpenDropdown(null)}
              >
                Login
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-50"
                onClick={() => setOpenDropdown(null)}
              >
                Register
              </a>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};


export default Navbar;
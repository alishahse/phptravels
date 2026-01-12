import React from "react"
import hotelImg from "../../assets/hotel-img.jpg"
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Hotel = () => {

    return(
        <>
        {/* Background Image ===================================================== */}
        <div
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          `url(${hotelImg})`,
      }}
    >

      <div className="relative w-full max-w-6xl px-4">
        {/* Heading ==================================================================*/}
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-9">
          Search For Best Hotels
        </h1>

        {/* Search Bar ================================================================*/}
        <div className="bg-white rounded-2xl shadow-xl p-2 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">

            {/* Search City ===========================================================*/}
            <div className="relative md:col-span-2">
              <input
                type="text"
                placeholder=" "
                className="peer w-full border rounded-xl px-4 pt-6 pb-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <label className="absolute left-4 top-2 text-xs text-gray-500
                peer-placeholder-shown:top-4
                peer-placeholder-shown:text-sm
                peer-focus:top-2
                peer-focus:text-xs">
                Search By City
              </label>
            </div>

            {/* Checkin ================================================================*/}
            <div className="relative md:col-span-1">
              <input
                type="date"
                placeholder=" "
                className="peer w-full border rounded-xl px-4 pt-6 pb-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500">
                Checkin
              </label>
            </div>

            {/* Checkout ============================================================= */}
            <div className="relative md:col-span-1">
              <input
                type="date"
                placeholder=" "
                className="peer w-full border rounded-xl px-4 pt-6 pb-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500">
                Checkout
              </label>
            </div>

            {/* Travellers =============================================================== */}
            <div className="relative md:col-span-1">
              <select
                className="w-full border rounded-xl px-1 pt-6 pb-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Travellers 2, Rooms 1</option>
                <option>1 Traveller, 1 Room</option>
                <option>3 Travellers, 2 Rooms</option>
              </select>
            </div>

            {/* Search Button */}
            <span>
                <button className="h-full w-20 bg-blue-600 hover:bg-black-200 transition text-white rounded-xl flex items-center justify-center py-4">
              🔍
            </button>
            </span>
            

          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Hotel
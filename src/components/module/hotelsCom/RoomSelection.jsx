import React from 'react';

const RoomSelection = () => {
  const roomData = [
    {
      id: 1,
      type: "Single",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000",
      features: ["Free Breakfast"],
      travellers: { adults: 1, children: 0 },
      price: 200.00,
    },
    {
      id: 2,
      type: "Three Bedroom Apartment",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000",
      features: ["Free Breakfast", "More Details"],
      travellers: { adults: 1, children: 0 },
      price: 100.00,
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-2 w-fit pb-2">Rooms</h2>

      <div className="space-y-10">
        {roomData.map((room) => (
          <div key={room.id} className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            {/* Room Category Title */}
            <div className="bg-gray-50 p-4">
              <h3 className="text-lg font-bold text-black">{room.type}</h3>
            </div>

            {/* Desktop Table View */}
            <div className="overflow-x-auto px-4">
              <table className="w-full text-left">
                <thead className="bg-[#003580] text-white text-sm ">
                  <tr>
                    <th className="p-4">Rooms Type</th>
                    <th className="p-4">Features</th>
                    <th className="p-4 text-center">Travellers</th>
                    <th className="p-4">Price</th>
                    <th className="p-4 text-center">Rooms</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="align-top">
                    {/* 1. Image */}
                    <td className="p-4 w-52">
                      <img 
                        src={room.image} 
                        alt={room.type} 
                        className="w-full h-28 object-cover rounded-xs" 
                      />
                    </td>

                    {/* 2. Features ===========================================*/}
                    <td className="p-4">
                      <div className="space-y-1">
                        {room.features.includes("Free Breakfast") && (
                          <div className="flex items-center gap-2 text-sm text-gray-800">
                            <span className="text-black-500 font-bold">✓</span> Free Breakfast
                          </div>
                        )}
                        <button className="text-blue-600 text-[12px] font-bold mt-3 flex items-center gap-1">
                          📺 More Details
                        </button>
                      </div>
                    </td>

                    {/* 3. Travellers */}
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2  text-slate-700">
                         👤 {room.travellers.adults} 👤{room.travellers.children}
                      </div>
                    </td>

                    {/* 4. Price */}
                    <td className="p-4">
                      <div className="text-green-600 font-bold text-xs">USD {room.price.toFixed(2)}</div>
                    </td>

                    {/* 5. Room Dropdown */}
                    <td className="p-4 text-center">
                      <select className="border rounded px-2 py-1.5 text-xs font-bold bg-white w-28 outline-none focus:border-blue-500">
                        <option>1 - USD {room.price}</option>
                        <option>2 - USD {room.price * 2}</option>
                      </select>
                    </td>

                    {/* 6. Action Button Area */}
                    <td className="p-4 bg-gray-50/50 text-center border-l w-44">
                      <div className="text-[10px] text-gray-400 font-bold mb-1">USD {room.price.toFixed(2)}</div>
                      <button className="bg-blue-600 hover:bg-black text-white text-xs font-bold py-2.5 px-6 rounded shadow-md transition-all active:scale-95">
                        Book Now
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelection;
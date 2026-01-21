import React from 'react';

const PropertyDescription = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white border-t border-gray-50 mt-10">
      <h2 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-gray-200 w-full">
        Property Description
      </h2>
      
      <div className="space-y-5 text-black leading-relaxed text-[17px]">
        <p>
          Within 1 km from Dubai International Airport, Mövenpick Grand Al Bustan features modern, 
          luxurious accommodation and 7 restaurants serving different cuisines. It offers a 
          temperature controlled outdoor pool, a kid’s pool, squash courts, tennis courts and 
          extensive spa treatments.
        </p>

        <p>
          The rooms at Mövenpick Grand Al Bustan are decorated with natural, soft colours. 
          They are equipped with flat-screen TVs with satellite channels. Other amenities 
          include work desk, tea/coffee facilities and a bathrobe with slippers. Some rooms 
          offer direct access to the swimming pool.
        </p>

        <p>
          Guests can enjoy the sun on the deck surrounding the outdoor pool. The on-site 
          Flow Health Club & Wellness Centre offers massage treatments and steam, sauna & 
          outdoor Hot tub. It also has a fully equipped fitness centre with the latest 
          cardiovascular equipment.
        </p>

        <p>
          For dinner, guests can choose from a variety of restaurants with cuisines such 
          as Lebanese, Japanese or Thai. The poolside Anees offers light snacks and drinks.
        </p>

        <p>
          The renowned Dubai Creek is accessible through a 10 minute drive, while the 
          famous Dubai Gold Souk and Spice Souk are 15 minutes away. Major shopping malls 
          including Deira City Centre, Festival City Mall and Mirdif City Centre are within 
          a 15 minute drive from the hotel.
        </p>

        <div className="pt-4 border-t border-gray-50">
          <p className="text-sm font-bold text-slate-800">
            Business travellers particularly like the location — they rated it 
            <span className="ml-1">8.0</span> for a work-related trip.
          </p>
          <p className="text-sm mt-2 text-slate-700">
            Mövenpick Grand Al Bustan has been welcoming Booking.com guests since 28 Sept 2006.
          </p>
          <p className="text-sm mt-2 font-semibold text-slate-800">
            Hotel chain/brand: <span className="text-blue-600 font-normal">Mövenpick</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
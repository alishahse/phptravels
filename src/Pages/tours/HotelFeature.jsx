const HotelFeature = () => {
  const hotelFeatureimg = [
    { id: 1, title: 'Dubai', sub: 'Stunning Dubai', stars: '★★★★★', url: 'https://phptravels.net/uploads/b8ylvzbv98o4gsocgo.jpg' },
    { id: 2, title: 'Petra', sub: 'Day Visit of Petra from Oman', stars: '★', url: 'https://phptravels.net/uploads/1utfo3imzkbo844s4s.jpg' },
    { id: 3, title: 'Delhi', sub: 'Old and New Delhi City', stars: '★★', url: 'https://phptravels.net/uploads/10rt0p0w1k8gog0osw.jpg' },
    { id: 4, title: '', type: 'special', url: 'https://phptravels.net/assets/img/tours.jpg' },
    { id: 5, title: 'Hong Kong', sub: 'Hong Kong Island Tour', stars: '★★★★', url: 'https://phptravels.net/uploads/25v2kngt4rj4c44gsg.jpg' },
    { id: 6, title: 'Thailand', sub: '6 Days around Thailand', stars: '★★★', url: 'https://phptravels.net/uploads/1thwd9jdp9r4o4w0oc.jpg' },
  ];

  return (
    <div className="py-5 px-4 md:px-10 lg:px-28 max-w-\[1400px] m-auto">
      <div className="px-2 md:px-5 mb-6">
        <h1 className="text-2xl font-bold">Popular Tours</h1>
        <p className="text-gray-600">These alluring destinations are picked just for you.</p>
      </div>

      <div className="grid grid-cols-12 gap-4 p-2 md:p-4">
        {hotelFeatureimg.map((item, index) => {
          let colSpan = "col-span-12 lg:col-span-3"; 
          
          if (index === 3) colSpan = "col-span-12 lg:col-span-3"; 
          if (index === 4) colSpan = "col-span-12 lg:col-span-6"; 
          if (index === 5) colSpan = "col-span-12 lg:col-span-3";

          return (
            <div
              key={item.id}
              className={`${colSpan} h-60 relative rounded-lg overflow-hidden group shadow-md w-full`}
              style={{ backgroundImage: `url(${item.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Overlay =================================================== */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 "></div>
              
              <div className="absolute top-3 left-4 text-white font-semibold text-sm drop-shadow-lg ">
                {item.title}
              </div>

              {item.type !== 'special' && (
                <div className="absolute bottom-4 left-4 text-white pr-2">
                  <h3 className="font-bold text-md mb-1 leading-tight transform transition-all duration-300 group-hover:-translate-y-3 border-b-2 border-transparent group-hover:border-white p-3">{item.sub}</h3>
                  <div className="flex text-orange-400 text-sm font-bold">{item.stars}</div>
                </div>
              )}
            </div>
          );
        })}

        {/* Last Card ====================================== */}
        <div className="col-span-12 lg:col-span-3 h-60 bg-blue-50 border border-blue-100 rounded-xl flex flex-col justify-center p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Limited budget?</h2>
          <p className="text-gray-600 text-sm mb-6">
            Find price drops and travel as far as you can.
          </p>
          <hr className="mb-6 border-gray-200" />
          <button className="bg-[#1c222b] text-white py-3 rounded-lg font-semibold hover:bg-black transition-colors">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelFeature;
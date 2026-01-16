const CarsFeature = () => {
    const carFeature = [
    { id: 1, type: "banner", url: 'https://phptravels.net/assets/img/featured_cars.png', title: "Discover great cars for transfers" },
    { id: 2, url: 'https://phptravels.net/uploads/58mw99nsyz48w084g.png', title: "Hyundai i10 or similar", stars: "★★★★", location: "DXB", currency: "USD", price: "150.00" },
    { id: 3, url: 'https://phptravels.net/uploads/6820y55p8tssw80co.png', title: "Ford Focus 2023", stars: "★★★★", location: "DXB", currency: "USD", price: "100.00" },
    { id: 4, url: 'https://phptravels.net/uploads/uwps0eeblus4ws4ooo.jpg', title: "Toyota Camry 2023 full options", stars: "★★★", location: "DXB", currency: "USD", price: "120.00" },
  ];
    return(
        <div className="py-5 px-4 md:px-10 lg:px-28">
      <h2 className="text-2xl font-bold mb-6">Recommended Transfer Cars</h2>

      <div className="grid grid-cols-12 gap-6">
        {carFeature.map((item, index) => {
  
         const colSpan = "col-span-12 md:col-span-6 lg:col-span-3";

          if (item.type === "banner") {
            return (
                
           <div key={item.id} className={`${colSpan} h-87 relative rounded-xl overflow-hidden shadow-xl text-center flex flex-col justify-end p-4 bg-cover bg-center`}
                style={{ backgroundImage: `url(${item.url})` }}>
                    
                    {/* overlay =================================================== */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-500/70 via-blue-400/30 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-white font-bold mb-4">{item.title}</h3>
                  <button className="w-full py-2 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-800 transition">
                    View More
                  </button>
                </div>
              </div>
          );
          }

            // Another 3 cards ======================================================
          return (
            <div key={item.id} className={`${colSpan} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white`}>
              
              {/* Car Image ==================================================== */}
              <div className="h-48 bg-white flex items-center justify-center p-4">
                <img src={item.url} alt={item.title} className="max-h-full w-full object-contain border-2 border-gray-200 rounded-xl" />
              </div>

              {/* Car Content Area ==============================================*/}
              <div className="p-4">
                <h3 className=" text-gray-900 truncate">{item.title}</h3>
                <div className="flex text-orange-400 text-sm my-1">{item.stars}</div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-1"></span> {item.location}
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold text-gray-900">{item.currency} {item.price}</span>
                  </div>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-bold border">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
      </div>
    )
    
}

export default CarsFeature;
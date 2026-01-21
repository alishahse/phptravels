import { useLocation } from "react-router-dom";

const FlightResults = () => {
  const location = useLocation();
  
  const searchResults = location.state?.flights || [];

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="text-2xl font-bold mb-6 border ">Search Results</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {searchResults.length > 0 ? (
          searchResults.map((flight) => (
            // it show the data you entered in the input fields in search bar ========================
            <div key={flight.id} className="border p-4 rounded-xl shadow-lg bg-white">
               <div className="flex justify-between font-bold">
                  <span>{flight.from}</span>
                  <span>→</span>
                  <span>{flight.to}</span>
               </div>
               <p className="text-blue-600 font-semibold mt-2">{flight.airline}</p>
               <p className="text-gray-500 mt-4">Price: {flight.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Data is not available</p>
        )}
      </div>
    </div>
  );
};

export default FlightResults;
import { useLocation } from "react-router-dom";

const HotelSearchResults = () => {
  const location = useLocation();
  const hotels = location.state?.hotels || [];
  const query = location.state?.searchQuery;  

  return (
    <div className="p-8 border mt-1 inline-block mx-3 ">
      <h2 className="text-lg font-bold">Hotels in {query?.city}</h2>
      {hotels.map(hotel => (
        <div key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p>{hotel.price}</p>
        </div>
        
      ))}
    </div>
  );
};

export default HotelSearchResults;
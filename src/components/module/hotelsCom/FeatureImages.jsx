import { useNavigate } from "react-router-dom"; // 1. Navigate import karein
import HotelGallery from "../../../Pages/hotels/HotelGallery";

const FeatureImages = () => {
    const navigate = useNavigate(); // 2. Hook initialize karein

    const featureImgs = [
        {id: 1, url: 'https://phptravels.net/uploads/184028-28-01-2023-1674874284.jpg', currency: "USD", price: 200.00, title: "Movenpick Grand Al Bustan", description: "Dubai United Arab Emirates", Ratings: 5},
        {id: 2, url: 'https://phptravels.net/uploads/182171-28-01-2023-1674874525.jpg', currency: "USD", price: 260.00, title: "Four Points by Sheraton Bur Dubai", description: "Dubai United Arab Emirates", Ratings: 4},
        {id: 3, url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000', currency: "USD", price: 100.00, title: "Movenpick Grand Al Bustan", description: "Dubai United Arab Emirates", Ratings: 3},
        {id: 4, url: 'https://phptravels.net/assets/img/featured_hotels.png'}
    ];


    const goToGallery = (hotel) => {
    navigate("/HotelGallery", { 
        state: { 
            hotel: hotel // Pura hotel data (url, title, price, description)
        } 
    });
};

    return (
        <div className="py-8 px-27">
            <div className="px-5">
                <h1 className="text-lg font-bold">Featured Hotels</h1>
                <p>These alluring destinations are picked just for you.</p>
            </div>

            <div className="flex flex-wrap gap-4 p-4 justify-center">
                {featureImgs.map((feature, index) => {
                    const isLast = index === featureImgs.length - 1;
                    
                    return (
                        <div 
                            key={feature.id} 
                            onClick={() => !isLast && goToGallery(feature)}
                            className={`relative w-65 h-87.5 bg-white rounded-xl shadow-lg overflow-hidden group ${!isLast ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
                        >
                            <img 
                                className="w-full h-50 object-cover rounded-t-lg"
                                src={feature.url} 
                                alt={feature.title} 
                              
                            />

                            {isLast && (
                                <div className="absolute inset-0 bg-linear-to-t from-blue-700 to-transparent flex flex-col justify-end items-center p-6 text-white text-center">
                                    <p className="mb-4 font-sm">Discover great deals on hotels around the world</p>
                                    <button className="border-2 border-white px-12 py-1 rounded-md hover:bg-white hover:text-gray-900 transition-all text-lg">
                                        View More
                                    </button>
                                </div>
                            )}

                            {!isLast && (
                                <div className="p-3">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-1">            
                                            <span className="font-bold text-gray-900">{feature.currency} {feature.price}</span>
                                            <span className="text-gray-500 text-sm">/ Night ⚡</span>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <span className="mr-1 text-orange-500">★</span>
                                            <span>{feature.Ratings}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-gray-800 font-semibold text-md truncate">{feature.title}</h3>
                                    <p className="text-gray-400 text-xs mt-1">{feature.description}</p>
                                </div>
                            )}
                        </div>
                        
                    );
                })}
            </div>
        </div>
    );
}

export default FeatureImages;
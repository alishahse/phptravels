import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; 


const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  // Data extraction =========================================================
  const bookingData = location.state || {
    firstName: "Guest",
    lastName: "User",
    email: "user@example.com",
    phone: "+92123456789",
    hotelName: "Movenpick Grand Al Bustan",
    price: "120.00",
    bookingId: "786",
    reference: "REF" + Date.now().toString().slice(-6)
  };

  const [timeLeft, setTimeLeft] = useState(1725);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="bg-blue-50 min-h-screen pb-10 font-sans">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto p-4 flex justify-between items-center text-blue-600 font-bold">
          <div className="flex items-center gap-2"><span>⏰ Payment Time</span></div>
          <span>{formatTime(timeLeft)}</span>
        </div>
        <div className="w-full h-1 bg-gray-100">
          <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${(timeLeft / 1800) * 100}%` }}></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-6">
        <button onClick={() => navigate("/")} className="w-full bg-blue-600 text-white py-2 rounded-md font-bold mb-6">
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b flex flex-col md:flex-row justify-between items-center gap-6">
            <img src="https://phptravels.net/uploads/global/logo.png" alt="Logo" className="w-32" />
            <div className="text-right flex flex-col md:flex-row items-center gap-4">
              <div className="text-sm space-y-1">
                <p><span className="text-gray-400">Payment Status:</span> <span className="text-red-500 font-bold">unpaid</span></p>
                <p><span className="text-gray-400">Booking Status:</span> <span className="text-green-500 font-bold">pending</span></p>
                {/* Yahan name dikhayenge */}
                <p><span className="text-gray-400">Guest:</span> {bookingData.firstName} {bookingData.lastName}</p>
                <p><span className="text-gray-400">Phone:</span> {bookingData.phone}</p>
                <p><span className="text-gray-400">Email:</span> {bookingData.email}</p>
              </div>
              <div className="p-2 border rounded-md">
                <QRCodeCanvas value={`https://phptravels.net/invoice/${bookingData.bookingId}`} size={70} />
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-b flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
               <span className="font-bold">Pay With</span>
               <div className="flex items-center gap-2 border p-2 bg-white rounded cursor-pointer border-blue-600">
                  <img src="https://cdn-icons-png.flaticon.com/512/2830/2830284.png" alt="Bank" className="h-5" />
                  <span className="text-sm font-bold text-blue-900">Bank Transfer</span>
               </div>
               <button className="bg-green-600 text-white px-8 py-2 rounded font-bold">Proceed</button>
            </div>
            <div className="text-xl font-bold">USD {bookingData.price}</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 text-center border-b bg-gray-50">
            <div className="p-4 border-r">
              <p className="text-[10px] text-gray-400 uppercase font-bold">Booking ID</p>
              <p className="font-bold">{bookingData.bookingId}</p>
            </div>
            <div className="p-4 border-r">
              <p className="text-[10px] text-gray-400 uppercase font-bold">Booking Reference</p>
              <p className="font-bold">{bookingData.reference}</p>
            </div>
            <div className="p-4 border-r">
              <p className="text-[10px] text-gray-400 uppercase font-bold">Booking PNR</p>
              <p className="font-bold">-</p>
            </div>
            <div className="p-4">
              <p className="text-[10px] text-gray-400 uppercase font-bold">Booking Date</p>
              <p className="font-bold">2026-01-22</p>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500" alt="Hotel" className="w-full md:w-64 h-32 object-cover rounded-lg" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{bookingData.hotelName}</h3>
                <div className="text-orange-400">★★★★★</div>
                <p className="text-xs text-gray-500 mt-1">Dubai Casablanca St - UAE</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 flex flex-wrap justify-center gap-4">
             <button className="border bg-white px-4 py-2 rounded text-xs font-bold">📥 Download PDF</button>
             <button className="border bg-white px-4 py-2 rounded text-xs font-bold">💬 Whatsapp</button>
             <button className="border bg-red-50 text-red-600 px-4 py-2 rounded text-xs font-bold">✕ Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
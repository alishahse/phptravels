import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HotelBooking = () => {
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [agreed, setAgreed] = useState(false);
  const [seconds, setSeconds] = useState(600);
  
  // Form State =================================================
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "Pakistan", 
  });

  const navigate = useNavigate();

  // Input change handler =======================================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Confirm Button Logic ========================================
  const handleConfirm = () => {
    if (agreed) {
      
      // use navigate is used here ==============================
      navigate("/booking/BookingConfirmation", {
        state: {
          ...formData,
          hotelName: "Movenpick Grand Al Bustan",
          price: "120.00",
          bookingId: Math.floor(Math.random() * 900) + 100, 
          reference: "REF" + Date.now().toString().slice(-6), 
        },
      });
    }
  };

  // Timer Logic ==============================================
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const methods = [
    { id: "paypal", name: "Paypal", bold: true, img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
    { id: "bank", name: "Bank Transfer", bold: true, img: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png" },
    { id: "later", name: "Pay Later", bold: false, img: "https://cdn-icons-png.flaticon.com/512/2489/2489756.png" },
    { id: "stripe", name: "Stripe", bold: true, img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { id: "dragon", name: "Dragonpay", bold: true, img: "https://www.dragonpay.ph/wp-content/uploads/2017/12/dragonpay-logo-small.png" },
    { id: "kashier", name: "Kashier", bold: true, isText: true },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pb-10 font-sans">
      <div className="flex justify-center py-4 bg-white shadow-sm">
        <img src="https://phptravels.net/uploads/global/logo.png" alt="Logo" className="w-24 h-auto object-contain" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-6">
        <div className="bg-blue-600 text-white p-4 text-center rounded-t-lg font-bold text-xl shadow-md">
          Hotel Booking
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Form data ========================================= */}
          <div className="lg:w-2/3 space-y-6">
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="border p-3 rounded-sm outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  className="border p-3 rounded-sm outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded-sm outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone Number"
                  className="border p-3 rounded-sm outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Payment Methods ==================================================*/}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Payment Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {methods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center justify-between p-4 border rounded-md cursor-pointer transition-all ${paymentMethod === method.id ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
                  >
                    <div className="flex items-center gap-3">
                      <input type="radio" className="hidden" onChange={() => setPaymentMethod(method.id)} checked={paymentMethod === method.id} />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === method.id ? "border-blue-600" : "border-gray-300"}`}>
                        {paymentMethod === method.id && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
                      </div>
                      <span className="text-sm">Pay With {method.bold ? <strong>{method.name}</strong> : method.name}</span>
                    </div>
                    {method.isText ? <div className="bg-black text-white px-2 py-1 rounded text-xs font-bold italic">Kashier</div> : <img src={method.img} alt={method.name} className="h-6 w-16 object-contain" />}
                  </label>
                ))}
              </div>

              {/* Cancellation Policy =============================================*/}
              <div className="mt-6 bg-red-50 border border-red-100 p-5 rounded-md text-red-700 text-sm">
                <h4 className="font-bold mb-2">Cancellation Policy</h4>
                <p>Please note that the property is implementing the online payment transaction for advance purchase...</p>
              </div>

              {/* Terms Checkbox ==================================================*/}
              <div className="mt-6 border border-gray-200 p-4 rounded-md">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span className="text-sm text-gray-700 font-medium">
                    I agree to all <span className="text-blue-600 underline">Terms & Conditions</span>
                  </span>
                </label>
              </div>

              <button
                disabled={!agreed}
                onClick={handleConfirm}
                className={`w-full mt-4 py-4 rounded-md font-bold text-white transition-all shadow-lg ${
                  agreed ? "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]" : "bg-blue-300 cursor-not-allowed"
                }`}
              >
                Booking Confirm
              </button>
            </div>
          </div>

          {/* SIDEBAR  =======================================================*/}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
                <div
                  className="h-full bg-blue-600 transition-all duration-1000 ease-linear"
                  style={{ width: `${(seconds / 600) * 100}%` }}
                ></div>
              </div>
              <span className="font-bold text-gray-600">Time Remaining</span>
              <span className="text-3xl font-black text-gray-800">{formatTime(seconds)}</span>
            </div>

            <div className="bg-blue-600 rounded-xl shadow-lg overflow-hidden text-white">
              <div className="p-4 font-bold">Booking Details</div>
              <div className="bg-white m-2 rounded-lg text-black overflow-hidden pb-4">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500" alt="Hotel" className="w-full h-40 object-cover" />
                <div className="p-3">
                  <div className="text-orange-400">★★★★★</div>
                  <h3 className="font-bold text-blue-900 leading-tight">Movenpick Grand Al Bustan</h3>
                </div>
              </div>
              <div className="p-4 flex justify-between font-bold border-t border-blue-400">
                <span>Total Amount</span>
                <span>$120.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
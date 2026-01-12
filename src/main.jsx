import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)




// {/* ================= Glossmorphiesm Tabs Bar ================= */}
//         <div className="relative z-20 w-full flex justify-center -mt-10 px-4 md:px-4">
//            <ul className="flex flex-wrap items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-6 rounded-full border border-white/30 max-w-4xl">
            
//             {/* <====================== Flights ========================>  */}
//             <li>
//               <button className="bg-white text-black px-6 py- rounded-full font-bold shadow-md transition-all flex items-center gap-2 active:scale-95">
//                 <img src= "/src/assets/airplane.png" alt="" className='w-5 h-5'/> Flights
//               </button>
//             </li>

//             {/* <===================== Hotels ========================> */}
//             <li>
//               <button className="text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-all">
//                 🏨 Hotels
//               </button>
//             </li>

//             {/* <======================== Tours =======================> */}
//             <li>
//               <button className="text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-all">
//                 🌍 Tours
//               </button>
//             </li>

//             {/* <=========================== Cars =======================> */}
//             <li>
//               <button className="text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-all">
//                 🚗 Cars
//               </button>
//             </li>

//             {/* <========================== Visa ==========================> */}
//             <li>
//               <button className="text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-all">
//                 🌐 Visa
//               </button>
//             </li>

//             {/* <=========================== Blogs ========================> */}
//             <li>
//               <button className="text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-all">
//                 📝 Blogs
//               </button>
//             </li>
//           </ul> 
//         </div>
//       </div>

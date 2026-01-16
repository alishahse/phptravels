import CarsFeature from "../../components/module/cars/CarsFeature";
import CarsForm from "../../components/module/cars/CarsForm";

const Cars = () => {

  return (
    <>
 <div className="relative w-full">
  <div className="relative w-full h-105 md:h-130 overflow-hidden">
     {/* Image ================================================================ */}
    <img 
      src="https://images.unsplash.com/photo-1493238792000-8113da705763?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" 
      alt="cars-image" 
      className="w-full h-full object-cover" 
    />
    {/* Overlay on image ======================================================*/}
    <div className="absolute inset-0 bg-black/30"></div> 
    <div className="absolute inset-0 flex flex-col items-center pt-30 px-4">
        <h1 className="text-white text-xl md:text-3xl font-bold drop-shadow-2xl ">
            Recommended Transfer Cars
        </h1>
         <CarsForm />
    </div>
  
  </div>

    <CarsFeature/>
  
</div>
    </>
     
  );
};

export default Cars;
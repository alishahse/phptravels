import ToursForm from "../../components/module/tourscomponent/ToursForm"
import HotelFeature from "./HotelFeature";

const Tours = () => {
     return(
        <>
         <div className="relative w-full h-[90vh]">
            <h1 className="absolute left-142 top-38 font-bold text-4xl text-white">Find Best Tours</h1>
            {/* Background Image =========================================*/}
            <img 
                src="https://www.cetusa.org/wp-content/uploads/2023/02/HallstattAustria.jpg" 
                alt="tours-image"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center ">
                <div className="w-full mb-14">
                     <ToursForm />
                </div>
            </div>
         </div>
         <HotelFeature />
        </>
    )
}

export default Tours;
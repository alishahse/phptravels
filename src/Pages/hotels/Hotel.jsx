import React from "react"
import hotelImg from "../../assets/hotel-img.jpg"
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import HotelForm from "../../components/module/hotelsCom/HotelForm";
import FeatureImages from "../../components/module/hotelsCom/FeatureImages";
import HotelGallery from "./HotelGallery";


const Hotel = () => {

    return(
        <>
        {/* Background Image ===================================================== */}
        <div
      className="w-full h-[90vh] bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          `url(${hotelImg})`,
      }}
    >

      <div className="relative w-full max-w-6xl px-4 mt-8">
        {/* Heading ==================================================================*/}
        <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
          Search For Best Hotels
        </h1>
      </div>
     <HotelForm />
    </div>
    <FeatureImages/>
        </>
    )
}

export default Hotel




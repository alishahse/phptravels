import React from "react"
import hotelImg from "../../assets/hotel-img.jpg"
import HotelForm from "../../components/module/hotelsCom/HotelForm";
import FeatureImages from "../../components/module/hotelsCom/FeatureImages";

const Hotel = () => {

    return(
        <>
        {/* Background Image ===================================================== */}
        <div
      className="w-full h-100 bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          `url(${hotelImg})`,
      }}
    >

      <div className="relative w-full max-w-6xl px-4 pt-20">
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




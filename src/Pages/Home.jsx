import React from "react";
import Hero from "../components/shared/Hero";
import Featuredflights from "../components/module/flightCom/Featuredflights";
import FeatureImages from "../components/module/hotelsCom/FeatureImages.jsx";
import MessageCards from "./cars/MessageCards.jsx";
import HotelFeature from "./tours/HotelFeature.jsx";
import CarsFeature from "../components/module/cars/CarsFeature.jsx";

const Home = () => {
    
   return(
    <>
     <Hero />
     <Featuredflights />
      <FeatureImages /> 
     {/* <HotelFeature /> */}
     <CarsFeature />
     <MessageCards/>
     
     
    </>
   )
}

export default Home
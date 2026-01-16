import React from "react";
import Hero from "../components/shared/Hero";
import Featuredflights from "../components/module/flightCom/Featuredflights";
import FeatureImages from "./flights/Featureimages";
import MessageCards from "./cars/MessageCards.jsx";
import HotelFeature from "./tours/HotelFeature.jsx";
import Cars from "./cars/Cars.jsx";

const Home = () => {
    
   return(
    <>
     <Hero />
     <Featuredflights />
     <FeatureImages />
     <HotelFeature />
     <MessageCards/>
      <Cars /> 
     
    </>
   )
}

export default Home
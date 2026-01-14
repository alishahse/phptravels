import React from "react";
import Hero from "../components/shared/Hero";
import Flight from "../components/module/flightCom/Flight";
import Featuredflights from "../components/module/flightCom/Featuredflights";
import FeatureImages from "./flights/Featureimages";
import HotelFeature from "./tours/HotelFeature.jsx";
import Cars from "./cars/Cars.jsx"
import MessageCards from "./cars/MessageCards.jsx";

const Home = () => {
    
   return(
    <>
     <Hero />
     <Flight />
     <Featuredflights />
     <FeatureImages />
     <HotelFeature />
     <Cars />
     <MessageCards/>
    </>
   )
}

export default Home
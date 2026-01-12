import React from "react";
import Hero from "../components/shared/Hero";
import Flight from "../components/module/flightCom/Flight";
import Featuredflights from "../components/module/flightCom/Featuredflights";


const Home = () => {
    
   return(
    <>
     <Hero />
     <Flight />
     <Featuredflights />
    </>
   )
}

export default Home
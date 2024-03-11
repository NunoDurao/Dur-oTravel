import React from "react";
import Destinations from './components/destinations/Destinations'
import Navbar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
import ImgCarousel from "./components/carouseel/ImgCarousel";
import Footer from "./components/footer/Footer";




function App() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <Destinations/>
   <Search/>
   <Selects/>
   <ImgCarousel />
   <Footer/>
   
   
    </div>
  );
}

export default App;

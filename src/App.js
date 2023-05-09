import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Room from './components/Room'
import Offer from './components/Offer'
import Plan from './components/Plan'
import ImageSlider from "./components/ImageSlider";
import Footer from './components/Footer'

function App() {
  return (
    <div> 
      <Hero />
      <Navbar />
      <Offer />
      <Room />
      <Plan />
      <ImageSlider />
      <Footer />
      
     
    </div>
  );
}

export default App;

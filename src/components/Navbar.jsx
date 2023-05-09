import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);

    if(!nav) {
      document.body.style.overflow = 'hidden'
  } else {
      document.body.style.overflow = 'scroll'
  }
   
  };

  return (
    <div className="bg-black/70 p-5 px-16 text-white fixed top-0 left-0 flex justify-between items-center w-full m-auto">

      <div>
        <h1 className="uppercase text-4xl font-bold">Experiences</h1>
      </div>

      <div className="flex justify-center lg:mr-[10%]  ">
        <ul className="flex items-center gap-5 font-bold max-md:hidden lg:gap-[40px]">
          <li className="text-xl">Home</li>
          <li className="text-xl">Destinations</li>
          <li className="text-xl">Reservations</li>
          <li className="text-xl">Amenities</li>
          <li className="text-xl">Rooms</li>
         
          

          
        </ul>
        
      </div>

      

      



      <div className={nav ? 
        "fixed bg-black/80 w-full h-screen top-0 left-0 ease-in-out duration-1000 md:hidden" : 
        'fixed top-0 h-screen w-full left-[-100%] ease-in-out duration-1000'}>



        <ul className="flex flex-col justify-center items-center w-full h-screen">
          <li className="cursor-pointer text-2xl font-bold mt-10">Home</li>
          <li className="cursor-pointer text-2xl font-bold mt-10">Destinations</li>
          <li className="cursor-pointer text-2xl font-bold mt-10">Reservations</li>
          <li className="cursor-pointer text-2xl font-bold mt-10">Amenities</li>
          <li className="cursor-pointer text-2xl font-bold mt-10">Rooms</li>
        </ul>
      </div>



      <div className="z-10 md:hidden">
        <HiMenuAlt3 onClick={handleNav} size={25} />
      </div>
    </div>
  );
}

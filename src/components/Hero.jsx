import React from "react";

export default function Hero() {
  return (
    <div>
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />

      <div className=" bg-red-500">
        <div className="bg-black/50 w-full h-screen absolute top-0">
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
            <div className="p-[10%]">
              <p>All Inclusive</p>
              <h1 className="font-bold text-5xl sm:text-6xl md:text-6xl drop-shadow-2xl lg:text-7xl">
                Private Beaches & Getaways
              </h1>
              <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut
                quis est, id consequuntur sequi ipsum vitae sit non
                exercitationem.
              </p>
              <button className="bg-black rounded-full px-10 p-3 ">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { images } from "../assets/data";

export default function ImageSlider() {
  return (
    <div className="p-6">
      <div>
        <h1 className="text-4xl font-bold py-4 max-sm:text-2xl">
          We Have Amazing Meal You Deserve For Your Tour
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit an
        </p>
      </div>

      <div className="bg-gray-400 mt-5">
         <div className="flex space-x-5 p-2 overflow-x-auto">
        {images.map((items, index) => (
          <img
            className="w-[50%] h-full"
            key={index}
            src={items.url}
            alt={items.title}
          />
        ))}
        
      </div>

    
      </div>

     

    </div>
  );
}

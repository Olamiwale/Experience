import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="bg-black text-white py-2">
      <div className="flex justify-between px-8 py-16 max-md:grid grid-cols-3 gap-10">
        <div>
          <h1 className="uppercase font-bold mb-5">solution</h1>
          <ul>
            <li className="py-1">Travel</li>
            <li className="py-1">Booking</li>
            <li className="py-1">Flights</li>
            <li className="py-1">Cruises</li>
            <li className="py-1">Ground</li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase font-bold mb-2">Company</h1>

          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase font-bold mb-2">Legal</h1>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase font-bold mb-2">Support</h1>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Tours</li>
            <li className="py-1">Refunds</li>
          </ul>
        </div>

        <div className="col-span-2">
          <h1 className=" uppercase font-bold mb-5">
            subscribe to our newletters
          </h1>
          <p className="mb-2">
            The latest deals, and resources sent to your inbox weekly
          </p>
          <div className="flex space-x-8 items-center max-md:flex-col">
            <input
              className="w-full p-2 rounded-md"
              type="text"
              placeholder="Enter Your Email"
            />
            <p className="uppercase font-bold cursor-pointer max:md p-4">
              subscribe
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-1 mb-6 bg-gray-500"></div>

      <div className="flex flex-col px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-50">
        <p className="py-4">2022 Experiences, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
}

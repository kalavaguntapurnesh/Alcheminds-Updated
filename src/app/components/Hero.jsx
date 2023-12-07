import React from "react";
import Image from "next/image";
import { SiJirasoftware } from "react-icons/si";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { GrAd } from "react-icons/gr";

const Hero = () => {
  return (

    
    <div className="text-black bg-white  ml-24 mr-24 md:mt-4">
        <div className="w-full border-2 border-red-400">
          <div className="w-1/2 ">
            <div className="text-center max-w-7xl lg:text-left pt-20">
              <h1 className="font-heading text-4xl text-primaryColor 
              font-bold leading-10 tracking-tight text-jungle-500 sm:text-6xl sm:leading-none md:max-w-2xl mx-auto
              ">More revenue, less churn, and happier customers—without changing your product</h1>
            </div>
            <div className="relative z-0 max-w-lg mx-auto
            mt-3 text-base font-medium text-gray-500
            sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
              Drive product adoption and customer love with in-app UX
              patterns that drive real results. Skip the dev cycles and 
              take control of your products goal with Edukare.
            </div>

            <div className="relative z-0 max-w-2xl mb-3 mx-auto mt-3 ">
            <button
                type="button"
                className="bg-red-500 mt-2 px-8 py-4 text-center text-lg
        rounded-[10px] text-white transition duration-500 hover:scale-95 hover:companyColor"
              >
                Start a 14 day free-trail
              </button>
            </div>
          </div>

          <div>
            
          </div>
        </div>
    </div>


    
  );
};

export default Hero;

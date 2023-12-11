import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { GrAd } from "react-icons/gr";


const One = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-8 pb-8">
        <div className="w-full space-y-10 lg:space-y-20">
          <div className="relative grid items-center w-full grid-cols-1 gap-16 px-4 mx-auto lg:gap-16 lg:grid-cols-3 max-w-7xl ">
            <div className=" flex flex-row space-x-4 justify-center items-center w-full">
                <div>
                    <MdOutlineCastForEducation className="w-[40px] h-[40px] text-companyColor" />
                </div>
                <div className="text-lg leading-7 text-black font-semibold">
                    Improvised Study Platform
                </div>
            </div>
            <div className=" flex flex-row space-x-4 justify-center items-center w-full">
                <div>
                    <GrTechnology className="w-[40px] h-[40px] text-companyColor" />
                </div>
                <div className="text-lg leading-7 text-black font-semibold">
                    Patient Treatment Planning
                </div>
            </div>
            <div className=" flex flex-row space-x-4 justify-center items-center w-full">
                <div>
                    <GrAd className="w-[40px] h-[40px] text-companyColor" />
                </div>
                <div className="text-lg leading-7 text-black font-semibold">
                    Project Oversight Tracking
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

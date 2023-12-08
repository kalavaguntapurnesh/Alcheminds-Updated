import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-40 pb-16">
        <div className="w-full space-y-10 lg:space-y-20">
          <div className="relative  grid items-center w-full grid-cols-1 gap-16 px-4 mx-auto lg:gap-10 md:gap-16 lg:grid-cols-2 max-w-7xl">
            <div className="relative ">
              <div className="text-center max-w-7xl lg:text-left">
                <h1 className="text-4xl font-bold leading-10 tracking-tight dark:text-white sm:text-6xl sm:leading-none md:max-w-2xl mx-auto">
                  More revenue, less churn, and happier customers-without
                  changing your product
                </h1>
                <div className="relative z-0 max-w-lg mx-auto mt-3 text-base font-medium text-gray-500 dark:text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
                  Drive product adoption and customer love with in-app UX
                  patterns that drive real results. Skip the dev cycles and take
                  control of your produt goals with Chameleon.
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-3xl mx-auto border-2 border-red-500">
              <Image
                src="/productTwo.png"
                alt=""
                width={450}
                height={450}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-40 pb-16">
        <div className="w-full space-y-10 lg:space-y-20">
          <div className="relative  grid items-center w-full grid-cols-1 gap-16 px-4 mx-auto lg:gap-10 md:gap-16 lg:grid-cols-2 max-w-7xl ">
            <div className="relative ">
              <div className="text-center max-w-7xl lg:text-left">
                <h1 className="text-4xl font-bold leading-10 tracking-tight dark:text-black sm:text-6xl sm:leading-none md:max-w-2xl mx-auto">
                  More revenue, less churn, and happier customers-without
                  changing your product.
                </h1>
                <div className="relative z-0 max-w-lg mx-auto mt-3 text-base font-medium text-gray-500 dark:text-gray-500  md:mt-5 md:text-xl md:max-w-2xl">
                  We have built a large pool of knowledge that we apply to
                  deliver solutions that meet client needs, expectations and
                  budget. We are proud that we still support our very first business client.
                </div>
                <div className="w-full pt-8">
                  <div className="flex flex-col items-center justify-center space-y-4 sm:space-x-4 sm:space-y-0 lg:items-center sm:flex-row lg:justify-start">
                    <a
                      href="/about"
                      className="inline-flex items-center justify-center font-bold transition duration-200 ease-in-out focus:outline-none text-white border-2 border-companyColor hover:border-companyColor dark:border-companyColor dark:hover:border-companyColor px-10 py-4 text-xl rounded-xl bg-companyColor hover:bg-companyColor dark:bg-companyColor"
                    >
                      <span>Get Started</span>
                    </a>

                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center font-bold transition duration-200 ease-in-out focus:outline-none border-2 border-companyColor text-black hover:bg-companyColor px-10 py-4 text-xl rounded-xl"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-3xl mx-auto">
              <Image
                src="/productTwo.png"
                alt=""
                width={550}
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

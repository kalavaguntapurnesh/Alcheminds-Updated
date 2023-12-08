import React from "react";
import Image from "next/image";

const FinalOne = () => {
  return (
    <div className="bg-white ">
      <div className="relative py-16">
        <div className="w-full">
          <div className="w-full px-6 mx-auto space-y-12 max-w-7xl">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight dark:text-white">
                What else can Alcheminds do?
              </h2>
            </div>
            <div className="grid justify-center w-full grid-cols-1 gap-12  lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <Image
                  src="/productOne.png"
                  alt="imageOne"
                  width={300}
                  height={300}
                  className="w-full"
                ></Image>
                <div className="p-6 space-y-4 text-center">
                  <h4 className="text-2xl font-semibold tracking-tight text-gray-900">
                    Software Development
                  </h4>
                  <p className="text-sm text-gray-600">
                    Dynamic and innovative enterprise applications to optimize
                    your critical business processes and functions.
                  </p>
                  <a
                    href="/about"
                    className="block px-3 py-2 mt-6 text-sm font-semibold text-gray-700 transition duration-200 ease-in-out bg-gray-100 border border-gray-400 rounded-md hover:border-gray-400 hover:no-underline hover:bg-gray-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/productTwo.png"
                  alt="imageOne"
                  width={300}
                  height={300}
                  className="w-full"
                ></Image>
                <div className="p-6 space-y-4 text-center">
                  <h4 className="text-2xl font-semibold tracking-tight text-gray-900">
                    Cloud Migration
                  </h4>
                  <p className="text-sm text-gray-600">
                    We offer expertise and advisory service for the quick
                    development & management of cloud-native enterprise
                    applications
                  </p>
                  <a
                    href="/about"
                    className="block px-3 py-2 mt-6 text-sm font-semibold text-gray-700 transition duration-200 ease-in-out bg-gray-100 border border-gray-400 rounded-md hover:border-gray-400 hover:no-underline hover:bg-gray-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/productOne.png"
                  alt="imageOne"
                  width={300}
                  height={300}
                  className="w-full"
                ></Image>
                <div className="p-6 space-y-4 text-center">
                  <h4 className="text-2xl font-semibold tracking-tight text-gray-900">
                    Business Development
                  </h4>
                  <p className="text-sm text-gray-600">
                    We help organizations from different industries. Our
                    services allow our clients to work towards
                    their priority.
                  </p>
                  <a
                    href="/about"
                    className="block px-3 py-2 mt-6 text-sm font-semibold text-gray-700 transition duration-200 ease-in-out bg-gray-100 border border-gray-400 rounded-md hover:border-gray-400 hover:no-underline hover:bg-gray-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalOne;

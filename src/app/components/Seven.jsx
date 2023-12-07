import React from "react";
import Image from "next/image";

const Seven = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="relative z-20 py-16">
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
                    Alerts
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get Notified when users arent engaged
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
                    Alerts
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get Notified when users arent engaged
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
                    Alerts
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get Notified when users arent engaged
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

export default Seven;

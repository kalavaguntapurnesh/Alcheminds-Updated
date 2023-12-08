import React from "react";
import Image from "next/image";

const First = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-40 pb-16">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-7xl">
            <div className="justify-center w-full text-center pb-14">
              <div className="w-full max-w-3xl mx-auto space-y-4">
                <h2 className="text-base font-medium tracking-widest text-gray-500 uppercase dark:text-white">
                  About Us
                </h2>
                <h3 className="text-4xl font-bold tracking-tight dark:text-white">
                  Integrations to help you boost feature adoption
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <a
                href="/products"
                className="h-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-900/10 md:p-6"
              >
                <div className="flex flex-col space-y-6">
                  <div className="shrink-0">
                    <Image src="" alt="" width={48} height={48}></Image>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-gray-900">
                      Mixpanel
                    </h5>
                    <div className="text-base text-gray-600">
                      Launch hyper-targeted in-product experiences and better
                      analyze their performance alongside the rest of your data
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="/products"
                className="h-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-900/10 md:p-6"
              >
                <div className="flex flex-col space-y-6">
                  <div className="shrink-0">
                    <Image src="" alt="" width={48} height={48}></Image>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-gray-900">
                      Mixpanel
                    </h5>
                    <div className="text-base text-gray-600">
                      Launch hyper-targeted in-product experiences and better
                      analyze their performance alongside the rest of your data
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="/products"
                className="h-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-900/10 md:p-6"
              >
                <div className="flex flex-col space-y-6">
                  <div className="shrink-0">
                    <Image src="" alt="" width={48} height={48}></Image>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-gray-900">
                      Mixpanel
                    </h5>
                    <div className="text-base text-gray-600">
                      Launch hyper-targeted in-product experiences and better
                      analyze their performance alongside the rest of your data
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;

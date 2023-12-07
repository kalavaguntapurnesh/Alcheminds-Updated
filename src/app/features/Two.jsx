import React from "react";
import Image from "next/image"

const Two = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative z-20 py-16">
        <div className="w-full">
          <div className="w-full px-6 mx-auto max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-10 md:gap-20 md:grid-cols-2">
              <div className="flex flex-col justify-center items-center order-last">
                <div className="space-y-5">
                  <h2 className="text-base font-medium tracking-widest text-gray-500 uppercase">
                    Growth or Enterprise Plans
                  </h2>
                  <h3 className="text-4xl font-bold tracking-tight dark:text-white">
                    For teams of scale
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-white/70">
                    Manage and scale in-product Experiences with no risk of
                    backfire. Rate Limiting is built for product-led teams who
                    put users first
                  </p>
                </div>
              </div>
              <div className="order-first">
                <Image src="/productOne.png" alt="product" width={500} height={350}></Image>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;

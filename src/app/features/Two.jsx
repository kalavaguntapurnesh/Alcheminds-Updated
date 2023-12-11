import React from "react";
import Image from "next/image";

const Two = () => {
  return (
    <div className="bg-white">
      <div className="relative py-16">
        <div className="w-full">
          <div className="w-full px-6 mx-auto max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-10 md:gap-20 md:grid-cols-2">
              <div className="flex flex-col justify-center items-center order-last">
                <div className="space-y-5">
                  <h2 className="text-base font-medium tracking-widest text-gray-500 uppercase">
                    Growth or Enterprise Plans
                  </h2>
                  <h3 className="text-4xl font-bold tracking-tight dark:text-black">
                    Work life simpler, more pleasant and more{" "}
                    <span className="text-companyColor">productive</span>
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-800">
                    AlcheMinds Solutions offers a unique mix of stimulating work
                    environment, continuous growth avenues, and a competitive
                    benefits package.
                  </p>
                </div>
              </div>
              <div className="order-first">
                <Image
                  src="/second.jpg"
                  width={580}
                  height={360}
                  className="w-[580px] h-[360px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  alt="image"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;

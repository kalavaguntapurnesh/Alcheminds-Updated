import React from "react";
import Image from "next/image";

const Six = () => {
  return (
    <div className="bg-white">
      <div className="relative z-20 py-16">
        <div className="w-full">
          <div className="w-full px-6 mx-auto max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-10 md:gap-20 md:grid-cols-2">
              <div className="flex flex-col justify-center items-center">
                <div className="space-y-5">
                  <h3 className="text-4xl font-bold tracking-tight dark:text-white">
                    Shoot in-app messages to score.
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-white/70">
                    Target custom user segments with in-app messaging and
                    guidance that tells them exactly what they need to hear
                  </p>
                </div>
              </div>
              <div className="border-2 border-red-400">
                <Image
                  src="/productOne.png"
                  width={500}
                  height={300}
                  alt="image"
                ></Image>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-10 pt-16 md:grid-cols-3">
              <div className="flex flex-col space-y-2">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Import User Segments</h5>
                <div className="text-base text-gray-600 dark:text-white/70">
                  <p>
                    Put all of that user data from Heap or Mixpanel to work and
                    target specific cohorts based on account level, user
                    behavior, and more
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Import User Segments</h5>
                <div className="text-base text-gray-600 dark:text-white/70">
                  <p>
                    Put all of that user data from Heap or Mixpanel to work and
                    target specific cohorts based on account level, user
                    behavior, and more
                  </p>
                </div>
              </div>


              <div className="flex flex-col space-y-2">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Import User Segments</h5>
                <div className="text-base text-gray-600 dark:text-white/70">
                  <p>
                    Put all of that user data from Heap or Mixpanel to work and
                    target specific cohorts based on account level, user
                    behavior, and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Six;

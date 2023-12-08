import React from "react";
import Image from "next/image";

const Six = () => {
  return (
    <div className="bg-white">
      <div className="relative py-16">
        <div className="w-full">
          <div className="w-full px-6 mx-auto max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-10 md:gap-20 md:grid-cols-2">
              <div className="flex flex-col justify-center items-center">
                <div className="space-y-5">
                  <h3 className="text-4xl font-bold tracking-tight dark:text-white">
                    We Design Together With Our Clients
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-white/70">
                    While working for AlcheMinds Solutions, you can be assured a
                    sense of empowerment, opportunities for growth and the
                    opportunity to make a real difference.
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
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Loyalty for Clients
                </h5>
                <div className="text-base text-gray-600 dark:text-white/70">
                  <p>
                    We consider customers are everything we do. Our customers’
                    needs are at the forefront of our business.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Higher Client Satisfaction
                </h5>
                <div className="text-base text-gray-600 dark:text-white/70">
                  <p>
                    We thrive by delivering on customer satisfaction
                    expectations in combination with quality, value, and
                    complaint handling.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Reliable Client Growth
                </h5>
                <div className="text-base text-gray-600 dark:text-white/70">
                  <p>
                    We understand the need of customers and use every possible way 
                    to ensure for the growth of the client.
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

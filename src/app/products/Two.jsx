import React from "react";
import Image from "next/image";

const Two = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative md:py-16 py-12">
        <div className="w-full">
          <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:gap-20 max-w-7xl md:grid-cols-2">
            <div className="flex justify-center md:order-last relative col-span-1">
              <div className="w-full max-w-xl space-y-8">
                <h3 className="md:text-4xl font-bold tracking-tight text-4xl  md:block hidden dark:text-black">
                  Dental care software is designed to enhance dental practice
                  and <span className="text-companyColor">patient care.</span>
                </h3>
                <h3 className="md:text-4xl font-bold tracking-tight text-4xl md:hidden block ml-4 mr-4 dark:text-black">
                  Our Custom Software Development{" "}
                  <span className="text-companyColor">Works</span>
                </h3>
                <p className="max-w-lg text-lg font-medium text-gray-600 dark:text-gray-800 md:ml-0 ml-4 md:mr-0 mr-4">
                  Used to streamline administrative tasks, improve
                  communication, and facilitate better patient interactions
                  within dental clinics or practices.
                </p>
                <ul className="space-y-3">
                  <li className="flex space-x-3 md:ml-0 ml-4 md:mr-0 mr-4">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-companyColor"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-lg font-medium tracking-tight text-gray-600 ">
                      Treatment Planning and Charting
                    </span>
                  </li>
                  <li class="flex space-x-3 md:ml-0 ml-4 md:mr-0 mr-4">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-companyColor"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-lg font-medium tracking-tight text-gray-600">
                      Communication and Patient Engagement
                    </span>
                  </li>
                  <li class="flex space-x-3 md:ml-0 ml-4 md:mr-0 mr-4">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-companyColor"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-lg font-medium tracking-tight text-gray-600">
                      Imaging and X-Ray Integration
                    </span>
                  </li>
                  <li class="flex space-x-3 md:ml-0 ml-4 md:mr-0 mr-4">
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-companyColor"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-lg font-medium tracking-tight text-gray-600">
                      Dental Analytics and Reporting
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative flex items-center justify-center col-span-1 md:ml-1 ml-4 md:mr-1 mr-4">
              <Image
                src="/second.jpg"
                width={580}
                height={360}
                className="w-[580px] md:h-[340px] h-[310px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                alt="image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;

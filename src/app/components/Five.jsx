import React from "react";
import Image from "next/image";

const Five = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative py-16">
        <div className="w-full space-y-16">
          <div className="grid w-full grid-cols-1 gap-10 px-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
            <a
              href=""
              className="flex flex-col overflow-hidden transition
            duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl hover:no-underline"
            >
              <div className="relative flex items-center justify-center h-56">
                <Image src="/" alt="" width={224} height={224}></Image>
              </div>
              <div className="flex flex-col flex-1 p-6 space-y-6">
                <div className="text-sx font-semibold tracking-widest text-gray-500 uppercase">
                  Information Technology
                </div>

                <div class="text-2xl font-bold tracking-tight text-gray-900">
                  How Chili Piper created a product-led sales motion that
                  generated over $150K+ ARR from upsells in a few weeks
                </div>

                <div className="flex items-center space-x-2 font-medium text-base text-gray-600">
                  <span>Read Case Study</span>
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col overflow-hidden transition
            duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl hover:no-underline"
            >
              <div className="relative flex items-center justify-center h-56">
                <Image src="/" alt="" width={224} height={224}></Image>
              </div>
              <div className="flex flex-col flex-1 p-6 space-y-6">
                <div className="text-sx font-semibold tracking-widest text-gray-500 uppercase">
                  Software
                </div>

                <div class="text-2xl font-bold tracking-tight text-gray-900">
                  How Chili Piper created a product-led sales motion that
                  generated over $150K+ ARR from upsells in a few weeks
                </div>

                <div className="flex items-center space-x-2 font-medium text-base text-gray-600">
                  <span>Read Case Study</span>
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>


            <a
              href=""
              className="flex flex-col overflow-hidden transition
            duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl hover:no-underline"
            >
              <div className="relative flex items-center justify-center h-56">
                <Image src="/" alt="" width={224} height={224}></Image>
              </div>
              <div className="flex flex-col flex-1 p-6 space-y-6">
                <div className="text-sx font-semibold tracking-widest text-gray-500 uppercase">
                  Artificial Intelligence
                </div>

                <div class="text-2xl font-bold tracking-tight text-gray-900">
                  How Chili Piper created a product-led sales motion that
                  generated over $150K+ ARR from upsells in a few weeks
                </div>

                <div className="flex items-center space-x-2 font-medium text-base text-gray-600">
                  <span>Read Case Study</span>
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;

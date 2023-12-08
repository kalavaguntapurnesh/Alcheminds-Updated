import React from 'react'
import Image from "next/image"

const Carousel = () => {
  return (
    <div className="bg-gray-50">
    <div className="relative py-16">
      <div className="w-full">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:gap-20 max-w-7xl md:grid-cols-2">
          <div className="flex justify-center md:order-last relative z-10 col-span-1">
            <div className="w-full max-w-xl space-y-8">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                Publish your Tours confidently, with laser control
              </h3>
              <p className="max-w-lg text-lg font-medium text-gray-600 dark:text-gray-300">
                Set the exact spot for Tours to appear; trigger them through
                clicks, hovers, page views, or leverage a “Smart Delay”. Set
                recurrence and get alerts if they haven’t been seen.
              </p>
              <ul className="space-y-3">
                <li className="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-green-600"
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
                    Select page elements with precision, even on SPAs
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-green-600"
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
                    Deliver perfectly timed guidance with Rate Limiting and
                    Recurrence
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-green-600"
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
                    Keep your Tours relevant using Element Rules to show or
                    skip a Step
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-center col-span-1 ">
              <Image src="/productOne.png" width={300} height={300} alt="image"></Image>
              
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}

export default Carousel

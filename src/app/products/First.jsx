import React from "react";
import Image from "next/image"

const First = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-40 pb-16">
        <div className="w-full">
          <div className="grid items-center w-full grid-cols-1 gap-10 px-4 mx-auto md:gap-20 max-w-7xl md:grid-cols-2">
            <div className="relative z-10 col-span-1">
              <div className="w-full max-w-xl space-y-8">
                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                  Build beautiful Tours that guide users to aha!
                </h3>
                <p className="max-w-lg text-lg font-medium dark:text-gray-300">
                  Start with a template and make it your own. Add your color
                  palette and fonts to ensure brand consistency – then get
                  creative with GIFs and videos.
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
                      More than modals – walkthroughs, embeddable banners,
                      lightboxes, slideouts, and more
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
                      Use optional CSS styling to tweak, or define your
                      account-wide style
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
                      Make buttons progress to next Steps, dismiss, or trigger
                      further Actions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-center col-span-1">
                <Image alt="image" width={300} src="/directly.png" height={300}></Image>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default First;

import React from "react";
import Image from "next/image";

const First = () => {
  return (
    <div className="bg-white">
      <div className="relative md:pt-32 pt-12 pb-16">
        <div className="w-full">
          <div className="grid items-center w-full grid-cols-1 gap-10 px-4 mx-auto md:gap-20 max-w-7xl md:grid-cols-2">
            <div className="relative col-span-1">
              <div className="w-full max-w-xl space-y-8">
                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-black">
                  EduKare software is an innovative solution designed for{" "}
                  <span className="text-companyColor">education sector.</span>
                </h3>
                <p className="max-w-lg text-lg font-medium text-gray-600 dark:text-gray-800">
                  Leverages technology to improve the efficiency of educational
                  institutions, promote effective communication, and enhance the
                  overall learning experience for students.
                </p>
                <ul className="space-y-3">
                  <li className="flex space-x-3">
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
                      E-Learning and Remote Education
                    </span>
                  </li>
                  <li class="flex space-x-3">
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
                      Cirriculum & Lesson Planning
                    </span>
                  </li>
                  <li class="flex space-x-3">
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
                      Communication and Collaboration
                    </span>
                  </li>
                  <li class="flex space-x-3">
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
                      Assessment and Grading
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative flex items-center justify-center col-span-1">
              <Image
                src="/productOne.jpg"
                width={580}
                height={320}
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

export default First;

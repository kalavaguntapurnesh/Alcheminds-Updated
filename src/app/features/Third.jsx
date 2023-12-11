import React from "react";
import Image from "next/image";

const Third = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative py-16">
        <div className="w-full">
          <div className="w-full px-4 mx-auto">
            <div className="justify-center w-full text-center pb-8">
              <div className="w-full max-w-3xl mx-auto space-y-4 ">
                <h2 className="text-base font-medium tracking-widest text-gray-500 uppercase dark:text-gray-500">
                  Get Inspired
                </h2>
                <h3 className="text-4xl font-bold  tracking-tight dark:text-black">
                  Here are the latest features we{" "}
                  <span className="text-companyColor">offer!!</span>
                </h3>
              </div>
            </div>

            <div className="w-full flex flex-wrap justify-evenly mt-10 pb-2 pt-2 md:pl-28 md:pr-28">
              <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
                <div
                  className="relative h-56  overflow-hidden text-white shadow-lg ml-2 mr-2
        rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40"
                >
                  <Image
                    src="/featuresOne.jpg"
                    alt="img name"
                    width={5118}
                    height={3405}
                    className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  />
                </div>
                <div className="p-6">
                  <h1 className="block mb-2  text-center text-xl antialiased font-bold leading-snug tracking-normal text-black">
                    Cirriculum Lesson{" "}
                    <span className="text-companyColor">Planning</span>
                  </h1>

                  <p className="block text-base antialiased font-medium tracking-light text-gray-600">
                    Education care software assists teachers in creating and
                    organizing lesson plans, syllabi, and learning materials. It
                    ensures that the curriculum aligns with educational
                    standards and can be easily customized to meet specific
                    needs.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none  rounded-lg bg-companyColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Read More
                  </button>
                </div>
              </div>

              <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
                <div
                  className="relative h-56  overflow-hidden text-white shadow-lg ml-2 mr-2
         rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40"
                >
                  <Image
                    src="/featuresThree.jpg"
                    alt="img name"
                    width={5118}
                    height={3405}
                    className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  />
                </div>
                <div className="p-6">
                  <h1 className="block mb-2 text-center text-xl antialiased font-bold leading-snug tracking-normal text-black">
                    Health Assesment{" "}
                    <span className="text-companyColor">Grading</span>
                  </h1>
                  <p className="block text-base antialiased font-medium tracking-light text-gray-600">
                    Dental care software is a specialized digital solution
                    designed to optimize and enhance various aspects of dental
                    practice management and patient care. It leverages
                    technology to streamline administrative tasks
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none  rounded-lg bg-companyColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Read More
                  </button>
                </div>
              </div>

              <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
                <div
                  className="relative h-56  overflow-hidden text-white shadow-lg ml-2 mr-2
        rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40"
                >
                  <Image
                    src="/featuresTwo.jpg"
                    alt="img name"
                    width={5118}
                    height={3405}
                    className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  />
                </div>
                <div className="p-6">
                  <h1 className="block mb-2  text-xl  text-center antialiased font-bold leading-snug tracking-normal text-black">
                    Analytics &{" "}
                    <span className="text-companyColor">Reporting</span>
                  </h1>
                  <p className="block text-base antialiased font-medium tracking-light text-gray-600">
                    Time log, hourly rate, billing software is a specialized
                    digital solution designed to simplify and streamline the
                    process of tracking billable hours, calculating fees based
                    on hourly rates, and generating accurate invoices
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="select-none  rounded-lg bg-companyColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;

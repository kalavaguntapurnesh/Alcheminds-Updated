import React from "react";
import Image from "next/image";

const First = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-40 pb-16">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-7xl">
            <div className="justify-center w-full text-center pb-14">
              <div className="w-full max-w-5xl mx-auto space-y-4">
                <h3 className="text-4xl font-semibold tracking-tight dark:text-white">
                  <span className="text-companyColor">About</span> Us
                </h3>
                <div className="prose-lg text-gray-600 dark:text-white">
                  <p>
                    Alcheminds Solutions is global software, back office
                    services and S/W products/applications Company incorporated
                    in year 2023. We deliver complete technology, business
                    processes, software design and development, software quality
                    assurance, software maintenance and back services to
                    enterprises worldwide. We are right people with right
                    passion, right strategy and next-gen technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <a
                href="/products"
                className="h-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-900/10 md:p-6"
              >
                <div className="flex flex-col space-y-6">
                  <div className="shrink-0">
                    <Image src="" alt="" width={48} height={48}></Image>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-gray-900">
                      EduKare
                    </h5>
                    <div className="text-base text-gray-600 mt-2">
                      Education care software is a comprehensive and innovative
                      solution designed to streamline and enhance various
                      aspects of the education sector.
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="/products"
                className="h-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-900/10 md:p-6"
              >
                <div className="flex flex-col space-y-6">
                  <div className="shrink-0">
                    <Image src="" alt="" width={48} height={48}></Image>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-gray-900">
                      DentalKare
                    </h5>
                    <div className="text-base text-gray-600 mt-2">
                      Dental care software is a specialized digital solution
                      designed to optimize and enhance various aspects of dental
                      practice management and patient care.
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="/products"
                className="h-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-900/10 md:p-6"
              >
                <div className="flex flex-col space-y-6">
                  <div className="shrink-0">
                    <Image src="" alt="" width={48} height={48}></Image>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-semibold text-gray-900">
                      LogBucks
                    </h5>
                    <div className="text-base text-gray-600 mt-2">
                      Time log, hourly rate, billing software is a specialized
                      digital solution designed to simplify and streamline the
                      process of tracking billable hours
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;

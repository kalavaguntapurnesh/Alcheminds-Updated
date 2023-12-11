import React from "react";
import Image from "next/image";

const Three = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative py-16">
        <div className="w-full">
          <div className="w-full mx-auto px-4 max-w-7xl">
            <div className="justify-center w-full text-center pb-14">
              <div className="w-full max-w-7xl mx-auto space-y-4">
                <h2 className="text-base font-medium tracking-widest text-gray-500 uppercase dark:text-gray-800">
                  Our Core Values
                </h2>
                <h3 className="text-4xl font-bold tracking-tight dark:text-black">
                  Mission and Vision of{" "}
                  <span className="text-companyColor">Alcheminds</span>
                </h3>
                <div className="prose-lg text-gray-600 dark:text-gray-800">
                  <p>
                    Alcheminds Solutions is your trusted partner for
                    comprehensive digital transformation solutions. From
                    developing user-centric applications and optimizing customer
                    experiences to harnessing the power of data analytics and
                    artificial intelligence, we empower organizations to stay
                    ahead in today`s rapidly evolving digital landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 w-full md:grid-cols-3 ">
              <div className="flex items-start space-x-8">
                <div className="text-green-600 fill-green-500 w-14 h-14 shrink-0 ">
                  <Image
                    src="/dart-16-svgrepo-com.png"
                    alt=""
                    width={110}
                    height={100}
                    className="fill-companyColor"
                  ></Image>
                </div>
                <div className="flex-1 space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-800">
                    Professionalism
                  </h5>
                  <div className="text-base text-gray-700 dark:text-gray-800 dark:text-opacity-70">
                    <p>
                      Professionalism and integrity are the pillars of our work,
                      as we steadily adhere to a strict code of conduct.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="text-green-600 fill-green-500 w-14 h-14 shrink-0 ">
                  <Image
                    src="/second.png"
                    alt=""
                    width={100}
                    height={100}
                    className="fill-companyColor"
                  ></Image>
                </div>
                <div className="flex-1 space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-800">
                    Responsibility
                  </h5>
                  <div className="text-base text-gray-700 dark:text-gray-800 dark:text-opacity-70">
                    <p>
                      We understand the significance of responsibility and
                      accountability in projects, we ensure the best.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="text-green-600 fill-green-500 w-14 h-14 shrink-0 ">
                  <Image
                    src="/three.png"
                    alt=""
                    width={100}
                    height={100}
                    className="fill-companyColor"
                  ></Image>
                </div>
                <div className="flex-1 space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-800">
                    Respect & Kindness
                  </h5>
                  <div className="text-base text-gray-700 dark:text-gray-800 dark:text-opacity-70">
                    <p>
                      Respect & kindness are the guiding principles of our work
                      culture, as we foster for diverse environment
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="text-green-600 fill-green-500 w-14 h-14 shrink-0 ">
                  <Image
                    src="/four.png"
                    alt=""
                    width={100}
                    height={100}
                    className="fill-companyColor"
                  ></Image>
                </div>
                <div className="flex-1 space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-800">
                    Awareness
                  </h5>
                  <div className="text-base text-gray-700 dark:text-gray-800 dark:text-opacity-70">
                    <p>
                      We are committed to continuous learning, growth, and
                      awareness and equip our team with the latest tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="text-green-600 fill-green-500 w-14 h-14 shrink-0 ">
                  <Image
                    src="/five.png"
                    alt=""
                    width={100}
                    height={100}
                    className="fill-companyColor"
                  ></Image>
                </div>
                <div className="flex-1 space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-800">
                    Seriousness
                  </h5>
                  <div className="text-base text-gray-700 dark:text-gray-800 dark:text-opacity-70">
                    <p>
                      At Alcheminds Solutions, we value the significance of
                      professionalism in our industry for outstanding outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="text-green-600 fill-green-500 w-14 h-14 shrink-0 ">
                <Image
                    src="/six.png"
                    alt=""
                    width={100}
                    height={100}
                    className="fill-companyColor"
                  ></Image>
                </div>
                <div className="flex-1 space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-800">
                    Communication
                  </h5>
                  <div className="text-base text-gray-700 dark:text-gray-800 dark:text-opacity-70">
                    <p>
                      Our adherence to open and honest communication leads to
                      our clients & employees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;

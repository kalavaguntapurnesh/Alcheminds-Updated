import React from "react";

const Four = () => {
  return (
    <div className="bg-white relative z-20 py-16">
      <div className="w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-lg mx-auto lg:max-w-7xl">
            <div className="text-center">
              <h2 class="text-3xl font-bold leading-9 tracking-tight text-jungle-500 font-heading sm:text-4xl sm:leading-10">
                📚 How we think about Product
              </h2>
              <p className="max-w-3xl mx-auto mt-3 text-lg leading-7 text-gray-500">
                "Become a Product Success expert with these Alcheminds
                resources"
              </p>
            </div>
            <div className="grid max-w-screen-xl gap-16 px-4 mx-auto mt-12 sm:px-6 lg:px-8 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              <article className="flex flex-col">
                <div className="flex-1">
                  <a href="" className="block no-underline">
                    <h3 className="mt-4 text-xl font-extrabold leading-7 text-gray-900 transition duration-100 ease-in-out sm:text-2xl">
                      "What is Product-Led Growth? Theory, Examples & Resources"
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500 line-clamp-3">
                      "The ultimate guide to PLG, written with insight from the
                      product-led world's foremost experts."
                    </p>
                  </a>
                  <div></div>
                </div>
              </article>

              <article className="flex flex-col">
                <div className="flex-1 ">
                  <a href="" className="block no-underline">
                    <h3 className="mt-4 text-xl font-extrabold leading-7 text-gray-900 transition duration-100 ease-in-out sm:text-2xl">
                      "Announcing the Latest Chameleon Benchmark Report"
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500 line-clamp-3">
                      "We analyzed over 214 million end-user interactions to
                      bring you the best insights to drive product success."
                    </p>
                  </a>
                  <div></div>
                </div>
              </article>

              <article className="flex flex-col">
                <div className="flex-1">
                  <a href="" className="block no-underline">
                    <h3 className="mt-4 text-xl font-extrabold leading-7 text-gray-900 transition duration-100 ease-in-out sm:text-2xl">
                      "What is User Onboarding? (Not What You May Think!)"
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500 line-clamp-3">
                      "A clearer definition of user onboarding, with examples,
                      to help you shape up your onboarding experience to empower
                      user activation, adoption, and retention."
                    </p>
                  </a>
                  <div></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;

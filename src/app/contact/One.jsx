import React from "react";

const One = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-40 pb-16">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-7xl">
            <div className="justify-center w-full text-center pb-8">
              <div className="w-full max-w-7xl mx-auto space-y-4">
                <h3 className="text-4xl font-semibold tracking-tight dark:text-black">
                  Contact<span className="text-companyColor"> Us</span>
                </h3>
                <div className="prose-lg text-gray-600 dark:text-gray-800">
                  <p>
                    Got a technical issue? Want to send feedback about a beta
                    feature? Need details about our Business plan? Let us know.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto items-center justify-center pb-8">
        <form action="#" class="space-y-8">
          <div className="md:ml-0 ml-4 md:mr-0 mr-4">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="md:ml-0 ml-4 md:mr-0 mr-4">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2 md:ml-0 ml-4 md:mr-0 mr-4">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="md:ml-0 ml-4">
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-companyColor sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-companyColor dark:hover:bg-companyColor  dark:focus:ring-bg-companyColor "
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default One;

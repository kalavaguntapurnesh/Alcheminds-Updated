import React from "react";

const Four = () => {
  return (
    <div className="relative py-12 overflow-hidden sm:py-20 ">
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 mx-auto space-y-10 sm:px-6">
        <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
               We provide better features with every <span className="text-companyColor">update. </span>
            </h2>
            <p className="w-full max-w-2xl mx-auto md:text-xl text-black text-2xl">
                Contact us for better & immediate response.
            </p>

        </div>
      </div>
    </div>
  );
};

export default Four;

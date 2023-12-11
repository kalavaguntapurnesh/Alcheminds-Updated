import React from 'react'
import Link from 'next/link'

const Four = () => {
  return (
    <div className="relative py-12 overflow-hidden pt-10 pb-6">
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

      <div className="justify-center w-full text-center pt-10 pb-6">
              <div className="w-full max-w-3xl mx-auto space-y-4">
               <Link href="/contact"> <button
                  className="bg-companyColor text-white w-40 h-12 rounded-xl text-base inline-flex font-bold transition duration-150 ease-in-out focus:outline-none
                items-center justify-center"
                >
                  Know More
                </button></Link>
              </div>
            </div>
    </div>
  )
}

export default Four

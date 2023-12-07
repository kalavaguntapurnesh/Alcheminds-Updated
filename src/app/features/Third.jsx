import React from 'react'
import Image from "next/image"

const Third = () => {
  return (
    <div className="bg-gray-50">
    <div className="relative z-20 py-16">
      <div className="w-full">
        <div className="w-full px-4 mx-auto">
          <div className="justify-center w-full text-center pb-8">
              <div className="w-full max-w-3xl mx-auto space-y-4 ">
                  <h2 className="text-base font-medium tracking-widest text-gray-500 uppercase dark:text-white">Get Inspired</h2>
                  <h3 className="text-4xl font-bold tracking-tight dark:text-white">Here are the latest features we offer!!</h3>
              </div>
          </div>
          
          <div className="w-full flex flex-wrap justify-evenly mt-10 pb-4 pt-4 md:pl-28 md:pr-28">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-8">
              <div
                className="relative h-56  overflow-hidden text-white shadow-lg ml-2 mr-2
        rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40"
              >
                <Image
                  src="/medium-shot-girl-posing-with-gra.jpg"
                  alt="img name"
                  width={5118}
                  height={3405}
                />
              </div>
              <div className="p-6">
                <h1 className="block mb-2  text-center text-xl antialiased font-bold leading-snug tracking-normal text-primaryColor">
                  Cirriculum Lesson Planning
                </h1>
               
                <p className="block text-base antialiased font-medium tracking-light text-gray-500">
                  Education care software assists teachers in creating and
                  organizing lesson plans, syllabi, and learning materials. It
                  ensures that the curriculum aligns with educational
                  standards and can be easily customized to meet specific
                  needs.
                </p>
             
              </div>
              <div className="p-6 pt-0">
                <button
                  className="select-none  rounded-[4px] bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                  src="/business-women-signature-documen.jpg"
                  alt="img name"
                  width={5118}
                  height={3405}
                />
              </div>
              <div className="p-6">
                <h1 className="block mb-2 text-center text-xl antialiased font-bold leading-snug tracking-normal text-primaryColor">
                  Assesment & Grading
                </h1>
                <p className="block text-base antialiased font-medium tracking-light text-gray-500">
                  Education care software simplifies the process of creating
                  and administering assessments. It automates grading and
                  generates insightful reports, helping educators identify
                  areas for improvement and provide targeted feedback to
                  students.
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="select-none  rounded-[4px] bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                  src="/book-laptop-pencil-clock-wooden-.jpg"
                  alt="img name"
                  width={5118}
                  height={3405}
                />
              </div>
              <div className="p-6">
                <h1 className="block mb-2  text-xl  text-center antialiased font-bold leading-snug tracking-normal text-primaryColor">
                  Analytics & Reporting
                </h1>
                <p className="block text-base antialiased font-medium tracking-light text-gray-500">
                  Education care software often includes analytical tools that
                  gather data on student performance, attendance, and
                  engagement. These analytics provide valuable insights for
                  educators and administrators data-driven decisions.
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="select-none  rounded-[4px] bg-primaryColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
  )
}

export default Third

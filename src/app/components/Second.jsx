import React from 'react'
import Image from "next/image"
const Second = () => {
  return (
    <div>

        <h1 className='mb-12 pt-12 text-center text-lg text-green-500'>Tailwind css Image/Content 
            background gradient circle</h1>

     

            <div className='relative flex h-[600px] w-screen
             items-center justify-center from-slate-200 to-slate-800
              before:absolute 
             before:h-[280px] before:w-[192px] before:bg-purple-600
             before:rounded-[50%/60%_60%_40%_40%] before:bg-gradient-to-b'>
                <Image className='h-[480px] z-10' 
                src="/directly.png"
                width={300} height={480} alt='image'></Image>
            </div>

    </div>
  )
}

export default Second

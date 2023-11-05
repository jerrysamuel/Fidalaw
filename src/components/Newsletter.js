import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Subscribe To Our Newsletter ?</h1>
                <p>Subscribe To Our Newsletter?</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
                <input type="email" name="email" class=" p-3 flex bg-white border shadow-sm border-slate-300 placeholder-slate-700 focus:outline-none focus:border-[#9a00df] focus:ring-[#9a00df] w-full rounded-md text-black " placeholder='Enter your email'/>
                  <button className='rounded-md text-black bg-[#9a00df] py-4 ml-4 w-[200px] font-medium my-6 px-6'>Notify Me</button>
               
                </div>
                <p className=''>
               Why walk into a law office when you can have it all at your <span className='text-[#9a00df]'>convenience?</span>  
               </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
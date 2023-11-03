import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:grid-cols-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Subbscribe To Our Newsletter ?</h1>
                <p>Subscribe To Our Newsletter?</p>
            </div>
            <div className='my-4'>
                <div>
                <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-700 focus:outline-none focus:border-[#9a00df] focus:ring-[#9a00df] block w-full rounded-md sm:text-sm focus:ring-1 text-black " placeholder='Enter your email'/>
                  <button className='rounded-xl text-black bg-[#9a00df] py-4 mt-7 w-[200px] font-medium my-6 mx-auto px-5'>Notify Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
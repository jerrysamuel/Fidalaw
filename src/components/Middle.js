import React from 'react'
import client from '../assets/client.jpg'


const Middle = () => {
  return (
    <div className='py-15 px-4 w-full bg-slate-50'>
    <div className='max-w-[1240p]mx-auto grid md:grid-cols-2 '>
    <img src={client} alt='loremipsum'></img>
      <div className='justify-between'>
        
          <h1 className=''>
              What We Offer
          </h1>
          <p className='items-center text-xl font-bold '>Finding the Perfect <span className='text-2xl text-[#9a00df]'>Legal Counsel </span>
         <br/>Can Be Daunting....</p>
         <button className='rounded-xl text-white bg-[#9a00df] py-4 mt-7 w-[200px] font-medium my-6 mx-auto px-5' >Get Early Access</button>
      </div>
    </div>
    
</div>
  )
}

export default Middle
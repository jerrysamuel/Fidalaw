import React from 'react'
import Typed from 'react-typed';
// import { render } from 'react-dom';

const Hero = () => {
  return (

    <div className=' text-white justify-between'>
        <div className='w-full max-w-[900px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center'>
        <p className=' text-white items-center text-xl font-bold '>Finding the Perfect <span className='text-2xl text-[#9a00df]'>Legal Counsel </span>
         <br/>Can Be Daunting....</p>
        <h1 className='text-6xl md:7xl lg:text-4xl mb-2 font-bold md:py-6'>Hire the <span className='text-[#9a00df]'>Best</span> lawyer</h1>
       
        <div className='text-white items-center text-xl font-bold'>
        <Typed
        strings={['We Connect Clients To The Best Lawyers, Making Justice Accessible To Everyone.',
                'We Connect Clients To The Best Lawyers, Making Justice Accessible To Everyone.', 
                'We Connect Clients To The Best Lawyers, Making Justice Accessible To Everyone.']}
                    typeSpeed={80} backSpeed={140} loop
        /> </div> 
        <button className='rounded-xl text-black bg-[#9a00df] py-4 mt-7 w-[200px] font-medium my-6 mx-auto px-5' >Get Started</button>
        </div>
        
    </div>
  )
}

export default Hero
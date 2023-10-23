import { useState } from 'react'
import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
      <h1 className='text-3xl w-full text-bold text-[#9a00df]'>
          FidaLaw.
        </h1>
        <ul className='hidden md:flex uppercase'>
          <li className= "p-4">Company</li>
          <li className= "p-4">About</li>
          <li className= "p-4">contact</li>
          <li className= "p-4">home</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
          
        </div>
        <div className={nav ? 'ease-in-out duration-500 fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]'}>
        <h1 className=' pt-3 text-3xl w-full text-bold text-[#9a00df]'>
          FidaLaw.
        </h1>
          <ul className='pt-3 p-4 uppercase'>
            <li className= "p-4 border-b border-gray-800">Company</li>
            <li className= "p-4 border-b border-gray-800">About</li>
            <li className= "p-4 border-b border-gray-800">contact</li>
            <li className= "p-4">home</li>
          </ul>
        </div>
      </div>
  )
}
export default NavBar;

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function NavBar() {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <ul className="nav justify-between hidden sm:flex">
        <li><Link href={'/'}><img src='logo.png' alt='LOGO' className='logo justify-start' /></Link></li>      
        <ul className='flex'>
          <li className='pr-10 pl-5 pt-5 text-[#9CA3C1] cursor-pointer hover:text-white'>Home</li>
          <li className='pr-10 pl-5 pt-5 text-[#9CA3C1] cursor-pointer hover:text-white'>Experience</li>
          <li className='pr-10 pl-5 pt-5 text-[#9CA3C1] cursor-pointer hover:text-white'>Resume</li>
          <li className='pr-10 pl-5 pt-5 text-[#9CA3C1] cursor-pointer hover:text-white'>Work</li>          
        </ul>
      </ul>
      {/* MOBILE BUTTON */}
      <div className='block sm:hidden z-10 justify-between'>
        {nav ? <AiOutlineClose size={20} className='text-[#9CA3C1] m-5' cursor-pointer /> : <AiOutlineMenu size={20} className='text-[#9CA3C1] m-5 cursor-pointer' />}
        {/* <AiOutlineMenu size={20} className='text-[#9CA3C1]'/> */}
              
      </div>

      {/* MOBILE MENU */}
      <ul className={nav ?"nav flex sm:hidden absolute top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen" : "nav flex sm:hidden absolute top-0 left-[-100] right-0 bottom-0 justify-center items-center w-full h-screen"}>
        {/* <li><Link href={'/'}><img src='logo.png' alt='LOGO' className='logo justify-start' /></Link></li> */}
        <ul className='text-center'>
          <li className='pt-5 text-[#9CA3C1] cursor-pointer hover:text-white'>Home</li>
          <li className='pt-5 text-[#9CA3C1] cursor-pointer hover:text-white'>Experience</li>
          <li className='pt-5 text-[#9CA3C1] cursor-pointer hover:text-white'>Resume</li>
          <li className='pt-5 text-[#9CA3C1] cursor-pointer hover:text-white'>Work</li>          
        </ul>
      </ul>

    </div>
  )
}

export default NavBar

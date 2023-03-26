

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function NavBar() {

  const [open, setOpen] = useState(false)

    function showMenu (){
      setOpen(open => !open)
    }
  
  return (
    <div className='nav'>
      <div className='px-8 mx-auto'>
        <div className="flex justify-between items-center pt-5">
         {/* LOGO */}
          <div>
            <Link href={'/'}><img src='logo.png' alt='LOGO' className='logo w-20' /></Link>
          </div>
          <div className='text-[#9CA3C1] space-x-10 pr-5 hidden md:flex'>
            <Link href={'#'} className='hover:text-white transition duration-300' >HOME</Link>
            <Link href={'#'} className='hover:text-white transition duration-300'>EXPERIENCE</Link>
            <Link href={'#'} className='hover:text-white transition duration-300'>WORK</Link>
            <Link href={'#'} className='hover:text-white transition duration-300'>RESUME</Link> 
          </div>
        </div>
      </div>        
        {/* MOBILE BUTTON */}
      <div className='button md:hidden flex items-center justify-end z-10' onClick={showMenu}>
        <button><AiOutlineMenu size={20} className='text-[#9CA3C1] m-5 cursor-pointer mobile-menu-button' /></button> 
      </div>
      {/* MOBILE MENU */}
      <div className={ open ? '' : 'hidden'}>
      <div className='text-center text-[#9CA3C1] mobile-menu md:hidden'>
        <Link href={'#'} className='block py-4 text-sm hover:bg-gray-200 transition duration-300'>HOME</Link>
        <Link href={'#'} className='block py-4 text-sm hover:bg-gray-200 transition duration-300'>EXPERIENCE</Link>
        <Link href={'#'} className='block py-4 text-sm hover:bg-gray-200 transition duration-300'>WORK</Link>
        <Link href={'#'} className='block py-4 text-sm hover:bg-gray-200 transition duration-300'>RESUME</Link>
      </div>
      </div>
    </div>
  )
}

export default NavBar

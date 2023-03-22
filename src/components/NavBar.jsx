
import React from 'react'


function NavBar() {
  return (
    <div>
      <ul className="navbar flex justify-between">
        <li><img src='logo.png' alt='LOGO' className='logo justify-start' /></li>      
        <ul className='flex'>
          <li className='pr-10 pl-5 pt-5 text-[#9CA3C1] cursor-pointer'>Home</li>
          <li className='pr-10 pl-5 pt-5 text-[#9CA3C1] cursor-pointer'>Work</li>
          <li className='pr-10 pl-5 pt-5 text-[#9CA3C1] cursor-pointer'>About</li>          
        </ul>
      </ul>
    </div>
  )
}

export default NavBar

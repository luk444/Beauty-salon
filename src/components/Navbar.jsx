import React, { useState } from 'react';
import {logo,lock, hamburgerMenu, close} from '../assets'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
            <h2 className="h-[25px] font-black text-2xl text-teal-800"> ClasyClub</h2>
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Memership</li>
                </ul>
            </div>


            <div className='hidden md:flex'>
                <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold'>Subscribirse</button>
            </div>

            <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>




        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4 hover:bg-gray-100'>Home</li>
                    <li className='p-4 hover:bg-gray-100'>About</li>
                    <li className='p-4 hover:bg-gray-100'>Memership</li>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Subscribirse</button>
                    </div>
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar
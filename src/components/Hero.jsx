import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>JOIN TO MEMBERSHIP</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>ClassyClub membership with <span className='text-[#20B486]'>5+</span> monthly beauty sessions for <span  className='text-[#20B486]'>50.000AR$</span>
                </h1>
                <p className='py-2 text-lg text-gray-600'>Your Beauty Oasis: 5 Personalized Sessions for $50.</p>
                
            </div>
            
            <img  src={heroImg} className="md:order-last  order-first" />



        </div>
        

    </div>
  )
}

export default Hero
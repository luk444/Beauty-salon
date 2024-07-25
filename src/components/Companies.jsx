import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4  } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[10px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-1 font-bold text-[#536E96]'>Nuestro salón es un oasis de belleza.</h1>
            <p className='text-center  text-[#536E96] text-s'>Para mujeres que buscan un trato personalizado y un ambiente exclusivo. Te invitamos a disfrutar de un espacio donde te mimarán con los mejores tratamientos y productos, creando un momento especial para ti.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2 w-4/5 max-h-20'>
                  <img src={companyLogo2} />
                  <img src={companyLogo2} />
                  <img src={companyLogo3} />
                  <img src={companyLogo4} />
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies
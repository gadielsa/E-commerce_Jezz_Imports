import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-grey-400'>
      {/* Hero - Lado esquerdo */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>EM ALTA</p>
          </div>
          <h1 className='text-3xl md:py-3 lg:text-5xl leading-relaxed'>LANÇAMENTOS</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>COMPRE AGORA</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero - Lado direito */}
      <img className='w-full sm:w-1/2' src={assets.sneaker_example} alt="" />
    </div>
  )
}

export default Hero

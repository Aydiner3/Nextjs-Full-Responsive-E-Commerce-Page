import React from 'react'
import Image from 'next/image'
import Brand1 from '../../../public/brands/brand1.png'
import Brand2 from '../../../public/brands/brand2.png'
import Brand3 from '../../../public/brands/brand3.png'

const BrandCard = () => {
  return (
    <div className='h-[240px] md:h-[386px] w-full bg-brand-bg flex flex-col justify-center items-center gap-4 md:gap-12 rounded-[10px]'>
        <h1 className='font-bold text-[20px] md:text-[40px] text-center max-w-[35ch]'>
        “These are the most thoughtfully designed sneakers on the market.”
        </h1>
        <div className='flex justify-around items-center scale-50 md:scale-100 gap-12 md:gap-40  '>
          <Image src={Brand3} width={224} height={57}/>
          <Image src={Brand1} width={253} height={74}/>
          <Image src={Brand2} width={119} height={48}/>
        </div>
    </div>
  )
}

export default BrandCard
import Link from 'next/link'
import React from 'react'
import Shoe1 from '../../../public/shoes/shoe1.png'
import Shoe2 from '../../../public/shoes/shoe2.png'
import Shoe3 from '../../../public/shoes/shoe3.png'
import Shoe4 from '../../../public/shoes/shoe4.png'
import Shoe5 from '../../../public/shoes/shoe5.png'
import ShoeCard from './shoeCard'


const ShoeSection = () => {
  return (
    <div className='flex  flex-col  justify-center gap-6 text-primery-black'>
      <div className='flex justify-between items-center px-3 md:px-0'>
      <h3 className='font-bold text-[28px] text-primary-black'>Explore Model 000</h3>
      <Link href={'/'} className='underline text-primary-black'>Shop Now</Link>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between flex-wrap gap-5 '>
        <ShoeCard image={Shoe1}/>
        <ShoeCard image={Shoe2}/>
        <ShoeCard image={Shoe3}/>
        <ShoeCard image={Shoe4}/>
        <ShoeCard image={Shoe5}/>
        <ShoeCard image={Shoe1}/>
      </div>
      <div className='flex justify-center'>
      <button className='py-2 px-6 bg-hero-btn w-36 rounded-[32px]'>Show Now</button>
      </div>
    </div>
  )
}

export default ShoeSection
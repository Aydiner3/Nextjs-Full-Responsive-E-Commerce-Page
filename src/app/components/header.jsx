import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/Logo.png'
import LoginIcon from '../../../public/user.png'
import ShoppingIcon from '../../../public/shopping-bag.png'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='flex justify-between items-center p-6'> 
      <div className='shrink-0 '><Image src={Logo} width={144} height={46}/></div>
      <div className=' justify-center items-center gap-5 hidden md:inline-flex '>
        <Link href={'/'}>Men</Link>
        <Link href={'/'}>Women</Link>
        <Link href={'/'}>Accesories</Link>
        <Link href={'/'}>About</Link>
        <button className='border text-hero-btn rounded-[24px] p-2 border-hero-btn'>Shoe Finder Quiz</button>
      </div>
      
      <div className='flex justify-center gap-5'>
        <Link href={'/'} className='hidden md:inline-flex'>Support</Link>
        <Link href={'/'}><Image src={LoginIcon} width={24} height={24}/></Link>
        <Link href={'/'}><Image src={ShoppingIcon} width={24} height={24}/></Link>
        
      </div>
    </div>
  )
}

export default Header
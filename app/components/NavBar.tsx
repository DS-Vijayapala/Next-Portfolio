'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const openMenu = () => setMenuOpen(true)

    const closeMenu = () => setMenuOpen(false)

    return (
        <>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center 
            justify-between z-10'>

                <a href="#top">

                    <Image src={assets.logo} alt="Logo" className='w-10 cursor-pointer mr-14' />

                </a>

                {/* Desktop Menu */}

                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full 
                px-12 py-3 bg-white shadow-sm bg-opacity-50'>

                    <li><a href="#top">Home</a></li>

                    <li><a href="#about">About Me</a></li>

                    <li><a href="#Projects">Projects</a></li>

                    <li><a href="#work">My Work</a></li>

                    <li><a href="#contact">Contact me</a></li>

                </ul>

                <div className='flex items-center gap-4'>

                    <button>
                        <Image src={assets.moon} alt="moon" className='w-6' />
                    </button>

                    <a
                        className='hidden lg:flex items-center gap-3 px-10 border
                         border-gray-500 rounded-full ml-4'
                        href="#contact"
                    >
                        Contact
                        <Image alt='' src={assets.rightArrow} className='w-3' />
                    </a>


                    {/* Hamburger Menu Icon */}

                    <button className='block md:hidden ml-3' onClick={openMenu}>

                        <Image src={assets.menu_icon} alt="menu" className='w-6 cursor-pointer' />

                    </button>

                </div>

                {/* Mobile Slide Menu */}
                <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed 
                    top-0 bottom-0 right-0 w-64 z-50 h-screen bg-rose-50 
                    transition-transform duration-500 
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className='absolute top-6 right-6' onClick={closeMenu}>

                        <Image src={assets.close_icon} alt="close" className='w-5 cursor-pointer' />

                    </div>

                    <li><a href="#top" onClick={closeMenu}>Home</a></li>

                    <li><a href="#about" onClick={closeMenu}>About Me</a></li>

                    <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>

                    <li><a href="#work" onClick={closeMenu}>My Work</a></li>

                    <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>

                </ul>

            </nav>

        </>

    )

}


export default NavBar

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function NavBar() {

    return (

        <>

            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] 
            flex items-center justify-between z-10'>

                <a href="#top">
                    <Image src={assets.logo} alt="Logo" className='w-10 cursor-pointer mr-14' />
                </a>

                <ul className='hidden md:flex items-center gap-6 
                lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 '>

                    <li><a href="#top">Home</a></li>

                    <li><a href="#about">About Me</a></li>

                    <li><a href="#Projects">Projects</a></li>

                    <li><a href="#work">My Work</a></li>

                    <li><a href="#work">Contact me</a></li>

                </ul>

                <div className='flex items-center gap-4'>

                    <button>
                        <Image src={assets.moon} alt="moon" className='w-6' />
                    </button>

                    <a className='hidden lg:flex items-center gap-3 px-10 
                    border border-gray-500 rounded-full
                    ml-4'
                        href="#contact">Contact <Image
                            alt=''
                            src={assets.rightArrow}
                            className='w-3' />
                    </a>

                    <button className='block md:hidden ml-3'>
                        <Image src={assets.menu_icon} alt="menu"
                            className='w-6 cursor-pointer' />
                    </button>

                </div>

            </nav>

        </>

    )

}

export default NavBar
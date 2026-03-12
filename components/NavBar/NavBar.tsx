'use client'

import React, { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const [scrolled, setScrolled] = useState(false)

    const pathname = usePathname()

    const openMenu = () => setMenuOpen(true)

    const closeMenu = () => setMenuOpen(false)

    useEffect(() => {

        document.documentElement.classList.add("dark")

    }, [])

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 20)

        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    const isActive = (path: string) => pathname === path

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
        return () => {
            document.body.style.overflow = ""
        }
    }, [menuOpen])

    return (

        <>

            {/* Main Navigation */}

            <nav className={`w-full sticky z-[120] top-0 h-[60px] flex items-center justify-between 
            px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-300
            ${scrolled
                    ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg'
                    : 'bg-slate-900/90 backdrop-blur-md shadow-sm'
                }`}>

                {/* Logo */}

                <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
                    <Image
                        src="/icon.png"
                        alt="Logo"
                        width={38}
                        height={38}
                        className="rounded-lg"
                    />
                </Link>

                {/* Desktop Menu */}

                <ul className='hidden md:flex items-center space-x-8 md:pl-28 text-slate-200 text-sm'>

                    <li>

                        <Link
                            href="/"
                            className={`font-medium transition-colors duration-300 relative group
                            ${isActive('/') ? 'text-violet-400' : 'hover:text-violet-400'}`}
                        >

                            Home

                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500
                             to-purple-600 transition-all duration-300
                            ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>

                        </Link>

                    </li>

                    <li>

                        <Link
                            href="/about-me"
                            className={`font-medium transition-colors duration-300 relative group
                            ${isActive('/about-me') ? 'text-violet-400' : 'hover:text-violet-400'}`}
                        >

                            About Me

                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500
                             to-purple-600 transition-all duration-300
                            ${isActive('/about-me') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>

                        </Link>

                    </li>

                    <li>

                        <Link
                            href="/all-projects"
                            className={`font-medium transition-colors duration-300 relative group
                            ${isActive('/all-projects') ? 'text-violet-400' : 'hover:text-violet-400'}`}
                        >

                            Projects

                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500
                             to-purple-600 transition-all duration-300
                            ${isActive('/all-projects') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>

                        </Link>

                    </li>

                    <li>

                        <Link
                            href="/contact-me"
                            className={`font-medium transition-colors duration-300 relative group
                            ${isActive('/contact-me') ? 'text-violet-400' : 'hover:text-violet-400'}`}
                        >

                            Contact

                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500
                             to-purple-600 transition-all duration-300
                            ${isActive('/contact-me') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>

                        </Link>

                    </li>

                </ul>

                {/* Right Side Actions */}

                <div className="flex items-center gap-3">

                    {/* Contact Button - Desktop */}

                    <Link
                        href="/contact-me"
                        className='hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r
                         from-violet-600 to-purple-600 
                        hover:from-violet-700 hover:to-purple-700 text-white
                        ml-4 px-5 py-2 rounded-full active:scale-95 transition-all duration-300 
                        font-medium shadow-md hover:shadow-lg hover:shadow-purple-500/30 text-sm
                        relative overflow-hidden group'
                    >

                        <span className="relative z-10">Contact</span>

                        <ArrowRight className='w-3.5 h-3.5 relative z-10 transition-transform duration-300 
                        group-hover:translate-x-1' />

                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0
                         group-hover:opacity-100 transition-opacity duration-300"></span>

                    </Link>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={openMenu}
                        className='inline-block md:hidden w-10 h-10 items-center justify-center
                        text-slate-200 active:scale-90 transition-transform duration-200'
                        aria-label="Open menu"
                        aria-expanded={menuOpen}
                    >

                        <Menu className='w-7 h-7' />

                    </button>

                </div>

                {/* Mobile Menu */}

                {menuOpen && (
                    <>
                        <div
                            className="fixed inset-0 top-[60px] bg-slate-950/40 backdrop-blur-[1px] md:hidden z-[190]"
                            onClick={closeMenu}
                        />

                        <div className="fixed top-[60px] left-0 w-full bg-slate-900 border-t border-slate-800
                        shadow-lg md:hidden z-[200]">

                            <div className="p-6">

                        {/* Close Button */}

                        <button
                            onClick={closeMenu}
                            className='absolute top-4 right-6 w-8 h-8 flex items-center justify-center
                            text-slate-400 hover:text-slate-200 transition-colors duration-200'
                            aria-label="Close menu"
                        >

                            <X className='w-6 h-6' />

                        </button>

                        <ul className='flex flex-col space-y-4 text-lg text-slate-200'>

                            <li>

                                <Link
                                    href="/"
                                    onClick={closeMenu}
                                    className={`block text-sm font-medium transition-colors duration-300
                                    ${isActive('/') ? 'text-violet-400' : 'hover:text-violet-400'}`}
                                >

                                    Home

                                </Link>

                            </li>

                            <li>

                                <Link
                                    href="/about-me"
                                    onClick={closeMenu}
                                    className={`block text-sm font-medium transition-colors duration-300
                                    ${isActive('/about-me') ? 'text-violet-400' : 'hover:text-violet-400'}`}
                                >

                                    About Me

                                </Link>

                            </li>

                            <li>

                                <Link
                                    href="/all-projects"
                                    onClick={closeMenu}
                                    className={`block text-sm font-medium transition-colors duration-300
                                    ${isActive('/all-projects') ? 'text-violet-400' : 'hover:text-violet-400'}`}
                                >

                                    Projects

                                </Link>

                            </li>

                            <li>

                                <Link
                                    href="/contact-me"
                                    onClick={closeMenu}
                                    className={`block text-sm font-medium transition-colors duration-300
                                    ${isActive('/contact-me') ? 'text-violet-400' : 'hover:text-violet-400'}`}
                                >

                                    Contact

                                </Link>

                            </li>

                        </ul>

                        <Link
                            href="/contact-me"
                            onClick={closeMenu}
                            className='flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600
                            hover:from-violet-700 hover:to-purple-700 text-white
                            mt-6 text-sm hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 
                            transition-all duration-300 w-36 h-10 rounded-full font-medium shadow-md
                            relative overflow-hidden group'
                        >

                            <span className="relative z-10">Contact</span>

                            <ArrowRight className='w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1' />

                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0
                             group-hover:opacity-100 transition-opacity duration-300"></span>

                        </Link>

                            </div>

                        </div>
                    </>
                )}

            </nav>

        </>

    )

}


export default NavBar

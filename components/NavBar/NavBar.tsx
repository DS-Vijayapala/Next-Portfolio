'use client'

import React, { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, ArrowRight, Code } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const [isDarkMode, setIsDarkMode] = useState(true)

    const [scrolled, setScrolled] = useState(false)

    const pathname = usePathname()

    const openMenu = () => setMenuOpen(true)

    const closeMenu = () => setMenuOpen(false)

    useEffect(() => {

        if (localStorage.theme === "dark" || (!("theme" in localStorage)

            && window.matchMedia("(prefers-color-scheme: dark)").matches)) {

            setIsDarkMode(true)

        } else {

            setIsDarkMode(false)

        }

    }, [])

    useEffect(() => {

        if (isDarkMode) {

            document.documentElement.classList.add("dark")

            localStorage.theme = "dark"

        } else {

            document.documentElement.classList.remove("dark")

            localStorage.theme = ""

        }

    }, [isDarkMode])

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 20)

        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    const isActive = (path: string) => pathname === path

    return (

        <>

            {/* Main Navigation */}

            <nav className={`w-full sticky z-50 top-0 h-[60px] flex items-center justify-between 
            px-6 md:px-16 lg:px-24 xl:px-32  transition-all duration-300
            ${scrolled
                    ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg'
                    : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
                }`}>

                {/* Logo */}

                <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">

                    <Code className='w-10 h-10 cursor-pointer text-violet-600 dark:text-violet-400' />

                </Link>

                {/* Desktop Menu */}

                <ul className='hidden md:flex items-center space-x-8 md:pl-28 text-gray-900 dark:text-slate-200'>

                    <li>

                        <Link
                            href="/"
                            className={`font-medium transition-colors duration-300 relative group
                            ${isActive('/')
                                    ? 'text-violet-600 dark:text-violet-400'
                                    : 'hover:text-violet-600 dark:hover:text-violet-400'
                                }`}
                        >

                            Home

                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500
                             to-purple-600 transition-all duration-300
                            ${isActive('/')
                                    ? 'w-full'
                                    : 'w-0 group-hover:w-full'
                                }`}></span>

                        </Link>

                    </li>

                    <li>

                        <Link
                            href="/about-me"
                            className={`font-medium transition-colors duration-300 relative group
                            ${isActive('/about-me')
                                    ? 'text-violet-600 dark:text-violet-400'
                                    : 'hover:text-violet-600 dark:hover:text-violet-400'
                                }`}
                        >
                            About Me

                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500
                             to-purple-600 transition-all duration-300
                            ${isActive('/about-me')
                                    ? 'w-full'
                                    : 'w-0 group-hover:w-full'
                                }`}></span>

                        </Link>

                    </li>

                    <li>

                        <Link
                            href="/all-projects"
                            className={`font-medium transition-colors duration-300 relative group
                            ${isActive('/all-projects')
                                    ? 'text-violet-600 dark:text-violet-400'
                                    : 'hover:text-violet-600 dark:hover:text-violet-400'
                                }`}
                        >

                            Projects

                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500
                             to-purple-600 transition-all duration-300
                            ${isActive('/all-projects')
                                    ? 'w-full'
                                    : 'w-0 group-hover:w-full'
                                }`}></span>

                        </Link>

                    </li>

                    <li>

                        <Link
                            href="/contact-me"
                            className={`font-medium transition-colors duration-300 relative group
                            ${isActive('/contact-me')
                                    ? 'text-violet-600 dark:text-violet-400'
                                    : 'hover:text-violet-600 dark:hover:text-violet-400'
                                }`}
                        >

                            Contact

                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500
                             to-purple-600 transition-all duration-300
                            ${isActive('/contact-me')
                                    ? 'w-full'
                                    : 'w-0 group-hover:w-full'
                                }`}></span>

                        </Link>

                    </li>

                </ul>

                {/* Right Side Actions */}

                <div className="flex items-center gap-3">

                    {/* Theme Toggle */}

                    <button
                        onClick={() => setIsDarkMode(prev => !prev)}
                        className='w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700
                        flex items-center justify-center text-yellow-500 dark:text-yellow-400 transition-all duration-300 
                        hover:scale-110 hover:rotate-360 active:scale-95'
                        aria-label="Toggle theme"
                    >

                        {isDarkMode ? (

                            <Sun className='w-5 h-5' />

                        ) : (

                            <Moon className='w-5 h-5' />

                        )}

                    </button>

                    {/* Contact Button - Desktop */}

                    <Link
                        href="/contact-me"
                        className='hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-purple-600 
                        hover:from-violet-700 hover:to-purple-700 text-white
                        ml-4 px-5 py-2 rounded-full active:scale-95 transition-all duration-300 
                        font-medium shadow-md hover:shadow-lg hover:shadow-purple-500/30 text-sm
                        relative overflow-hidden group'
                    >

                        <span className="relative z-10">Contact</span>

                        <ArrowRight className='w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1' />

                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0
                         group-hover:opacity-100 transition-opacity duration-300"></span>

                    </Link>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={openMenu}
                        className='inline-block md:hidden w-10 h-10 items-center justify-center
                        text-gray-900 dark:text-slate-200 active:scale-90 transition-transform duration-200'
                        aria-label="Open menu"
                    >

                        <Menu className='w-7 h-7' />

                    </button>

                </div>

                {/* Mobile Menu */}

                <div className={`absolute top-[60px] left-0 w-full bg-white dark:bg-slate-900 
                shadow-lg md:hidden transition-all duration-300 overflow-hidden
                ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>

                    <div className="p-6">

                        {/* Close Button */}

                        <button
                            onClick={closeMenu}
                            className='absolute top-4 right-6 w-8 h-8 flex items-center justify-center
                            text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200 
                            transition-colors duration-200'
                            aria-label="Close menu"
                        >

                            <X className='w-6 h-6' />

                        </button>

                        <ul className='flex flex-col space-y-4 text-lg text-gray-900 dark:text-slate-200'>

                            <li>

                                <Link
                                    href="/"
                                    onClick={closeMenu}
                                    className={`block text-sm font-medium transition-colors duration-300
                                    ${isActive('/')
                                            ? 'text-violet-600 dark:text-violet-400'
                                            : 'hover:text-violet-600 dark:hover:text-violet-400'
                                        }`}
                                >

                                    Home

                                </Link>

                            </li>

                            <li>

                                <Link
                                    href="/about-me"
                                    onClick={closeMenu}
                                    className={`block text-sm font-medium transition-colors duration-300
                                    ${isActive('/about-me')
                                            ? 'text-violet-600 dark:text-violet-400'
                                            : 'hover:text-violet-600 dark:hover:text-violet-400'
                                        }`}
                                >

                                    About Me

                                </Link>

                            </li>

                            <li>

                                <Link
                                    href="/all-projects"
                                    onClick={closeMenu}
                                    className={`block text-sm font-medium transition-colors duration-300
                                    ${isActive('/all-projects')
                                            ? 'text-violet-600 dark:text-violet-400'
                                            : 'hover:text-violet-600 dark:hover:text-violet-400'
                                        }`}
                                >

                                    Projects

                                </Link>

                            </li>

                            <li>

                                <Link
                                    href="/contact-me"
                                    onClick={closeMenu}
                                    className={`block text-sm font-medium transition-colors duration-300
                                    ${isActive('/contact-me')
                                            ? 'text-violet-600 dark:text-violet-400'
                                            : 'hover:text-violet-600 dark:hover:text-violet-400'
                                        }`}
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

            </nav>

        </>

    )

}


export default NavBar
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Footer() {

    return (

        <footer className="mt-20 border-t border-gray-200 dark:border-gray-700 text-slate-800 
        dark:text-gray-100 bg-white dark:bg-slate-900 transition-colors duration-300">

            <div className="max-w-6xl mx-auto px-4 py-8 sm:flex sm:items-center sm:justify-between 
            text-center sm:text-left">



                {/* Email */}

                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0 text-gray-700 dark:text-gray-300">

                    <Image src={assets.mail_icon} alt="Email icon" className="w-5" />

                    <a href="mailto:example@example.com" className="hover:underline">
                        dinethsachintha52@gmail.com
                    </a>

                </div>

                {/* Social Links */}

                <ul className="flex items-center justify-center gap-6 mt-2 sm:mt-0">

                    <li>

                        <a
                            href="https://github.com/DS-Vijayapala"
                            target="_blank"
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition dark:text-gray-400
                            "
                        >

                            <Image src={assets.github} alt="GitHub"
                                className="w-5 dark:bg-gray-500 dark:border dark:border-gray-500 dark:rounded-sm " />

                            <span className="text-sm">GitHub</span>

                        </a>

                    </li>

                    <li>

                        <a
                            href="https://www.linkedin.com/in/dineth-sachintha/"
                            target="_blank"
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition dark:text-gray-400"
                        >

                            <Image src={assets.linkedin} alt="LinkedIn" className="w-5" />

                            <span className="text-sm">LinkedIn</span>

                        </a>

                    </li>

                    {/* <li>

                        <a
                            href="#"
                            target="_blank"
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition dark:text-gray-400"
                        >

                            <Image src={assets.x_logo} alt="Twitter/X"
                                className="w-5 dark:bg-gray-500 dark:border-none  dark:rounded-sm" />

                            <span className="text-sm">Twitter</span>

                        </a>

                    </li> */}

                </ul>

                {/* Copyright */}

                <p className="text-sm mt-4 sm:mb-0 text-gray-600 dark:text-gray-400">

                    &copy; {new Date().getFullYear()}All rights reserved.

                </p>

            </div>

        </footer>

    );

}


export default Footer;

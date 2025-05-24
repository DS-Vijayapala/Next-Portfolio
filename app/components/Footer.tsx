import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Footer() {

    return (

        <footer className="mt-20 border-t border-gray-200 bg-white text-slate-800">

            <div className="max-w-6xl mx-auto px-4 py-8 sm:flex sm:items-center sm:justify-between 
            text-center sm:text-left">

                {/* Copyright */}

                <p className="text-sm mb-4 sm:mb-0 text-gray-600">

                    &copy; {new Date().getFullYear()}All rights reserved.

                </p>

                {/* Email */}

                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-0 text-gray-700">

                    <Image src={assets.mail_icon} alt="Email icon" className="w-5" />

                    <a href="mailto:example@example.com" className="hover:underline">
                        example@example.com
                    </a>

                </div>

                {/* Social Links */}

                <ul className="flex items-center justify-center gap-6 mt-2 sm:mt-0">

                    <li>

                        <a
                            href="#"
                            target="_blank"
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition"
                        >

                            <Image src={assets.github} alt="GitHub" className="w-5" />

                            <span className="text-sm">GitHub</span>

                        </a>

                    </li>

                    <li>

                        <a
                            href="#"
                            target="_blank"
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition"
                        >

                            <Image src={assets.linkedin} alt="LinkedIn" className="w-5" />

                            <span className="text-sm">LinkedIn</span>

                        </a>

                    </li>

                    <li>

                        <a
                            href="#"
                            target="_blank"
                            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition"
                        >

                            <Image src={assets.x_logo} alt="Twitter/X" className="w-5" />

                            <span className="text-sm">Twitter</span>

                        </a>

                    </li>

                </ul>

            </div>

        </footer>

    );

}


export default Footer;

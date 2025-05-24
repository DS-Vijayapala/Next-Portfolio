import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Header() {

    return (

        <header className="w-11/12 max-w-4xl mx-auto h-screen flex flex-col 
        items-center justify-center text-center gap-6 px-4">

            {/* Profile Image */}
            <div className="relative">

                <Image
                    src={assets.default_image}
                    alt="Dineth Profile"
                    className="w-32 sm:w-40 md:w-48 rounded-full border-4 border-gray-500 shadow-lg"
                />

            </div>

            {/* Greeting & Name */}
            <h3 className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">

                👋 Hello, I'm <span className="font-semibold text-green-700">Dineth</span>

            </h3>

            {/* Typing Animation */}
            <TypeAnimation
                sequence={[
                    'Full-Stack Web Developer', 3500,
                    'MERN Stack Developer', 3500,
                    'React / Next.js Developer', 3500,

                ]}
                wrapper="h1"
                speed={25}
                repeat={Infinity}
                className="text-xl sm:text-3xl lg:text-6xl  text-gray-600 leading-tight
                dark:text-gray-300"
            />


            {/* Tech Stack */}
            <p className="text-sm sm:text-base text-gray-700 max-w-xl dark:text-gray-300">
                Specializing in building scalable web applications with the
                <span className="font-medium text-green-700"> MERN Stack </span> – MongoDB, Express.js, React / Next.js, and Node.js.
                I love crafting user-friendly interfaces and writing efficient backend code.

            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">

                <a
                    href="#contact"
                    className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2
                     hover:bg-green-700 transition"
                >

                    Contact Me
                    <Image src={assets.rightArrow} alt="Arrow" className="w-4" />

                </a>

                <a

                    href="#Projects"
                    className="text-gray-700 border border-green-600 px-6 py-3 rounded-full
                     hover:bg-green-200 transition duration-500"
                >
                    View Projects

                </a>

            </div>

        </header>

    )

}


export default Header

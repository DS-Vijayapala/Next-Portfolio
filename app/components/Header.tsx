import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "motion/react"
import { ProjectModal } from '@/app/components/ProjectModel'

function Header() {

    const [showModal, setShowModal] = useState(false);

    return (

        <header className="w-11/12 max-w-4xl mx-auto h-screen flex flex-col 
        items-center justify-center text-center gap-6 px-4">

            {/* Profile Image */}

            <motion.div className="relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}>

                <Image
                    src={assets.default_image}
                    alt="Dineth Profile"
                    className="w-32 sm:w-40 md:w-48 rounded-full border-4 border-gray-500 shadow-lg"
                />

            </motion.div>

            {/* Greeting & Name */}

            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">

                👋 Hello, I'm <span className="font-semibold text-green-700">Dineth</span>

            </motion.h3>

            {/* Typing Animation */}

            <TypeAnimation
                sequence={[
                    'Full-Stack Web Developer', 3500,
                    'DevOps Enthusiast', 3500,

                ]}
                wrapper="h1"
                speed={25}
                repeat={Infinity}
                className="text-xl sm:text-3xl lg:text-6xl  text-gray-600 leading-tight
                dark:text-gray-300"
            />


            {/* Tech Stack */}

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-sm sm:text-base text-gray-700 max-w-xl dark:text-gray-300">
                Specializing in building scalable web applications with the
                <span className="font-medium text-green-700"> MERN Stack </span> – MongoDB, Express.js, React / Next.js, and Node.js.
                I love crafting user-friendly interfaces and writing efficient backend code.

            </motion.p>

            {/* CTA */}

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">

                <motion.a
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    href="#contact"
                    className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2
                     hover:bg-green-700 transition"
                >

                    Contact Me
                    <Image src={assets.rightArrow} alt="Arrow" className="w-4" />

                </motion.a>

                <motion.a
                    onClick={() => setShowModal(true)}
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    href="#Projects"
                    className="text-gray-700 border-2 border-green-600 px-6 py-3 rounded-full
                     hover:bg-green-200 transition duration-500 dark:text-gray-300 dark:border-green-500 dark:hover:bg-gray-800"
                >
                    View Projects

                </motion.a>

                {showModal && (

                    <ProjectModal onClose={() => setShowModal(false)} />

                )}


            </div>

            <ul className="flex items-center justify-center gap-6 mt-2 sm:mt-0">

                <li>

                    <a
                        href="#"
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
                        href="#"
                        target="_blank"
                        className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition dark:text-gray-400"
                    >

                        <Image src={assets.linkedin} alt="LinkedIn" className="w-5" />

                        <span className="text-sm">LinkedIn</span>

                    </a>

                </li>

                <li>

                    <a
                        href="#"
                        target="_blank"
                        className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition dark:text-gray-400"
                    >

                        <Image src={assets.x_logo} alt="Twitter/X"
                            className="w-5 dark:bg-gray-500 dark:border-none  dark:rounded-sm" />

                        <span className="text-sm">Twitter</span>

                    </a>

                </li>

            </ul>

        </header>

    )

}


export default Header

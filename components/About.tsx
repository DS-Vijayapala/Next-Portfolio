import { assets, infoData, toolsIcon } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"



const About: React.FC<{ isDarkMode: boolean }> = () => {

    return (

        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="about"
            className="w-full px-4 sm:px-10 lg:px-[12%] py-25 scroll-mt-2
         text-slate-800">

            <div className="text-center mb-12">

                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-green-600 text-lg font-Ovo">Introduction</motion.h4>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-2xl sm:text-4xl font-bold mt-2 dark:text-gray-300">About Me</motion.h2>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row items-center gap-14">

                {/* Profile Image */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>

                    <Image src={assets.default_image}
                        alt='user'
                        className='w-full rounded-3xl' />

                </motion.div>

                {/* Text Content */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">

                    <p className="mb-10 max-w-2xl font-mono text-base sm:text-lg 
                    leading-relaxed text-slate-700 dark:text-gray-300">

                        Hey there! I’m Dineth - a passionate <strong className="text-green-600 dark:text-green-400">Full Stack Developer </strong>
                        who loves turning ideas into real-world web apps.
                        I specialize in the <strong>MERN stack</strong> and modern tools like <strong>Next.js</strong>.
                        I started with Python, but quickly found my spark in building full-featured, cloud-ready
                        apps with JavaScript, REST APIs, and scalable databases.
                    </p>

                    {/* Info Cards */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl">


                        {infoData.map(({ icon, title, description }, index) => (

                            <div
                                key={index}
                                className="bg-white border border-gray-300 rounded-xl p-6 
                                transition-transform duration-300 shadow-md 
                                hover:shadow-xl hover:-translate-y-1 dark:bg-gray-900 
                                dark:hover:bg-gray-800 cursor-pointer"
                            >
                                <Image src={icon} alt={title} className="w-8 h-8 mb-4" />

                                <h3 className="font-semibold text-lg text-slate-800 dark:text-gray-300">{title}</h3>

                                <p className="text-sm text-slate-600 mt-2 dark:text-gray-300">{description}</p>

                            </div>

                        ))}

                    </motion.div>

                    {/* Tools Section */}

                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className="text-xl font-semibold text-slate-800 mt-10 mb-4 dark:text-gray-300">Tools</motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="flex flex-wrap items-center gap-4">

                        {toolsIcon.map((tool, index) => (

                            <li
                                key={index}
                                className="w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 rounded-lg 
                                flex items-center justify-center bg-white transition-transform duration-300 
                                hover:-translate-y-1 shadow-sm hover:shadow-lg
                                 dark:bg-white/25 dark:backdrop-blur-md dark:border-none "
                            >
                                <Image src={tool} alt="tool" className="w-6 sm:w-7" />

                            </li>

                        ))}

                    </motion.ul>

                </motion.div>

            </motion.div>

        </motion.section>

    )
}

export default About

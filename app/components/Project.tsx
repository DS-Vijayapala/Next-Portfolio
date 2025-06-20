import React, { useState } from 'react'
import { assets, Projects } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"
import { ProjectModal } from '@/app/components/ProjectModel'

function Project() {

    const [showModal, setShowModal] = useState(false);

    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="Projects"
            className="w-full px-4 sm:px-10 lg:px-[12%] py-20 scroll-mt-2 text-slate-800"
        >

            {/* Header */}

            <div className="text-center mb-12">

                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-green-600 text-lg font-Ovo">My Latest Works</motion.h4>

                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-2xl sm:text-4xl font-bold mt-2 dark:text-gray-300">Projects</motion.h2>

                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 text-base dark:text-gray-300">

                    I provide a wide range of modern development services, focusing on performance, accessibility, and design excellence.
                    My work includes responsive UIs, dynamic web applications, and full-stack systems optimized for real-world use.
                    Each project emphasizes clean code, scalability, and user experience, delivering robust and future-ready digital solutions.

                </motion.p>

            </div>

            {/* Project Cards Grid */}
            {/* 
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 m-10">

                {Projects.map(({ title, description, bgImage }, index) => (

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl shadow-sm relative overflow-hidden group"
                    >

                        <div>

                            <Image src={bgImage} alt={title} className="w-full h-full object-cover" />

                        </div>

                        <div
                            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 bg-white/90 backdrop-blur-xl
                                        p-4 rounded-lg flex items-center justify-between shadow-md transition-all duration-300
                                        group-hover:bottom-7 hover:bg-green-200 dark:bg-gray-900 dark:border-none dark:backdrop-blur-md
                                         dark:hover:bg-gray-800 dark:text-gray-300"
                        >
                            <div>

                                <h3 className="font-semibold text-lg text-slate-800 dark:text-gray-300">{title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>

                            </div>

                            <div className="w-9 h-9 flex items-center justify-center">

                                <Image src={assets.sendicon} alt="send icon" className="w-4" />

                            </div>

                        </div>

                    </motion.div>

                ))}

            </motion.div> */}


            {/* Show All Button */}

            <motion.a

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700 border border-slate-400
                        rounded-full py-3 px-8 mx-auto mt-16 hover:bg-green-100 hover:text-gray-700 dark:text-green-500
                        transition duration-300 w-max dark:bg-white/25 dark:border-none dark:backdrop-blur-md dark:hover:bg-gray-700 
                        dark:hover:text-green-500 cursor-pointer"
                onClick={() => setShowModal(true)}
            >

                Show All

            </motion.a>

            {showModal && (

                <ProjectModal onClose={() => setShowModal(false)} />

            )}

        </motion.div>

    );

}


export default Project;
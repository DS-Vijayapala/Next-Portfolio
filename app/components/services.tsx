import React from 'react'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

function Services() {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work"
            className="w-full px-4 sm:px-10 lg:px-[12%] py-20 scroll-mt-2  text-slate-800"
        >

            <div className="text-center mb-12">

                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-green-600 text-lg font-Ovo ">What I Offer</motion.h4>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-2xl sm:text-4xl font-bold mt-2 dark:text-gray-300">My Services</motion.h2>

                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 text-base
                dark:text-gray-300">

                    I provide a wide range of modern development services, focusing on performance, accessibility, and design excellence.

                </motion.p>

            </div>

            {/* Services Grid */}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]
                gap-8 m-10"
            >
                {serviceData.map(({ icon, title, description, link }, index) => (

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        className="border border-gray-200 rounded-xl px-6 py-10 bg-white shadow-sm 
                        hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer 
                        group hover:bg-green-100
                         dark:bg-white/25 dark:border-none dark:backdrop-blur-md dark:hover:bg-gray-600"
                    >
                        <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-full mb-4">

                            <Image src={icon} alt={title} className="w-6 h-6" />

                        </div>

                        <h3 className="text-lg font-semibold text-slate-800 mb-2 dark:text-black">{title}</h3>

                        <p className="text-sm text-gray-600 leading-6 dark:text-black">{description}</p>

                        <a
                            href={link}
                            className="inline-flex items-center gap-2 text-sm mt-5 text-green-500 hover:text-green-700
                             font-medium transition-colors"
                        >

                            Read More{' '}
                            <Image
                                src={assets.rightArrow}
                                alt="arrow"
                                className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                            />

                        </a>

                    </motion.div>

                ))}

            </motion.div>

            <motion.a
                whileHover={{ scale: 1.05 }}
                href=""
                className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700 border border-slate-400
                                rounded-full py-3 px-8 mx-auto mt-16 hover:bg-gray-700 dark:text-green-500
                                transition duration-300 w-max dark:bg-white/25 dark:border-none dark:backdrop-blur-md "
            >
                View Projects
                <Image src={assets.rightArrow} alt="right arrow" className="w-4" />
            </motion.a>

        </motion.div>

    );

}

export default Services;
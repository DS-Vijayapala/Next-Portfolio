"use client"

import { assets, infoData, toolsIcon } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { Code2, Sparkles } from 'lucide-react'
import './About.css'

const About = () => {

    return (

        <section
            id="about"
            className="relative w-full px-4 sm:px-10 lg:px-[12%] 
            py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >

            <div className="theme-bg-orb theme-bg-orb-1" />
            <div className="theme-bg-orb theme-bg-orb-2" />
            <div className="theme-bg-grid" />

            {/* Content */}

            <div className="relative z-10 text-center about-shell max-w-5xl mx-auto">

                {/* Section Header */}

                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 
                        rounded-full bg-violet-500/10 border border-violet-500/20 mb-4"
                    >

                        <Sparkles className="w-4 h-4 text-violet-400" />

                        <span className="text-violet-400 text-sm font-medium">Introduction</span>

                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl sm:text-xl font-bold bg-gradient-to-r
                         from-white via-slate-200 to-slate-300 bg-clip-text text-transparent"
                    >

                        About Me

                    </motion.h2>

                    {/* Animated Profile Image */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="about-hero-avatar mx-auto mt-10 flex justify-center"
                    >
                        <div className="about-avatar-glow" />

                        <div className="about-avatar-frame">
                            <Image
                                src={assets.default_image}
                                alt="Dineth Profile"
                                className="about-avatar-image"
                                width={220}
                                height={220}
                            />
                        </div>

                        <div className="about-avatar-chip">
                            <Code2 className="text-white w-5 h-5" />
                        </div>
                    </motion.div>

                    {/* Name and Title Box */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-6 inline-block backdrop-blur-md
                         bg-slate-800/45 border border-violet-500/20 rounded-xl
                          px-4 py-2 shadow-lg shadow-violet-500/15"
                    >

                        <h3 className="text-lg sm:text-xl font-semibold text-white">

                            Dineth Sachintha

                        </h3>

                        <p className="text-sm text-violet-400 font-medium">

                            Founder of <span className="text-purple-500">

                                <a href="https://www.zipher.lk"
                                    target="_blank" rel="noopener noreferrer">zipher.lk</a>
                            </span>

                        </p>

                    </motion.div>

                </div>

                {/* Text Content */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col items-center"
                >

                    <div className="about-story-card p-6 sm:p-8 mb-10 max-w-3xl">

                        <p className="text-sm sm:text-base leading-8
                         text-slate-300 text-justify">

                            Hey there! I'm <strong className="text-violet-400 font-semibold">Dineth</strong> — a passionate
                            <strong className="text-violet-400 font-semibold"> Full Stack Developer </strong>
                            who loves turning ideas into real-world web apps.
                            I specialize in the <strong className="text-purple-400">MERN stack</strong> and modern tools like <strong className="text-purple-400">Next.js</strong>.
                            I started with Python but quickly found my spark in building full-featured,
                            cloud-ready apps with JavaScript, REST APIs, and scalable databases.

                            <br /><br />
                            Over time, I've developed a strong understanding of both
                            <strong className="text-purple-400"> Monolithic </strong> and <strong className="text-purple-400"> Microservices </strong> architectures.
                            I've worked on monolithic applications that prioritize simplicity and rapid development,
                            ensuring strong internal consistency and straightforward deployment.
                            On the other hand, my experience with microservices has allowed me to build
                            systems that are <strong className="text-purple-400">modular, resilient, and scalable</strong> — perfect for large, distributed environments.

                            <br /><br />
                            Whether it's designing the architecture for a startup MVP or
                            scaling an existing system using a service-oriented approach,
                            I focus on writing clean, maintainable code that solves real-world problems efficiently.

                        </p>

                    </div>

                    {/* Info Cards */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 max-w-3xl w-full"
                    >

                        {infoData.map(({ icon: Icon, title, description }, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                className="info-card group"
                            >

                                <div className="info-card-icon">

                                    <Icon className="w-7 h-7 transition-transform 
                                    duration-300 group-hover:scale-110" />

                                </div>

                                <h3 className="font-semibold text-base sm:text-lg text-slate-200 mb-2">

                                    {title}

                                </h3>

                                <p className="text-xs sm:text-sm text-slate-400">{description}</p>

                            </motion.div>

                        ))}

                    </motion.div>

                    {/* Tools Section */}

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >

                        <h4 className="text-xl sm:text-xl font-semibold text-slate-200 
                        mb-6 flex items-center justify-center gap-2">

                            <span className="text-violet-400">Tech  Stack</span>

                        </h4>

                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4"
                        >

                            {toolsIcon.map((tool, index) => (

                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                                    className="tool-icon"
                                >

                                    <Image src={tool} alt="tool" className="w-6 sm:w-7" />

                                </motion.li>

                            ))}

                        </motion.ul>

                    </motion.div>

                </motion.div>

            </div>

        </section>

    )

}


export default About

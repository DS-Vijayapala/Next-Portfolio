"use client"

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "motion/react"
import Link from 'next/link'
import { Github, Linkedin, ArrowRight, Code2, Terminal } from 'lucide-react'
import './Hero.css'

function Hero() {

    return (
        <header className="relative w-full min-h-screen
        flex items-center justify-center overflow-hidden
         bg-gradient-to-br from-slate-950
         via-slate-900 to-slate-950">

            {/* Matrix Rain Background */}

            <div className="matrix-rain">

                <div className="matrix-column" style={{ left: '2%', animationDuration: '15s', animationDelay: '0s' }}></div>
                <div className="matrix-column" style={{ left: '8%', animationDuration: '18s', animationDelay: '2s' }}></div>
                <div className="matrix-column" style={{ left: '14%', animationDuration: '20s', animationDelay: '1s' }}></div>
                <div className="matrix-column" style={{ left: '20%', animationDuration: '16s', animationDelay: '3s' }}></div>
                <div className="matrix-column" style={{ left: '26%', animationDuration: '19s', animationDelay: '0.5s' }}></div>
                <div className="matrix-column" style={{ left: '32%', animationDuration: '17s', animationDelay: '2.5s' }}></div>
                <div className="matrix-column" style={{ left: '38%', animationDuration: '21s', animationDelay: '1.5s' }}></div>
                <div className="matrix-column" style={{ left: '44%', animationDuration: '15s', animationDelay: '3.5s' }}></div>
                <div className="matrix-column" style={{ left: '50%', animationDuration: '18s', animationDelay: '0.8s' }}></div>
                <div className="matrix-column" style={{ left: '56%', animationDuration: '19s', animationDelay: '2.8s' }}></div>
                <div className="matrix-column" style={{ left: '62%', animationDuration: '16s', animationDelay: '1.2s' }}></div>
                <div className="matrix-column" style={{ left: '68%', animationDuration: '20s', animationDelay: '3.2s' }}></div>
                <div className="matrix-column" style={{ left: '74%', animationDuration: '17s', animationDelay: '0.3s' }}></div>
                <div className="matrix-column" style={{ left: '80%', animationDuration: '18s', animationDelay: '2.3s' }}></div>
                <div className="matrix-column" style={{ left: '86%', animationDuration: '19s', animationDelay: '1.8s' }}></div>
                <div className="matrix-column" style={{ left: '92%', animationDuration: '16s', animationDelay: '3.8s' }}></div>
                <div className="matrix-column" style={{ left: '98%', animationDuration: '21s', animationDelay: '1.3s' }}></div>

            </div>

            {/* Gradient Overlay for better readability */}

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70
             via-slate-900/80 to-slate-900/90 pointer-events-none"></div>

            {/* Main Content */}

            <div className="relative z-10 w-11/12 max-w-4xl mx-auto flex flex-col items-center 
            justify-center text-center gap-6 px-4 py-20">

                {/* Profile Image with Glow */}

                <motion.div
                    className="relative profile-container"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
                >

                    <div className="absolute -inset-4 bg-gradient-to-r from-violet-600
                     via-purple-600 to-pink-600 rounded-full opacity-30 blur-2xl animate-pulse"></div>

                    <Image
                        src={assets.default_image}
                        alt="Dineth Profile"
                        className="relative w-32 sm:w-40 md:w-48 rounded-full border-4
                         border-violet-500/50 shadow-2xl shadow-purple-500/30"
                    />

                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full p-3 shadow-lg">

                        <Code2 className="w-5 h-5 text-white" />

                    </div>

                </motion.div>

                {/* Greeting & Name */}

                <motion.h3
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg sm:text-xl md:text-2xl text-slate-300"
                >

                    <span className="wave-hand">👋</span> Hello, I'm{' '}

                    <span className="font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

                        Dineth

                    </span>

                </motion.h3>

                {/* Typing Animation with Gradient */}

                <div className="typing-container">

                    <TypeAnimation
                        sequence={[
                            'Full-Stack Web Developer', 3500,
                            'DevOps Enthusiast', 3500,
                        ]}
                        wrapper="h1"
                        speed={25}
                        repeat={Infinity}
                        className="text-2xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r
                         from-white via-slate-200 to-slate-300 bg-clip-text text-transparent leading-tight"
                    />

                </div>

                {/* Tech Stack Description */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="max-w-2xl"
                >

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed
                     backdrop-blur-sm bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 shadow-xl">
                        Specializing in building scalable web applications with the{' '}
                        <span className="font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                            MERN Stack
                        </span>{' '}
                        - MongoDB, Express.js, React / Next.js, and Node.js.
                        I love crafting user-friendly interfaces and writing efficient backend code.
                    </p>

                </motion.div>

                {/* CTA Buttons */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="mt-4 flex flex-col sm:flex-row items-center gap-3"
                >

                    <Link
                        href="/contact-me"
                        className="group relative px-6 py-2.5 rounded-full font-medium text-white overflow-hidden
                        bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700
                        shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40
                        transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 text-sm"
                    >

                        <span className="relative z-10">Contact Me</span>

                        <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600
                         to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    </Link>

                    <Link
                        href="/all-projects"
                        className="px-6 py-2.5 rounded-full font-medium text-slate-300 border-2 border-violet-500/50
                         hover:border-violet-500 hover:bg-violet-500/10 backdrop-blur-sm
                         transition-all duration-300 hover:scale-105 active:scale-95
                        flex items-center gap-2 group text-sm"
                    >
                        <Terminal className="w-4 h-4 transition-transform duration-300" />

                        <span>View Projects</span>

                    </Link>

                </motion.div>


                {/* Social Links */}

                <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex items-center justify-center gap-6 mt-4"
                >

                    <li>

                        <Link
                            href="https://github.com/DS-Vijayapala"
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-slate-400 
                            hover:text-white bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm
                            border border-slate-700/30 hover:border-slate-600/50
                            transition-all duration-300 hover:scale-105 group"
                        >

                            <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />

                            <span className="text-sm font-medium">GitHub</span>

                        </Link>

                    </li>

                    <li>

                        <Link
                            href="https://www.linkedin.com/in/dineth-sachintha/"
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-slate-400 
                            hover:text-white bg-slate-800/30 hover:bg-slate-800/50 backdrop-blur-sm
                            border border-slate-700/30 hover:border-slate-600/50
                            transition-all duration-300 hover:scale-105 group"
                        >

                            <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />

                            <span className="text-sm font-medium">LinkedIn</span>

                        </Link>

                    </li>

                </motion.ul>

            </div>

        </header>

    )

}


export default Hero
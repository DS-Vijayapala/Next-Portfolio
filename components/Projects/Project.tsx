"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket } from "lucide-react";
import "./projectBackground.css";
import ProjectCard from "../ProjectCard";
import { Projects } from "@/actions/projects";

const Project = () => {

    const projects = Projects

    return (
        <div
            id="Projects"
            className="relative w-full px-4 sm:px-10 lg:px-[12%] py-20 scroll-mt-2
             overflow-hidden bg-slate-900"
        >
            {/* Animated Background Elements - Pure CSS */}

            <div className="relative inset-0 -z-10">

                {/* Gradient Orbs */}

                <div className="gradient-orb-1" />

                <div className="gradient-orb-2" />

                {/* Floating Particles */}

                <div className="floating-particle floating-particle-1" />

                <div className="floating-particle floating-particle-2" />

                <div className="floating-particle floating-particle-3" />

                <div className="floating-particle floating-particle-4" />

                <div className="floating-particle floating-particle-5" />

                <div className="floating-particle floating-particle-6" />

            </div>

            {/* Main Content */}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >

                {/* Header Section */}

                <div className="text-center mb-16">

                    {/* Badge with Icon */}

                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-gradient-to-r from-violet-500/10 to-purple-600/10 border
                          border-violet-500/20 mb-4"
                    >

                        <Sparkles className="w-4 h-4 text-violet-400" />

                        <span className="text-sm font-medium text-violet-400">

                            My Latest Works

                        </span>

                    </motion.div>

                    {/* Main Heading */}

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-2xl sm:text-3xl lg:text-3xl font-bold text-slate-200 mb-6"
                    >

                        <span className="font-bold bg-gradient-to-r
                         from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">

                            Featured Projects

                        </span>

                    </motion.h2>

                    {/* Description */}

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="max-w-3xl mx-auto text-sm sm:text-sm text-slate-400 leading-relaxed"
                    >

                        I provide a wide range of modern development services, focusing on
                        performance, accessibility, and design excellence. My work includes
                        responsive UIs, dynamic web applications, and full-stack systems
                        optimized for real-world use. Each project emphasizes clean code,
                        scalability, and user experience.

                    </motion.p>

                    {/* Stats Bar */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-8 mt-10"
                    >

                        <div className="flex items-center gap-2 text-slate-300">
                            <Code2 className="w-5 h-5 text-violet-400" />
                            <span className="text-sm font-medium">Clean Code</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-300">
                            <Rocket className="w-5 h-5 text-purple-400" />
                            <span className="text-sm font-medium">Scalable Solutions</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-300">
                            <Sparkles className="w-5 h-5 text-pink-400" />
                            <span className="text-sm font-medium">Modern Design</span>
                        </div>

                    </motion.div>

                </div>

                {/* Projects Grid Container - Ready for ProjectCard */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
                >
                    {/* ProjectCard components will go here */}
                    {projects.map((p, index) => (
                        <ProjectCard key={p.id || index} project={p} />
                    ))}
                </motion.div>


            </motion.div>

        </div>

    );

};


export default Project;
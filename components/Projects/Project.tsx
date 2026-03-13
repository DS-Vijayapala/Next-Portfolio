"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Code2, BriefcaseBusiness } from "lucide-react";
import ProjectCard from "../ProjectCard";

type ProjectItem = {
    id: string;
    slug: string;
    title: string;
    description: string;
    short_description?: string;
    bgImage: string;
    technologies: string[];
    github?: string;
    date: string;
    project_status: boolean;
    architecture: string;
};

const Project = ({ projects }: { projects: ProjectItem[] }) => {
    const completedCount = projects.filter((project) => project.project_status).length;
    const ongoingCount = projects.length - completedCount;

    return (
        <div
            id="Projects"
            className="relative w-full px-4 sm:px-10 lg:px-[12%] py-20 scroll-mt-2
             overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        >
            <div className="theme-bg-orb theme-bg-orb-1" />
            <div className="theme-bg-orb theme-bg-orb-2" />
            <div className="theme-bg-grid" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
            >
                <div className="mx-auto mb-14 max-w-5xl text-center">
                    <motion.div
                        initial={{ y: -12, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/25
                         bg-violet-500/10 px-4 py-2"
                    >
                        <Sparkles className="w-4 h-4 text-violet-400" />
                        <span className="text-sm font-medium text-violet-300">
                            Selected Work
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="mb-5 text-xl font-semibold text-slate-100"
                    >
                        <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-300 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.2 }}
                        className="mx-auto max-w-3xl text-sm leading-7 text-slate-400"
                    >
                        A curated set of production-focused projects covering modern UI engineering,
                        full-stack architecture, and scalable backend systems built for real-world use.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.3 }}
                        className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
                    >
                        <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-700/70 bg-slate-800/50 px-4 py-3 text-slate-300">
                            <Code2 className="w-5 h-5 text-violet-400" />
                            <span className="text-sm font-medium">Clean Code</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-700/70 bg-slate-800/50 px-4 py-3 text-slate-300">
                            <BriefcaseBusiness className="w-5 h-5 text-purple-300" />
                            <span className="text-sm font-medium">{projects.length} Projects</span>
                        </div>

                        <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-700/70 bg-slate-800/50 px-4 py-3 text-slate-300">
                            <Sparkles className="w-5 h-5 text-pink-400" />
                            <span className="text-sm font-medium">
                                {completedCount} Completed / {ongoingCount} Ongoing
                            </span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.55, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
                >
                    {projects.map((p, index) => (
                        <ProjectCard key={p.id || index} project={p} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Project;

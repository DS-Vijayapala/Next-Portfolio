"use client"

import React from "react"
import {
    ArrowLeft,
    Github,
    ExternalLink,
    Calendar,
    CheckCircle2,
    Clock,
    Layers,
    Code2,
    Sparkles,
} from "lucide-react"
import "./projectDetailBackground.css"

interface Project {
    title: string
    description: string
    bgImage: string
    technologies: string[]
    github?: string
    live?: string
    date: string
    project_status?: boolean
    architecture?: string
}

const ProjectDetailPage = ({ project }: { project: Project }) => {
    const {
        title,
        description,
        bgImage,
        technologies,
        github,
        live,
        date,
        project_status = true,
        architecture = "MERN",
    } = project

    return (
        <div className="relative min-h-screen w-full bg-slate-900 overflow-hidden">

            {/* Background */}

            <div className="absolute inset-0 -z-10">

                <div className="detail-gradient-orb-1" />
                <div className="detail-gradient-orb-2" />
                <div className="detail-gradient-orb-3" />
                <div className="detail-grid-pattern" />
                <div className="detail-particle detail-particle-1" />
                <div className="detail-particle detail-particle-2" />
                <div className="detail-particle detail-particle-3" />
                <div className="detail-particle detail-particle-4" />
                <div className="detail-particle detail-particle-5" />
                <div className="light-ray light-ray-1" />
                <div className="light-ray light-ray-2" />
                <div className="light-ray light-ray-3" />

            </div>

            {/* 🧱 Main Content */}

            <div className="relative z-10 w-full px-4 sm:px-10 lg:px-[12%] py-12">

                {/* Back Button */}

                <button
                    onClick={() => window.history.back()}
                    className="group flex items-center gap-2 text-slate-400
                     hover:text-violet-400 transition-colors 
                     duration-300 mb-8 cursor-pointer">

                    <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />

                    <span className="text-sm font-medium">Back to Projects</span>

                </button>

                {/* Hero Section */}

                <div className="grid lg:grid-cols-2 gap-8 mb-8">

                    {/* Left Image */}

                    <div className="relative group">

                        <div className="absolute inset-0 bg-gradient-to-br
                         from-violet-600/20 to-purple-600/20 rounded-2xl
                          blur-xl group-hover:blur-2xl transition-all duration-500" />

                        <div className="relative aspect-video rounded-2xl overflow-hidden border
                         border-slate-700/50 group-hover:border-violet-500/50 transition-all duration-500">

                            <img
                                src={bgImage}
                                alt={title}
                                className="w-full h-full object-cover transform 
                                group-hover:scale-105 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                        </div>

                    </div>

                    {/* Right Info */}

                    <div className="flex flex-col justify-center space-y-6">

                        {/* Status Badges */}

                        <div className="flex items-center gap-3 flex-wrap">

                            <div
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium 
                                    backdrop-blur-md border ${project_status
                                        ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300"
                                        : "bg-amber-500/20 border-amber-500/30 text-amber-300"}`}>

                                {project_status ? (

                                    <>
                                        <CheckCircle2 className="w-4 h-4" /> Completed
                                    </>

                                ) : (

                                    <>
                                        <Clock className="w-4 h-4" /> Ongoing
                                    </>

                                )}

                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 
                            rounded-full text-sm font-medium backdrop-blur-md
                             bg-violet-500/20 border border-violet-500/30 text-violet-300">

                                <Layers className="w-4 h-4" />

                                {architecture}

                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 
                            rounded-full text-sm font-medium backdrop-blur-md
                             bg-slate-800/50 border border-slate-600/30 text-slate-300">

                                <Calendar className="w-4 h-4" />

                                {date}

                            </div>

                        </div>

                        <h1 className="text-2xl lg:text-3xl font-bold text-slate-100 leading-tight">

                            {title}

                        </h1>

                        <div className="flex items-center gap-4 flex-wrap">

                            {github && (

                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl
                                     bg-slate-800/80 backdrop-blur-sm text-slate-200 
                                     font-medium border border-slate-600/50 hover:border-violet-500/50
                                      hover:bg-violet-500/10 hover:text-violet-300 
                                      transition-all duration-300">

                                    <Github className="w-5 h-5" />

                                    View Code

                                </a>

                            )}

                            {live && (

                                <a
                                    href={live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl 
                                    bg-gradient-to-r from-violet-600 to-purple-600
                                     text-white font-medium hover:from-purple-600
                                      hover:to-pink-600 hover:shadow-xl 
                                      hover:shadow-purple-500/30 transition-all 
                                      duration-300">

                                    <ExternalLink className="w-5 h-5" />

                                    Live Demo

                                </a>

                            )}

                        </div>

                    </div>

                </div>

                {/* Technologies */}

                <div className="mb-8">

                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">

                                <Code2 className="w-5 h-5 text-purple-400" />

                            </div>

                            <h2 className="text-lg font-bold text-slate-100">

                                Technologies Used

                            </h2>

                        </div>

                        <div className="flex flex-wrap gap-3">

                            {technologies.map((tech, index) => (

                                <div
                                    key={index}
                                    className="group relative px-2 py-1 rounded-xl
                                    bg-slate-800/60 backdrop-blur-sm text-slate-200
                                    font-medium border border-slate-600/50
                                    hover:border-violet-500/50 hover:bg-violet-500/10
                                    hover:text-violet-300 transition-all duration-300 cursor-default"
                                >

                                    <span className="relative z-10">{tech}</span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* Description */}

                <div className="mb-8">

                    <div className="bg-slate-800/30 backdrop-blur-sm border
                     border-slate-700/50 rounded-2xl p-8">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">

                                <Sparkles className="w-5 h-5 text-violet-400" />

                            </div>

                            <h2 className="text-lg font-bold text-slate-100">

                                About This Project

                            </h2>

                        </div>

                        <div
                            className="text-slate-400 leading-relaxed text-md"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />

                    </div>

                </div>



            </div>

        </div>

    )

}


export default ProjectDetailPage

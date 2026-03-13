import React, { useState } from 'react';
import { Github, Calendar, CheckCircle2, Clock, Layers, ScrollText } from 'lucide-react';
import Link from 'next/link';

interface Project {
    title: string;
    description: string;
    bgImage: string;
    technologies: string[];
    github?: string;
    date: string;
    project_status: boolean;
    architecture: string;
    id?: string;
    slug?: string;
    short_description?: string
}

const ProjectCard = ({ project }: { project: Project }) => {

    const [isHovered, setIsHovered] = useState(false);

    const {
        title,
        bgImage,
        technologies,
        github,
        date,
        project_status,
        architecture,
        short_description
    } = project;

    return (

        <div
            className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-700/70
             bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-md
             transition-all duration-500 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-40 overflow-hidden">
                <img
                    src={bgImage}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
            </div>

            <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
                <div className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs
                 font-medium backdrop-blur-md ${project_status
                        ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300'
                        : 'bg-amber-500/20 border-amber-500/30 text-amber-300'}`}>

                    {project_status ? (

                        <>
                            <CheckCircle2 className="w-3 h-3" />
                            Completed
                        </>

                    ) : (

                        <>
                            <Clock className="w-3 h-3" />
                            Ongoing
                        </>

                    )}

                </div>
            </div>

            <div className="absolute top-4 right-4 z-20">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                 text-xs font-medium backdrop-blur-md bg-violet-500/20 border
                  border-violet-500/30 text-violet-300">

                    <Layers className="w-3 h-3" />

                    {architecture}

                </div>
            </div>

            <div className="flex flex-col flex-grow p-4">
                <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-100 line-clamp-2
                     group-hover:text-white transition-colors duration-300">
                        {title}
                    </h3>

                    <p className={`line-clamp-2 text-sm text-slate-400 leading-relaxed transition-all duration-500 
                    ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
                        {short_description}
                    </p>

                    <div className={`flex flex-wrap gap-2 transition-all duration-500 
                    ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        {technologies.slice(0, 4).map((tech, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 rounded-md text-xs font-medium
                                 bg-slate-800/80 backdrop-blur-sm text-violet-300 
                                 border border-violet-500/20"
                            >

                                {tech}

                            </span>
                        ))}

                        {technologies.length > 4 && (
                            <span className="px-2.5 py-1 rounded-md text-xs font-medium
                             bg-slate-800/80 backdrop-blur-sm text-slate-400 border
                              border-slate-600/20">
                                +{technologies.length - 4}
                            </span>
                        )}
                    </div>
                </div>

                <div className="mt-auto pt-4 flex flex-nowrap items-center gap-2">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap
                             bg-slate-800/80 backdrop-blur-sm text-slate-200 
                             text-sm font-medium border border-slate-600/50
                              hover:border-violet-500/50 hover:bg-violet-500/10
                               hover:text-violet-300 transition-all duration-300"
                        >
                            <Github className="w-4 h-4" />
                            Code
                        </a>
                    )}

                    <Link
                        href={`/all-projects/${project.slug || project.id || title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap bg-gradient-to-r
                         from-violet-600 to-purple-600 text-white text-sm font-medium
                          hover:from-purple-600 hover:to-pink-600 hover:shadow-lg
                           hover:shadow-purple-500/30 transition-all duration-300"
                    >
                        <ScrollText className="w-4 h-4" />
                        View Project
                    </Link>
                </div>
            </div>

            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none 
            ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-violet-500/20" />
            </div>
        </div>
    );
};

export default ProjectCard;

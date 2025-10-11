import React, { useState } from 'react';
import { Github, Calendar, CheckCircle2, Clock, Layers, ScrollText } from 'lucide-react';

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
}

const ProjectCard = ({ project }: { project: Project }) => {

    const [isHovered, setIsHovered] = useState(false);

    const {
        title,
        description,
        bgImage,
        technologies,
        github,
        date,
        project_status,
        architecture
    } = project;

    return (

        <div
            className="group relative w-full aspect-square rounded-2xl overflow-hidden
             bg-slate-800/50 backdrop-blur-sm border border-slate-700/50
              hover:border-violet-500/50 transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* Background Image with Overlay */}

            <div className="absolute inset-0">

                <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform 
                    duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-800
                 via-slate-900/95 to-slate-900/60" />

                {/* Hover Gradient Effect */}

                <div className={`absolute inset-0 bg-gradient-to-t from-violet-800/40
                     via-purple-900/20 to-transparent transition-opacity duration-500
                      ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            {/* Status Badge - Top Left */}

            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">

                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs
                 font-medium backdrop-blur-md border ${project_status
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

            {/* Architecture Badge - Top Right */}

            <div className="absolute top-4 right-4 z-20">

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                 text-xs font-medium backdrop-blur-md bg-violet-500/20 border
                  border-violet-500/30 text-violet-300">

                    <Layers className="w-3 h-3" />

                    {architecture}

                </div>

            </div>

            {/* Content Container */}

            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">

                {/* Year Badge */}

                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-3">

                    <Calendar className="w-3.5 h-3.5" />

                    <span>{date}</span>

                </div>

                {/* Title */}

                <h3 className="text-xl font-bold text-slate-100 mb-2 line-clamp-2
                 group-hover:text-white transition-colors duration-300">

                    {title}

                </h3>

                {/* Description */}

                <p className={`text-sm text-slate-400 leading-relaxed mb-4 transition-all duration-500 
                ${isHovered ? 'line-clamp-3 opacity-100' : 'line-clamp-2 opacity-90'}`}>

                    {description}

                </p>

                {/* Technologies */}

                <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-500 
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

                {/* Action Buttons */}

                <div className="flex items-center gap-3">

                    {github && (

                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg
                             bg-slate-800/80 backdrop-blur-sm text-slate-200 
                             text-sm font-medium border border-slate-600/50
                              hover:border-violet-500/50 hover:bg-violet-500/10
                               hover:text-violet-300 transition-all duration-300"
                        >

                            <Github className="w-4 h-4" />

                            Code

                        </a>

                    )}

                    <a
                        href={`/all-projects/${project.id || title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r
                         from-violet-600 to-purple-600 text-white text-sm font-medium
                          hover:from-purple-600 hover:to-pink-600 hover:shadow-lg
                           hover:shadow-purple-500/30 transition-all duration-300"
                    >

                        <ScrollText className="w-4 h-4" />

                        View Project

                    </a>

                </div>

            </div>

            {/* Glow Effect on Hover */}

            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none 
            ${isHovered ? 'opacity-100' : 'opacity-0'}`}>

                <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-violet-500/20" />

            </div>

        </div>

    );

};


export default ProjectCard;
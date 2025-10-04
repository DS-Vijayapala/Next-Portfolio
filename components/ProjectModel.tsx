import React, { useState } from 'react';
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Projects } from '@/assets/projects'




interface ProjectModalProps {

    onClose: () => void;

}


export const ProjectModal: React.FC<ProjectModalProps> = ({ onClose }) => {

    const [selectedFilter, setSelectedFilter] = useState('all');

    const allTechnologies = ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',];

    const filteredProjects = selectedFilter === 'all'

        ? Projects

        : Projects.filter(project => project.technologies.includes(selectedFilter));

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">

            <div className="bg-white dark:bg-gray-900 w-[95%] max-w-6xl p-6 rounded-2xl relative max-h-[95vh] 
            overflow-hidden flex flex-col shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Projects</h2>

                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">

                            Showcasing {filteredProjects.length} of {Projects.length} projects

                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >

                        <X className="w-6 h-6 text-gray-500 hover:text-red-600" />

                    </button>

                </div>

                {/* Filter Bar */}

                <div className="mb-6">

                    <div className="flex flex-wrap gap-2">

                        <button
                            onClick={() => setSelectedFilter('all')}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedFilter === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                        >
                            All ({Projects.length})

                        </button>

                        {allTechnologies.map(tech => (

                            <button
                                key={tech}
                                onClick={() => setSelectedFilter(tech)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedFilter === tech
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >

                                {tech}

                            </button>

                        ))}

                    </div>

                </div>

                {/* Projects Grid */}

                <div className="flex-1 overflow-y-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">

                        {filteredProjects.map((project, index) => (

                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg
                                 hover:shadow-xl transition-all duration-300 overflow-hidden group border
                                  border-gray-200 dark:border-gray-700"
                            >

                                {/* Project Image */}

                                <div className="relative overflow-hidden">

                                    <img
                                        src={project.bgImage}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    <div className="absolute top-3 right-3 flex gap-2">

                                        {project.github && (

                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-black/70 hover:bg-black rounded-full transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >

                                                <Github className="w-4 h-4 text-white" />

                                            </a>

                                        )}

                                        {/* {project.live && (

                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-blue-600/80 hover:bg-blue-600 rounded-full transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >

                                                <ExternalLink className="w-4 h-4 text-white" />

                                            </a>

                                        )} */}

                                    </div>

                                </div>

                                {/* Project Content */}

                                <div className="p-5">

                                    {/* Title and Date */}

                                    <div className="flex items-start justify-between mb-3">

                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">

                                            {project.title}

                                        </h3>

                                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm ml-2">

                                            <Calendar className="w-4 h-4 mr-1" />

                                            {project.date}

                                        </div>

                                    </div>

                                    {/* Description */}

                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">

                                        {project.description}

                                    </p>

                                    {/* Technologies */}

                                    <div className="flex items-center mb-4">

                                        <Tag className="w-4 h-4 text-gray-400 mr-2" />

                                        <div className="flex flex-wrap gap-1">

                                            {project.technologies.map((tech, techIndex) => (

                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800
                                                     dark:text-blue-300 text-xs rounded-md font-medium"
                                                >

                                                    {tech}

                                                </span>

                                            ))}

                                        </div>

                                    </div>

                                    {/* Action Buttons */}

                                    <div className="flex gap-2">

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800
                                                 dark:hover:bg-gray-600 text-white text-sm py-2 px-4 rounded-lg transition-colors 
                                                 flex items-center justify-center gap-2"
                                            >

                                                <Github className="w-4 h-4" />

                                                Code

                                            </a>

                                        )}
                                        {/* 
                                        {project.live && (

                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4
                                                 rounded-lg transition-colors flex items-center justify-center gap-2"
                                            >

                                                <ExternalLink className="w-4 h-4" />

                                                Live Demo

                                            </a>

                                        )} */}

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    );

};

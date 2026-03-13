import Project from '@/components/Projects/Project'
import React from 'react'
import { prisma } from '@/lib/prisma'
import { Projects as StaticProjects } from '@/actions/projects'

const AllProjects = async () => {
    const projects = await prisma.project.findMany({
        orderBy: { updatedAt: 'desc' }
    }) as Array<{
        id: string
        slug: string
        title: string
        description: string
        shortDescription: string | null
        bgImage: string
        technologies: string[]
        github: string | null
        date: string
        projectStatus: boolean
        architecture: string | null
    }>

    const mappedProjects = projects.map((project) => ({
        id: project.id,
        slug: project.slug,
        title: project.title,
        description: project.description,
        short_description: project.shortDescription || '',
        bgImage: project.bgImage,
        technologies: project.technologies,
        github: project.github || '',
        date: project.date,
        project_status: project.projectStatus,
        architecture: project.architecture || 'Monolithic',
    }))

    const finalProjects = mappedProjects.length > 0
        ? mappedProjects
        : StaticProjects.map((project) => ({
            id: project.id || '',
            slug: project.id || '',
            title: project.title,
            description: project.description,
            short_description: project.short_description || '',
            bgImage: project.bgImage,
            technologies: project.technologies,
            github: project.github || '',
            date: project.date,
            project_status: !!project.project_status,
            architecture: project.architecture || 'Monolithic',
        }))

    return (
        <div>
            <Project projects={finalProjects} />
        </div>
    )
}

export default AllProjects

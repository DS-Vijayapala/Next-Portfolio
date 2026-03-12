"use client"

import { useParams } from "next/navigation"
import React from "react"
import ProjectDetailPage from "@/components/ProjectDetails/ProjectDetail"
import { getProjectById } from "@/actions/projectData"

const ProjectDetails = () => {

    const { projectId } = useParams()

    // Find project based on ID or title (slug)

    const project = getProjectById(projectId as string);

    // Handle invalid project ID

    if (!project) {

        return (

            <div className="flex items-center justify-center min-h-screen text-slate-300">

                <h1 className="text-xl font-semibold">Project Not Found</h1>

            </div>

        )

    }

    return <ProjectDetailPage project={project} />

}


export default ProjectDetails


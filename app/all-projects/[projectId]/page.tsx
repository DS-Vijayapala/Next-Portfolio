"use client"

import { useParams } from "next/navigation"
import React from "react"

const ProjectDetails = () => {

    const { projectId } = useParams()

    return <div>Project ID: {projectId}</div>

}

export default ProjectDetails

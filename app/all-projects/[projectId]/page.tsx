import React from "react";
import ProjectDetailPage from "@/components/ProjectDetails/ProjectDetail";
import { prisma } from "@/lib/prisma";
import { getProjectById } from "@/actions/projectData";

function isValidObjectId(value: string) {
  return /^[a-f\d]{24}$/i.test(value);
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const where = isValidObjectId(projectId)
    ? { OR: [{ id: projectId }, { slug: projectId }] }
    : { slug: projectId };

  const project = await prisma.project.findFirst({
    where,
  });

  if (project) {
    return (
      <ProjectDetailPage
        project={{
          id: project.id,
          title: project.title,
          description: project.description,
          bgImage: project.bgImage,
          images: (project as { images?: string[] }).images || [project.bgImage],
          technologies: project.technologies,
          github: project.github || "",
          live: project.live || "",
          date: project.date,
          project_status: project.projectStatus,
          architecture: project.architecture || "Monolithic",
          frammework: project.framework || "Next.js",
        }}
      />
    );
  }

  const legacyProject = getProjectById(projectId);
  if (!legacyProject) {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-300">
        <h1 className="text-xl font-semibold">Project Not Found</h1>
      </div>
    );
  }

  return <ProjectDetailPage project={legacyProject} />;
}

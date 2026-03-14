import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProjectEditorForm from "@/components/admin/ProjectEditorForm";
import { Button } from "@/components/ui/button";

export default async function AdminEditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) notFound();

  return (
    <section className="mx-auto max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-100">Edit Project</h1>
          <p className="text-sm text-slate-400">Update project content and metadata.</p>
        </div>
        <Button
          asChild
          variant="outline"
          className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
        >
          <Link href="/admin/dashboard">Back</Link>
        </Button>
      </div>

      <ProjectEditorForm
        mode="edit"
        projectId={project.id}
        initialData={{
          title: project.title,
          slug: project.slug,
          shortDescription: project.shortDescription || "",
          description: project.description,
          images: (project as { images?: string[] }).images || [project.bgImage],
          technologies: project.technologies.join(", "),
          github: project.github || "",
          live: project.live || "",
          date: project.date,
          projectStatus: project.projectStatus,
          architecture: project.architecture || "",
          framework: project.framework || "",
        }}
      />
    </section>
  );
}

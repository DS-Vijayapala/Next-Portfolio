import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function AdminDashboardPage() {
  const [projects, totalCount, completedCount] = await Promise.all([
    prisma.project.findMany({
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        date: true,
        projectStatus: true,
      },
    }) as Promise<
      Array<{
        id: string;
        title: string;
        slug: string;
        date: string;
        projectStatus: boolean;
      }>
    >,
    prisma.project.count(),
    prisma.project.count({ where: { projectStatus: true } }),
  ]);

  return (
    <section className="space-y-5">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-100">Admin Dashboard</h1>
          <p className="text-sm text-slate-400">Manage all portfolio projects.</p>
        </div>
        <Button asChild className="bg-violet-600 text-white hover:bg-violet-700">
          <Link href="/admin/projects/new">Add Project</Link>
        </Button>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        <Card className="border-slate-700 bg-slate-900/80 text-slate-100 ring-0">
          <CardHeader className="pb-1">
            <CardTitle className="text-sm font-medium text-slate-300">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">{totalCount}</p>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80 text-slate-100 ring-0">
          <CardHeader className="pb-1">
            <CardTitle className="text-sm font-medium text-slate-300">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-emerald-300">{completedCount}</p>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80 text-slate-100 ring-0">
          <CardHeader className="pb-1">
            <CardTitle className="text-sm font-medium text-slate-300">Ongoing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-amber-300">{totalCount - completedCount}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-700 bg-slate-900/80 text-slate-100 ring-0">
        <CardHeader>
          <CardTitle className="text-base">Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700 hover:bg-transparent">
                <TableHead className="text-slate-300">Title</TableHead>
                <TableHead className="text-slate-300">Slug</TableHead>
                <TableHead className="text-slate-300">Year</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} className="border-slate-700 hover:bg-slate-800/40">
                  <TableCell className="text-slate-100">{project.title}</TableCell>
                  <TableCell className="text-slate-400">{project.slug}</TableCell>
                  <TableCell className="text-slate-400">{project.date}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        project.projectStatus
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-amber-500/20 text-amber-300"
                      }
                    >
                      {project.projectStatus ? "Completed" : "Ongoing"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-violet-500/30 bg-violet-500/10 text-violet-200 hover:bg-violet-500/20"
                      >
                        <Link href={`/admin/projects/${project.id}/edit`}>Edit</Link>
                      </Button>
                      <DeleteProjectButton projectId={project.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {projects.length === 0 && (
                <TableRow className="border-slate-700">
                  <TableCell colSpan={5} className="py-8 text-center text-sm text-slate-400">
                    No projects found. Add your first one.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}

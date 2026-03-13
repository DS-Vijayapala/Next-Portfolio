import Link from "next/link";
import ProjectEditorForm from "@/components/admin/ProjectEditorForm";
import { Button } from "@/components/ui/button";

export default function AdminAddProjectPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-slate-100">Add Project</h1>
            <p className="text-sm text-slate-400">
              Create a new portfolio project entry.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
          >
            <Link href="/admin/dashboard">Back</Link>
          </Button>
        </div>

        <ProjectEditorForm mode="create" />
    </section>
  );
}

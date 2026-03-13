"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectRow = {
  id: string;
  title: string;
  slug: string;
  sortOrder?: number;
};

export default function ProjectOrderManager({ projects }: { projects: ProjectRow[] }) {
  const initial = useMemo(
    () =>
      [...projects].sort((a, b) => {
        const ao = a.sortOrder ?? Number.MAX_SAFE_INTEGER;
        const bo = b.sortOrder ?? Number.MAX_SAFE_INTEGER;
        if (ao !== bo) return ao - bo;
        return a.title.localeCompare(b.title);
      }),
    [projects]
  );

  const [items, setItems] = useState<ProjectRow[]>(initial);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  const onDragStart = (index: number) => setDragIndex(index);
  const onDragOver = (event: React.DragEvent) => event.preventDefault();
  const onDrop = (index: number) => {
    if (dragIndex === null || dragIndex === index) return;
    setItems((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(dragIndex, 1);
      copy.splice(index, 0, moved);
      return copy;
    });
    setDragIndex(null);
  };

  const saveOrder = async () => {
    setSaving(true);
    try {
      const response = await fetch("/api/admin/projects/reorder", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: items.map((item) => item.id) }),
      });

      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        toast.error(data.error || "Failed to save project order.");
        return;
      }
      toast.success("Project order updated.");
    } catch {
      toast.error("Unable to save order right now.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-300">
          Drag and drop project lines to control display order.
        </p>
        <Button
          type="button"
          onClick={saveOrder}
          disabled={saving}
          className="bg-violet-600 text-white hover:bg-violet-700"
        >
          {saving ? "Saving..." : "Save Order"}
        </Button>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={onDragOver}
            onDrop={() => onDrop(index)}
            className="flex cursor-move items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"
          >
            <GripVertical className="h-4 w-4 text-slate-400" />
            <span className="w-8 text-xs text-slate-400">{index + 1}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-slate-100">{item.title}</p>
              <p className="truncate text-xs text-slate-400">{item.slug}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

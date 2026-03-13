"use client";

import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import TiptapEditor from "@/components/admin/TiptapEditor";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ProjectFormData = {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  technologies: string;
  github: string;
  live: string;
  date: string;
  projectStatus: boolean;
  architecture: string;
  framework: string;
  images: string[];
};

type ProjectEditorFormProps = {
  mode: "create" | "edit";
  projectId?: string;
  initialData?: Partial<ProjectFormData>;
};

type PendingImage = {
  id: string;
  file: File;
  previewUrl: string;
};

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function ProjectEditorForm({
  mode,
  projectId,
  initialData,
}: ProjectEditorFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [pendingImages, setPendingImages] = useState<PendingImage[]>([]);
  const pendingImagesRef = useRef<PendingImage[]>([]);
  const [manualImageUrl, setManualImageUrl] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(mode === "edit");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
    getValues,
  } = useForm<ProjectFormData>({
    mode: "onChange",
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      shortDescription: initialData?.shortDescription || "",
      description: initialData?.description || "",
      technologies: initialData?.technologies || "",
      github: initialData?.github || "",
      live: initialData?.live || "",
      date: initialData?.date || String(new Date().getFullYear()),
      projectStatus: initialData?.projectStatus ?? true,
      architecture: initialData?.architecture || "Monolithic",
      framework: initialData?.framework || "Next.js",
      images: (initialData?.images || []).slice(0, 5),
    },
  });

  const images = watch("images") || [];
  const watchedTitle = watch("title");

  useEffect(() => {
    if (slugManuallyEdited) return;
    const nextSlug = slugify(watchedTitle || "");
    setValue("slug", nextSlug, { shouldValidate: true });
  }, [watchedTitle, slugManuallyEdited, setValue]);

  useEffect(() => {
    pendingImagesRef.current = pendingImages;
  }, [pendingImages]);

  useEffect(() => {
    return () => {
      pendingImagesRef.current.forEach((item) => URL.revokeObjectURL(item.previewUrl));
    };
  }, []);

  const addImageUrl = (url: string) => {
    const nextUrl = url.trim();
    if (!nextUrl) return;
    if (images.includes(nextUrl)) {
      toast.error("Image already added.");
      return;
    }
    if (images.length >= 5) {
      toast.error("Maximum 5 images allowed.");
      return;
    }

    setValue("images", [...images, nextUrl], { shouldValidate: true, shouldDirty: true });
  };

  const removeImage = (url: string) => {
    setValue(
      "images",
      images.filter((image) => image !== url),
      { shouldValidate: true, shouldDirty: true }
    );
  };

  const onSelectPendingImages = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const incomingFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));
    if (incomingFiles.length === 0) {
      toast.error("Please select image files only.");
      return;
    }

    const remainingSlots = Math.max(0, 5 - images.length - pendingImages.length);
    if (remainingSlots <= 0) {
      toast.error("Maximum 5 images allowed.");
      return;
    }

    const accepted = incomingFiles.slice(0, remainingSlots);
    if (incomingFiles.length > accepted.length) {
      toast.error("Only remaining slots were added.");
    }

    const nextPending = accepted.map((file) => ({
      id: `${file.name}-${file.size}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setPendingImages((prev) => [...prev, ...nextPending]);
  };

  const removePendingImage = (id: string) => {
    setPendingImages((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((item) => item.id !== id);
    });
  };

  const clearPendingImages = () => {
    pendingImages.forEach((item) => URL.revokeObjectURL(item.previewUrl));
    setPendingImages([]);
  };

  const handleImageUpload = async () => {
    if (pendingImages.length === 0) {
      toast.error("Choose images first.");
      return;
    }

    const remainingSlots = 5 - images.length;
    if (remainingSlots <= 0) {
      toast.error("Maximum 5 images allowed.");
      return;
    }

    const toUpload = pendingImages.slice(0, remainingSlots);
    if (pendingImages.length > toUpload.length) {
      toast.error("Only images within remaining slots will be uploaded.");
    }

    setUploadingImage(true);
    try {
      const uploadedUrls: string[] = [];
      let failedCount = 0;
      let firstFailureMessage = "";

      for (const item of toUpload) {
        const formData = new FormData();
        formData.append("file", item.file);

        const response = await fetch("/api/admin/uploads", {
          method: "POST",
          body: formData,
        });

        const data = (await response
          .json()
          .catch(() => ({}))) as { imageUrl?: string; error?: string };
        if (!response.ok || !data.imageUrl) {
          failedCount += 1;
          if (!firstFailureMessage) {
            firstFailureMessage =
              data.error || `Upload failed (status ${response.status}).`;
          }
          continue;
        }

        uploadedUrls.push(data.imageUrl);
      }

      if (uploadedUrls.length > 0) {
        const currentImages = getValues("images") || [];
        const merged = [...currentImages];
        for (const url of uploadedUrls) {
          if (merged.length >= 5) break;
          if (!merged.includes(url)) merged.push(url);
        }
        setValue("images", merged, { shouldValidate: true, shouldDirty: true });
      }

      if (uploadedUrls.length > 0) {
        toast.success(`${uploadedUrls.length} image(s) uploaded.`);
      }
      if (failedCount > 0) {
        toast.error(
          `${failedCount} image(s) failed to upload.${firstFailureMessage ? ` ${firstFailureMessage}` : ""}`
        );
      }

      toUpload.forEach((item) => URL.revokeObjectURL(item.previewUrl));
      setPendingImages((prev) => prev.filter((item) => !toUpload.some((u) => u.id === item.id)));

      if (pendingImages.length <= toUpload.length) {
        setImageModalOpen(false);
      }
    } catch {
      toast.error("Unable to upload image right now.");
    } finally {
      setUploadingImage(false);
    }
  };

  const onSubmit = async (values: ProjectFormData) => {
    if (values.images.length === 0) {
      toast.error("Add at least 1 image.");
      return;
    }
    if (values.images.length > 5) {
      toast.error("Maximum 5 images allowed.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        title: values.title,
        slug: values.slug || slugify(values.title),
        shortDescription: values.shortDescription,
        description: values.description,
        images: values.images,
        bgImage: values.images[0],
        technologies: values.technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        github: values.github,
        live: values.live,
        date: values.date,
        projectStatus: values.projectStatus,
        architecture: values.architecture,
        framework: values.framework,
      };

      const url = mode === "create" ? "/api/admin/projects" : `/api/admin/projects/${projectId}`;
      const method = mode === "create" ? "POST" : "PATCH";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        toast.error(data.error || "Operation failed.");
        return;
      }

      toast.success(mode === "create" ? "Project created." : "Project updated.");
      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="border-slate-700 bg-slate-900/80 text-slate-100 ring-0">
      <CardHeader>
        <CardTitle className="text-xl">
          {mode === "create" ? "Create Project" : "Edit Project"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                className="h-10 border-slate-700 bg-slate-950"
                {...register("title", { required: "Title is required." })}
              />
              {errors.title && <p className="text-xs text-rose-300">{errors.title.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                className="h-10 border-slate-700 bg-slate-950"
                {...register("slug")}
                onChange={(event) => {
                  setSlugManuallyEdited(true);
                  setValue("slug", slugify(event.target.value), { shouldValidate: true });
                }}
              />
              {!slugManuallyEdited && (
                <p className="text-xs text-slate-400">Auto-generated from title.</p>
              )}
              {slugManuallyEdited && (
                <button
                  type="button"
                  className="text-xs text-violet-300 hover:text-violet-200"
                  onClick={() => {
                    setSlugManuallyEdited(false);
                    setValue("slug", slugify(getValues("title") || ""), { shouldValidate: true });
                  }}
                >
                  Reset to auto slug
                </button>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="shortDescription">Short Description</Label>
            <Input
              id="shortDescription"
              className="h-10 border-slate-700 bg-slate-950"
              {...register("shortDescription")}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Description (HTML allowed)</Label>
            <Controller
              name="description"
              control={control}
              rules={{
                validate: (value) => {
                  const clean = value.replace(/<[^>]+>/g, "").trim();
                  return clean.length > 0 || "Description is required.";
                },
              }}
              render={({ field }) => (
                <TiptapEditor value={field.value || ""} onChange={field.onChange} />
              )}
            />
            {errors.description && (
              <p className="text-xs text-rose-300">{errors.description.message}</p>
            )}
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
            <div className="flex items-center justify-between gap-2">
              <Label>Project Images (max 5)</Label>
              <span className="text-xs text-slate-400">{images.length}/5</span>
            </div>

            <div className="mt-3">
              <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                  >
                    Select Multiple Images
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl border-slate-700 bg-slate-900 text-slate-100">
                  <DialogHeader>
                    <DialogTitle>Select Images</DialogTitle>
                    <DialogDescription className="text-slate-400">
                      Add multiple images, remove unwanted ones, then upload.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-3">
                    <Input
                      type="file"
                      multiple
                      accept="image/*"
                      className="h-10 border-slate-700 bg-slate-950 file:mr-3 file:rounded file:border-0 file:bg-violet-600 file:px-2 file:py-1 file:text-xs file:text-white"
                      onChange={(event) => {
                        onSelectPendingImages(event.target.files);
                        event.currentTarget.value = "";
                      }}
                    />

                    {pendingImages.length === 0 ? (
                      <p className="text-xs text-slate-400">No pending images selected.</p>
                    ) : (
                      <div className="grid max-h-72 gap-2 overflow-auto sm:grid-cols-2">
                        {pendingImages.map((item) => (
                          <div
                            key={item.id}
                            className="rounded-lg border border-slate-700 bg-slate-950 p-2"
                          >
                            <div className="relative mb-2 h-28 w-full overflow-hidden rounded">
                              <img
                                src={item.previewUrl}
                                alt={item.file.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex items-center justify-between gap-2">
                              <p className="truncate text-xs text-slate-300">{item.file.name}</p>
                              <Button
                                type="button"
                                size="icon-xs"
                                variant="ghost"
                                className="text-slate-300 hover:text-rose-300"
                                onClick={() => removePendingImage(item.id)}
                              >
                                <X className="size-3.5" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <DialogFooter className="border-slate-700 bg-slate-900/70">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                      onClick={clearPendingImages}
                    >
                      Clear
                    </Button>
                    <Button
                      type="button"
                      onClick={handleImageUpload}
                      disabled={uploadingImage}
                      className="bg-violet-600 text-white hover:bg-violet-700"
                    >
                      {uploadingImage ? "Uploading..." : "Upload Selected"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_auto]">
              <Input
                value={manualImageUrl}
                onChange={(event) => setManualImageUrl(event.target.value)}
                placeholder="Or paste image URL"
                className="h-10 border-slate-700 bg-slate-950"
              />
              <Button
                type="button"
                variant="outline"
                className="h-10 border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                onClick={() => {
                  addImageUrl(manualImageUrl);
                  setManualImageUrl("");
                }}
              >
                Add URL
              </Button>
            </div>

            {images.length > 0 && (
              <div className="mt-3 space-y-2">
                {images.map((image, index) => (
                  <div
                    key={image}
                    className="flex items-center justify-between gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"
                  >
                    <p className="truncate text-xs text-slate-300">
                      {index + 1}. {image}
                    </p>
                    <Button
                      type="button"
                      size="icon-xs"
                      variant="ghost"
                      className="text-slate-300 hover:text-rose-300"
                      onClick={() => removeImage(image)}
                    >
                      <X className="size-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="technologies">Technologies (comma separated)</Label>
            <Input
              id="technologies"
              className="h-10 border-slate-700 bg-slate-950"
              {...register("technologies", { required: "Technologies are required." })}
            />
            {errors.technologies && (
              <p className="text-xs text-rose-300">{errors.technologies.message}</p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="github">GitHub URL</Label>
              <Input id="github" className="h-10 border-slate-700 bg-slate-950" {...register("github")} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="live">Live URL</Label>
              <Input id="live" className="h-10 border-slate-700 bg-slate-950" {...register("live")} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <Label htmlFor="date">Year</Label>
              <Input
                id="date"
                className="h-10 border-slate-700 bg-slate-950"
                {...register("date", {
                  required: "Year is required.",
                  validate: (value) =>
                    /^\d{4}$/.test(value) || "Year must be 4 digits (e.g. 2026).",
                })}
              />
              {errors.date && <p className="text-xs text-rose-300">{errors.date.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="architecture">Architecture</Label>
              <Input
                id="architecture"
                className="h-10 border-slate-700 bg-slate-950"
                {...register("architecture", { required: "Architecture is required." })}
              />
              {errors.architecture && (
                <p className="text-xs text-rose-300">{errors.architecture.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Input
                id="framework"
                className="h-10 border-slate-700 bg-slate-950"
                {...register("framework", { required: "Framework is required." })}
              />
              {errors.framework && (
                <p className="text-xs text-rose-300">{errors.framework.message}</p>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2">
            <Controller
              name="projectStatus"
              control={control}
              render={({ field }) => (
                <Label className="flex items-center gap-2 text-sm text-slate-200">
                  <Checkbox
                    checked={!!field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                  />
                  Completed
                </Label>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="h-10 bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700"
          >
            {submitting
              ? "Saving..."
              : mode === "create"
              ? "Create Project"
              : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

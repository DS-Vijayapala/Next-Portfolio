import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/admin-auth";

type ProjectBody = {
  title: string;
  slug: string;
  shortDescription?: string;
  description: string;
  bgImage?: string;
  images?: string[];
  technologies: string[];
  github?: string;
  live?: string;
  date: string;
  projectStatus: boolean;
  architecture?: string;
  framework?: string;
};

function normalizeSlug(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function normalizeImages(images: string[] = []) {
  return images
    .map((image) => image.trim())
    .filter(Boolean)
    .filter((image, index, array) => array.indexOf(image) === index)
    .slice(0, 5);
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as ProjectBody;
    const slug = normalizeSlug(body.slug || body.title || "");

    if (!body.title?.trim() || !slug || !body.description?.trim()) {
      return NextResponse.json(
        { error: "Title, slug, and description are required." },
        { status: 400 }
      );
    }

    const images = normalizeImages(body.images || []);
    if (images.length === 0 && body.bgImage?.trim()) {
      images.push(body.bgImage.trim());
    }

    if (images.length === 0) {
      return NextResponse.json(
        { error: "At least one project image is required." },
        { status: 400 }
      );
    }

    const latestProject = (await prisma.project.findFirst({
      orderBy: { sortOrder: "desc" },
      select: { sortOrder: true },
    } as never)) as { sortOrder?: number } | null;
    const nextSortOrder = (latestProject?.sortOrder ?? 0) + 1;

    const createData = {
      title: body.title.trim(),
      slug,
      sortOrder: nextSortOrder,
      shortDescription: body.shortDescription?.trim() || "",
      description: body.description,
      bgImage: images[0],
      images,
      technologies: (body.technologies || []).map((item) => item.trim()).filter(Boolean),
      github: body.github?.trim() || "",
      live: body.live?.trim() || "",
      date: body.date?.trim() || "",
      projectStatus: !!body.projectStatus,
      architecture: body.architecture?.trim() || "",
      framework: body.framework?.trim() || "",
    };

    const created = await prisma.project.create({
      data: createData as never,
    });

    return NextResponse.json({ success: true, project: created });
  } catch (error: unknown) {
    const message =
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code?: string }).code === "P2002"
        ? "Slug already exists."
        : "Failed to create project.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/admin-auth";

type ReorderBody = {
  ids: string[];
};

export async function PATCH(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as ReorderBody;
    const ids = (body.ids || []).filter(Boolean);

    if (ids.length === 0) {
      return NextResponse.json({ error: "Project IDs are required." }, { status: 400 });
    }

    await Promise.all(
      ids.map((id, index) =>
        prisma.project.update({
          where: { id },
          data: { sortOrder: index + 1 } as never,
        })
      )
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to reorder projects." }, { status: 400 });
  }
}

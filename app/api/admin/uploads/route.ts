import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { isCloudinaryConfigured, uploadImageToCloudinary } from "@/lib/cloudinary";

const MAX_FILE_SIZE_MB = 8;
const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024;

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isCloudinaryConfigured()) {
    return NextResponse.json(
      {
        error:
          "Cloudinary is not configured. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.",
      },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Image file is required." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Image must be smaller than ${MAX_FILE_SIZE_MB}MB.` },
        { status: 400 }
      );
    }

    const uploaded = await uploadImageToCloudinary(file);

    return NextResponse.json({
      success: true,
      imageUrl: uploaded.url,
      imageOriginalUrl: uploaded.originalUrl,
      publicId: uploaded.publicId,
      bytes: uploaded.bytes,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to upload image.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

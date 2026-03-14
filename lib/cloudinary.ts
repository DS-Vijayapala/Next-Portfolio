import crypto from "crypto";

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
const CLOUDINARY_FOLDER =
  process.env.CLOUDINARY_FOLDER ||
  process.env.CLOUDINARY_BLOG_FOLDER ||
  "portfolio/projects";

export function isCloudinaryConfigured() {
  return !!(CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET);
}

function buildSignature(params: Record<string, string | number>) {
  const payload = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return crypto
    .createHash("sha1")
    .update(`${payload}${CLOUDINARY_API_SECRET}`)
    .digest("hex");
}

function optimizeDeliveryUrl(url: string) {
  if (!url.includes("/upload/")) return url;
  return url.replace("/upload/", "/upload/f_auto,q_auto:good,c_limit,w_1600/");
}

export async function uploadImageToCloudinary(file: File) {
  if (!isCloudinaryConfigured()) {
    throw new Error("Cloudinary is not configured.");
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const transformation = "q_auto:good,c_limit,w_1600";

  const paramsToSign = {
    folder: CLOUDINARY_FOLDER,
    timestamp,
    transformation,
  };

  const signature = buildSignature(paramsToSign);
  const endpoint = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", CLOUDINARY_API_KEY);
  formData.append("timestamp", String(timestamp));
  formData.append("signature", signature);
  formData.append("folder", CLOUDINARY_FOLDER);
  formData.append("transformation", transformation);
  formData.append("resource_type", "image");

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });

  const data = (await response.json()) as {
    secure_url?: string;
    public_id?: string;
    bytes?: number;
    error?: { message?: string };
  };

  if (!response.ok || !data.secure_url) {
    throw new Error(data.error?.message || "Cloudinary upload failed.");
  }

  return {
    url: optimizeDeliveryUrl(data.secure_url),
    originalUrl: data.secure_url,
    publicId: data.public_id || "",
    bytes: data.bytes || 0,
  };
}

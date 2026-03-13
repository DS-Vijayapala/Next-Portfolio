import { SignJWT, jwtVerify } from "jose";

export const ADMIN_SESSION_COOKIE = "admin_session";

export type AdminSessionPayload = {
  userId: string;
  username: string;
};

const getSecret = () =>
  new TextEncoder().encode(
    process.env.AUTH_SECRET || "default"
  );

export async function createAdminSessionToken(payload: AdminSessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function verifyAdminSessionToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    const userId = payload.userId;
    const username = payload.username;

    if (typeof userId !== "string" || typeof username !== "string") return null;
    return { userId, username };
  } catch {
    return null;
  }
}


import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/session";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: "",
    path: "/",
    httpOnly: true,
    expires: new Date(0),
  });
  return response;
}


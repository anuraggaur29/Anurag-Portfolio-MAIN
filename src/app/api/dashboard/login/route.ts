import { NextRequest, NextResponse } from "next/server";
import {
  DASHBOARD_SESSION_COOKIE,
  createDashboardSessionToken,
  isValidDashboardCredentials,
} from "@/lib/dashboard-auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const username = typeof body.username === "string" ? body.username.trim() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!isValidDashboardCredentials(username, password)) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: DASHBOARD_SESSION_COOKIE,
      value: createDashboardSessionToken(username, password),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Unable to sign in right now." }, { status: 500 });
  }
}
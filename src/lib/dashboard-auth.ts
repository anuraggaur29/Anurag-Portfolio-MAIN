import { createHash } from "crypto";

export const DASHBOARD_USERNAME = process.env.DASHBOARD_USERNAME || "anuragshakalaya";
export const DASHBOARD_PASSWORD = process.env.DASHBOARD_PASSWORD || "anuraggaur001";
export const DASHBOARD_SESSION_COOKIE = "dashboard_session";

const DASHBOARD_SESSION_SECRET = process.env.DASHBOARD_SESSION_SECRET || "anurag-dashboard-session";

export function createDashboardSessionToken(username: string, password: string): string {
  return createHash("sha256")
    .update(`${username}:${password}:${DASHBOARD_SESSION_SECRET}`)
    .digest("base64url");
}

export function isValidDashboardCredentials(username: string, password: string): boolean {
  return username === DASHBOARD_USERNAME && password === DASHBOARD_PASSWORD;
}

export function isValidDashboardSession(token: string | undefined): boolean {
  if (!token) {
    return false;
  }

  return token === createDashboardSessionToken(DASHBOARD_USERNAME, DASHBOARD_PASSWORD);
}
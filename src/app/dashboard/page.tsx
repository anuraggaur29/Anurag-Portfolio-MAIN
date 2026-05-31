import React, { Suspense } from "react";
import { cookies } from "next/headers";
import DashboardInner from "@/components/dashboard/DashboardInner";
import DashboardLogin from "@/components/dashboard/DashboardLogin";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DASHBOARD_SESSION_COOKIE, isValidDashboardSession } from "@/lib/dashboard-auth";

export default function DashboardPage() {
  const sessionToken = cookies().get(DASHBOARD_SESSION_COOKIE)?.value;
  const isAuthenticated = isValidDashboardSession(sessionToken);

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-bg min-h-screen">
        {isAuthenticated ? (
          <Suspense
            fallback={
              <div className="min-h-[60vh] bg-bg flex items-center justify-center font-sans text-text-secondary text-sm">
                <span className="animate-pulse">Loading Dashboard...</span>
              </div>
            }
          >
            <DashboardInner />
          </Suspense>
        ) : (
          <DashboardLogin />
        )}
      </main>
      <Footer />
    </>
  );
}

import React, { Suspense } from "react";
import DashboardInner from "@/components/dashboard/DashboardInner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-bg min-h-screen">
        <Suspense
          fallback={
            <div className="min-h-[60vh] bg-bg flex items-center justify-center font-sans text-text-secondary text-sm">
              <span className="animate-pulse">Loading Dashboard...</span>
            </div>
          }
        >
          <DashboardInner />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

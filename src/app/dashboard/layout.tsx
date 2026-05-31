import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Anurag",
  description: "Anurag's placement preparation and productivity tracking dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

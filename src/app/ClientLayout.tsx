"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/shared/Header";
import Sidebar from "@/shared/Sidebar";


// import ProtectedRoute from "@/components/protectedRoute/ProtectedRoute";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const authRoutes = ["/auth/sign-in", "/auth/sign-up"];
  const isAuthPage = authRoutes.includes(pathname);

  return (
    // <ProtectedRoute>
    <div className="flex min-h-screen ">

      {!isAuthPage && (
        <div className="hidden md:flex md:flex-col md:w-80  ">
          <Sidebar />
        </div>
      )}
      {!isAuthPage && sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden  ">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-black ">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main */}
      <main className="flex-1 flex flex-col min-h-screen ">
        {!isAuthPage && (
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        )}

        <div className="flex-1 w-full bg-[#0D0D0D]">{children}</div>
      </main>
    </div>

  );
}

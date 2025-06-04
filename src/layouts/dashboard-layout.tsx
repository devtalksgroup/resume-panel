"use client";

import { AppSidebar } from "@/features/dashboard/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "@/features/dashboard/components/app-header";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideRoutes = ["/auth"];
  const show = !hideRoutes.includes(pathname);

  if (!show) {
    return <>{children}</>
  }

  return (
    <SidebarProvider>
      <AppSidebar side="right" />
      <SidebarInset>
        <AppHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

import AppSidebar from "@/components/layouts/AppSidebar";
import Topbar from "@/components/layouts/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="min-h-screen w-full flex flex-col">
        <Topbar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;

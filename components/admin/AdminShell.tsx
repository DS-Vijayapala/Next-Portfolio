"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderPlus, Home, LayoutDashboard } from "lucide-react";
import LogoutButton from "@/components/admin/LogoutButton";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Add Project", href: "/admin/projects/new", icon: FolderPlus },
  { title: "Back To Site", href: "/", icon: Home },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <SidebarProvider
      defaultOpen
      className="[--sidebar:#0a0620] [--sidebar-foreground:#e2e8f0] [--sidebar-primary:#7c3aed] [--sidebar-primary-foreground:#ffffff] [--sidebar-accent:#1a0f3f] [--sidebar-accent-foreground:#e9d5ff] [--sidebar-border:#2e2258] [--sidebar-ring:#8b5cf6]"
    >
      <Sidebar
        className="border-r border-violet-500/20 bg-sidebar/95 text-sidebar-foreground backdrop-blur-md"
        collapsible="offcanvas"
      >
        <SidebarHeader className="border-b border-violet-500/20 p-4">
          <h2 className="text-base font-semibold text-white">Admin Panel</h2>
          <p className="text-xs text-slate-400">Portfolio Management</p>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup className="p-3">
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className="h-10 rounded-lg text-sm text-slate-200 data-[active=true]:bg-violet-500/20 data-[active=true]:text-violet-200 hover:bg-violet-500/10 hover:text-violet-200"
                  >
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-violet-500/20 p-3">
          <LogoutButton className="w-full justify-center" />
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <SidebarTrigger className="fixed left-4 top-4 z-40 h-9 w-9 rounded-md border border-slate-700/80 bg-slate-900/85 text-slate-200 shadow-lg backdrop-blur-md hover:bg-violet-500/10 hover:text-violet-200 md:hidden" />
        <div className="p-4 pt-16 md:p-6 md:pt-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

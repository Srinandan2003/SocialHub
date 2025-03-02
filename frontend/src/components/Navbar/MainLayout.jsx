import { useState } from "react";
import { MainNav } from "./MainNav";
import { ModeToggle } from "@/ModeToggle";
import { UserNav } from "./UserNav";
import { Sidebar } from "./SideBar";
import { MobileSidebar } from "./ModeToggle";
import { cn } from "@/lib/utils";
export function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <MainNav onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="flex items-center gap-4">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar className="hidden md:block" />
        <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className={cn("flex w-full flex-col overflow-hidden", isSidebarOpen ? "md:ml-0" : "")}>
          {children}
        </main>
      </div>
    </div>
  );
}

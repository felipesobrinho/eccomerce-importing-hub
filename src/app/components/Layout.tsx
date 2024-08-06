"use client";

import { cn } from "@/lib/utils";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { Sidebar } from "./Sidebar";

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebarToggle(); // Corrigido: Use diretamente o hook

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "h-screen bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          !isOpen ? "lg:ml-[90px]" : "lg:ml-72" 
        )}
      >
        {children}
      </main>
    </>
  );
}

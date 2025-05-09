import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen p-[10px] flex flex-col gap-[4px]">
        <SidebarTrigger className="mt-2 cursor-none"/>
        {children}
      </main>
    </SidebarProvider>
  )
}
